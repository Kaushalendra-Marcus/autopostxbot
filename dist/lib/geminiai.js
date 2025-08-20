import { GoogleGenAI } from "@google/genai";
import * as dotnev from 'dotenv';
dotnev.config();
if (!process.env.GEMINI_API_KEY) {
    throw new Error("Gemini api key is missing");
}
const geminiai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
export async function postbyAI(query) {
    const response = await geminiai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: query
    });
    return response.text;
}
//# sourceMappingURL=geminiai.js.map