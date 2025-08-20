import { TwitterApi } from "twitter-api-v2";
const client = new TwitterApi({
    appKey: process.env.API_KEY_X as string,
    appSecret: process.env.API_SECRET as string,
    accessToken: process.env.ACCESS_TOKEN as string,
    accessSecret: process.env.ACCESS_SECRET as string
})

export async function POSTtoTwitter(text: string) {
    try {
        const rwclient = client.readWrite
        const response = await rwclient.v2.tweet(text)
        console.log("Posted to X/Twitter successfully : ", response);

    } catch (error) {
        console.log("Error in Posting :", error);
    }
}