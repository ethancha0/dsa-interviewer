import * as React from "react";

import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative flex size-12 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-zinc-800 text-zinc-400",
        className,
      )}
      {...props}
    />
  );
}
