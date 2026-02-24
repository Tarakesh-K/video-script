"use client";
import { usePrompt } from "@/context/promptContext";
import { apiRepository } from "@/utils/apiRepository";
import MainLayout from "@/components/reusable/wrapper/MainLayout";
import { VideoScriptRequest } from "@/types/promptTypes";

export default function PromptBox() {
  const {
    prompt,
    setPrompt,
    options,
    setOptions,
    enhancedPrompt,
    setEnhancedPrompt,
    setScript,
    isLoading,
    setIsLoading,
  } = usePrompt();

  const handleExtract = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const result = await apiRepository.extractOptions(prompt);

      if (result.success) {
        // Force a new object reference and ensure keys match lowercase
        setOptions({
          duration: result.data.duration || result.data.Duration,
          language: result.data.language || result.data.Language,
          platform: result.data.platform || result.data.Platform,
          size: result.data.size || result.data.Size,
          category: result.data.category || result.data.Category,
        });
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const enhancePrompt = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      // 1. Prepare the payload using current context state
      const payload = {
        initialPrompt: prompt,
        extractedOptions: options, // Get current options from context
      };

      // 2. Call the API
      const result = await apiRepository.enhanceOptions(payload);

      if (result.success) {
        // 3. STEP 4 REQUIREMENT: Refill/Replace content in Prompt Box
        setPrompt(result.data.enhancedPrompt);
        setEnhancedPrompt(result.data.enhancedPrompt);
      }
    } catch (error) {
      console.error("Enhance Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateVideoScript = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      // 1. Prepare the payload with your consistent naming convention
      const payload: VideoScriptRequest = {
        initialEnhancedPrompt: enhancedPrompt, // The "Hidden" AI source of truth
        userContent: prompt, // The current "Visible" box content
        extractedOptions: options, // The metadata constraints
      };

      // 2. Call the API
      const result = await apiRepository.videoScript(payload);

      if (result.success) {
        // 3. Store the result in your script state (defined in your component)
        setScript(result.data);

        // Optional: Provide feedback that the script is ready
        console.log("Cinematic script generated successfully.");
      }
    } catch (error) {
      console.error("Script Generation Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout headingRequired heading="Prompt Box">
      <div className="w-full space-y-4">
        {/* TEXTAREA SECTION */}
        <div className="flex flex-col space-y-2">
          <textarea
            className="w-full h-60 p-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
            placeholder="e.g. Create a 30 second kids educational video..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* BUTTONS SECTION */}
        <div className="flex justify-end gap-3 flex-wrap">
          <button
            onClick={handleExtract}
            disabled={isLoading || !prompt.trim()}
            className={`px-6 py-2 rounded-lg font-semibold text-white transition-all cursor-pointer ${
              isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Processing..." : "Extract Options"}
          </button>

          <button
            onClick={enhancePrompt}
            disabled={isLoading || !prompt.trim()}
            className={`px-6 py-2 rounded-lg font-semibold text-white transition-all cursor-pointer ${
              isLoading
                ? "bg-gray-400"
                : "bg-purple-600 hover:bg-purple-700 active:scale-95"
            }`}
          >
            {isLoading ? "Rewriting..." : "Enhance Prompt ✨"}
          </button>

          <button
            onClick={generateVideoScript}
            disabled={isLoading || !prompt.trim()}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition-all cursor-pointer ${
              isLoading
                ? "bg-gray-400"
                : "bg-green-600 hover:bg-green-700 active:scale-95"
            }`}
          >
            {isLoading ? "Generating Script..." : "Generate Video Script 🎬"}
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
