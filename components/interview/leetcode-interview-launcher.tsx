"use client";

import { Button } from "@/components/ui/button";
import {
  hasInterviewerExtensionInstalled,
  launchInterviewOnLeetCode,
} from "@/lib/interview/leetcode-launch";
import type { PracticeProblem } from "@/lib/interview/types";
import { useEffect, useState } from "react";

export function LeetCodeInterviewLauncher({
  onCancel,
  problem,
}: {
  onCancel: () => void;
  problem: PracticeProblem;
}) {
  const [extensionInstalled, setExtensionInstalled] = useState(false);

  useEffect(() => {
    setExtensionInstalled(hasInterviewerExtensionInstalled());
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1d1b]/95 px-4 py-8 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[1.6rem] border border-white/10 bg-[#111110] p-8 shadow-[0_32px_120px_rgba(0,0,0,0.55)]">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
          LeetCode interview
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white">
          {problem.title}
        </h2>
        <p className="mt-4 text-sm font-medium leading-7 text-zinc-400">
          With the extension installed, the interviewer overlay appears automatically on
          any LeetCode problem page. Open this problem on LeetCode to start, or browse
          there directly.
        </p>

        {extensionInstalled ? (
          <p className="mt-4 rounded-xl border border-lime-400/20 bg-lime-400/10 px-4 py-3 text-sm font-semibold text-lime-200">
            Extension detected. The overlay will appear when you open this problem on
            LeetCode.
          </p>
        ) : (
          <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm leading-6 text-amber-100">
            <p className="font-semibold">Install the extension first</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 font-medium">
              <li>Run <code className="text-amber-50">pnpm build:extension</code></li>
              <li>Open <code className="text-amber-50">chrome://extensions</code></li>
              <li>Enable Developer mode → Load unpacked → select the <code className="text-amber-50">extension/</code> folder</li>
            </ol>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            className="h-11 rounded-xl bg-lime-400 px-5 text-sm font-bold text-zinc-950 hover:bg-lime-300"
            onClick={() => launchInterviewOnLeetCode(problem)}
          >
            Continue on LeetCode
          </Button>
          <Button
            className="h-11 rounded-xl border-white/10 bg-transparent px-5 text-sm font-bold text-zinc-300 hover:bg-white/5"
            onClick={onCancel}
            variant="secondary"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
