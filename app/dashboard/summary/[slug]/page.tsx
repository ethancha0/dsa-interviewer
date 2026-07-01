"use client";

import { InterviewSummaryPanel } from "@/components/interview/interview-summary-panel";
import {
  EMPTY_DASHBOARD_PROGRESS,
  loadPersistedDashboardProgress,
} from "@/lib/dashboard-progress";
import {
  buildFallbackSummary,
  loadInterviewSummary,
} from "@/lib/interview-summary-storage";
import type { InterviewSummary } from "@/lib/interview/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function InterviewSummaryPage() {
  const params = useParams<{ slug: string }>();
  const slug = decodeURIComponent(params.slug);
  const [summary, setSummary] = useState<InterviewSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function loadSummary() {
      const storedSummary = await loadInterviewSummary(slug);

      if (storedSummary) {
        if (isActive) {
          setSummary(storedSummary);
          setIsLoading(false);
        }

        return;
      }

      const progress = await loadPersistedDashboardProgress().catch(
        () => EMPTY_DASHBOARD_PROGRESS,
      );
      const record = progress.interviews.find((interview) => interview.problemSlug === slug);

      if (isActive) {
        setSummary(record ? buildFallbackSummary(record) : null);
        setIsLoading(false);
      }
    }

    void loadSummary();

    const retryTimer = window.setTimeout(() => {
      void loadSummary();
    }, 1200);

    return () => {
      isActive = false;
      window.clearTimeout(retryTimer);
    };
  }, [slug]);

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

          <Link
            className="text-sm font-semibold text-zinc-500 transition-colors hover:text-white"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </header>

        <section className="py-8">
          {isLoading ? (
            <p className="text-sm font-medium text-zinc-500">Loading interview summary...</p>
          ) : summary ? (
            <InterviewSummaryPanel summary={summary} />
          ) : (
            <div className="rounded-2xl border border-white/10 bg-[#141416] p-8">
              <h1 className="text-xl font-bold text-white">Summary not found</h1>
              <p className="mt-2 text-sm font-medium text-zinc-500">
                We couldn&apos;t find a saved summary for this problem.
              </p>
              <Link
                className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-bold text-zinc-950"
                href="/dashboard"
              >
                Back to dashboard
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
