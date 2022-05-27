import { atom } from "recoil";

export const bookName = atom({
  key: "bookName",
  default: "",
});

export const bookGenre = atom({
  key: "bookGenre",
  default: "",
});

export const favouriteBooks = atom({
  key: "favouriteBooks",
  default: [] as string[],
});
