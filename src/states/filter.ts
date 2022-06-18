import { atom } from "recoil";

export const mainTagState = atom<string>({
    key: "mainTagState",
    default: "",
});

export const searchInputState = atom<string>({
    key: "searchInputState",
    default: "",
});
