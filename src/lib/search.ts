import axios from "axios"
import dotenv from "dotenv"
dotenv.config()
export async function searchTrendingTopic(q: string) {
    const res = await axios.get("https://www.googleapis.com/customsearch/v1", {
        params: {
            key: process.env.API_KEY,
            cx: process.env.SEARCH_ENGINE_ID,
            q: q
        }
    })
    return res.data.items.map(
        (item: { title: string; link: string, snippet: string }) => ({
            title: item.title,
            link: item.link,
            snippet: item.snippet
        })
    )
}