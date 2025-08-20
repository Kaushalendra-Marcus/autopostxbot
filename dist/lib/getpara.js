import fetch from 'node-fetch';
import { JSDOM } from "jsdom";
export async function fetchParagraphs(url, count = 6) {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => {
            controller.abort();
        }, 10000);
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);
        const html = await res.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const paragraphs = [...document.querySelectorAll('p')]
            .map((p) => p.textContent?.trim() || "")
            .filter(p => p.length > 40)
            .slice(0, count);
        return paragraphs;
    }
    catch (err) {
        console.error("Error fetching paragraphs:", err);
        return [];
    }
}
//# sourceMappingURL=getpara.js.map