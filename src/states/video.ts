import { atom, selector } from "recoil";
import { MainVideoType, SearchVideoType } from "./videoType";
import VideoAPI from "../lib/api/VideoAPI";
import { playChannelId } from "./filter";

export const playingVideoState = atom<SearchVideoType | MainVideoType | null>({
    key: "playingVideoState",
    default: null,
});

export const subVideoState = selector({
    key: "subVideoState",
    get: async ({ get }) => {
        const response = await VideoAPI.getChannelVideoList(get(playChannelId));
        return response.data;
    },
});
