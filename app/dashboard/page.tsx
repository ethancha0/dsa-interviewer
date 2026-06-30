import Link from "next/link";
import {
  blind75Problems,
  neetcode150Problems,
  type ProblemListItem,
} from "./problem-lists";

const historyItems = [
  {
    score: "6.5",
    title: "Longest Repeating Character Replacement",
    meta: "Yesterday - Alex - 19 min",
    tone: "amber",
  },
  {
    score: "9.0",
    title: "Two Sum",
    meta: "3 days ago - Alex - 8 min",
    tone: "green",
  },
  {
    score: "8.5",
    title: "Valid Parentheses",
    meta: "4 days ago - Alex - 11 min",
    tone: "green",
  },
  {
    score: "7.0",
    title: "Binary Search",
    meta: "5 days ago - Alex - 14 min",
    tone: "amber",
  },
  {
    score: "4.0",
    title: "Merge K Sorted Lists",
    meta: "1 week ago - Alex - 32 min",
    tone: "red",
  },
];

const topics = [
  { label: "Arrays & Hashing", solved: 9, total: 9 },
  { label: "Two Pointers", solved: 5, total: 5 },
  { label: "Sliding Window", solved: 3, total: 7 },
  { label: "Trees", solved: 5, total: 15 },
  { label: "Backtracking", solved: 0, total: 9 },
  { label: "Dynamic Programming", solved: 2, total: 11 },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1220px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-4">
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
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                Your interview prep
              </h1>
              <p className="mt-2 text-sm font-medium text-zinc-500">
                94 problems solved - avg score 7.4/10 - last interview yesterday
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
            <ProgressCard color="#2ee66f" label="Total solved" percent={63} value="94/150" />
            <ProgressCard color="#f2c84b" label="Mock-interviewed" percent={55} value="55%" />
            <ProgressCard color="#62a9ff" label="Pass rate (>=7/10)" percent={70} value="70%" />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MiniStat label="Last interviewed" value="Yesterday" detail="Sliding Window" />
            <MiniStat
              label="Interview score"
              value="6.5"
              suffix="/10"
              detail="-1.2 vs your avg"
              tone="red"
            />
            <MiniStat
              label="Total mock interviews"
              value="52"
              detail="+4 this week"
              tone="green"
            />
            <MiniStat
              label="Avg. time to solve"
              value="21"
              suffix="min"
              detail="-3 min faster"
              tone="green"
            />
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_0.95fr]">
            <section className="rounded-2xl border border-white/10 bg-[#141416] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-base font-bold text-white">Interview history</h2>
                <span className="font-mono text-xs text-zinc-600">last 5</span>
              </div>

              <div className="divide-y divide-white/5">
                {historyItems.map((item) => (
                  <HistoryRow key={item.title} {...item} />
                ))}
              </div>
            </section>

            <div className="space-y-5">
              <section className="rounded-2xl border border-white/10 bg-[#141416] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-base font-bold text-white">Topic mastery</h2>
                  <span className="font-mono text-xs text-zinc-600">10 topics</span>
                </div>

                <div className="space-y-4">
                  {topics.map((topic) => (
                    <TopicRow key={topic.label} {...topic} />
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-emerald-500/45 bg-emerald-500/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  Recommended next
                </div>
                <h2 className="text-lg font-bold tracking-[-0.02em] text-white">
                  Backtracking - 0/9 solved
                </h2>
                <p className="mt-2 text-sm font-medium leading-5 text-zinc-500">
                  You have not been interviewed on this topic yet. It shows up
                  in about 12% of FAANG onsite loops.
                </p>
                <Link
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-zinc-950 transition-colors hover:bg-zinc-100"
                  href="/"
                >
                  <PlayIcon />
                  Start Backtracking interview
                </Link>
              </section>
            </div>
          </div>

          <section className="mt-6" id="problem-lists">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-[-0.03em] text-white">
                  Problem lists
                </h2>
                <p className="mt-1 text-sm font-medium text-zinc-500">
                  Browse the canonical prep lists and jump directly to LeetCode.
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
                title="NeetCode 150"
              />
              <ProblemListPanel
                accent="blue"
                description="The original high-leverage Blind 75 interview list."
                problems={blind75Problems}
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
  color,
  label,
  percent,
  value,
}: {
  color: string;
  label: string;
  percent: number;
  value: string;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#141416] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
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
  detail,
  label,
  suffix,
  tone = "zinc",
  value,
}: {
  detail: string;
  label: string;
  suffix?: string;
  tone?: "green" | "red" | "zinc";
  value: string;
}) {
  const detailColor =
    tone === "green" ? "text-emerald-400" : tone === "red" ? "text-red-400" : "text-zinc-500";

  return (
    <section className="rounded-xl border border-white/10 bg-[#141416] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
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
  meta,
  score,
  title,
  tone,
}: {
  meta: string;
  score: string;
  title: string;
  tone: string;
}) {
  const scoreClass =
    tone === "green"
      ? "bg-emerald-500/15 text-emerald-400"
      : tone === "red"
        ? "bg-red-500/15 text-red-400"
        : "bg-amber-500/15 text-amber-300";

  return (
    <article className="grid grid-cols-[40px_1fr_auto] items-center gap-4 py-4">
      <div className={`rounded-lg px-2 py-2 text-center font-mono text-sm font-bold ${scoreClass}`}>
        {score}
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 truncate text-xs font-medium text-zinc-600">{meta}</p>
      </div>
      <Link
        className="hidden text-xs font-semibold text-zinc-500 transition-colors hover:text-white sm:inline"
        href="#"
      >
        Transcript -&gt;
      </Link>
    </article>
  );
}

function TopicRow({
  label,
  solved,
  total,
}: {
  label: string;
  solved: number;
  total: number;
}) {
  const activeDots = Math.round((solved / Math.max(total, 1)) * 5);

  return (
    <div className="grid grid-cols-[1fr_auto_48px] items-center gap-4 border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
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
  description,
  problems,
  title,
}: {
  accent: "blue" | "lime";
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
            <ProblemLink key={`${problem.category}-${problem.title}`} index={index + 1} problem={problem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemLink({
  index,
  problem,
}: {
  index: number;
  problem: ProblemListItem;
}) {
  const practiceHref = `/?problem=${encodeURIComponent(problem.slug)}&title=${encodeURIComponent(problem.title)}&category=${encodeURIComponent(problem.category)}`;

  return (
    <Link
      className="grid grid-cols-[40px_1fr_auto] items-center gap-3 py-3 text-sm transition-colors hover:text-white"
      href={practiceHref}
    >
      <span className="font-mono text-xs font-bold text-zinc-600">
        {String(index).padStart(3, "0")}
      </span>
      <span className="min-w-0">
        <span className="block truncate font-semibold text-zinc-200">
          {problem.title}
        </span>
        <span className="mt-0.5 block truncate text-xs font-medium text-zinc-600">
          {problem.category}
        </span>
      </span>
      <span className="text-xs font-semibold text-zinc-500">Open -&gt;</span>
    </Link>
  );
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
