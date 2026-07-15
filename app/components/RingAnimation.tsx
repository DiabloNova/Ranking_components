"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RingAnimation() {
  // SVG Circle Circumference Calculations
  const r = 138;
  const strokeWidth = 35;
  const circumference = 2 * Math.PI * r; // ~867.08px
  const arcLength = (144 / 360) * circumference; // ~346.83px
  const gapLength = (36 / 360) * circumference; // ~86.71px

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/*
        The SVG occupies the exact size of the inner card (668x376).
        The geometric center of the ring is at x=400, y=270 on the 800x600 canvas.
        Since the card starts at x=66, y=112:
        Center inside card is: cx = 400 - 66 = 334px, cy = 270 - 112 = 158px.
      */}
      <svg
        width="668"
        height="376"
        viewBox="0 0 668 376"
        className="absolute inset-0"
      >
        <motion.circle
          cx="334"
          cy="158"
          r={r}
          stroke="#e0e0df" // Soft, elegant light gray track
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${arcLength} ${gapLength}`}
          style={{ transformOrigin: "334px 158px" }}
          animate={{
            rotate: [6, 366, 366], // Symmetrical initial offset + 360° rotation
          }}
          transition={{
            duration: 5.43, // 181 frames * 30ms = 5430ms
            times: [0, 0.497, 1], // 2700ms (0 to 2700) is 49.7% of 5430ms
            ease: [
              "easeInOut", // ease-in-out rotation for the first 2.7s
              "linear",    // completely static / wait for the remaining 2.73s
            ],
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
}
