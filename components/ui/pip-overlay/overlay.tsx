import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Overlay(){

    return(
        <main className="min-h-screen bg-[#151515] text-zinc-50">
        <section className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_center,#242424_0,#151515_55%,#080808_100%)] p-4">
          <div className="w-[352px] rounded-[1.45rem] border border-white/10 bg-[#171717] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
            <div className="mb-3 flex items-center gap-3 px-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Pip Overlay
              </span>
              <span className="rounded-full bg-blue-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-300">
                Floats on Leetcode
              </span>
            </div>
  
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-12">
                      <AvatarFallback>
                        <UserIcon />
                      </AvatarFallback>
                    </Avatar>
  
                    <div>
                      <h1 className="text-base font-bold leading-tight text-white">
                        Alex — Interviewer
                      </h1>
                      <p className="mt-0.5 text-sm font-semibold text-zinc-500">
                        Speaking...
                      </p>
                    </div>
                  </div>
  
                  <time className="pt-2 text-base font-bold text-zinc-400">
                    32:14
                  </time>
                </div>
  
                <AudioBars />
  
                <blockquote className="mt-4 rounded-xl bg-[#202020] px-4 py-3 text-[15px] font-semibold leading-6 text-zinc-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  “I can see you’re iterating through the array. Can you walk me
                  through what you’re storing in that dictionary and why?”
                </blockquote>
  
                <p className="mt-4 text-[14px] font-medium italic leading-6 text-zinc-500">
                  You: “I&apos;m using a hash map to store values I&apos;ve already seen
                  so I can look up the complement in O(1)...”
                </p>
  
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button variant="secondary">
                    <BulbIcon />
                    Hint
                  </Button>
                  <Button>
                    <StopIcon />
                    End
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    );
  }
  
  function AudioBars() {
    const bars = [10, 10, 10, 10, 10, 10, 10, 10];
  
    return (
      <div className="mt-6 flex h-3 items-center gap-1" aria-label="Speaking">
        {bars.map((height, index) => (
          <span
            className="w-1 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.25)]"
            style={{ height }}
            key={index}
          />
        ))}
      </div>
    );
  }
  
  function UserIcon() {
    return (
      <svg
        aria-hidden="true"
        className="size-6"
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
  
  function BulbIcon() {
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
          d="M9 18h6M10 21h4M8.25 14.25c-1.05-.96-1.75-2.3-1.75-3.75a5.5 5.5 0 1 1 11 0c0 1.45-.7 2.79-1.75 3.75-.61.56-.75.98-.75 1.75H9c0-.77-.14-1.19-.75-1.75ZM12 3v1.5M4.93 5.93l1.06 1.06M19.07 5.93l-1.06 1.06"
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




    )


}