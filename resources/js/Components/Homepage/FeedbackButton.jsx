import React from "react";
import { Link } from "@inertiajs/react";

export default function FeedbackButton() {
  return (
    <Link href="/feedback">
      <button
        className={
          `hidden sm:block fixed right-0 top-1/4 -translate-y-1/2 z-50
          bg-blue-400 text-black px-[20px] py-[10px] rounded-t-md shadow-lg
          hover:bg-blue-500 transition-all
          -rotate-90 origin-bottom-right
          `
        }
        style={{
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Feedback
      </button>
    </Link>
  );
}