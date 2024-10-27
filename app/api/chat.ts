import { getPrompt } from '@/lib/chat';
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const baseURL = "https://openrouter.ai/api/v1";
const gaiaNetLlamaBaseUrl = "https://llama.us.gaianet.network/v1";

const openai = createOpenAI({
  baseURL,
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY,
  compatibility: "compatible",
})

export async function getGaiaNetResponse(message: string) {
  const prompt = getPrompt(message);
  const { text } = await generateText({
    model: openai("google/gemini-flash-1.5-8b-exp"),
    prompt: prompt,
  });
  console.log(text);
  return text;
}

export async function getChatResponse(req: string) {

  const promptText = getPrompt(req);

  const {text} = await generateText({
    model: openai("neversleep/llama-3-lumimaid-8b"),
    prompt: promptText,
  });
  console.log(text);
  return text;
}

export async function getResponse(message: string) {
  return getChatResponse(message);
}
