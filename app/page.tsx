"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Overlay from "@/components/ui/pip-overlay/overlay";
import MuiMicIcon from "@mui/icons-material/Mic";
import MuiMicOffIcon from "@mui/icons-material/MicOff";
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

type InterviewSummary = {
  areasToImprove: string[];
  breakdown: Array<{
    label: string;
    score: number | null;
  }>;
  elapsedSeconds: number;
  exchangeCount: number;
  finalComplexity: string | null;
  hintsUsed: number;
  overallScore: number | null;
  transcript: Array<{
    speaker: string;
    text: string;
  }>;
  verdict: string;
  wentWell: string[];
};

const INITIAL_INTERVIEWER_RESPONSE = "";
const NOT_ENOUGH_INFO = "Not enough information captured to assess this section.";

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
  const [summary, setSummary] = useState<InterviewSummary | null>(null);
  const elapsedSeconds = useElapsedSeconds();
  const interview = useRealtimeInterviewSession();

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

  function handleEndInterview() {
    const completedSummary = createInterviewSummary({
      elapsedSeconds,
      exchangeCount: interview.exchangeCount,
      hintsUsed: interview.hintsUsed,
      interviewerResponse: interview.interviewerResponse,
      transcript: interview.fullTranscript,
    });

    interview.stop();
    setSummary(completedSummary);
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

      {summary ? (
        <InterviewSummaryPanel summary={summary} onClose={onClose} />
      ) : (
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
            audioLevel={interview.audioLevel}
            elapsedTime={formatElapsedClock(elapsedSeconds)}
            interviewerResponse={interview.interviewerResponse}
            interviewerStatus={interview.interviewerStatus}
            isMuted={interview.isMuted}
            onClose={onClose}
            onEnd={handleEndInterview}
            onRequestHint={interview.requestHint}
            transcript={interview.text}
            transcriptStatus={interview.status}
            isListening={interview.isListening}
            onStartListening={interview.start}
            onStopListening={interview.stop}
            onToggleMute={interview.toggleMute}
          />
        </div>
      )}
    </div>
  );
}

function InterviewSummaryPanel({
  onClose,
  summary,
}: {
  onClose: () => void;
  summary: InterviewSummary;
}) {
  return (
    <section className="absolute inset-0 z-50 overflow-y-auto bg-[#1d1d1b]/96 px-4 py-6 backdrop-blur-sm sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[860px] pb-8">
        <header className="flex items-start justify-between gap-5">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-white">
              Interview complete
            </h2>
            <p className="mt-1 text-sm font-semibold text-zinc-500">
              Two Sum · {formatSummaryDuration(summary.elapsedSeconds)} ·{" "}
              {summary.exchangeCount}{" "}
              {summary.exchangeCount === 1 ? "exchange" : "exchanges"}
            </p>
          </div>

          <Button
            className="h-9 rounded-full bg-lime-100 px-6 text-sm font-bold text-zinc-950 hover:bg-lime-200"
            onClick={onClose}
          >
            {summary.verdict}
          </Button>
        </header>

        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <SummaryStat
            label="Overall score"
            value={
              summary.overallScore === null ? "Not assessed" : String(summary.overallScore)
            }
          />
          <SummaryStat
            label="Final complexity"
            value={summary.finalComplexity ?? "Not assessed"}
          />
          <SummaryStat label="Hints used" value={String(summary.hintsUsed)} />
          <SummaryStat
            label="Time taken"
            value={formatSummaryDuration(summary.elapsedSeconds)}
          />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <FeedbackCard
            accent="lime"
            icon={<CheckCircleIcon />}
            items={summary.wentWell}
            emptyMessage={NOT_ENOUGH_INFO}
            title="What went well"
          />
          <FeedbackCard
            accent="amber"
            icon={<WarningIcon />}
            items={summary.areasToImprove}
            emptyMessage={NOT_ENOUGH_INFO}
            title="Areas to improve"
          />
        </div>

        <section className="mt-6 rounded-xl border border-white/10 bg-[#2a2a28] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <h3 className="text-sm font-bold text-white">Performance breakdown</h3>
          <div className="mt-4 space-y-3">
            {summary.breakdown.length ? (
              summary.breakdown.map((item) => (
                <div
                  className="grid grid-cols-[138px_1fr_72px] items-center gap-4 text-sm font-bold text-zinc-400"
                  key={item.label}
                >
                  <span className="truncate">{item.label}</span>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#171716]">
                    <div
                      className="h-full rounded-full bg-zinc-500"
                      style={{ width: `${(item.score ?? 0) * 10}%` }}
                    />
                  </div>
                  <span className="text-right text-zinc-500">
                    {item.score === null ? "N/A" : `${item.score}/10`}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm font-semibold leading-6 text-zinc-500">
                {NOT_ENOUGH_INFO}
              </p>
            )}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-white/10 bg-[#2a2a28] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <h3 className="text-sm font-bold text-white">Transcript</h3>
          <div className="mt-4 space-y-3 text-sm font-semibold leading-6 text-zinc-400">
            {summary.transcript.map((line, index) => (
              <p key={`${line.speaker}-${index}`}>
                <span className="mr-2 rounded-md bg-[#181817] px-2 py-1 text-xs font-bold text-zinc-300">
                  {line.speaker}
                </span>
                {line.text}
              </p>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-[#151514] px-4 py-4">
      <p className="text-2xl font-bold tracking-[-0.03em] text-white">{value}</p>
      <p className="mt-1 text-xs font-bold text-zinc-500">{label}</p>
    </div>
  );
}

function FeedbackCard({
  accent,
  emptyMessage,
  icon,
  items,
  title,
}: {
  accent: "amber" | "lime";
  emptyMessage?: string;
  icon: React.ReactNode;
  items: string[];
  title: string;
}) {
  const dotClass = accent === "lime" ? "bg-lime-500" : "bg-amber-500";

  return (
    <section className="rounded-xl border border-white/10 bg-[#2a2a28] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <h3 className="flex items-center gap-2 text-sm font-bold text-white">
        {icon}
        {title}
      </h3>
      {items.length ? (
        <ul className="mt-4 space-y-3 text-sm font-bold leading-6 text-zinc-400">
          {items.map((item) => (
            <li className="flex gap-3" key={item}>
              <span className={`mt-2 size-1.5 shrink-0 rounded-full ${dotClass}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm font-semibold leading-6 text-zinc-500">
          {emptyMessage ?? "No items recorded."}
        </p>
      )}
    </section>
  );
}

function DemoWindow() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const dragOffsetRef = useRef<DragPosition>({ x: 0, y: 0 });
  const [overlayPosition, setOverlayPosition] = useState<DragPosition | null>(
    null,
  );
  const transcript = useRealtimeInterviewSession();

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
                <p className="text-xs font-bold text-gray-500">Interviewer</p>
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
              <AudioBars isActive={transcript.isListening && !transcript.isMuted} />
              {transcript.status}
            </div>
            <Button
              variant="secondary"
              className="size-8 rounded-lg border-white/25 bg-[#2a2a28] p-0 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-[#343431]"
              disabled={!transcript.isListening}
              aria-label={transcript.isMuted ? "Unmute microphone" : "Mute microphone"}
              title={transcript.isMuted ? "Unmute microphone" : "Mute microphone"}
              onClick={transcript.toggleMute}
            >
              {transcript.isMuted ? <MicOffIcon /> : <MicIcon />}
            </Button>
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
              onClick={transcript.requestHint}
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

function useElapsedSeconds() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return elapsedSeconds;
}

function createInterviewSummary({
  elapsedSeconds,
  exchangeCount,
  hintsUsed,
  interviewerResponse,
  transcript,
}: {
  elapsedSeconds: number;
  exchangeCount: number;
  hintsUsed: number;
  interviewerResponse: string;
  transcript: string;
}): InterviewSummary {
  const candidateTranscript = normalizeSummaryText(transcript);
  const interviewerTranscript = normalizeSummaryText(
    interviewerResponse === INITIAL_INTERVIEWER_RESPONSE ? "" : interviewerResponse,
  );
  const wordCount = countWords(candidateTranscript);
  const completedExchanges = Math.max(exchangeCount, candidateTranscript ? 1 : 0);
  const hasProblemSignal = hasTwoSumSignal(candidateTranscript);
  const hasSolutionSignal = hasTwoSumSolutionSignal(candidateTranscript);
  const hasAssessableTranscript =
    wordCount >= 12 && hasProblemSignal && elapsedSeconds >= 10;
  const finalComplexity = extractComplexity(candidateTranscript);
  const communicationScore = hasAssessableTranscript
    ? Math.min(10, Math.max(4, Math.round(wordCount / 12) + 5))
    : null;
  const comprehensionScore = hasAssessableTranscript
    ? hasSolutionSignal
      ? 8
      : 6
    : null;
  const correctnessScore = hasAssessableTranscript
    ? hasSolutionSignal
      ? 8
      : 5
    : null;
  const complexityScore =
    hasAssessableTranscript && finalComplexity
      ? 8
      : hasAssessableTranscript
        ? null
        : null;
  const hintScore = hasAssessableTranscript ? Math.max(5, 9 - hintsUsed) : null;
  const scoredBreakdown = [
    comprehensionScore,
    communicationScore,
    correctnessScore,
    complexityScore,
    hintScore,
  ].filter((score): score is number => score !== null);
  const overallScore = scoredBreakdown.length
    ? Math.round(
        (scoredBreakdown.reduce((total, score) => total + score, 0) /
          scoredBreakdown.length) *
          10,
      )
    : null;
  const wentWell = getEvidenceBackedWentWell(candidateTranscript);
  const areasToImprove = hasAssessableTranscript
    ? getEvidenceBackedAreasToImprove({
        hasSolutionSignal,
        mentionedComplexity: Boolean(finalComplexity),
        transcript: candidateTranscript,
      })
    : [];

  return {
    areasToImprove,
    breakdown: hasAssessableTranscript
      ? [
          { label: "Problem comprehension", score: comprehensionScore },
          { label: "Communication", score: communicationScore },
          { label: "Code correctness", score: correctnessScore },
          { label: "Complexity analysis", score: complexityScore },
          { label: "Handling hints", score: hintScore },
        ]
      : [],
    elapsedSeconds,
    exchangeCount: completedExchanges,
    finalComplexity,
    hintsUsed,
    overallScore,
    transcript: [
      ...(interviewerTranscript
        ? [{ speaker: "Alex", text: interviewerTranscript }]
        : []),
      {
        speaker: "You",
        text: candidateTranscript || "No candidate transcript was captured.",
      },
    ],
    verdict: overallScore === null ? "Not assessed" : overallScore >= 75 ? "Hire" : "Lean no",
    wentWell: hasAssessableTranscript ? wentWell : [],
  };
}

function normalizeSummaryText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function countWords(text: string) {
  return text ? text.split(/\s+/).length : 0;
}

function hasTwoSumSignal(text: string) {
  return /\b(two sum|target|indices|array|nums|pair|sum|complement)\b/i.test(text);
}

function hasTwoSumSolutionSignal(text: string) {
  return /\b(hash ?map|map|dictionary|dict|set|complement|target\s*-\s*\w+)\b/i.test(
    text,
  );
}

function extractComplexity(text: string) {
  const normalizedText = text.toLowerCase();

  if (/\bo\(\s*n\s*\)\b|linear/.test(normalizedText)) {
    return "O(n)";
  }

  if (/\bo\(\s*n\s*(?:\^2|\*\s*n|squared)\s*\)\b|quadratic|nested loop/.test(normalizedText)) {
    return "O(n²)";
  }

  if (/\bo\(\s*1\s*\)\b|constant/.test(normalizedText)) {
    return "O(1)";
  }

  if (/\bo\(\s*n\s*log\s*n\s*\)\b|n log n/.test(normalizedText)) {
    return "O(n log n)";
  }

  return null;
}

function getEvidenceBackedWentWell(transcript: string) {
  const wentWell: string[] = [];

  if (/\b(hash ?map|map|dictionary|dict)\b/i.test(transcript)) {
    wentWell.push("Mentioned using a hash map or dictionary.");
  }

  if (/\bcomplement|target\s*-\s*\w+\b/i.test(transcript)) {
    wentWell.push("Referenced complement lookup for the target sum.");
  }

  if (extractComplexity(transcript)) {
    wentWell.push("Stated a time or space complexity.");
  }

  return wentWell;
}

function getEvidenceBackedAreasToImprove({
  hasSolutionSignal,
  mentionedComplexity,
  transcript,
}: {
  hasSolutionSignal: boolean;
  mentionedComplexity: boolean;
  transcript: string;
}) {
  const areasToImprove: string[] = [];

  if (!hasSolutionSignal) {
    areasToImprove.push(
      "The captured answer did not clearly explain the hash map/complement approach.",
    );
  }

  if (!mentionedComplexity) {
    areasToImprove.push("The captured answer did not state final time or space complexity.");
  }

  if (!/\b(edge case|duplicate|same index|no solution|empty)\b/i.test(transcript)) {
    areasToImprove.push("Edge cases were not discussed in the captured transcript.");
  }

  return areasToImprove;
}

function formatElapsedClock(elapsedSeconds: number) {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatSummaryDuration(elapsedSeconds: number) {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  if (minutes === 0) {
    return `${seconds}s`;
  }

  if (seconds === 0) {
    return `${minutes}m`;
  }

  return `${minutes}m ${seconds}s`;
}

function useRealtimeInterviewSession() {
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const frequencyDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const meterAnimationRef = useRef<number | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const inputTranscriptRef = useRef("");
  const sessionTranscriptRef = useRef("");
  const isMutedRef = useRef(false);
  const responseTranscriptRef = useRef("");
  const streamRef = useRef<MediaStream | null>(null);
  const [audioLevel, setAudioLevel] = useState(0);
  const [interviewerResponse, setInterviewerResponse] = useState(
    INITIAL_INTERVIEWER_RESPONSE,
  );
  const [interviewerStatus, setInterviewerStatus] = useState("Ready");
  const [exchangeCount, setExchangeCount] = useState(0);
  const [fullTranscript, setFullTranscript] = useState("");
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

  function resetInputTranscript() {
    inputTranscriptRef.current = "";
  }

  function setMicrophoneMuted(nextIsMuted: boolean) {
    isMutedRef.current = nextIsMuted;
    streamRef.current
      ?.getAudioTracks()
      .forEach((track) => {
        track.enabled = !nextIsMuted;
      });
    setIsMuted(nextIsMuted);
    setStatus(nextIsMuted ? "Muted" : "Listening...");
  }

  function cleanupConnection() {
    dataChannelRef.current?.close();
    peerConnectionRef.current?.close();
    remoteAudioRef.current?.pause();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    stopAudioMeter();

    dataChannelRef.current = null;
    peerConnectionRef.current = null;
    remoteAudioRef.current = null;
    resetInputTranscript();
    sessionTranscriptRef.current = "";
    isMutedRef.current = false;
    setIsMuted(false);
    responseTranscriptRef.current = "";
    streamRef.current = null;
    setFullTranscript("");
    setText("");
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
      }

      setInterviewerStatus("Listening");
      setStatus(isMutedRef.current ? "Muted" : "Listening...");
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
        const nextSessionTranscript = sessionTranscriptRef.current
          ? `${sessionTranscriptRef.current} ${transcript}`
          : transcript;

        sessionTranscriptRef.current = nextSessionTranscript;
        inputTranscriptRef.current = "";
        setFullTranscript(nextSessionTranscript);
        setText(transcript);
        setExchangeCount((count) => count + 1);
      }

      return;
    }

    if (eventType === "response.done") {
      resetInputTranscript();
      setInterviewerStatus("Listening");
      setStatus(isMutedRef.current ? "Muted" : "Listening...");
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

  async function start() {
    if (peerConnectionRef.current) {
      return;
    }

    try {
      setStatus("Connecting...");
      setInterviewerStatus("Connecting");

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioTrack = stream.getAudioTracks()[0];

      if (!audioTrack) {
        throw new Error("No microphone audio track was available.");
      }

      isMutedRef.current = false;
      setIsMuted(false);

      const sessionResponse = await fetch("/api/realtime/session", {
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
      peerConnection.addEventListener("track", (event) => {
        remoteAudio.srcObject = event.streams[0];
        remoteAudio.play().catch(() => null);
      });

      dataChannel.addEventListener("open", () => {
        setStatus("Listening...");
        setInterviewerStatus("Listening");
        dataChannel.send(
          JSON.stringify({
            type: "response.create",
            response: {
              instructions:
                "Briefly greet the candidate and ask them to start by explaining their Two Sum approach.",
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
            "Give the candidate one concise Two Sum hint based on the current conversation. Do not reveal the full solution. Prefer a guiding question or a small nudge toward the next idea.",
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
      sessionTranscriptRef.current = "";
      isMutedRef.current = false;
      responseTranscriptRef.current = "";
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

function getRealtimeClientSecret(payload: unknown) {
  const directValue = getStringPayloadValue(payload, "value");

  if (directValue) {
    return directValue;
  }

  if (!payload || typeof payload !== "object" || !("client_secret" in payload)) {
    return null;
  }

  return getStringPayloadValue(payload.client_secret, "value");
}

function parseRealtimeEvent(data: unknown) {
  try {
    return JSON.parse(String(data)) as unknown;
  } catch {
    return null;
  }
}

async function parseJsonResponse(response: Response) {
  const text = await response.text();

  if (!text.trim()) {
    return null;
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}

function getStringPayloadValue(payload: unknown, key: string) {
  return getRawStringPayloadValue(payload, key)?.trim() || null;
}

function getRawStringPayloadValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== "object" || !(key in payload)) {
    return null;
  }

  const value = (payload as Record<string, unknown>)[key];

  return typeof value === "string" ? value : null;
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
  return <MuiMicIcon aria-hidden="true" className="size-5 text-white" />;
}

function MicOffIcon() {
  return <MuiMicOffIcon aria-hidden="true" className="size-5 text-white" />;
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

function CheckCircleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 text-lime-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 text-amber-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v4M12 17h.01M10.3 4.86 2.7 18a2 2 0 0 0 1.73 3h15.14a2 2 0 0 0 1.73-3L13.7 4.86a2 2 0 0 0-3.4 0Z"
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
