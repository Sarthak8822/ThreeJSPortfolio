"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setVisible(true);

    let mx = -100, my = -100;
    let cx = -100, cy = -100;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const lerp = () => {
      cx += (mx - cx) * 0.14;
      cy += (my - cy) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${cx}px`;
        ringRef.current.style.top = `${cy}px`;
      }
      animId = requestAnimationFrame(lerp);
    };
    lerp();

    const addHover = () => ringRef.current?.classList.add("hovering");
    const removeHover = () => ringRef.current?.classList.remove("hovering");

    const attachHoverListeners = () => {
      document.querySelectorAll("a, button, .skill-tag, .exp-card, .project-card, .stat-box").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };
    // Run once + after a tick for dynamic content
    attachHoverListeners();
    const timer = setTimeout(attachHoverListeners, 600);

    document.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
