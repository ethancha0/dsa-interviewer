import type { DashboardInterviewRecord } from "@/lib/dashboard-progress";

export const PENDING_INTERVIEW_RECORDS_KEY = "pendingInterviewRecords";

type ChromeStorageLocal = {
  get: (keys: string[]) => Promise<Record<string, unknown>>;
  set: (items: Record<string, unknown>) => Promise<void>;
};

declare const chrome: {
  storage?: {
    local: ChromeStorageLocal;
  };
};

function getChromeStorageLocal() {
  if (typeof chrome === "undefined") {
    return null;
  }

  return chrome.storage?.local ?? null;
}

export async function queuePendingInterviewRecord(record: DashboardInterviewRecord) {
  const storage = getChromeStorageLocal();

  if (!storage) {
    return;
  }

  const stored = await storage.get([PENDING_INTERVIEW_RECORDS_KEY]);
  const pendingRecords = normalizePendingRecords(stored[PENDING_INTERVIEW_RECORDS_KEY]);
  const nextRecords = [
    record,
    ...pendingRecords.filter((entry) => entry.problemSlug !== record.problemSlug),
  ].slice(0, 50);

  await storage.set({
    [PENDING_INTERVIEW_RECORDS_KEY]: nextRecords,
  });
}

export async function syncPendingInterviewRecords(apiOrigin: string) {
  const storage = getChromeStorageLocal();

  if (!storage) {
    return;
  }

  const stored = await storage.get([PENDING_INTERVIEW_RECORDS_KEY]);
  const pendingRecords = normalizePendingRecords(stored[PENDING_INTERVIEW_RECORDS_KEY]);

  if (!pendingRecords.length) {
    return;
  }

  const base = apiOrigin.replace(/\/$/, "");
  const syncedSlugs = new Set<string>();

  for (const record of pendingRecords) {
    const response = await fetch(`${base}/api/dashboard/progress`, {
      body: JSON.stringify(record),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).catch(() => null);

    if (response?.ok) {
      syncedSlugs.add(record.problemSlug);
    }
  }

  if (!syncedSlugs.size) {
    return;
  }

  const remainingRecords = pendingRecords.filter(
    (record) => !syncedSlugs.has(record.problemSlug),
  );

  await storage.set({
    [PENDING_INTERVIEW_RECORDS_KEY]: remainingRecords,
  });
}

function normalizePendingRecords(value: unknown): DashboardInterviewRecord[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((entry) => {
    if (!entry || typeof entry !== "object") {
      return [];
    }

    const record = entry as Partial<DashboardInterviewRecord>;

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
  });
}
