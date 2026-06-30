import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MuiMicIcon from "@mui/icons-material/Mic";
import MuiMicOffIcon from "@mui/icons-material/MicOff";
import { useEffect, useState } from "react";

type OverlayProps = {
  audioLevel?: number;
  elapsedTime?: string;
  hasStarted?: boolean;
  interviewerResponse?: string;
  interviewerStatus?: string;
  isListening?: boolean;
  isMuted?: boolean;
  onClose?: () => void;
  onEnd?: () => void;
  onRequestHint?: () => void;
  onStartInterview?: () => void;
  onStartListening?: () => void;
  onStopListening?: () => void;
  onToggleMute?: () => void;
  transcript?: string;
  transcriptStatus?: string;
};

export default function Overlay({
  audioLevel = 0,
  elapsedTime,
  hasStarted = false,
  interviewerResponse = "",
  interviewerStatus = "Ready",
  isListening = false,
  isMuted = false,
  onClose,
  onEnd,
  onRequestHint,
  onStartInterview,
  onStartListening,
  onStopListening,
  onToggleMute,
  transcript,
  transcriptStatus = "Mic off",
}: OverlayProps) {
    const localElapsedTime = useElapsedTime();
    const displayElapsedTime = elapsedTime ?? localElapsedTime;
    const displayInterviewerResponse =
      interviewerResponse || getInterviewerPlaceholder(interviewerStatus);

    return (
          <div className="w-[352px] rounded-[1.45rem] border border-white/10 bg-[#171717] p-3 text-zinc-50 shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
            <div className="mb-3 flex items-center gap-3 px-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Pip Overlay
              </span>
              <span className="rounded-full bg-blue-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-300">
                Floats on Leetcode
              </span>
            </div>
  
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-12">
                      <AvatarFallback>
                        <UserIcon />
                      </AvatarFallback>
                    </Avatar>
  
                    <div>
                      <h1 className="text-base font-bold leading-tight text-white">
                        Alex — Interviewer
                      </h1>
                      <p className="mt-0.5 text-sm font-semibold text-zinc-500">
                        {interviewerStatus}
                      </p>
                    </div>
                  </div>
  
                  <time className="pt-2 text-base font-bold text-zinc-400">
                    {displayElapsedTime}
                  </time>
                </div>
  
                {hasStarted ? (
                  <div className="mt-6 flex items-center justify-between gap-3 animate-[interviewer-overlay-enter_420ms_cubic-bezier(.16,1,.3,1)_both]">
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                      <AudioBars isActive={isListening && !isMuted} level={audioLevel} />
                      {transcriptStatus}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        className="size-8 rounded-lg border-white/25 bg-[#2a2a28] p-0 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-[#343431]"
                        disabled={!isListening}
                        aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
                        title={isMuted ? "Unmute microphone" : "Mute microphone"}
                        onClick={onToggleMute}
                      >
                        {isMuted ? <MicOffIcon /> : <MicIcon />}
                      </Button>
                      <Button
                        variant="secondary"
                        className="h-8 rounded-lg px-3 text-xs"
                        onClick={isListening ? onStopListening : onStartListening}
                      >
                        {isListening ? "Stop mic" : "Start mic"}
                      </Button>
                    </div>
                  </div>
                ) : null}
  
                <blockquote className="mt-4 rounded-xl bg-[#202020] px-4 py-3 text-[15px] font-semibold leading-6 text-zinc-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  “{displayInterviewerResponse}”
                </blockquote>
  
                {hasStarted ? (
                  <>
                    <p className="mt-4 animate-[interviewer-overlay-enter_420ms_cubic-bezier(.16,1,.3,1)_80ms_both] text-[14px] font-medium italic leading-6 text-zinc-500">
                      You: “{transcript || "Start answering out loud."}”
                    </p>
    
                    <div className="mt-4 grid grid-cols-2 gap-3 animate-[interviewer-overlay-enter_420ms_cubic-bezier(.16,1,.3,1)_140ms_both]">
                      <Button variant="secondary" onClick={onRequestHint}>
                        <BulbIcon />
                        Hint
                      </Button>
                      <Button onClick={onEnd ?? onClose}>
                        <StopIcon />
                        End
                      </Button>
                    </div>
                  </>
                ) : (
                  <Button className="mt-6 h-11 w-full rounded-xl text-sm font-bold" onClick={onStartInterview}>
                    <MicIcon className="size-5 text-zinc-950" />
                    Start interview
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
    );
  }

  function getInterviewerPlaceholder(status: string) {
    if (/connecting|thinking/i.test(status)) {
      return "Alex is getting ready to respond...";
    }

    return "Start the interview when you're ready for Alex's first prompt.";
  }
  
  function useElapsedTime() {
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setElapsedSeconds((seconds) => seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  
  function AudioBars({
    isActive,
    level,
  }: {
    isActive: boolean;
    level: number;
  }) {
    const bars = [5, 7, 9, 11, 12, 10, 8, 6];
    const activeBars = isActive
      ? Math.min(bars.length, Math.max(1, Math.ceil(level * bars.length)))
      : 0;
  
    return (
      <div className="flex h-3 items-center gap-1" aria-label="Speaking">
        {bars.map((height, index) => (
          <span
            className={[
              "w-1 rounded-full shadow-[0_0_10px_rgba(132,204,22,0.25)]",
              index < activeBars ? "bg-lime-500" : "bg-zinc-700",
            ].join(" ")}
            style={{ height }}
            key={index}
          />
        ))}
      </div>
    );
  }
  
  function UserIcon() {
    return (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
        />
      </svg>
    );
  }
  
  function MicIcon({ className = "size-5 text-white" }: { className?: string }) {
    return <MuiMicIcon aria-hidden="true" className={className} />;
  }

  function MicOffIcon() {
    return <MuiMicOffIcon aria-hidden="true" className="size-5 text-white" />;
  }

  function BulbIcon() {
    return (
      <svg
        aria-hidden="true"
        className="size-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 18h6M10 21h4M8.25 14.25c-1.05-.96-1.75-2.3-1.75-3.75a5.5 5.5 0 1 1 11 0c0 1.45-.7 2.79-1.75 3.75-.61.56-.75.98-.75 1.75H9c0-.77-.14-1.19-.75-1.75ZM12 3v1.5M4.93 5.93l1.06 1.06M19.07 5.93l-1.06 1.06"
        />
      </svg>
    );
  }
  
  function StopIcon() {
    return (
      <svg
        aria-hidden="true"
        className="size-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>




    )


}
