import { TwitterApi } from "twitter-api-v2";
const client = new TwitterApi({
    appKey: process.env.API_KEY_X,
    appSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET
});
export async function POSTtoTwitter(text) {
    try {
        const rwclient = client.readWrite;
        const response = await rwclient.v2.tweet(text);
        console.log("Posted to X/Twitter successfully : ", response);
    }
    catch (error) {
        console.log("Error in Posting :", error);
    }
}
//# sourceMappingURL=posttox.js.map