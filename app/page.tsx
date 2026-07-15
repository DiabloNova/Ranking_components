"use client";

import React from "react";
import CanvasWrapper from "./components/CanvasWrapper";
import StaticLayout from "./components/StaticLayout";
import RingAnimation from "./components/RingAnimation";
import AvatarAnimation from "./components/AvatarAnimation";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-[#e5e5e4] flex items-center justify-center">
      <CanvasWrapper>
        {/* Underlay canvas structure */}
        <div className="absolute inset-0 bg-[#e5e5e4]" />

        {/* Dynamic & interactive visual components */}
        <StaticLayout />

        {/* Since the static layout sets the card overflow hidden, we render the ring and avatar inside its spatial context */}
        {/* The card spans x=66 to 733, y=112 to 487 -> top=112px, left=66px, width=668px, height=376px */}
        <div className="absolute left-[66px] top-[112px] w-[668px] h-[376px] pointer-events-none">
          {/* Ring Rotation Animation */}
          <RingAnimation />

          {/* Central Logo & Text State Transitions */}
          <AvatarAnimation />
        </div>
      </CanvasWrapper>
    </main>
  );
}
