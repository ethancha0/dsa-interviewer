"use client";

import Overlay from "@/components/ui/pip-overlay/overlay";
import { recordCompletedInterview } from "@/lib/dashboard-progress";
import { getInterviewSummaryPath } from "@/lib/interview-summary-storage";
import { launchConfigToProblem } from "@/lib/interview/leetcode-launch";
import { createInterviewSummary } from "@/lib/interview/summary";
import type { LeetCodeLaunchConfig, StartInterviewOptions } from "@/lib/interview/types";
import { formatElapsedClock, useElapsedSeconds } from "@/lib/interview/use-elapsed-seconds";
import { useRealtimeInterviewSession } from "@/lib/interview/use-realtime-interview-session";
import { useRef, useState, type PointerEvent } from "react";

export function LeetCodeExtensionOverlay({
  config,
}: {
  config: LeetCodeLaunchConfig;
}) {
  const problem = launchConfigToProblem(config);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const finalElapsedSecondsRef = useRef(0);
  const [overlayPosition, setOverlayPosition] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [hasInterviewStarted, setHasInterviewStarted] = useState(false);
  const [isInterviewEnded, setIsInterviewEnded] = useState(false);
  const [isSavingInterview, setIsSavingInterview] = useState(false);
  const elapsedSeconds = useElapsedSeconds(hasInterviewStarted);
  const interview = useRealtimeInterviewSession(problem, config.appOrigin);

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

  function handleStartInterview(options: StartInterviewOptions) {
    setIsInterviewEnded(false);
    setHasInterviewStarted(true);
    void interview.start(options);
  }

  async function handleEndInterview() {
    if (isSavingInterview || isInterviewEnded) {
      return;
    }

    setIsSavingInterview(true);
    finalElapsedSecondsRef.current = elapsedSeconds;
    setHasInterviewStarted(false);

    const summary = createInterviewSummary({
      elapsedSeconds: finalElapsedSecondsRef.current,
      exchangeCount: interview.exchangeCount,
      hintsUsed: interview.hintsUsed,
      interviewerResponse: interview.interviewerResponse,
      problemTitle: problem.title,
      transcript: interview.fullTranscript,
    });

    interview.stop();

    await recordCompletedInterview(
      {
        category: problem.category,
        completedAt: new Date().toISOString(),
        elapsedSeconds: summary.elapsedSeconds,
        overallScore: summary.overallScore,
        problemSlug: problem.slug,
        problemTitle: problem.title,
        verdict: summary.verdict,
      },
      config.appOrigin,
      summary,
    );

    setIsInterviewEnded(true);
    setIsSavingInterview(false);
    window.open(
      `${config.appOrigin}${getInterviewSummaryPath(problem.slug)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const displayElapsedTime = formatElapsedClock(
    isInterviewEnded ? finalElapsedSecondsRef.current : elapsedSeconds,
  );

  if (isInterviewEnded) {
    return (
      <div
        aria-label="DSA interviewer overlay"
        className="pointer-events-auto fixed z-[2147483647] w-[352px] animate-[interviewer-overlay-enter_620ms_cubic-bezier(.16,1,.3,1)_both]"
        style={
          overlayPosition
            ? { left: overlayPosition.x, top: overlayPosition.y }
            : { right: "2rem", top: "6rem" }
        }
      >
        <div className="rounded-[1.45rem] border border-white/10 bg-[#171717] p-6 text-zinc-50 shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
            Interview complete
          </p>
          <h2 className="mt-3 text-lg font-bold text-white">{problem.title}</h2>
          <p className="mt-2 text-sm font-medium text-zinc-400">
            Finished in {displayElapsedTime}. Progress syncs when you open the dashboard.
          </p>
          <a
            className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-white text-sm font-bold text-zinc-950"
            href={`${config.appOrigin}${getInterviewSummaryPath(problem.slug)}`}
            rel="noreferrer"
            target="_blank"
          >
            View summary
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={overlayRef}
      aria-label="DSA interviewer overlay"
      className="pointer-events-auto fixed z-[2147483647] touch-none cursor-grab animate-[interviewer-overlay-enter_620ms_cubic-bezier(.16,1,.3,1)_420ms_both] active:cursor-grabbing"
      onPointerCancel={handleOverlayPointerUp}
      onPointerDown={handleOverlayPointerDown}
      onPointerMove={handleOverlayPointerMove}
      onPointerUp={handleOverlayPointerUp}
      style={
        overlayPosition
          ? { left: overlayPosition.x, top: overlayPosition.y }
          : { right: "2rem", top: "6rem" }
      }
    >
      <Overlay
        audioLevel={interview.audioLevel}
        elapsedTime={displayElapsedTime}
        hasStarted={hasInterviewStarted}
        interviewerResponse={interview.interviewerResponse}
        interviewerStatus={isSavingInterview ? "Saving..." : interview.interviewerStatus}
        isListening={interview.isListening}
        isMuted={interview.isMuted}
        onEnd={() => void handleEndInterview()}
        onRequestHint={interview.requestHint}
        onStartInterview={handleStartInterview}
        onStartListening={interview.start}
        onStopListening={interview.stop}
        onToggleMute={interview.toggleMute}
        transcript={interview.text}
        transcriptStatus={interview.status}
      />
    </div>
  );
}
