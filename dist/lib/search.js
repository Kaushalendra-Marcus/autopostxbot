import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export async function searchTrendingTopic(q) {
    const res = await axios.get("https://www.googleapis.com/customsearch/v1", {
        params: {
            key: process.env.API_KEY,
            cx: process.env.SEARCH_ENGINE_ID,
            q: q
        }
    });
    return res.data.items.map((item) => ({
        title: item.title,
        link: item.link,
        snippet: item.snippet
    }));
}
//# sourceMappingURL=search.js.map