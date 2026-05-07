import portfolioData from "./data.json";

export const CHATBOT_SYSTEM_PROMPT =
  "You are Hasintha's personal assistant. Use the provided JSON data to answer questions about Hasintha Dilshan. Maintain a professional, technical, and welcoming tone.";

export const chatbotConfig = {
  model: "gemini-1.5-flash",
  temperature: 0.35,
  maxOutputTokens: 700,
  systemPrompt: CHATBOT_SYSTEM_PROMPT,
  portfolioData,
};

export function buildGeminiPrompt(message: string) {
  return [
    CHATBOT_SYSTEM_PROMPT,
    "",
    "Portfolio JSON data:",
    JSON.stringify(portfolioData, null, 2),
    "",
    `Visitor question: ${message}`,
  ].join("\n");
}
