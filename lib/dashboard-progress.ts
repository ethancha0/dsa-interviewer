import { queuePendingInterviewRecord } from "@/lib/extension-progress-sync";

export type DashboardInterviewRecord = {
  category?: string;
  completedAt: string;
  elapsedSeconds: number;
  overallScore: number | null;
  problemSlug: string;
  problemTitle: string;
  verdict: string;
};

export type DashboardProgress = {
  interviews: DashboardInterviewRecord[];
};

export const DASHBOARD_PROGRESS_STORAGE_KEY = "dsa_interviewer_dashboard_progress_v1";

export const EMPTY_DASHBOARD_PROGRESS: DashboardProgress = {
  interviews: [],
};

export function loadDashboardProgress() {
  if (typeof window === "undefined") {
    return EMPTY_DASHBOARD_PROGRESS;
  }

  const storedProgress = window.localStorage.getItem(DASHBOARD_PROGRESS_STORAGE_KEY);

  if (!storedProgress) {
    return EMPTY_DASHBOARD_PROGRESS;
  }

  try {
    return normalizeDashboardProgress(JSON.parse(storedProgress));
  } catch {
    return EMPTY_DASHBOARD_PROGRESS;
  }
}

export async function loadPersistedDashboardProgress() {
  if (typeof window === "undefined") {
    return EMPTY_DASHBOARD_PROGRESS;
  }

  const response = await fetch("/api/dashboard/progress", {
    credentials: "same-origin",
  }).catch(() => null);

  if (response?.ok) {
    return normalizeDashboardProgress(await response.json().catch(() => null));
  }

  return loadDashboardProgress();
}

export function saveLocalDashboardProgress(record: DashboardInterviewRecord) {
  if (typeof window === "undefined") {
    return;
  }

  const currentProgress = loadDashboardProgress();
  const nextInterviews = [
    record,
    ...currentProgress.interviews.filter(
      (interview) => interview.problemSlug !== record.problemSlug,
    ),
  ].slice(0, 50);

  window.localStorage.setItem(
    DASHBOARD_PROGRESS_STORAGE_KEY,
    JSON.stringify({ interviews: nextInterviews }),
  );
}

export async function recordCompletedInterview(
  record: DashboardInterviewRecord,
  apiBase = "",
) {
  await queuePendingInterviewRecord(record).catch(() => null);

  if (!apiBase) {
    saveLocalDashboardProgress(record);
  }

  if (typeof window === "undefined") {
    return;
  }

  const base = apiBase.replace(/\/$/, "");

  await fetch(`${base || ""}/api/dashboard/progress`, {
    body: JSON.stringify(record),
    credentials: apiBase ? "include" : "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).catch(() => null);
}

function normalizeDashboardProgress(progress: unknown): DashboardProgress {
  if (!progress || typeof progress !== "object" || !("interviews" in progress)) {
    return EMPTY_DASHBOARD_PROGRESS;
  }

  const interviews = (progress as { interviews: unknown }).interviews;

  if (!Array.isArray(interviews)) {
    return EMPTY_DASHBOARD_PROGRESS;
  }

  return {
    interviews: interviews.flatMap((interview) => {
      if (!interview || typeof interview !== "object") {
        return [];
      }

      const record = interview as Partial<DashboardInterviewRecord>;

      if (!record.problemSlug || !record.problemTitle || !record.completedAt) {
        return [];
      }

      return [
        {
          category: typeof record.category === "string" ? record.category : undefined,
          completedAt: record.completedAt,
          elapsedSeconds:
            typeof record.elapsedSeconds === "number" ? record.elapsedSeconds : 0,
          overallScore:
            typeof record.overallScore === "number" ? record.overallScore : null,
          problemSlug: record.problemSlug,
          problemTitle: record.problemTitle,
          verdict: typeof record.verdict === "string" ? record.verdict : "Completed",
        },
      ];
    }),
  };
}
