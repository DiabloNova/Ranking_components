"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CanvasWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;

      const parentWidth = parent.clientWidth;
      const parentHeight = parent.clientHeight || window.innerHeight;

      // Fit 800x600 inside parent bounds
      const scaleX = parentWidth / 800;
      const scaleY = parentHeight / 600;
      const newScale = Math.min(scaleX, scaleY, 1.3); // max 1.3x scale for ultra-wide

      setScale(newScale);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center overflow-hidden w-full h-full min-h-screen relative"
    >
      <div
        className="w-[800px] h-[600px] bg-[#e5e5e4] relative flex-shrink-0 select-none"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
