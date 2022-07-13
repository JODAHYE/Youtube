import { axiosInstance } from ".";

export default class VideoAPI {
    static async getMainVideoList(playListId: string) {
        return axiosInstance.get("/playlistItems", {
            params: {
                part: "snippet",
                playlistId: playListId,
                maxResults: "10",
                // key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
                key: "AIzaSyBpfyYJBX0eUtQOgvwlsvqst4e68fW_sLM",
            },
        });
    }

    static async getSearchVideoList(searchValue: string) {
        return axiosInstance.get("/search", {
            params: {
                part: "snippet",
                q: searchValue,
                maxResults: "10",
                // key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
                key: "AIzaSyBpfyYJBX0eUtQOgvwlsvqst4e68fW_sLM",
            },
        });
    }

    static async getChannelVideoList(channelId: string) {
        return axiosInstance.get("/search", {
            params: {
                part: "snippet",
                q: channelId,
                maxResults: "10",
                // key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
                key: "AIzaSyBpfyYJBX0eUtQOgvwlsvqst4e68fW_sLM",
            },
        });
    }
}
