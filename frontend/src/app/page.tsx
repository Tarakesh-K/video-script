import OptionsForm from "@/components/prompts/OptionsForm";
import PromptBox from "@/components/prompts/PromptBox";
import VideoScript from "@/components/prompts/VideoScript";
import { PromptProvider } from "@/context/promptContext";

export default function Home() {
  return (
    <div className="">
      <PromptProvider>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex gap-2">
            <PromptBox />
            <OptionsForm />
          </div>
          <div>
            <VideoScript />
          </div>
        </div>
      </PromptProvider>
    </div>
  );
}
