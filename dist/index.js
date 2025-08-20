import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
dotenv.config();
if (!process.env.GEMINI_API_KEY) {
    throw new Error("Gemini api key is missing");
}
const geminiai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function main() {
    const response = await geminiai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "Explain how AI works in few words"
    });
    console.log(response.text);
}
main();
//# sourceMappingURL=index.js.map