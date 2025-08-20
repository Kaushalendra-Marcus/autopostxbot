import dotenv from "dotenv";
dotenv.config();
import { fetchParagraphs } from "../lib/getpara.js";
import { searchTrendingTopic } from "../lib/search.js";
async function test() {
    const data = await searchTrendingTopic("Latest Startups in 2025 related to technology");
    const selectRandomdata = Math.floor(Math.random() * data.length)
    console.log(data);
    console.log(selectRandomdata);
    const randomResult = data[selectRandomdata];
    console.log("🎯 Selected Result:", randomResult);
    const paragraphs = await fetchParagraphs(randomResult.link, 6);
    console.log("📝 Extracted Paragraphs:");
    console.log(paragraphs);
}
test();
