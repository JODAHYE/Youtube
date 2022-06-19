import { atom } from "recoil";
import { MainVideoType, SearchVideoType } from "./videoType";

export const playingVideoState = atom<SearchVideoType | MainVideoType | null>({
    key: "playingVideoState",
    default: null,
});
