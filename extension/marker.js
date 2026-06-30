document.documentElement.dataset.dsaInterviewerExtension = "1";

if (location.hostname !== "leetcode.com") {
  void chrome.storage.local.set({ appOrigin: location.origin });
}
