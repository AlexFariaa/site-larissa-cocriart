"use client";

import { useScroll, useSpring, m, LazyMotion, domAnimation } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(to right, #c56428, #d29ee1)",
        }}
      />
    </LazyMotion>
  );
}
