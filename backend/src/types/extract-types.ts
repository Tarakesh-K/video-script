export type ExtractedOptions = {
  duration: string | null;
  language: string | null;
  platform: string | null;
  size: "Landscape" | "Vertical" | "Square" | null;
  category: string | null;
};

export type VideoScriptScene = {
  scene: number;
  visual: string;
  narration: string;
  mood: string;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};
