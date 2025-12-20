import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getStyleAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are "Aura", the premier AI Style Consultant for Sparkle In Style, a luxury Dutch beauty salon. 
        Your tone is sophisticated, encouraging, and professional. 
        You provide advice on hair trends, nail art aesthetics, and color theory. 
        Keep answers concise (under 150 words) but elegant. 
        If asked about prices, refer them to the 'Services' section. 
        Always end with a subtle invitation to book an appointment.`,
      }
    });

    return response.text || "I apologize, but I am currently meditating on the latest trends. Please ask me again in a moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our connection to the style ether is temporarily disrupted. Please try again later.";
  }
};
