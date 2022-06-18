import { atom } from "recoil";

export const mainTagState = atom({
    key: "mainTagState",
    default: "",
});

export const searchInputState = atom({
    key: "searchInputState",
    default: "",
});
