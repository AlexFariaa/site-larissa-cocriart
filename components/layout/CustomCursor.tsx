"use client";

import { useEffect, useState } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Raw mouse position MotionValues — always called at top level
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot follows instantly — offset by half its 6px size to centre on cursor
  const dotX = useTransform(mouseX, (v) => v - 3);
  const dotY = useTransform(mouseY, (v) => v - 3);

  // Ring springs behind — offset by half its 30px size
  const springX = useSpring(mouseX, { damping: 32, stiffness: 180 });
  const springY = useSpring(mouseY, { damping: 32, stiffness: 180 });
  const ringX = useTransform(springX, (v) => v - 15);
  const ringY = useTransform(springY, (v) => v - 15);

  useEffect(() => {
    // Only enable on fine-pointer devices (mouse / trackpad), not touch screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setMounted(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setHovering(!!el.closest("a, button, [role='button']"));
    };

    // Restore native cursor when keyboard navigation (Tab) is used — accessibility
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.documentElement.classList.remove("custom-cursor-active");
      }
    };

    const onMouseMove = () => {
      document.documentElement.classList.add("custom-cursor-active");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <LazyMotion features={domAnimation} strict>
      {/* Main dot — instant follow */}
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-white"
        style={{ x: dotX, y: dotY }}
      />

      {/* Follower ring — spring lag, expands + changes colour on hover */}
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[30px] w-[30px] rounded-full border-2"
        initial={{
          scale: 1,
          borderColor: "#d29ee1",
          boxShadow: "0 0 10px 2px rgba(210,158,225,0.35)",
        }}
        animate={{
          scale: hovering ? 1.45 : 1,
          borderColor: hovering ? "#c56428" : "#d29ee1",
          boxShadow: hovering
            ? "0 0 16px 4px rgba(197,100,40,0.45)"
            : "0 0 10px 2px rgba(210,158,225,0.35)",
        }}
        transition={{ duration: 0.18 }}
        style={{ x: ringX, y: ringY }}
      />
    </LazyMotion>
  );
}
