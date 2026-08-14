"use client";

import { useEffect, useRef } from "react";

interface CursorSpotlightProps {
  size?: number;
  opacity?: number;
}

export function CursorSpotlight({
  size = 600,
  opacity = 0.09,
}: CursorSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;

    if (!spotlight) return;

    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (coarsePointer.matches || reducedMotion.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (frameRef.current !== null) return;

      frameRef.current = requestAnimationFrame(() => {
        spotlight.style.background = `
          radial-gradient(
            ${size}px circle at ${event.clientX}px ${event.clientY}px,
            rgba(96, 165, 250, ${opacity}),
            rgba(56, 189, 248, ${opacity * 0.3}) 35%,
            transparent 75%
          )
        `;

        frameRef.current = null;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [size, opacity]);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-30
        hidden
        lg:block
      "
    />
  );
}
