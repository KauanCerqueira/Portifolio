"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const INTERACTIVE = "a, button, [role='button'], label, input, select, textarea, [data-magnetic]";

    const hide = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    document.addEventListener("mouseleave", hide);

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE)) {
        dot.style.transform = "translate(-50%, -50%) scale(0)";
        ring.style.width = "42px";
        ring.style.height = "42px";
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related?.closest(INTERACTIVE)) {
        dot.style.transform = "translate(-50%, -50%) scale(1)";
        ring.style.width = "24px";
        ring.style.height = "24px";
      }
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      dot.style.left = `${pos.current.x}px`;
      dot.style.top = `${pos.current.y}px`;
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot — follows cursor instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full bg-white mix-blend-difference"
        style={{
          width: 6,
          height: 6,
          transform: "translate(-50%, -50%) scale(1)",
          transition: "transform 0.2s ease, opacity 0.4s ease",
          opacity: 0,
          willChange: "left, top, transform",
        }}
      />
      {/* Ring — lags behind with lerp */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full border border-white mix-blend-difference"
        style={{
          width: 24,
          height: 24,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.4s ease",
          opacity: 0,
          willChange: "left, top",
        }}
      />
    </>
  );
}
