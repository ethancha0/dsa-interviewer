document.documentElement.dataset.dsaInterviewerExtension = "1";

const PRACTICE_HOSTS = new Set(["leetcode.com", "neetcode.io", "www.neetcode.io"]);
const INTERVIEW_SUMMARIES_STORAGE_KEY = "dsa_interviewer_interview_summaries_v1";

if (!PRACTICE_HOSTS.has(location.hostname)) {
  void chrome.storage.local.set({ appOrigin: location.origin });
  void syncPendingInterviewRecords();
  void syncInterviewSummaries();
}

async function syncPendingInterviewRecords() {
  const stored = await chrome.storage.local.get(["pendingInterviewRecords"]);
  const pendingRecords = Array.isArray(stored.pendingInterviewRecords)
    ? stored.pendingInterviewRecords
    : [];

  if (!pendingRecords.length) {
    return;
  }

  const syncedSlugs = new Set();

  for (const record of pendingRecords) {
    if (!record?.problemSlug || !record?.problemTitle || !record?.completedAt) {
      continue;
    }

    const response = await fetch(`${location.origin}/api/dashboard/progress`, {
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

  await chrome.storage.local.set({
    pendingInterviewRecords: remainingRecords,
  });
}

async function syncInterviewSummaries() {
  const stored = await chrome.storage.local.get(["interviewSummaries"]);
  const summaries = stored.interviewSummaries;

  if (!summaries || typeof summaries !== "object") {
    return;
  }

  let localSummaries = {};

  try {
    localSummaries = JSON.parse(
      localStorage.getItem(INTERVIEW_SUMMARIES_STORAGE_KEY) ?? "{}",
    );
  } catch {
    localSummaries = {};
  }

  localStorage.setItem(
    INTERVIEW_SUMMARIES_STORAGE_KEY,
    JSON.stringify({
      ...localSummaries,
      ...summaries,
    }),
  );
}
