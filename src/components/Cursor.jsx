"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");

    cursor.className =
      "fixed w-4 h-4 rounded-full bg-[#C6A96B] pointer-events-none z-[9999]";

    cursor.style.left = "0";
    cursor.style.top = "0";
    cursor.style.transform = "translate(-100px,-100px)";
    cursor.style.transition = "transform 0.08s linear";

    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
}