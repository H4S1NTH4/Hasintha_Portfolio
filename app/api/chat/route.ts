import { buildGeminiPrompt, chatbotConfig } from "@/data/chatService";
import { NextResponse } from "next/server";

type ChatRequest = {
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ChatRequest;
  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        reply:
          "Gemini is not configured yet. Add GEMINI_API_KEY to .env.local and restart the development server.",
      },
      { status: 200 },
    );
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${chatbotConfig.model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: buildGeminiPrompt(message) }],
          },
        ],
        generationConfig: {
          temperature: chatbotConfig.temperature,
          maxOutputTokens: chatbotConfig.maxOutputTokens,
        },
      }),
    },
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Gemini request failed. Check the API key and quota." },
      { status: 502 },
    );
  }

  const data = await response.json();
  const reply =
    data?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text)
      .filter(Boolean)
      .join("\n") ?? "I could not generate a response right now.";

  return NextResponse.json({ reply });
}
