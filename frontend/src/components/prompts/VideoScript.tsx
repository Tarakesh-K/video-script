"use client";
import { usePrompt } from "@/context/promptContext";

export default function VideoScript() {
  const { script } = usePrompt();

  if (!script) return null;

  return (
    /* 1. Removed MainLayout to avoid double-padding/constraining */
    <div className="w-full mt-4 animate-in fade-in slide-in-from-bottom-5 duration-500 px-4 md:px-8">
      
      {/* 2. Manual Heading: Matches your MainLayout style without the extra container */}
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
          Final Cinematic Script
        </h2>
        <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full" />
      </header>

      <div className="relative group w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

        {/* 3. Width & Height Fixes:
            - Changed max-h to 600px for better visibility
            - Ensured p-6 or p-8 is inside the scrollable area
            - Used w-full to match the text box above
        */}
        <div className="relative w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-y-auto max-h-[400px] min-h-[200px]">
          <div className="p-6 md:p-8 w-full whitespace-pre-wrap font-mono text-sm sm:text-base leading-relaxed text-gray-700">
            {script}
          </div>
        </div>
      </div>
    </div>
  );
}