"use client";
import { Sidebar } from "@/components/Sidebar";
import { moduleSystem } from "@/lib/modules";
import { useState } from "react";

export default function Homepage() {
  const [content, setContent] = useState("");

  const handleShortcodeChange = (shortcode: string) => {
    setContent(shortcode);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar onShortcodeChange={handleShortcodeChange} />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="w-full mt-10 flex justify-center items-center">
          {moduleSystem.render(content)}
        </div>
      </div>
    </div>
  );
}
