import { atom, selector } from "recoil";
import CommentAPI from "../lib/api/CommentAPI";
import { playVideoId } from "./filter";

export const commentState = selector({
    key: "commentState",
    get: async ({ get }) => {
        const response = await CommentAPI.getPlayVideoCommentList(
            get(playVideoId)
        );
        return response.data;
    },
});
