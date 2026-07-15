"use client";

import React from "react";

export default function StaticLayout() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* macOS Window Frame (centered vertically from y=73 to y=526) */}
      <div
        className="absolute left-0 right-0 h-[454px] top-[73px] bg-[#e4e4e3] rounded-2xl border border-black/5"
        style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      >
        {/* macOS Window Header Control Dots (y=103 center, diameter 9px) */}
        <div className="absolute left-[69.5px] top-[25.5px] -translate-x-[4.5px] -translate-y-[4.5px] flex items-center gap-[8px]">
          {/* Red Dot (center x=69.5) */}
          <div className="w-[9px] h-[9px] rounded-full bg-[#f08988]" />
          {/* Yellow Dot (center x=82.2, spacing center-to-center = 12.7) */}
          <div className="w-[9px] h-[9px] rounded-full bg-[#f0d882]" />
          {/* Green Dot (center x=94.7, spacing center-to-center = 12.5) */}
          <div className="w-[9px] h-[9px] rounded-full bg-[#8fdea5]" />
        </div>

        {/* Inner Card (x=66 to 733, y=112 to 487 -> absolute relative to frame is top=39px, left=66px) */}
        <div
          className="absolute left-[66px] top-[39px] w-[668px] h-[376px] bg-[#f6f6f6] rounded-xl overflow-hidden noise-overlay flex"
          style={{ border: "1.5px solid rgba(0,0,0,0.02)" }}
        >
          {/* Left Sidebar boundaries: x=66 to 240 (inside card, left=0 to width=174px) */}
          <div className="w-[174px] h-full relative border-r border-black/[0.03]">
            {/* Sidebar Logo: Top padding = 24px (y=136 inside card), Left padding = 37px (x=103) */}
            <div className="absolute left-[37px] top-[24px] w-[18px] h-[30px] flex items-center justify-center">
              {/* Slanted three-pillar Neon brand mark */}
              <svg
                width="18"
                height="30"
                viewBox="0 0 18 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Pillar 1 */}
                <path
                  d="M1 5 L5 25 L8 25 L4 5 Z"
                  fill="#8a8a8a"
                />
                {/* Pillar 2 */}
                <path
                  d="M6 5 L10 25 L13 25 L9 5 Z"
                  fill="#8a8a8a"
                />
                {/* Pillar 3 */}
                <path
                  d="M11 5 L15 25 L18 25 L14 5 Z"
                  fill="#8a8a8a"
                />
              </svg>
            </div>

            {/* Sidebar Divider Line: top=188px (y=301 center, y=300 inside card), left=37px (x=103), width=43px */}
            <div className="absolute left-[37px] top-[188px] w-[43px] h-[2px] bg-[#8a8a8a]" />
          </div>

          {/* Right Panel Header: Hamburger menu icon */}
          {/* Spans x=686 to 705 (inside card, left = 686 - 66 = 620px) */}
          {/* top=23px (y=135 inside card) */}
          <div className="absolute left-[620px] top-[23px] w-[19px] h-[15px] flex flex-col justify-between">
            {/* Hamburger line 1: height 3px */}
            <div className="w-[18px] h-[3px] bg-[#8a8a8a] rounded-sm" />
            {/* Hamburger line 2: height 3px */}
            <div className="w-[19px] h-[3px] bg-[#8a8a8a] rounded-sm" />
            {/* Hamburger line 3: height 2px */}
            <div className="w-[18px] h-[2px] bg-[#8a8a8a] rounded-sm" />
          </div>

          {/* Bottom-Right Content Block */}
          {/* Spans x=610 to 720 (inside card, left = 610 - 66 = 544px) */}
          {/* Divider at y=396 (inside card, top = 396 - 112 = 284px) */}
          {/* Text block from y=411 to 446 (top = 411 - 112 = 299px) */}
          <div className="absolute left-[544px] top-[284px] w-[110px] flex flex-col items-start font-sans">
            {/* Horizontal rule (x=663 inside card is left = 663 - 610 = 53px relative to container) */}
            <div className="absolute left-[53px] top-0 w-[42px] h-[2px] bg-[#8a8a8a]" />

            {/* Text lines */}
            <div className="absolute top-[15px] flex flex-col gap-[10px] text-[9.5px] leading-[1.2] text-[#8a8a8a] font-normal tracking-tight whitespace-nowrap">
              <span className="h-[12px]">Something that&apos;s cool</span>
              <span className="h-[12px]">The thing I was saying</span>
              <span className="h-[12px] flex items-center gap-[4px]">
                <span className="text-[10px] text-[#8a8a8a] leading-none">&#187;</span>
                But it&apos;s actually this one
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
