import type { DashboardInterviewRecord } from "@/lib/dashboard-progress";
import type { InterviewSummary } from "@/lib/interview/types";

export const INTERVIEW_SUMMARIES_STORAGE_KEY = "dsa_interviewer_interview_summaries_v1";
export const CHROME_INTERVIEW_SUMMARIES_KEY = "interviewSummaries";

type SummaryMap = Record<string, InterviewSummary>;

type ChromeStorageLocal = {
  get: (keys: string[]) => Promise<Record<string, unknown>>;
  set: (items: Record<string, unknown>) => Promise<void>;
};

declare const chrome: {
  storage?: {
    local: ChromeStorageLocal;
  };
};

export function getInterviewSummaryPath(slug: string) {
  return `/dashboard/summary/${encodeURIComponent(slug)}`;
}

export function loadLocalInterviewSummaries() {
  if (typeof window === "undefined") {
    return {} satisfies SummaryMap;
  }

  const stored = window.localStorage.getItem(INTERVIEW_SUMMARIES_STORAGE_KEY);

  if (!stored) {
    return {} satisfies SummaryMap;
  }

  try {
    return normalizeSummaryMap(JSON.parse(stored));
  } catch {
    return {} satisfies SummaryMap;
  }
}

export function loadLocalInterviewSummary(slug: string) {
  return loadLocalInterviewSummaries()[slug] ?? null;
}

export function saveLocalInterviewSummary(slug: string, summary: InterviewSummary) {
  if (typeof window === "undefined") {
    return;
  }

  const nextSummaries = {
    ...loadLocalInterviewSummaries(),
    [slug]: summary,
  };

  window.localStorage.setItem(
    INTERVIEW_SUMMARIES_STORAGE_KEY,
    JSON.stringify(nextSummaries),
  );
}

export async function saveInterviewSummary(slug: string, summary: InterviewSummary) {
  saveLocalInterviewSummary(slug, summary);
  await saveChromeInterviewSummary(slug, summary);
}

export async function loadInterviewSummary(slug: string) {
  const localSummary = loadLocalInterviewSummary(slug);

  if (localSummary) {
    return localSummary;
  }

  return loadChromeInterviewSummary(slug);
}

export function buildFallbackSummary(record: DashboardInterviewRecord): InterviewSummary {
  return {
    areasToImprove: [],
    breakdown: [],
    elapsedSeconds: record.elapsedSeconds,
    exchangeCount: 0,
    finalComplexity: null,
    hintsUsed: 0,
    overallScore: record.overallScore,
    problemTitle: record.problemTitle,
    transcript: [],
    verdict: record.verdict,
    wentWell: [],
  };
}

async function saveChromeInterviewSummary(slug: string, summary: InterviewSummary) {
  const storage = getChromeStorageLocal();

  if (!storage) {
    return;
  }

  const stored = await storage.get([CHROME_INTERVIEW_SUMMARIES_KEY]);
  const summaries = normalizeSummaryMap(stored[CHROME_INTERVIEW_SUMMARIES_KEY]);

  await storage.set({
    [CHROME_INTERVIEW_SUMMARIES_KEY]: {
      ...summaries,
      [slug]: summary,
    },
  });
}

async function loadChromeInterviewSummary(slug: string) {
  const storage = getChromeStorageLocal();

  if (!storage) {
    return null;
  }

  const stored = await storage.get([CHROME_INTERVIEW_SUMMARIES_KEY]);
  const summaries = normalizeSummaryMap(stored[CHROME_INTERVIEW_SUMMARIES_KEY]);

  return summaries[slug] ?? null;
}

function getChromeStorageLocal() {
  if (typeof chrome === "undefined") {
    return null;
  }

  return chrome.storage?.local ?? null;
}

function normalizeSummaryMap(value: unknown): SummaryMap {
  if (!value || typeof value !== "object") {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).flatMap(([slug, summary]) => {
      if (!slug || !summary || typeof summary !== "object") {
        return [];
      }

      const parsed = summary as Partial<InterviewSummary>;

      if (typeof parsed.problemTitle !== "string" || typeof parsed.verdict !== "string") {
        return [];
      }

      return [
        [
          slug,
          {
            areasToImprove: Array.isArray(parsed.areasToImprove)
              ? parsed.areasToImprove.filter((item): item is string => typeof item === "string")
              : [],
            breakdown: Array.isArray(parsed.breakdown)
              ? parsed.breakdown.flatMap((item) => {
                  if (!item || typeof item !== "object") {
                    return [];
                  }

                  const entry = item as { label?: unknown; score?: unknown };

                  if (typeof entry.label !== "string") {
                    return [];
                  }

                  return [
                    {
                      label: entry.label,
                      score: typeof entry.score === "number" ? entry.score : null,
                    },
                  ];
                })
              : [],
            elapsedSeconds:
              typeof parsed.elapsedSeconds === "number" ? parsed.elapsedSeconds : 0,
            exchangeCount:
              typeof parsed.exchangeCount === "number" ? parsed.exchangeCount : 0,
            finalComplexity:
              typeof parsed.finalComplexity === "string" ? parsed.finalComplexity : null,
            hintsUsed: typeof parsed.hintsUsed === "number" ? parsed.hintsUsed : 0,
            overallScore:
              typeof parsed.overallScore === "number" ? parsed.overallScore : null,
            problemTitle: parsed.problemTitle,
            transcript: Array.isArray(parsed.transcript)
              ? parsed.transcript.flatMap((line) => {
                  if (!line || typeof line !== "object") {
                    return [];
                  }

                  const entry = line as { speaker?: unknown; text?: unknown };

                  if (
                    (entry.speaker !== "Alex" && entry.speaker !== "You") ||
                    typeof entry.text !== "string"
                  ) {
                    return [];
                  }

                  return [{ speaker: entry.speaker, text: entry.text }];
                })
              : [],
            verdict: parsed.verdict,
            wentWell: Array.isArray(parsed.wentWell)
              ? parsed.wentWell.filter((item): item is string => typeof item === "string")
              : [],
          } satisfies InterviewSummary,
        ],
      ];
    }),
  );
}
