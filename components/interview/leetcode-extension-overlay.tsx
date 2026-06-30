"use client";

import { recordCompletedInterview } from "@/lib/dashboard-progress";
import { launchConfigToProblem } from "@/lib/interview/leetcode-launch";
import { createInterviewSummary } from "@/lib/interview/summary";
import type { LeetCodeLaunchConfig, StartInterviewOptions } from "@/lib/interview/types";
import { formatElapsedClock, useElapsedSeconds } from "@/lib/interview/use-elapsed-seconds";
import { useRealtimeInterviewSession } from "@/lib/interview/use-realtime-interview-session";
import { useRef, useState, type PointerEvent } from "react";

const shellStyle: React.CSSProperties = {
  bottom: "24px",
  left: "24px",
  pointerEvents: "auto",
  position: "fixed",
  touchAction: "none",
  width: "352px",
  zIndex: 2147483647,
};

const cardStyle: React.CSSProperties = {
  background: "#171717",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "1.45rem",
  boxShadow: "0 28px 80px rgba(0,0,0,0.55)",
  color: "#fafafa",
  padding: "12px",
};

export function LeetCodeExtensionOverlay({
  config,
}: {
  config: LeetCodeLaunchConfig;
}) {
  const problem = launchConfigToProblem(config);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [hasInterviewStarted, setHasInterviewStarted] = useState(false);
  const elapsedSeconds = useElapsedSeconds(hasInterviewStarted);
  const interview = useRealtimeInterviewSession(problem, config.appOrigin);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button")) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    dragOffsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    setPosition({ x: rect.left, y: rect.top });
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const margin = 16;
    const maxX = window.innerWidth - rect.width - margin;
    const maxY = window.innerHeight - rect.height - margin;

    setPosition({
      x: Math.min(Math.max(event.clientX - dragOffsetRef.current.x, margin), maxX),
      y: Math.min(Math.max(event.clientY - dragOffsetRef.current.y, margin), maxY),
    });
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleStartInterview(options: StartInterviewOptions) {
    setHasInterviewStarted(true);
    void interview.start(options);
  }

  async function handleEndInterview() {
    const summary = createInterviewSummary({
      elapsedSeconds,
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
    );

    window.open(`${config.appOrigin}/dashboard`, "_blank", "noopener,noreferrer");
  }

  const displayResponse =
    interview.interviewerResponse ||
    (hasInterviewStarted
      ? "Alex is getting ready to respond..."
      : "Start the interview when you're ready for Alex's first prompt.");

  return (
    <div
      ref={shellRef}
      aria-label="DSA interviewer overlay"
      onPointerCancel={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        ...shellStyle,
        ...(position ? { bottom: "auto", left: position.x, top: position.y } : {}),
      }}
    >
      <div style={cardStyle}>
        <div style={{ display: "flex", gap: "12px", marginBottom: "12px", padding: "0 4px" }}>
          <span style={{ color: "#71717a", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em" }}>
            DSA INTERVIEWER
          </span>
          <span
            style={{
              background: "rgba(59,130,246,0.15)",
              borderRadius: "999px",
              color: "#93c5fd",
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 12px",
            }}
          >
            On LeetCode
          </span>
        </div>

        <div
          style={{
            background: "#202020",
            borderRadius: "1rem",
            padding: "20px",
          }}
        >
          <div style={{ alignItems: "start", display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "16px", fontWeight: 700 }}>Alex — Interviewer</div>
              <div style={{ color: "#71717a", fontSize: "14px", fontWeight: 600, marginTop: "2px" }}>
                {interview.interviewerStatus}
              </div>
            </div>
            <time style={{ color: "#a1a1aa", fontSize: "16px", fontWeight: 700 }}>
              {formatElapsedClock(elapsedSeconds)}
            </time>
          </div>

          <blockquote
            style={{
              background: "#202020",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: 1.6,
              marginTop: "16px",
              padding: "12px 16px",
            }}
          >
            “{displayResponse}”
          </blockquote>

          {hasInterviewStarted ? (
            <>
              <p
                style={{
                  color: "#71717a",
                  fontSize: "14px",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  marginTop: "16px",
                }}
              >
                You: “{interview.text || "Start answering out loud."}”
              </p>
              <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "1fr 1fr", marginTop: "16px" }}>
                <button
                  onClick={interview.requestHint}
                  style={secondaryButtonStyle}
                  type="button"
                >
                  Hint
                </button>
                <button onClick={() => void handleEndInterview()} style={primaryButtonStyle} type="button">
                  End
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => handleStartInterview({ shareScreen: false })}
              style={{ ...primaryButtonStyle, marginTop: "24px", width: "100%" }}
              type="button"
            >
              Start interview
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const primaryButtonStyle: React.CSSProperties = {
  background: "#fafafa",
  border: "none",
  borderRadius: "12px",
  color: "#18181b",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 700,
  padding: "10px 14px",
};

const secondaryButtonStyle: React.CSSProperties = {
  background: "#2a2a28",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "12px",
  color: "#fafafa",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 700,
  padding: "10px 14px",
};
