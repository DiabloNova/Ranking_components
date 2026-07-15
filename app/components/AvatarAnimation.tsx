"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AvatarAnimation() {
  const duration = 5.43; // 181 frames * 30ms = 5430ms

  // Frame to percentage helper: percentage = (frame / 181)
  const f = (frame: number) => frame / 181;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/*
        The Avatar container is positioned exactly at the card coordinate (334, 187.5).
        Since card size is 668x376:
        We place it using absolute positioning so its center is exactly (334, 187.5).
      */}
      <div
        className="absolute w-[50px] h-[50px] -translate-x-[25px] -translate-y-[25px]"
        style={{ left: "334px", top: "187.5px" }}
      >
        {/* State 1: Filled "Neon" Logo Avatar */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#383838] flex items-center justify-center shadow-lg border border-black/5"
          style={{ transformOrigin: "center center" }}
          animate={{
            scale: [
              1,     // Frame 0
              1,     // Frame 4
              1.15,  // Frame 9 (Peak grow/swell)
              0,     // Frame 14 (Collapse to 0)
              0,     // Frame 125 (Stay collapsed)
              1,     // Frame 130 (Grow back to full)
              1,     // Frame 181 (End)
            ],
            opacity: [
              1,     // Frame 0
              1,     // Frame 4
              1,     // Frame 9
              0,     // Frame 14 (Fully invisible)
              0,     // Frame 125 (Invisible)
              1,     // Frame 130 (Visible)
              1,     // Frame 181
            ],
          }}
          transition={{
            duration: duration,
            times: [
              f(0),
              f(4),
              f(9),
              f(14),
              f(125),
              f(130),
              1,
            ],
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {/* Logo "neon" text in white */}
          <span className="text-[12.5px] font-extrabold text-[#f6f6f6] tracking-tight font-sans select-none mb-[2px]">
            neon
          </span>
        </motion.div>

        {/* State 2: Circle Outline "Stats" Avatar */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#8a8a8a] bg-transparent flex items-center justify-center"
          style={{ transformOrigin: "center center" }}
          animate={{
            scale: [
              0,    // Frame 0 (Collapsed)
              0,    // Frame 26 (Start grow)
              1,    // Frame 70 (Reach full size)
              1,    // Frame 120 (Start collapse)
              0,    // Frame 125 (Fully collapsed)
              0,    // Frame 181
            ],
            opacity: [
              0,    // Frame 0
              0,    // Frame 26
              1,    // Frame 70
              1,    // Frame 120
              0,    // Frame 125
              0,    // Frame 181
            ],
          }}
          transition={{
            duration: duration,
            times: [
              f(0),
              f(26),
              f(70),
              f(120),
              f(125),
              1,
            ],
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {/* Text "stats" with separate fade-in */}
          <motion.span
            className="text-[11px] font-extrabold text-[#8a8a8a] tracking-tight font-sans select-none mb-[1px]"
            animate={{
              opacity: [
                0,    // Frame 0
                0,    // Frame 71 (Start text fade in)
                1,    // Frame 84 (Fully visible)
                1,    // Frame 120 (Text remains visible until card collapse)
                1,    // Frame 181
              ],
            }}
            transition={{
              duration: duration,
              times: [
                f(0),
                f(71),
                f(84),
                f(120),
                1,
              ],
              ease: "linear",
              repeat: Infinity,
            }}
          >
            stats
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
