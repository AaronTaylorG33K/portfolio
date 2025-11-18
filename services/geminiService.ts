import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I seem to be having trouble connecting to my brain. Please try again later.";
  }
};