import { getGoogleSession } from "@/lib/auth/google-session";
import Link from "next/link";

export default async function AuthPage({
  searchParams,
}: {
  searchParams?: Promise<{
    error?: string;
  }>;
}) {
  const [session, resolvedSearchParams] = await Promise.all([
    getGoogleSession(),
    searchParams,
  ]);
  const errorMessage = getAuthErrorMessage(resolvedSearchParams?.error);

  return (
    <main className="min-h-screen bg-[#1f1f1d] px-4 py-5 text-zinc-50 sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-[1120px] flex-col">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link className="flex items-center gap-3" href="/">
            <div className="flex size-7 items-center justify-center rounded-lg bg-black text-[11px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              AI
            </div>
            <span className="text-sm font-semibold sm:text-base">
              DSA Interviewer
            </span>
          </Link>

          <Link
            className="text-sm font-semibold text-zinc-500 transition-colors hover:text-white"
            href="/"
          >
            Back to home
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1fr_440px] lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#262624] px-4 py-1.5 text-[12px] font-semibold text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="size-2 rounded-full bg-lime-500 shadow-[0_0_12px_rgba(132,204,22,0.65)]" />
              Google sign-in only
            </div>

            <h1 className="mt-7 max-w-[620px] text-balance text-[42px] font-bold leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
              Start practicing with your AI interviewer
            </h1>

            <p className="mt-7 max-w-[560px] text-balance text-base font-semibold leading-7 text-zinc-400 sm:text-lg">
              Sign in to save interview sessions, track progress, and continue
              where you left off. For now, access is limited to Google OAuth.
            </p>

            <div className="mt-8 grid max-w-[560px] gap-3 sm:grid-cols-3">
              <AuthBenefit label="Voice interviews" />
              <AuthBenefit label="Screen context" />
              <AuthBenefit label="Session history" />
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-[#111110] p-3 shadow-[0_32px_120px_rgba(0,0,0,0.45)]">
            <div className="rounded-[1.25rem] border border-white/10 bg-[#171717] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                    {session ? "Signed in" : "Welcome back"}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white">
                    {session ? session.name : "Sign in"}
                  </h2>
                </div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-white text-lg font-black text-zinc-950">
                  {session?.name.charAt(0).toUpperCase() ?? "G"}
                </div>
              </div>

              {session ? (
                <>
                  <p className="mt-5 text-sm font-medium leading-6 text-zinc-500">
                    You are signed in with {session.email}. Continue to your dashboard
                    or sign out to switch accounts.
                  </p>

                  <Link
                    className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-4 text-[15px] font-bold text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/70"
                    href="/dashboard"
                  >
                    Go to dashboard
                  </Link>
                  <a
                    className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/10 bg-transparent px-4 text-sm font-bold text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                    href="/api/auth/logout"
                  >
                    Sign out
                  </a>
                </>
              ) : (
                <>
                  <p className="mt-5 text-sm font-medium leading-6 text-zinc-500">
                    Use your Google account to continue. No email/password login is
                    available yet.
                  </p>

                  {errorMessage ? (
                    <p className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-semibold leading-5 text-red-200">
                      {errorMessage}
                    </p>
                  ) : null}

                  <a
                    className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-[15px] font-bold text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/70"
                    href="/api/auth/google"
                  >
                    <GoogleIcon />
                    Continue with Google
                  </a>
                </>
              )}

              <p className="mt-5 text-center text-xs font-medium leading-5 text-zinc-600">
                By continuing, you agree to use DSA Interviewer for interview
                practice and feedback.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function getAuthErrorMessage(error: string | undefined) {
  switch (error) {
    case "missing_google_client_id":
      return "Missing GOOGLE_CLIENT_ID. Add your Google OAuth client ID to .env and restart the dev server.";
    case "missing_google_oauth_credentials":
      return "Missing Google OAuth credentials. Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to .env.";
    case "invalid_google_oauth_state":
      return "The Google sign-in session expired. Please try again.";
    case "google_token_exchange_failed":
      return "Google did not return an access token. Check your OAuth redirect URI configuration.";
    case "google_profile_unavailable":
      return "Google sign-in succeeded, but the profile could not be loaded.";
    case "missing_auth_secret":
      return "Missing AUTH_SECRET. Add a random secret to .env so sessions can be signed.";
    case "database_or_session_setup_failed":
      return "Could not save your user session. Check DATABASE_URL, AUTH_SECRET, and your Supabase schema.";
    default:
      return null;
  }
}

function AuthBenefit({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#151514] px-4 py-3 text-sm font-bold text-zinc-400">
      {label}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24">
      <path
        d="M21.6 12.23c0-.78-.07-1.53-.2-2.23H12v4.22h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.52Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.98-.9 6.64-2.43l-3.24-2.51c-.9.6-2.05.96-3.4.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.41 13.9a6.01 6.01 0 0 1 0-3.8V7.51H3.07a10 10 0 0 0 0 8.98l3.34-2.59Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.98c1.47 0 2.8.51 3.84 1.5l2.87-2.88C16.98 2.99 14.7 2 12 2a10 10 0 0 0-8.93 5.51l3.34 2.59C7.2 7.74 9.4 5.98 12 5.98Z"
        fill="#EA4335"
      />
    </svg>
  );
}
