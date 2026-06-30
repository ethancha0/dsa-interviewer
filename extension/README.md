# DSA Interviewer browser extension

This extension injects the interviewer overlay **directly onto LeetCode pages** (no iframe). You stay on `leetcode.com`, sign in normally, and the overlay floats over the problem editor.

## Build

From the project root:

```bash
pnpm build:extension
```

This outputs `extension/dist/content.js`.

## Install in Chrome

1. Run `pnpm build:extension`
2. Open `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the `extension/` folder

## Use

1. Visit the DSA Interviewer app once so the extension learns your app URL (e.g. `http://localhost:3000`)
2. Open any problem on [leetcode.com/problems/...](https://leetcode.com/problemset/)
3. The interviewer overlay appears automatically in the bottom-left corner
4. Sign in on LeetCode if needed, then click **Start interview**

Starting a problem from the DSA Interviewer dashboard still works — it opens LeetCode and passes richer problem metadata when available.

## How it works

- The web app cannot inject UI onto `leetcode.com` by itself (browser same-origin rules).
- The extension runs a content script on LeetCode that mounts a React overlay into the page DOM.
- Voice/API calls go to your DSA Interviewer app (`localhost:3000` in dev).
