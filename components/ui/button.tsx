import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary";

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-white text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] hover:bg-zinc-100",
  secondary:
    "border border-white/10 bg-zinc-900/95 text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-zinc-800",
};

export function Button({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
}) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/70 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
