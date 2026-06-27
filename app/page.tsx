"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Overlay from "@/components/ui/pip-overlay/overlay";
import { type PointerEvent, useEffect, useRef, useState } from "react";

const featureCards = [
  {
    title: "Watches your screen",
    description:
      "The interviewer reads your code live and asks about what it sees.",
    icon: EyeIcon,
  },
  {
    title: "Voice back and forth",
    description: "Talk through your approach. No typing. Just think out loud.",
    icon: MicIcon,
  },
  {
    title: "Scored debrief",
    description:
      "Get a verdict, rubric scores, and specific things to improve after every session.",
    icon: ChartIcon,
  },
];

type DragPosition = {
  x: number;
  y: number;
};

export default function Home() {
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#1f1f1d] px-4 py-5 text-zinc-50 sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-[1240px] flex-col">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex size-7 items-center justify-center rounded-lg bg-black text-[11px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              AI
            </div>
            <span className="text-sm font-semibold sm:text-base">
              DSA Interviewer
            </span>
          </div>

          <Button
            variant="secondary"
            className="h-9 rounded-lg border-white/15 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Try it free
          </Button>
        </header>

        <section className="flex flex-1 flex-col items-center pt-16 text-center sm:pt-20">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#262624] px-4 py-1.5 text-[12px] font-semibold text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <span className="size-2 rounded-full bg-lime-500 shadow-[0_0_12px_rgba(132,204,22,0.65)]" />
            Voice + screen · no scheduling needed
          </div>

          <h1 className="max-w-[670px] text-balance text-[38px] font-bold leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl lg:text-[58px]">
            Practice technical interviews like the real thing
          </h1>

          <p className="mt-8 max-w-[610px] text-balance text-base font-semibold leading-7 text-zinc-400 sm:text-lg">
            An AI interviewer that watches your screen, listens to you think out
            loud, and pushes back — just like a real FAANG engineer would.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              onClick={() => setIsPracticeOpen(true)}
              variant="secondary"
              className="h-11 rounded-lg border-white/15 bg-transparent px-5 text-[15px] font-bold text-white hover:bg-white/10"
            >
              <PlayIcon />
              Try Two Sum now
            </Button>
            <Button
              variant="secondary"
              className="h-11 rounded-lg border-white/15 bg-transparent px-6 text-[15px] font-bold text-white hover:bg-white/10"
            >
              See how it works
            </Button>
          </div>

          <p className="mt-14 text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-500">
            Live demo
          </p>

          <DemoWindow />

          <div className="mt-8 grid w-full gap-4 text-left md:grid-cols-3">
            {featureCards.map((feature) => (
              <Card
                key={feature.title}
                className="rounded-2xl border-0 bg-[#191917] shadow-none"
              >
                <CardContent className="p-7">
                  <feature.icon />
                  <h2 className="mt-5 text-base font-bold text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-2 max-w-[285px] text-sm font-medium leading-6 text-zinc-500">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 w-full rounded-2xl border-0 bg-[#111110] shadow-none">
            <CardContent className="flex flex-col gap-6 p-7 text-left md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Start with Two Sum
                </h2>
                <p className="mt-2 max-w-[690px] text-sm font-medium leading-6 text-zinc-500">
                  The most common first interview problem. A perfect 10-minute
                  warmup to feel how the interviewer works.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="bg-lime-500/20 text-lime-400">Easy</Badge>
                  <Badge>Arrays</Badge>
                  <Badge>Hash map</Badge>
                  <Badge>~15 min</Badge>
                </div>
              </div>

              <Button
                className="h-12 rounded-xl px-7 text-[15px] font-bold"
                onClick={() => setIsPracticeOpen(true)}
              >
                <PlayIcon />
                Start interview
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      {isPracticeOpen ? (
        <PracticeWorkspace onClose={() => setIsPracticeOpen(false)} />
      ) : null}
    </main>
  );
}

function PracticeWorkspace({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dragOffsetRef = useRef<DragPosition>({ x: 0, y: 0 });
  const [overlayPosition, setOverlayPosition] = useState<DragPosition | null>(
    null,
  );
  const transcript = useElevenLabsTranscript();
  const interviewer = useOpenAIInterviewResponse(transcript.text);

  function handleOverlayPointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button")) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    dragOffsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    setOverlayPosition({ x: rect.left, y: rect.top });
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handleOverlayPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const margin = 16;
    const maxX = window.innerWidth - rect.width - margin;
    const maxY = window.innerHeight - rect.height - margin;

    setOverlayPosition({
      x: Math.min(Math.max(event.clientX - dragOffsetRef.current.x, margin), maxX),
      y: Math.min(Math.max(event.clientY - dragOffsetRef.current.y, margin), maxY),
    });
  }

  function handleOverlayPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-zinc-500/35 p-3 text-zinc-50 backdrop-blur-[2px] sm:p-6 lg:p-8">
      <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#0b0b0b] shadow-[0_32px_120px_rgba(0,0,0,0.55)]">
        <div className="relative z-30 flex h-12 items-center justify-between border-b border-white/10 bg-[#181817]/95 px-4 backdrop-blur">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-7 items-center justify-center rounded-lg bg-black text-[11px] font-bold">
              AI
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold leading-none">Two Sum Interview</p>
              <p className="mt-1 truncate text-xs font-medium text-zinc-500">
                leetcode.com/problems/two-sum
              </p>
            </div>
          </div>

          <Button
            variant="secondary"
            className="h-8 rounded-lg border-white/15 bg-transparent px-3 text-xs text-white"
            onClick={onClose}
          >
            Exit
          </Button>
        </div>

        <iframe
          className="absolute inset-x-0 bottom-0 top-12 h-[calc(100%-3rem)] w-full border-0 bg-white"
          src="https://leetcode.com/problems/two-sum/"
          title="LeetCode Two Sum"
        />
      </div>

      <div
        ref={overlayRef}
        className="absolute z-40 touch-none cursor-grab animate-[interviewer-overlay-enter_620ms_cubic-bezier(.16,1,.3,1)_420ms_both] active:cursor-grabbing"
        style={
          overlayPosition
            ? { left: overlayPosition.x, top: overlayPosition.y }
            : { right: "2rem", top: "6rem" }
        }
        aria-label="DSA interviewer overlay"
        onPointerDown={handleOverlayPointerDown}
        onPointerMove={handleOverlayPointerMove}
        onPointerUp={handleOverlayPointerUp}
        onPointerCancel={handleOverlayPointerUp}
      >
        <Overlay
          audioLevel={transcript.audioLevel}
          interviewerResponse={interviewer.text}
          interviewerStatus={interviewer.status}
          onClose={onClose}
          transcript={transcript.text}
          transcriptStatus={transcript.status}
          isListening={transcript.isListening}
          onStartListening={transcript.start}
          onStopListening={transcript.stop}
        />
      </div>
    </div>
  );
}

function DemoWindow() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const dragOffsetRef = useRef<DragPosition>({ x: 0, y: 0 });
  const [overlayPosition, setOverlayPosition] = useState<DragPosition | null>(
    null,
  );
  const transcript = useElevenLabsTranscript();

  function handleDemoOverlayPointerDown(event: PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("button")) {
      return;
    }

    const stageRect = stageRef.current?.getBoundingClientRect();
    const overlayRect = event.currentTarget.getBoundingClientRect();

    if (!stageRect) {
      return;
    }

    dragOffsetRef.current = {
      x: event.clientX - overlayRect.left,
      y: event.clientY - overlayRect.top,
    };

    setOverlayPosition({
      x: overlayRect.left - stageRect.left,
      y: overlayRect.top - stageRect.top,
    });
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handleDemoOverlayPointerMove(event: PointerEvent<HTMLElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    const stageRect = stageRef.current?.getBoundingClientRect();
    const overlayRect = event.currentTarget.getBoundingClientRect();

    if (!stageRect) {
      return;
    }

    const margin = 12;
    const maxX = stageRect.width - overlayRect.width - margin;
    const maxY = stageRect.height - overlayRect.height - margin;

    setOverlayPosition({
      x: Math.min(
        Math.max(event.clientX - stageRect.left - dragOffsetRef.current.x, margin),
        maxX,
      ),
      y: Math.min(
        Math.max(event.clientY - stageRect.top - dragOffsetRef.current.y, margin),
        maxY,
      ),
    });
  }

  function handleDemoOverlayPointerUp(event: PointerEvent<HTMLElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <Card
      className="mt-5 w-full overflow-hidden rounded-2xl border-white/15 bg-[#282826] shadow-[0_28px_90px_rgba(0,0,0,0.35)]"
    >
      <div className="relative z-30 flex h-9 items-center gap-2 border-b border-white/10 bg-[#282826] px-5">
        <span className="size-3 rounded-full bg-[#ff7b7b]" />
        <span className="size-3 rounded-full bg-[#ffd36b]" />
        <span className="size-3 rounded-full bg-[#a7e079]" />
        <div className="ml-2 flex-1 rounded-md border border-white/10 bg-[#33332f] px-4 py-1 text-left font-mono text-[12px] text-zinc-500">
          leetcode.com/problems/two-sum
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative min-h-[360px] overflow-hidden bg-[#0b0b0b] text-left sm:min-h-[520px]"
        style={{
          animation: "demo-stage-enter 820ms cubic-bezier(.16,1,.3,1) both",
        }}
      >
        <video
          autoPlay
          className="absolute inset-0 size-full object-cover object-[50%_18%]"
          loop
          muted
          playsInline
          preload="metadata"
          src="/two-sum-demo.mov"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/5 via-transparent to-black/45" />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

        <aside
          className="absolute bottom-5 left-5 right-5 z-20 w-[calc(100%-2.5rem)] touch-none cursor-grab rounded-2xl border border-white/10 bg-[#10100f]/95 p-5 text-left shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur active:cursor-grabbing md:left-auto md:top-7 md:right-7 md:bottom-auto md:w-[350px] md:p-6"
          style={{
            animation:
              "interviewer-overlay-enter 760ms cubic-bezier(.16,1,.3,1) 620ms both",
            ...(overlayPosition
              ? {
                  bottom: "auto",
                  left: overlayPosition.x,
                  right: "auto",
                  top: overlayPosition.y,
                }
              : null),
          }}
          onPointerDown={handleDemoOverlayPointerDown}
          onPointerMove={handleDemoOverlayPointerMove}
          onPointerUp={handleDemoOverlayPointerUp}
          onPointerCancel={handleDemoOverlayPointerUp}
        >
          <div className="mb-5 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="size-11">
                <AvatarFallback className="bg-[#262624]">
                  <UserIcon />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-bold text-white">Alex</h3>
                <p className="text-xs font-semibold text-zinc-500">
                  Interviewer
                </p>
              </div>
            </div>
            <time className="text-xs font-medium text-zinc-600">28:41</time>
          </div>

          <blockquote className="rounded-xl bg-[#1c1c1b] p-4 text-sm font-semibold leading-6 text-zinc-200">
            “I can see you’re working through Two Sum. Walk me through what
            you’re storing in <InlineCode>seen</InlineCode> and why.”
          </blockquote>

          <p className="mt-5 text-sm font-medium italic leading-6 text-zinc-500">
            You: “{transcript.text || "Click Start mic and answer out loud."}”
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 text-xs font-medium text-zinc-500">
            <div className="flex items-center gap-2">
              <AudioBars isActive={transcript.isListening} />
              {transcript.status}
            </div>
            <Button
              variant="secondary"
              className="h-8 rounded-lg border-white/10 bg-[#191917] px-3 text-xs text-zinc-400"
              onClick={
                transcript.isListening ? transcript.stop : transcript.start
              }
            >
              <MicIcon />
              {transcript.isListening ? "Stop mic" : "Start mic"}
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-3">
            <Button
              variant="secondary"
              className="h-10 rounded-lg border-white/10 bg-[#191917] text-zinc-500"
            >
              <SparkIcon />
              Hint
            </Button>
            <Button className="h-10 rounded-lg">
              <StopIcon />
              End
            </Button>
          </div>
        </aside>
      </div>
    </Card>
  );
}

function useElevenLabsTranscript() {
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const frequencyDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const meterAnimationRef = useRef<number | null>(null);
  const segmentTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldContinueRecordingRef = useRef(false);
  const streamRef = useRef<MediaStream | null>(null);
  const [audioLevel, setAudioLevel] = useState(0);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Mic off");
  const [isListening, setIsListening] = useState(false);

  async function transcribeAudio(audio: Blob) {
    const formData = new FormData();

    formData.append("audio", audio, "speech.webm");
    setStatus("Transcribing...");

    const response = await fetch("/api/transcribe", {
      method: "POST",
      body: formData,
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error ?? "Transcription failed.");
    }

    const nextText = String(payload.text ?? "").trim();

    if (nextText) {
      setText((currentText) =>
        currentText ? `${currentText} ${nextText}` : nextText,
      );
    }

    setStatus(shouldContinueRecordingRef.current ? "Listening..." : "Mic off");
  }

  function startRecordingSegment(stream: MediaStream, mimeType: string) {
    const chunks: Blob[] = [];
    const mediaRecorder = new MediaRecorder(stream, { mimeType });

    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    });

    mediaRecorder.addEventListener(
      "stop",
      () => {
        if (segmentTimeoutRef.current) {
          clearTimeout(segmentTimeoutRef.current);
          segmentTimeoutRef.current = null;
        }

        const blob = new Blob(chunks, { type: mimeType });

        if (blob.size > 0) {
          transcribeAudio(blob).catch((error) => {
            setStatus(error instanceof Error ? error.message : "Mic error");
          });
        }

        if (shouldContinueRecordingRef.current && stream.active) {
          startRecordingSegment(stream, mimeType);
          return;
        }

        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        mediaRecorderRef.current = null;
        setIsListening(false);
      },
      { once: true },
    );

    mediaRecorder.start();
    segmentTimeoutRef.current = setTimeout(() => {
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
      }
    }, 4000);
  }

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

  async function start() {
    if (shouldContinueRecordingRef.current) {
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : "audio/webm";

      streamRef.current = stream;
      shouldContinueRecordingRef.current = true;
      setIsListening(true);
      setStatus("Listening...");

      startAudioMeter(stream);
      startRecordingSegment(stream, mimeType);
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Unable to access microphone.",
      );
      setIsListening(false);
      stopAudioMeter();
    }
  }

  function stop() {
    shouldContinueRecordingRef.current = false;

    if (segmentTimeoutRef.current) {
      clearTimeout(segmentTimeoutRef.current);
      segmentTimeoutRef.current = null;
    }

    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    } else {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      mediaRecorderRef.current = null;
      setIsListening(false);
    }

    stopAudioMeter();
    setIsListening(false);
    setStatus("Mic off");
  }

  useEffect(() => {
    return () => {
      shouldContinueRecordingRef.current = false;

      if (segmentTimeoutRef.current) {
        clearTimeout(segmentTimeoutRef.current);
        segmentTimeoutRef.current = null;
      }

      if (mediaRecorderRef.current?.state === "recording") {
        mediaRecorderRef.current.stop();
      } else {
        streamRef.current?.getTracks().forEach((track) => track.stop());
      }

      if (meterAnimationRef.current) {
        cancelAnimationFrame(meterAnimationRef.current);
        meterAnimationRef.current = null;
      }

      audioSourceRef.current?.disconnect();
      audioContextRef.current?.close().catch(() => null);
      streamRef.current = null;
      mediaRecorderRef.current = null;
      audioSourceRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      frequencyDataRef.current = null;
    };
  }, []);

  return {
    audioLevel,
    isListening,
    start,
    status,
    stop,
    text,
  };
}

function useOpenAIInterviewResponse(transcriptText: string) {
  const lastSubmittedTranscriptRef = useRef("");
  const [text, setText] = useState(
    "Start talking through your approach and I’ll ask follow-up questions.",
  );
  const [status, setStatus] = useState("Ready");

  useEffect(() => {
    const nextTranscript = transcriptText.trim();

    if (
      !nextTranscript ||
      nextTranscript === lastSubmittedTranscriptRef.current
    ) {
      return;
    }

    const controller = new AbortController();
    const debounce = setTimeout(async () => {
      try {
        lastSubmittedTranscriptRef.current = nextTranscript;
        setStatus("Thinking...");

        const response = await fetch("/api/interview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ transcript: nextTranscript }),
          signal: controller.signal,
        });
        const payload = await response.json().catch(() => null);

        if (!response.ok) {
          throw new Error(
            getStringPayloadValue(payload, "error") ?? "OpenAI request failed.",
          );
        }

        setText(
          getStringPayloadValue(payload, "response") ||
            "Tell me a little more about your approach.",
        );
        setStatus("Responded");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setStatus(error instanceof Error ? error.message : "OpenAI error");
      }
    }, 750);

    return () => {
      clearTimeout(debounce);
      controller.abort();
    };
  }, [transcriptText]);

  return { status, text };
}

function getStringPayloadValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== "object" || !(key in payload)) {
    return null;
  }

  const value = (payload as Record<string, unknown>)[key];

  return typeof value === "string" ? value.trim() : null;
}

function Badge({
  className,
  ...props
}: React.ComponentProps<"span"> & { className?: string }) {
  return (
    <span
      className={[
        "rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-zinc-600",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.8em] font-bold text-zinc-900">
      {children}
    </code>
  );
}

function AudioBars({ isActive = true }: { isActive?: boolean }) {
  return (
    <div className="flex h-3 items-center gap-1" aria-label="Listening">
      {[8, 11, 6, 12, 9].map((height, index) => (
        <span
          key={index}
          className={[
            "w-1 rounded-full shadow-[0_0_10px_rgba(132,204,22,0.3)]",
            isActive ? "bg-lime-500" : "bg-zinc-700",
          ].join(" ")}
          style={{ height }}
        />
      ))}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 5.75v12.5l10-6.25-10-6.25Z"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 text-zinc-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12s3.75-6 9.75-6 9.75 6 9.75 6-3.75 6-9.75 6-9.75-6-9.75-6Z"
      />
      <circle cx="12" cy="12" r="2.75" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 text-zinc-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75a3 3 0 0 0-3 3v5.5a3 3 0 0 0 6 0v-5.5a3 3 0 0 0-3-3ZM5.75 11.75a6.25 6.25 0 0 0 12.5 0M12 18v3M8.5 21h7"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 text-zinc-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 19V9M12 19V5M19 19v-7M4 19.25h16"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 text-zinc-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z"
      />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <rect x="7" y="7" width="10" height="10" rx="1" />
    </svg>
  );
}
