"use client";

import { useEffect, useRef, useState } from "react";
import {
  getRawStringPayloadValue,
  getRealtimeClientSecret,
  getStringPayloadValue,
  parseJsonResponse,
  parseRealtimeEvent,
} from "./realtime-utils";
import { normalizeSummaryText } from "./summary";
import {
  INITIAL_INTERVIEWER_RESPONSE,
  type PracticeProblem,
  type StartInterviewOptions,
  type TranscriptLine,
} from "./types";

export function useRealtimeInterviewSession(
  problem: PracticeProblem,
  appOrigin = "",
) {
  const apiBase = appOrigin.replace(/\/$/, "");
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const frequencyDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const meterAnimationRef = useRef<number | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const inputTranscriptRef = useRef("");
  const sessionTranscriptRef = useRef<TranscriptLine[]>([]);
  const isMutedRef = useRef(false);
  const isScreenSharingRef = useRef(false);
  const responseTranscriptRef = useRef("");
  const screenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const screenFrameIntervalRef = useRef<number | null>(null);
  const screenStreamRef = useRef<MediaStream | null>(null);
  const screenVideoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [audioLevel, setAudioLevel] = useState(0);
  const [interviewerResponse, setInterviewerResponse] = useState(
    INITIAL_INTERVIEWER_RESPONSE,
  );
  const [interviewerStatus, setInterviewerStatus] = useState("Ready");
  const [exchangeCount, setExchangeCount] = useState(0);
  const [fullTranscript, setFullTranscript] = useState<TranscriptLine[]>([]);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Mic off");
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  function startAudioMeter(stream: MediaStream) {
    const AudioContextConstructor =
      window.AudioContext ||
      (window as typeof window & {
        webkitAudioContext?: typeof AudioContext;
      }).webkitAudioContext;

    if (!AudioContextConstructor) {
      return;
    }

    const audioContext = new AudioContextConstructor();
    const analyser = audioContext.createAnalyser();
    const audioSource = audioContext.createMediaStreamSource(stream);

    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.75;
    audioSource.connect(analyser);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    audioSourceRef.current = audioSource;
    frequencyDataRef.current = new Uint8Array(analyser.frequencyBinCount);

    updateAudioMeter();
  }

  function updateAudioMeter() {
    const analyser = analyserRef.current;
    const frequencyData = frequencyDataRef.current;

    if (!analyser || !frequencyData) {
      return;
    }

    analyser.getByteFrequencyData(frequencyData);

    const lowBinCount = Math.max(1, Math.floor(frequencyData.length * 0.35));
    const totalEnergy =
      frequencyData.reduce((total, value) => total + value, 0) /
      frequencyData.length;
    const higherFrequencyEnergy =
      frequencyData
        .slice(lowBinCount)
        .reduce((total, value) => total + value, 0) /
      (frequencyData.length - lowBinCount);
    const normalizedLevel = Math.min(
      1,
      Math.max(0, (totalEnergy * 0.7 + higherFrequencyEnergy * 0.3) / 95),
    );

    setAudioLevel(normalizedLevel);
    meterAnimationRef.current = requestAnimationFrame(updateAudioMeter);
  }

  function stopAudioMeter() {
    if (meterAnimationRef.current) {
      cancelAnimationFrame(meterAnimationRef.current);
      meterAnimationRef.current = null;
    }

    audioSourceRef.current?.disconnect();
    audioContextRef.current?.close().catch(() => null);
    audioSourceRef.current = null;
    audioContextRef.current = null;
    analyserRef.current = null;
    frequencyDataRef.current = null;
    setAudioLevel(0);
  }

  function stopScreenContext() {
    if (screenFrameIntervalRef.current) {
      window.clearInterval(screenFrameIntervalRef.current);
      screenFrameIntervalRef.current = null;
    }

    screenVideoRef.current?.pause();
    screenStreamRef.current?.getTracks().forEach((track) => track.stop());
    screenVideoRef.current = null;
    screenStreamRef.current = null;
    screenCanvasRef.current = null;
    isScreenSharingRef.current = false;
  }

  function getListeningStatus() {
    return isScreenSharingRef.current
      ? "Listening with screen context..."
      : "Listening...";
  }

  function resetInputTranscript() {
    inputTranscriptRef.current = "";
  }

  function appendTranscriptLine(speaker: TranscriptLine["speaker"], text: string) {
    const normalizedText = normalizeSummaryText(text);

    if (!normalizedText) {
      return false;
    }

    const previousLine =
      sessionTranscriptRef.current[sessionTranscriptRef.current.length - 1];

    if (
      previousLine?.speaker === speaker &&
      previousLine.text === normalizedText
    ) {
      return false;
    }

    const nextTranscript = [
      ...sessionTranscriptRef.current,
      { speaker, text: normalizedText },
    ];

    sessionTranscriptRef.current = nextTranscript;
    setFullTranscript(nextTranscript);
    return true;
  }

  function setMicrophoneMuted(nextIsMuted: boolean) {
    isMutedRef.current = nextIsMuted;
    streamRef.current
      ?.getAudioTracks()
      .forEach((track) => {
        track.enabled = !nextIsMuted;
      });
    setIsMuted(nextIsMuted);
    setStatus(nextIsMuted ? "Muted" : getListeningStatus());
  }

  function cleanupConnection() {
    dataChannelRef.current?.close();
    peerConnectionRef.current?.close();
    remoteAudioRef.current?.pause();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    stopScreenContext();
    stopAudioMeter();

    dataChannelRef.current = null;
    peerConnectionRef.current = null;
    remoteAudioRef.current = null;
    resetInputTranscript();
    sessionTranscriptRef.current = [];
    isMutedRef.current = false;
    setIsMuted(false);
    responseTranscriptRef.current = "";
    streamRef.current = null;
    setFullTranscript([]);
    setText("");
  }

  async function prepareScreenContext(screenStream: MediaStream) {
    const screenTrack = screenStream.getVideoTracks()[0];

    if (!screenTrack) {
      throw new Error("No screen video track was available.");
    }

    const screenVideo = document.createElement("video");

    screenVideo.muted = true;
    screenVideo.playsInline = true;
    screenVideo.srcObject = screenStream;
    screenStreamRef.current = screenStream;
    screenVideoRef.current = screenVideo;
    isScreenSharingRef.current = true;

    screenTrack.addEventListener(
      "ended",
      () => {
        stopScreenContext();
        setStatus(isMutedRef.current ? "Muted" : getListeningStatus());
      },
      { once: true },
    );

    await screenVideo.play().catch(() => null);
    await waitForScreenFrame(screenVideo);
  }

  function waitForScreenFrame(screenVideo: HTMLVideoElement) {
    if (screenVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const timeout = window.setTimeout(resolve, 1200);

      screenVideo.addEventListener(
        "loadeddata",
        () => {
          window.clearTimeout(timeout);
          resolve();
        },
        { once: true },
      );
    });
  }

  function startScreenFrameSharing(dataChannel: RTCDataChannel) {
    void sendScreenFrame(dataChannel);

    screenFrameIntervalRef.current = window.setInterval(() => {
      void sendScreenFrame(dataChannel);
    }, 8000);
  }

  async function sendScreenFrame(dataChannel: RTCDataChannel) {
    if (dataChannel.readyState !== "open") {
      return;
    }

    const imageUrl = getScreenFrameDataUrl();

    if (!imageUrl) {
      return;
    }

    try {
      dataChannel.send(
        JSON.stringify({
          type: "conversation.item.create",
          item: {
            type: "message",
            role: "user",
            content: [
              {
                type: "input_text",
                text:
                  "Current screen context snapshot from the candidate's shared coding window. " +
                  "Use this image as visual context for the next interview response. " +
                  "If it clearly shows LeetCode Accepted or all test cases passing for the current problem, ask final follow-up questions and then invite the candidate to end the interview.",
              },
              {
                type: "input_image",
                image_url: imageUrl,
              },
            ],
          },
        }),
      );
    } catch {
      // Screen frames are best-effort context; audio should continue uninterrupted.
    }
  }

  function getScreenFrameDataUrl() {
    const screenVideo = screenVideoRef.current;

    if (
      !screenVideo ||
      screenVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
      screenVideo.videoWidth === 0 ||
      screenVideo.videoHeight === 0
    ) {
      return null;
    }

    const canvas = screenCanvasRef.current ?? document.createElement("canvas");
    const maxWidth = 960;
    const scale = Math.min(1, maxWidth / screenVideo.videoWidth);

    canvas.width = Math.max(1, Math.round(screenVideo.videoWidth * scale));
    canvas.height = Math.max(1, Math.round(screenVideo.videoHeight * scale));
    try {
      canvas.getContext("2d")?.drawImage(screenVideo, 0, 0, canvas.width, canvas.height);
      screenCanvasRef.current = canvas;

      return canvas.toDataURL("image/jpeg", 0.58);
    } catch {
      return null;
    }
  }

  function handleRealtimeEvent(event: unknown) {
    if (!event || typeof event !== "object") {
      return;
    }

    const eventType = getStringPayloadValue(event, "type");

    if (!eventType) {
      return;
    }

    if (eventType === "input_audio_buffer.speech_started") {
      if (isMutedRef.current) {
        return;
      }

      inputTranscriptRef.current = "";
      setText("");
      setStatus("Listening...");
      setInterviewerStatus("Listening");
      return;
    }

    if (eventType === "input_audio_buffer.speech_stopped") {
      const dataChannel = dataChannelRef.current;

      if (isScreenSharingRef.current && dataChannel?.readyState === "open") {
        void sendScreenFrame(dataChannel);
      }

      setStatus("Thinking...");
      setInterviewerStatus("Thinking");
      return;
    }

    if (eventType === "response.created") {
      responseTranscriptRef.current = "";
      setInterviewerResponse("");
      setInterviewerStatus("Thinking");
      return;
    }

    if (
      eventType === "response.output_audio_transcript.delta" ||
      eventType === "response.audio_transcript.delta"
    ) {
      const delta = getRawStringPayloadValue(event, "delta");

      if (delta) {
        responseTranscriptRef.current += delta;
        setInterviewerResponse(responseTranscriptRef.current.trim());
      }

      setInterviewerStatus("Speaking");
      return;
    }

    if (
      eventType === "response.output_audio_transcript.done" ||
      eventType === "response.audio_transcript.done"
    ) {
      const transcript = getStringPayloadValue(event, "transcript");

      if (transcript) {
        responseTranscriptRef.current = transcript;
        setInterviewerResponse(transcript);
        appendTranscriptLine("Alex", transcript);
      }

      setInterviewerStatus("Listening");
      setStatus(isMutedRef.current ? "Muted" : getListeningStatus());
      return;
    }

    if (eventType === "response.output_text.delta") {
      const delta = getRawStringPayloadValue(event, "delta");

      if (delta) {
        responseTranscriptRef.current += delta;
        setInterviewerResponse(responseTranscriptRef.current.trim());
      }

      return;
    }

    if (eventType === "conversation.item.input_audio_transcription.delta") {
      const delta = getRawStringPayloadValue(event, "delta");

      if (delta) {
        inputTranscriptRef.current += delta;
        setText(inputTranscriptRef.current);
      }

      return;
    }

    if (
      eventType === "conversation.item.input_audio_transcription.completed" ||
      eventType === "conversation.item.input_audio_transcription.done"
    ) {
      const transcript = getStringPayloadValue(event, "transcript");

      if (transcript) {
        inputTranscriptRef.current = "";
        const didAppendTranscript = appendTranscriptLine("You", transcript);
        setText(transcript);
        if (didAppendTranscript) {
          setExchangeCount((count) => count + 1);
        }
      }

      return;
    }

    if (eventType === "response.done") {
      resetInputTranscript();
      setInterviewerStatus("Listening");
      setStatus(isMutedRef.current ? "Muted" : getListeningStatus());
      return;
    }

    if (eventType === "error") {
      const error = "error" in event ? event.error : null;
      const message =
        error && typeof error === "object"
          ? getStringPayloadValue(error, "message")
          : null;

      setStatus(message ?? "Realtime error");
      setInterviewerStatus("Error");
    }
  }

  async function start({ shareScreen = false }: Partial<StartInterviewOptions> = {}) {
    if (peerConnectionRef.current) {
      return;
    }

    try {
      setStatus("Connecting...");
      setInterviewerStatus("Connecting");

      let screenStream: MediaStream | null = null;
      let screenTrack: MediaStreamTrack | null = null;

      if (shareScreen) {
        if (!navigator.mediaDevices.getDisplayMedia) {
          setStatus("Screen sharing unavailable. Connecting microphone...");
        } else {
          try {
            setStatus("Choose a screen to share...");
            screenStream = await navigator.mediaDevices.getDisplayMedia({
              audio: false,
              video: {
                frameRate: { ideal: 2, max: 5 },
                height: { ideal: 720 },
                width: { ideal: 1280 },
              },
            });
            screenTrack = screenStream.getVideoTracks()[0] ?? null;

            if (screenTrack) {
              await prepareScreenContext(screenStream);
            } else {
              screenStream.getTracks().forEach((track) => track.stop());
              screenStream = null;
            }
          } catch {
            stopScreenContext();
            screenStream = null;
            screenTrack = null;
          }
        }
      }

      setStatus("Connecting microphone...");

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioTrack = stream.getAudioTracks()[0];

      if (!audioTrack) {
        throw new Error("No microphone audio track was available.");
      }

      isMutedRef.current = false;
      setIsMuted(false);

      const sessionResponse = await fetch(`${apiBase}/api/realtime/session`, {
        body: JSON.stringify({
          problemTitle: problem.title,
          problemUrl: problem.url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const sessionPayload = await parseJsonResponse(sessionResponse);

      if (!sessionResponse.ok) {
        throw new Error(
          getStringPayloadValue(sessionPayload, "error") ??
            "Realtime session request failed.",
        );
      }

      const clientSecret = getRealtimeClientSecret(sessionPayload);

      if (!clientSecret) {
        throw new Error("Realtime session response did not include a client secret.");
      }

      const peerConnection = new RTCPeerConnection();
      const remoteAudio = new Audio();
      const dataChannel = peerConnection.createDataChannel("oai-events");

      remoteAudio.autoplay = true;
      peerConnection.addTrack(audioTrack, stream);
      if (screenTrack && screenStream) {
        peerConnection.addTrack(screenTrack, screenStream);
      }
      peerConnection.addEventListener("track", (event) => {
        remoteAudio.srcObject = event.streams[0];
        remoteAudio.play().catch(() => null);
      });

      dataChannel.addEventListener("open", () => {
        setStatus(getListeningStatus());
        setInterviewerStatus("Listening");
        if (isScreenSharingRef.current) {
          startScreenFrameSharing(dataChannel);
        }
        dataChannel.send(
          JSON.stringify({
            type: "response.create",
            response: {
              instructions:
                isScreenSharingRef.current
                  ? `Briefly greet the candidate and ask them to start by explaining their ${problem.title} approach. Use the shared screen context when it is relevant. If the shared screen later shows LeetCode Accepted or all test cases passing, ask one or two final follow-up questions and then invite the candidate to end the interview.`
                  : `Briefly greet the candidate and ask them to start by explaining their ${problem.title} approach.`,
            },
          }),
        );
      });

      dataChannel.addEventListener("message", (messageEvent) => {
        const realtimeEvent = parseRealtimeEvent(messageEvent.data);

        if (realtimeEvent) {
          handleRealtimeEvent(realtimeEvent);
        }
      });

      dataChannel.addEventListener("close", () => {
        if (screenFrameIntervalRef.current) {
          window.clearInterval(screenFrameIntervalRef.current);
          screenFrameIntervalRef.current = null;
        }
        setIsListening(false);
        setStatus("Mic off");
        setInterviewerStatus("Ready");
      });

      streamRef.current = stream;
      peerConnectionRef.current = peerConnection;
      remoteAudioRef.current = remoteAudio;
      dataChannelRef.current = dataChannel;

      const offer = await peerConnection.createOffer();
      const offerSdp = offer.sdp;

      if (!offerSdp) {
        throw new Error("Unable to create a WebRTC offer.");
      }

      await peerConnection.setLocalDescription(offer);
      startAudioMeter(stream);

      const sdpResponse = await fetch("https://api.openai.com/v1/realtime/calls", {
        method: "POST",
        body: offerSdp,
        headers: {
          Authorization: `Bearer ${clientSecret}`,
          "Content-Type": "application/sdp",
        },
      });

      if (!sdpResponse.ok) {
        throw new Error(
          (await sdpResponse.text()) || "Realtime WebRTC connection failed.",
        );
      }

      await peerConnection.setRemoteDescription({
        type: "answer",
        sdp: await sdpResponse.text(),
      });

      setIsListening(true);
    } catch (error) {
      cleanupConnection();
      setStatus(
        error instanceof Error ? error.message : "Unable to start realtime audio.",
      );
      setInterviewerStatus("Error");
      setIsListening(false);
    }
  }

  function stop() {
    cleanupConnection();
    setIsListening(false);
    setStatus("Mic off");
    setInterviewerStatus("Ready");
  }

  function toggleMute() {
    if (!streamRef.current) {
      return;
    }

    setMicrophoneMuted(!isMutedRef.current);
  }

  function requestHint() {
    setHintsUsed((count) => count + 1);
    const dataChannel = dataChannelRef.current;

    if (!dataChannel || dataChannel.readyState !== "open") {
      setInterviewerResponse("Start the mic first, then I can give you a hint.");
      return;
    }

    responseTranscriptRef.current = "";
    setInterviewerResponse("Thinking of a hint...");
    setInterviewerStatus("Thinking");
    dataChannel.send(
      JSON.stringify({
        type: "response.create",
        response: {
          instructions:
            `Give the candidate one concise ${problem.title} hint based on the current conversation. Do not reveal the full solution. Prefer a guiding question or a small nudge toward the next idea.`,
        },
      }),
    );
  }

  useEffect(() => {
    return () => {
      dataChannelRef.current?.close();
      peerConnectionRef.current?.close();
      remoteAudioRef.current?.pause();
      streamRef.current?.getTracks().forEach((track) => track.stop());
      screenStreamRef.current?.getTracks().forEach((track) => track.stop());

      if (screenFrameIntervalRef.current) {
        window.clearInterval(screenFrameIntervalRef.current);
        screenFrameIntervalRef.current = null;
      }

      if (meterAnimationRef.current) {
        cancelAnimationFrame(meterAnimationRef.current);
        meterAnimationRef.current = null;
      }

      audioSourceRef.current?.disconnect();
      audioContextRef.current?.close().catch(() => null);
      dataChannelRef.current = null;
      peerConnectionRef.current = null;
      remoteAudioRef.current = null;
      inputTranscriptRef.current = "";
      sessionTranscriptRef.current = [];
      isMutedRef.current = false;
      isScreenSharingRef.current = false;
      responseTranscriptRef.current = "";
      screenCanvasRef.current = null;
      screenStreamRef.current = null;
      screenVideoRef.current = null;
      streamRef.current = null;
      audioSourceRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      frequencyDataRef.current = null;
    };
  }, []);

  return {
    audioLevel,
    exchangeCount,
    fullTranscript,
    hintsUsed,
    interviewerResponse,
    interviewerStatus,
    isListening,
    isMuted,
    requestHint,
    start,
    status,
    stop,
    text,
    toggleMute,
  };
}
