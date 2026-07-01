"use client";

import {
  EMPTY_DASHBOARD_PROGRESS,
  loadPersistedDashboardProgress,
  type DashboardInterviewRecord,
  type DashboardProgress,
} from "@/lib/dashboard-progress";
import { getInterviewSummaryPath } from "@/lib/interview-summary-storage";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  blind75Problems,
  neetcode150Problems,
  type ProblemListItem,
} from "./problem-lists";

const totalTrackProblems = neetcode150Problems.length;

export default function DashboardPage() {
  const [progress, setProgress] = useState<DashboardProgress>(EMPTY_DASHBOARD_PROGRESS);

  useEffect(() => {
    let isActive = true;

    async function loadProgress() {
      const nextProgress = await loadPersistedDashboardProgress();

      if (isActive) {
        setProgress(nextProgress);
      }
    }

    void loadProgress();
    const retryTimer = window.setTimeout(() => {
      void loadProgress();
    }, 1500);

    return () => {
      isActive = false;
      window.clearTimeout(retryTimer);
    };
  }, []);

  const dashboardStats = useMemo(() => getDashboardStats(progress), [progress]);
  const topics = useMemo(() => getTopicProgress(progress), [progress]);
  const completedProblemSlugs = useMemo(
    () => new Set(progress.interviews.map((interview) => interview.problemSlug)),
    [progress],
  );
  const recommendedProblem = useMemo(
    () =>
      neetcode150Problems.find((problem) => !completedProblemSlugs.has(problem.slug)) ??
      neetcode150Problems[0],
    [completedProblemSlugs],
  );

  return (
    <main className="min-h-screen bg-[#0b0b0c] text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1220px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_both] items-center justify-between border-b border-white/10 pb-4">
          <Link className="flex items-center gap-3" href="/">
            <div className="flex size-7 items-center justify-center rounded-lg bg-white text-[11px] font-black text-zinc-950">
              AI
            </div>
            <span className="text-sm font-bold sm:text-base">DSA Interviewer</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <Link className="text-white" href="/dashboard">
              Dashboard
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-white" href="#problem-lists">
              Problems
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-white" href="#">
              Interviews
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-white" href="#">
              Settings
            </Link>
          </nav>

          <div className="size-10 rounded-full bg-linear-to-br from-lime-300 to-emerald-600 shadow-[0_0_30px_rgba(34,197,94,0.25)]" />
        </header>

        <section className="py-9">
          <div className="flex animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_90ms_both] flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                Your interview prep
              </h1>
              <p className="mt-2 text-sm font-medium text-zinc-500">
                {dashboardStats.completedCount} problems completed - avg score{" "}
                {dashboardStats.averageScoreLabel} -{" "}
                {dashboardStats.lastInterviewLabel}
              </p>
            </div>

            <div className="inline-flex w-fit rounded-xl border border-white/10 bg-[#161618] p-1">
              <span className="rounded-lg bg-white px-5 py-2 text-sm font-bold text-zinc-950">
                NeetCode 150
              </span>
              <span className="px-5 py-2 text-sm font-bold text-zinc-500">
                Blind 75
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <ProgressCard
              className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_170ms_both]"
              color="#2ee66f"
              label="Total solved"
              percent={dashboardStats.completedPercent}
              value={`${dashboardStats.completedCount}/${totalTrackProblems}`}
            />
            <ProgressCard
              className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_230ms_both]"
              color="#f2c84b"
              label="Mock-interviewed"
              percent={dashboardStats.mockInterviewPercent}
              value={`${dashboardStats.mockInterviewPercent}%`}
            />
            <ProgressCard
              className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_290ms_both]"
              color="#62a9ff"
              label="Pass rate (>=7/10)"
              percent={dashboardStats.passRate}
              value={`${dashboardStats.passRate}%`}
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MiniStat
              className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_350ms_both]"
              label="Last interviewed"
              value={dashboardStats.lastInterviewValue}
              detail={dashboardStats.lastInterviewDetail}
            />
            <MiniStat
              className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_400ms_both]"
              label="Interview score"
              value={dashboardStats.latestScoreValue}
              suffix="/10"
              detail={dashboardStats.latestScoreDetail}
              tone={dashboardStats.latestScoreTone}
            />
            <MiniStat
              className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_450ms_both]"
              label="Total mock interviews"
              value={String(dashboardStats.interviewCount)}
              detail={dashboardStats.interviewCountDetail}
              tone={dashboardStats.interviewCount > 0 ? "green" : "zinc"}
            />
            <MiniStat
              className="animate-[panel-rise-in_520ms_cubic-bezier(.16,1,.3,1)_500ms_both]"
              label="Avg. time to solve"
              value={dashboardStats.averageMinutesValue}
              suffix="min"
              detail={dashboardStats.averageMinutesDetail}
              tone={dashboardStats.interviewCount > 0 ? "green" : "zinc"}
            />
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_0.95fr]">
            <section className="animate-[panel-rise-in_560ms_cubic-bezier(.16,1,.3,1)_570ms_both] rounded-2xl border border-white/10 bg-[#141416] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-base font-bold text-white">Interview history</h2>
                <span className="font-mono text-xs text-zinc-600">
                  {progress.interviews.length ? "last 5" : "fresh start"}
                </span>
              </div>

              {progress.interviews.length ? (
                <div className="divide-y divide-white/5">
                  {progress.interviews.slice(0, 5).map((item, index) => (
                    <HistoryRow key={item.problemSlug} index={index} record={item} />
                  ))}
                </div>
              ) : (
                <EmptyState message="No interviews yet. Open any problem below to complete your first mock interview." />
              )}
            </section>

            <div className="space-y-5">
              <section className="animate-[panel-rise-in_560ms_cubic-bezier(.16,1,.3,1)_640ms_both] rounded-2xl border border-white/10 bg-[#141416] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-base font-bold text-white">Topic mastery</h2>
                  <span className="font-mono text-xs text-zinc-600">
                    {topics.length} topics
                  </span>
                </div>

                <div className="space-y-4">
                  {topics.map((topic, index) => (
                    <TopicRow key={topic.label} index={index} {...topic} />
                  ))}
                </div>
              </section>

              <section className="animate-[panel-rise-in_560ms_cubic-bezier(.16,1,.3,1)_720ms_both] rounded-2xl border border-emerald-500/45 bg-emerald-500/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  Recommended next
                </div>
                <h2 className="text-lg font-bold tracking-[-0.02em] text-white">
                  {recommendedProblem.category} - next up
                </h2>
                <p className="mt-2 text-sm font-medium leading-5 text-zinc-500">
                  Continue onboarding by completing {recommendedProblem.title}. The
                  dashboard will update as soon as you finish the interview.
                </p>
                <Link
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-zinc-950 transition-colors hover:bg-zinc-100"
                  href={getPracticeHref(recommendedProblem)}
                >
                  <PlayIcon />
                  Start {recommendedProblem.title}
                </Link>
              </section>
            </div>
          </div>

          <section
            className="mt-6 animate-[panel-rise-in_560ms_cubic-bezier(.16,1,.3,1)_800ms_both]"
            id="problem-lists"
          >
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-[-0.03em] text-white">
                  Problem lists
                </h2>
                <p className="mt-1 text-sm font-medium text-zinc-500">
                  Browse the NeetCode 150 and Blind 75 lists, then practice on LeetCode
                  or NeetCode.
                </p>
              </div>
              <span className="font-mono text-xs text-zinc-600">
                {neetcode150Problems.length + blind75Problems.length} linked entries
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <ProblemListPanel
                accent="lime"
                description="A comprehensive roadmap across core interview patterns."
                problems={neetcode150Problems}
                completedProblemSlugs={completedProblemSlugs}
                title="NeetCode 150"
              />
              <ProblemListPanel
                accent="blue"
                description="The original high-leverage Blind 75 interview list."
                problems={blind75Problems}
                completedProblemSlugs={completedProblemSlugs}
                title="Blind 75"
              />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function ProgressCard({
  className = "",
  color,
  label,
  percent,
  value,
}: {
  className?: string;
  color: string;
  label: string;
  percent: number;
  value: string;
}) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-[#141416] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${className}`}>
      <div className="flex items-center gap-6">
        <ProgressRing color={color} percent={percent} />
        <div>
          <p className="text-3xl font-bold tracking-[-0.04em] text-white">{value}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600">
            {label}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProgressRing({ color, percent }: { color: string; percent: number }) {
  return (
    <div
      className="grid size-16 shrink-0 place-items-center rounded-full"
      style={{
        background: `conic-gradient(${color} ${percent * 3.6}deg, #232326 0deg)`,
      }}
    >
      <div className="size-11 rounded-full bg-[#141416]" />
    </div>
  );
}

function MiniStat({
  className = "",
  detail,
  label,
  suffix,
  tone = "zinc",
  value,
}: {
  className?: string;
  detail: string;
  label: string;
  suffix?: string;
  tone?: "green" | "red" | "zinc";
  value: string;
}) {
  const detailColor =
    tone === "green" ? "text-emerald-400" : tone === "red" ? "text-red-400" : "text-zinc-500";

  return (
    <section className={`rounded-xl border border-white/10 bg-[#141416] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-600">
        {label}
      </p>
      <p className="mt-3 font-mono text-2xl font-bold text-white">
        {value}
        {suffix ? (
          <span className="ml-2 text-xs font-semibold text-zinc-500">{suffix}</span>
        ) : null}
      </p>
      <p className={`mt-1 text-xs font-semibold ${detailColor}`}>{detail}</p>
    </section>
  );
}

function HistoryRow({
  index,
  record,
}: {
  index: number;
  record: DashboardInterviewRecord;
}) {
  const score = formatScore(record.overallScore);
  const scoreClass =
    (record.overallScore ?? 0) >= 70
      ? "bg-emerald-500/15 text-emerald-400"
      : (record.overallScore ?? 0) < 50
        ? "bg-red-500/15 text-red-400"
        : "bg-amber-500/15 text-amber-300";

  return (
    <article
      className="grid animate-[row-fade-in_420ms_cubic-bezier(.16,1,.3,1)_both] grid-cols-[40px_1fr_auto] items-center gap-4 py-4"
      style={{ animationDelay: `${680 + index * 45}ms` }}
    >
      <div className={`rounded-lg px-2 py-2 text-center font-mono text-sm font-bold ${scoreClass}`}>
        {score}
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-white">
          {record.problemTitle}
        </h3>
        <p className="mt-1 truncate text-xs font-medium text-zinc-600">
          {formatRelativeDate(record.completedAt)} - Alex -{" "}
          {formatMinutes(record.elapsedSeconds)}
        </p>
      </div>
      <Link
        className="hidden text-xs font-semibold text-zinc-500 transition-colors hover:text-white sm:inline"
        href={getInterviewSummaryPath(record.problemSlug)}
      >
        Summary -&gt;
      </Link>
    </article>
  );
}

function TopicRow({
  index,
  label,
  solved,
  total,
}: {
  index: number;
  label: string;
  solved: number;
  total: number;
}) {
  const activeDots = Math.round((solved / Math.max(total, 1)) * 5);

  return (
    <div
      className="grid animate-[row-fade-in_420ms_cubic-bezier(.16,1,.3,1)_both] grid-cols-[1fr_auto_48px] items-center gap-4 border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
      style={{ animationDelay: `${740 + index * 45}ms` }}
    >
      <span className="text-sm font-medium text-zinc-300">{label}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            className={[
              "size-1.5 rounded-full",
              index < activeDots
                ? solved === total
                  ? "bg-emerald-400"
                  : "bg-amber-300"
                : "bg-[#232326]",
            ].join(" ")}
            key={index}
          />
        ))}
      </div>
      <span className="text-right font-mono text-xs text-zinc-600">
        {solved}/{total}
      </span>
    </div>
  );
}

function ProblemListPanel({
  accent,
  completedProblemSlugs,
  description,
  problems,
  title,
}: {
  accent: "blue" | "lime";
  completedProblemSlugs: Set<string>;
  description: string;
  problems: ProblemListItem[];
  title: string;
}) {
  const accentClass = accent === "lime" ? "bg-lime-400" : "bg-blue-400";

  return (
    <section className="rounded-2xl border border-white/10 bg-[#141416] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className={`size-2 rounded-full ${accentClass}`} />
            <h3 className="text-base font-bold text-white">{title}</h3>
          </div>
          <p className="mt-2 text-sm font-medium leading-5 text-zinc-500">
            {description}
          </p>
        </div>
        <span className="rounded-lg bg-white/5 px-3 py-1 font-mono text-xs font-bold text-zinc-400">
          {problems.length}
        </span>
      </div>

      <div className="max-h-[560px] overflow-y-auto pr-2">
        <div className="divide-y divide-white/5">
          {problems.map((problem, index) => (
            <ProblemLink
              key={`${problem.category}-${problem.title}`}
              isCompleted={completedProblemSlugs.has(problem.slug)}
              index={index + 1}
              problem={problem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemLink({
  index,
  isCompleted,
  problem,
}: {
  index: number;
  isCompleted: boolean;
  problem: ProblemListItem;
}) {
  const practiceHref = getPracticeHref(problem);

  return (
    <div
      className="grid animate-[row-fade-in_380ms_cubic-bezier(.16,1,.3,1)_both] grid-cols-[40px_1fr_auto] items-center gap-3 py-3 text-sm transition-colors hover:text-white"
      style={{ animationDelay: `${Math.min(index, 20) * 24}ms` }}
    >
      <span className="font-mono text-xs font-bold text-zinc-600">
        {String(index).padStart(3, "0")}
      </span>
      <span className="min-w-0">
        <Link className="block truncate font-semibold text-zinc-200" href={practiceHref}>
          {problem.title}
        </Link>
        <span className="mt-0.5 block truncate text-xs font-medium text-zinc-600">
          {problem.category}
        </span>
      </span>
      <span className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
        {isCompleted ? (
          <span
            aria-label="Completed"
            className="grid size-6 place-items-center rounded-full bg-emerald-400 text-zinc-950"
            title="Completed"
          >
            <CheckIcon />
          </span>
        ) : null}
        <a
          className="rounded-md px-2 py-1 transition-colors hover:bg-white/5 hover:text-white"
          href={problem.url}
          rel="noreferrer"
          target="_blank"
        >
          LC
        </a>
        <a
          className="rounded-md px-2 py-1 transition-colors hover:bg-white/5 hover:text-white"
          href={problem.neetcodeUrl}
          rel="noreferrer"
          target="_blank"
        >
          NC
        </a>
      </span>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-white/10 bg-white/2 px-4 py-8 text-center text-sm font-semibold leading-6 text-zinc-600">
      {message}
    </div>
  );
}

function getDashboardStats(progress: DashboardProgress) {
  const interviews = progress.interviews;
  const completedCount = interviews.length;
  const scoredInterviews = interviews.filter(
    (interview) => typeof interview.overallScore === "number",
  );
  const averageScore = scoredInterviews.length
    ? scoredInterviews.reduce((total, interview) => total + (interview.overallScore ?? 0), 0) /
      scoredInterviews.length
    : null;
  const latestInterview = interviews[0];
  const latestScore = latestInterview?.overallScore ?? null;
  const passingCount = scoredInterviews.filter(
    (interview) => (interview.overallScore ?? 0) >= 70,
  ).length;
  const totalElapsedSeconds = interviews.reduce(
    (total, interview) => total + interview.elapsedSeconds,
    0,
  );

  return {
    averageMinutesDetail: completedCount ? "Across completed interviews" : "No timing yet",
    averageMinutesValue: completedCount
      ? String(Math.max(1, Math.round(totalElapsedSeconds / completedCount / 60)))
      : "0",
    averageScoreLabel: averageScore === null ? "new" : `${formatScore(averageScore)}/10`,
    completedCount,
    completedPercent: clampPercent((completedCount / totalTrackProblems) * 100),
    interviewCount: interviews.length,
    interviewCountDetail: completedCount ? "Completed problems" : "Fresh account",
    lastInterviewDetail: latestInterview?.problemTitle ?? "Complete your first problem",
    lastInterviewLabel: latestInterview
      ? `last interview ${formatRelativeDate(latestInterview.completedAt).toLowerCase()}`
      : "no interviews yet",
    lastInterviewValue: latestInterview
      ? formatRelativeDate(latestInterview.completedAt)
      : "None",
    latestScoreDetail:
      latestScore === null ? "No score yet" : latestScore >= 70 ? "Passing interview" : "Keep practicing",
    latestScoreTone: latestScore === null ? "zinc" : latestScore >= 70 ? "green" : "red",
    latestScoreValue: latestScore === null ? "0.0" : formatScore(latestScore),
    mockInterviewPercent: clampPercent((interviews.length / totalTrackProblems) * 100),
    passRate: scoredInterviews.length
      ? clampPercent((passingCount / scoredInterviews.length) * 100)
      : 0,
  } satisfies {
    averageMinutesDetail: string;
    averageMinutesValue: string;
    averageScoreLabel: string;
    completedCount: number;
    completedPercent: number;
    interviewCount: number;
    interviewCountDetail: string;
    lastInterviewDetail: string;
    lastInterviewLabel: string;
    lastInterviewValue: string;
    latestScoreDetail: string;
    latestScoreTone: "green" | "red" | "zinc";
    latestScoreValue: string;
    mockInterviewPercent: number;
    passRate: number;
  };
}

function clampPercent(percent: number) {
  return Math.min(100, Math.max(0, Math.round(percent)));
}

function getTopicProgress(progress: DashboardProgress) {
  const completedByCategory = progress.interviews.reduce<Record<string, number>>(
    (totals, interview) => {
      const category = interview.category ?? "Other";
      totals[category] = (totals[category] ?? 0) + 1;
      return totals;
    },
    {},
  );
  const totalsByCategory = neetcode150Problems.reduce<Record<string, number>>(
    (totals, problem) => {
      totals[problem.category] = (totals[problem.category] ?? 0) + 1;
      return totals;
    },
    {},
  );

  return Object.entries(totalsByCategory).map(([label, total]) => ({
    label,
    solved: completedByCategory[label] ?? 0,
    total,
  }));
}

function getPracticeHref(problem: ProblemListItem) {
  return `/?problem=${encodeURIComponent(problem.slug)}&title=${encodeURIComponent(problem.title)}&category=${encodeURIComponent(problem.category)}`;
}

function formatScore(score: number | null) {
  return score === null ? "0.0" : (score / 10).toFixed(1);
}

function formatMinutes(seconds: number) {
  const minutes = Math.max(1, Math.round(seconds / 60));
  return `${minutes} min`;
}

function formatRelativeDate(isoDate: string) {
  const timestamp = Date.parse(isoDate);

  if (Number.isNaN(timestamp)) {
    return "Recently";
  }

  const elapsedDays = Math.floor((Date.now() - timestamp) / 86_400_000);

  if (elapsedDays <= 0) {
    return "Today";
  }

  if (elapsedDays === 1) {
    return "Yesterday";
  }

  return `${elapsedDays} days ago`;
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        d="M8 5.75v12.5l10-6.25-10-6.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}
