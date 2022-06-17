import { axiosInstance } from ".";

export default class VideoAPI {
    static async getMainVideoList() {
        return axiosInstance.get("/playlistItems", {
            params: {
                part: "snippet",
                playlistId: "PLVbV9mqtfzKfge1I-S01Kw6HcP-j1E9Gr",
                maxResults: "1",
                key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
            },
        });
    }

    static async getSearchVideoList(searchValue: string) {
        return axiosInstance.get("/search", {
            params: {
                part: "snippet",
                q: searchValue,
                key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
            },
        });
    }
}
