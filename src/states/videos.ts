import { atom } from "recoil";

export const mainVideoState = atom({
    key: "mainVideoState",
    default: [],
});

export const searchVideoState = atom({
    key: "searchVideoState",
    default: [],
});

export const playVideoIdState = atom({
    key: "playVideoIdState",
    default: "",
});
