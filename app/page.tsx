import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export default function Home() {
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

              <Button className="h-12 rounded-xl px-7 text-[15px] font-bold">
                <PlayIcon />
                Start interview
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

function DemoWindow() {
  return (
    <Card className="mt-5 w-full overflow-hidden rounded-2xl border-white/15 bg-[#282826] shadow-none">
      <div className="flex h-9 items-center gap-2 border-b border-white/10 px-5">
        <span className="size-3 rounded-full bg-[#ff7b7b]" />
        <span className="size-3 rounded-full bg-[#ffd36b]" />
        <span className="size-3 rounded-full bg-[#a7e079]" />
        <div className="ml-2 flex-1 rounded-md border border-white/10 bg-[#33332f] px-4 py-1 text-left font-mono text-[12px] text-zinc-500">
          dsa-interviewer.vercel.app/interview/two-sum
        </div>
      </div>

      <div className="grid min-h-[325px] lg:grid-cols-[1fr_410px]">
        <div className="p-6 text-left">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-white">Two Sum</h2>
            <div className="flex rounded-full bg-[#111110] p-1 text-[11px] font-bold">
              <span className="rounded-full bg-white px-4 py-1.5 text-black">
                Understand
              </span>
              <span className="px-4 py-1.5 text-zinc-300">Code</span>
              <span className="px-4 py-1.5 text-zinc-600">Optimize</span>
            </div>
          </div>

          <div className="rounded-xl bg-[#1c1c1b] p-4 text-sm font-medium leading-6 text-zinc-100">
            Given an array <InlineCode>nums</InlineCode> and integer{" "}
            <InlineCode>target</InlineCode>, return indices of two numbers that
            add up to <InlineCode>target</InlineCode>. Each input has exactly one
            solution.
          </div>

          <pre className="mt-4 overflow-hidden rounded-xl bg-[#10100f] p-5 text-left font-mono text-sm leading-6 text-zinc-100">
            <code>
              <span className="text-lime-500">
                # Two Sum — hash map approach
              </span>
              {"\n"}
              <span className="text-violet-300">def</span>{" "}
              <span className="text-white">twoSum</span>(nums, target):
              {"\n"}
              {"  "}seen = {"{}"}{" "}
              <span className="text-lime-500"># for i, n in enumerate(nums):</span>
              {"\n"}
              {"  "}diff = target - n{" "}
              <span className="text-lime-500"># diff in seen: return</span>
              {"\n"}
              {"  "}[seen[diff], i] seen[n] = i
            </code>
          </pre>
        </div>

        <aside className="border-t border-white/10 bg-[#10100f] p-6 text-left lg:border-l lg:border-t-0">
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
            “Walk me through what you’re storing in{" "}
            <InlineCode>seen</InlineCode> and why.”
          </blockquote>

          <p className="mt-5 text-sm font-medium italic leading-6 text-zinc-500">
            You: “I’m storing each value I’ve seen so I can check if the
            complement already exists in O(1)...”
          </p>

          <div className="mt-5 flex items-center gap-2 text-xs font-medium text-zinc-500">
            <AudioBars />
            listening...
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

function AudioBars() {
  return (
    <div className="flex h-3 items-center gap-1" aria-label="Listening">
      {[8, 11, 6, 12, 9].map((height, index) => (
        <span
          key={index}
          className="w-1 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.3)]"
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
