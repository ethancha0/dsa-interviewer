# DSA Interviewer

A Next.js prototype for practicing data structures and algorithms interviews with a voice-first AI interviewer. The current experience focuses on LeetCode Two Sum: it opens the problem in an embedded practice workspace, shows a draggable picture-in-picture interviewer overlay, listens through the browser microphone, responds with OpenAI Realtime audio, and generates an end-of-session debrief from the captured transcript.

## Features

- **Voice interview flow**: Start a live interview, speak your approach out loud, and hear short follow-up questions from Alex, the AI interviewer.
- **OpenAI Realtime integration**: The browser creates a WebRTC connection using a short-lived client secret minted by the app's server route.
- **Draggable PiP overlay**: The interviewer card floats above the practice workspace with mic state, elapsed time, hints, transcript preview, and end controls.
- **Two Sum practice workspace**: The app embeds the Two Sum problem page so the candidate can practice in a realistic environment.
- **Hint requests**: Ask for a small nudge without revealing the full solution.
- **Session debrief**: End the interview to see a verdict, score breakdown, elapsed time, hints used, transcript, strengths, and areas to improve.
- **Marketing demo**: The landing page includes a product demo area and feature cards for the intended user experience.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) and Responses API

## Project Structure

```text
app/
  api/
    interview/route.ts          # Transcript-based OpenAI Responses helper endpoint
    realtime/session/route.ts   # Server route that mints Realtime client secrets
  globals.css                   # Tailwind import, theme variables, animation keyframes
  layout.tsx                    # Root layout and metadata
  page.tsx                      # Landing page, practice workspace, Realtime session logic
components/
  ui/
    avatar.tsx
    button.tsx
    card.tsx
    pip-overlay/overlay.tsx     # Floating interviewer overlay component
lib/
  utils.ts                      # Shared class name helper
```

## Prerequisites

- Node.js 20 or newer
- pnpm
- An OpenAI API key with access to the Realtime API
- A modern browser with microphone and WebRTC support

The browser will ask for microphone permission when the interview starts. Realtime audio usually requires `localhost` or HTTPS, so local development should work from `http://localhost:3000`.

## Environment Variables

Create a local `.env` file in the project root:

```bash
OPENAI_API_KEY=sk-your-openai-api-key
```

Optional model and voice overrides:

```bash
OPENAI_REALTIME_MODEL=gpt-realtime-2
OPENAI_REALTIME_TRANSCRIPTION_MODEL=gpt-4o-mini-transcribe
OPENAI_REALTIME_VOICE=marin
OPENAI_MODEL=gpt-4.1-mini
```

Variable reference:

- `OPENAI_API_KEY` is required by both API routes. The server normalizes keys with or without a `Bearer ` prefix.
- `OPENAI_REALTIME_MODEL` controls the voice interview model used by `app/api/realtime/session/route.ts`.
- `OPENAI_REALTIME_TRANSCRIPTION_MODEL` controls input audio transcription for the Realtime session.
- `OPENAI_REALTIME_VOICE` controls the generated interviewer voice.
- `OPENAI_MODEL` controls the text-only Responses endpoint in `app/api/interview/route.ts`.

Do not commit `.env` files. They are ignored by `.gitignore`.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Click **Try Two Sum now** or **Start interview**, allow microphone access, and wait for Alex to greet you.

## Available Scripts

```bash
pnpm dev
```

Runs the app locally with Next.js.

```bash
pnpm build
```

Creates a production build.

```bash
pnpm start
```

Starts the production server after a successful build.

```bash
pnpm lint
```

Runs ESLint.

## How The Interview Flow Works

1. The user starts the Two Sum practice session from the landing page.
2. `PracticeWorkspace` renders the embedded LeetCode page and the draggable overlay.
3. Starting the interview asks the browser for microphone access.
4. The client calls `POST /api/realtime/session`.
5. The server uses `OPENAI_API_KEY` to create a short-lived Realtime client secret.
6. The browser creates a WebRTC offer and sends it to OpenAI's Realtime calls endpoint with that client secret.
7. Realtime events stream back over a data channel and update transcript text, interviewer status, audio state, and spoken responses.
8. When the interview ends, the app builds a local summary from the captured transcript, hints used, elapsed time, and Two Sum answer signals.

## API Routes

### `POST /api/realtime/session`

Creates an OpenAI Realtime client secret for the browser. This route keeps the long-lived OpenAI API key on the server and configures the interviewer instructions, voice, transcription model, and server-side voice activity detection.

### `POST /api/interview`

Accepts a JSON body with a `transcript` field and returns a short text response from the configured OpenAI Responses model.

Example:

```bash
curl -X POST http://localhost:3000/api/interview \
  -H "Content-Type: application/json" \
  -d '{"transcript":"I would use a hash map to store values and look up the complement."}'
```

## Current Limitations

- The live practice flow is hard-coded to LeetCode Two Sum.
- Screen understanding is represented in the product UI, but the current implementation does not inspect the candidate's code or browser screen.
- The final debrief is generated locally from transcript heuristics rather than a full evaluator model.
- The embedded LeetCode page depends on LeetCode allowing the page to load in an iframe.
- The landing page references `/two-sum-demo.mov`; add that file to `public/` if you want the demo video to render.
- There is no persistence; refreshing the page clears the current session.

## Deployment Notes

This app can be deployed anywhere that supports Next.js server routes. Set `OPENAI_API_KEY` and any optional model overrides in the hosting provider's environment settings. Use HTTPS in production so browser microphone and WebRTC APIs work reliably.
