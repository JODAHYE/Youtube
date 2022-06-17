import { atom } from "recoil";

export const searchState = atom({
    key: "searchState",
    default: "",
});

export const searchVideoState = atom({
    key: "searchVideoState",
    default: [],
});
