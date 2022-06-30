import { atom } from "recoil";

export const mainTagState = atom<string>({
    key: "mainTagState",
    default: "",
});

export const searchInputState = atom<string>({
    key: "searchInputState",
    default: "",
});

export const playChannelId = atom<string>({
    key: "playChannelId",
    default: "",
});

export const playVideoId = atom<string>({
    key: "playVideoId",
    default: "",
});
