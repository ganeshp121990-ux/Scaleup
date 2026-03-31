"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-4 h-4 rounded-full bg-[#C6A96B] pointer-events-none z-[9999]";
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", e => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }, []);

  return null;
}
