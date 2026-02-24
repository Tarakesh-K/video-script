"use client";
import { usePrompt } from "@/context/promptContext";
import MainLayout from "@/components/reusable/wrapper/MainLayout";

export default function OptionsForm() {
  const { options, updateOption } = usePrompt();

  // Helper to render text inputs for Step 3
  const renderInput = (label: string, key: keyof typeof options) => (
    <div className="flex flex-col space-y-1">
      <label className="text-xs font-semibold text-gray-500 uppercase">
        {label}
      </label>
      <input
        type="text"
        value={options[key] || ""}
        onChange={(e) => updateOption(key, e.target.value)}
        className="p-2 border rounded-md focus:border-blue-500 outline-none transition-colors"
        placeholder={`Enter ${label.toLowerCase()}...`}
      />
    </div>
  );

  return (
    <MainLayout headingRequired heading="Video Configuration">
      <div className="p-6 bg-white border rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderInput("Duration", "duration")}
          {renderInput("Language", "language")}
          {renderInput("Platform", "platform")}
          {renderInput("Category", "category")}

          <div className="flex flex-col space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">
              Size
            </label>
            <select
              value={options.size || ""}
              onChange={(e) => updateOption("size", e.target.value)}
              className="p-2 border rounded-md bg-white outline-none focus:border-blue-500"
            >
              <option value="">Select Size</option>
              <option value="Landscape">Landscape</option>
              <option value="Vertical">Vertical</option>
              <option value="Square">Square</option>
            </select>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
