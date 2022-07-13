import { axiosInstance } from ".";

export default class CommentAPI {
    static async getPlayVideoCommentList(videoId: string) {
        return axiosInstance.get("/commentThreads", {
            params: {
                part: "snippet",
                videoId: videoId,
                maxResults: "2",
                key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
            },
        });
    }
}
