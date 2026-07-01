"use client";

import { formatSummaryDuration } from "@/lib/interview/summary";
import { NOT_ENOUGH_INFO, type InterviewSummary } from "@/lib/interview/types";
import Link from "next/link";

export function InterviewSummaryPanel({
  backHref = "/dashboard",
  backLabel = "Back to dashboard",
  summary,
}: {
  backHref?: string;
  backLabel?: string;
  summary: InterviewSummary;
}) {
  return (
    <div className="mx-auto w-full max-w-[860px] pb-8">
      <header className="flex animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_both] items-start justify-between gap-5">
        <div>
          <Link
            className="text-xs font-semibold text-zinc-500 transition-colors hover:text-white"
            href={backHref}
          >
            ← {backLabel}
          </Link>
          <h1 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-white">
            Interview complete
          </h1>
          <p className="mt-1 text-sm font-semibold text-zinc-500">
            {summary.problemTitle} · {formatSummaryDuration(summary.elapsedSeconds)} ·{" "}
            {summary.exchangeCount}{" "}
            {summary.exchangeCount === 1 ? "exchange" : "exchanges"}
          </p>
        </div>

        <Link
          className="inline-flex h-9 items-center justify-center rounded-full bg-lime-100 px-6 text-sm font-bold text-zinc-950 transition-colors hover:bg-lime-200"
          href={backHref}
        >
          {summary.verdict}
        </Link>
      </header>

      <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <SummaryStat
          className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_90ms_both]"
          label="Overall score"
          value={summary.overallScore === null ? "Not assessed" : String(summary.overallScore)}
        />
        <SummaryStat
          className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_140ms_both]"
          label="Final complexity"
          value={summary.finalComplexity ?? "Not assessed"}
        />
        <SummaryStat
          className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_190ms_both]"
          label="Hints used"
          value={String(summary.hintsUsed)}
        />
        <SummaryStat
          className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_240ms_both]"
          label="Time taken"
          value={formatSummaryDuration(summary.elapsedSeconds)}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <FeedbackCard
          accent="lime"
          className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_310ms_both]"
          icon={<CheckCircleIcon />}
          items={summary.wentWell}
          emptyMessage={NOT_ENOUGH_INFO}
          title="What went well"
        />
        <FeedbackCard
          accent="amber"
          className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_380ms_both]"
          icon={<WarningIcon />}
          items={summary.areasToImprove}
          emptyMessage={NOT_ENOUGH_INFO}
          title="Areas to improve"
        />
      </div>

      <section className="mt-6 animate-[panel-rise-in_560ms_cubic-bezier(.16,1,.3,1)_460ms_both] rounded-xl border border-white/10 bg-[#2a2a28] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <h2 className="text-sm font-bold text-white">Performance breakdown</h2>
        <div className="mt-4 space-y-3">
          {summary.breakdown.length ? (
            summary.breakdown.map((item, index) => (
              <div
                className="grid animate-[row-fade-in_420ms_cubic-bezier(.16,1,.3,1)_both] grid-cols-[138px_1fr_72px] items-center gap-4 text-sm font-bold text-zinc-400"
                key={item.label}
                style={{ animationDelay: `${540 + index * 55}ms` }}
              >
                <span className="truncate">{item.label}</span>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#171716]">
                  <div
                    className="h-full origin-left animate-[score-bar-fill_760ms_cubic-bezier(.16,1,.3,1)_both] rounded-full bg-zinc-500"
                    style={{
                      animationDelay: `${620 + index * 55}ms`,
                      width: `${(item.score ?? 0) * 10}%`,
                    }}
                  />
                </div>
                <span className="text-right text-zinc-500">
                  {item.score === null ? "N/A" : `${item.score}/10`}
                </span>
              </div>
            ))
          ) : (
            <p className="text-sm font-semibold leading-6 text-zinc-500">{NOT_ENOUGH_INFO}</p>
          )}
        </div>
      </section>

      <section className="mt-6 animate-[panel-rise-in_560ms_cubic-bezier(.16,1,.3,1)_560ms_both] rounded-xl border border-white/10 bg-[#2a2a28] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <h2 className="text-sm font-bold text-white">Transcript</h2>
        <div className="mt-4 space-y-3 text-sm font-semibold leading-6 text-zinc-400">
          {summary.transcript.length ? (
            summary.transcript.map((line, index) => (
              <p
                className="animate-[row-fade-in_380ms_cubic-bezier(.16,1,.3,1)_both]"
                key={`${line.speaker}-${index}`}
                style={{ animationDelay: `${660 + Math.min(index, 14) * 36}ms` }}
              >
                <span className="mr-2 rounded-md bg-[#181817] px-2 py-1 text-xs font-bold text-zinc-300">
                  {line.speaker}
                </span>
                {line.text}
              </p>
            ))
          ) : (
            <p className="text-sm font-semibold leading-6 text-zinc-500">{NOT_ENOUGH_INFO}</p>
          )}
        </div>
      </section>
    </div>
  );
}

function SummaryStat({
  className = "",
  label,
  value,
}: {
  className?: string;
  label: string;
  value: string;
}) {
  return (
    <div className={`rounded-lg bg-[#151514] px-4 py-4 ${className}`}>
      <p className="text-2xl font-bold tracking-[-0.03em] text-white">{value}</p>
      <p className="mt-1 text-xs font-bold text-zinc-500">{label}</p>
    </div>
  );
}

function FeedbackCard({
  accent,
  className = "",
  emptyMessage,
  icon,
  items,
  title,
}: {
  accent: "amber" | "lime";
  className?: string;
  emptyMessage?: string;
  icon: React.ReactNode;
  items: string[];
  title: string;
}) {
  const dotClass = accent === "lime" ? "bg-lime-500" : "bg-amber-500";

  return (
    <section
      className={`rounded-xl border border-white/10 bg-[#2a2a28] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${className}`}
    >
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
