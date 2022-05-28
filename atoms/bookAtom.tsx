import { atom } from "recoil";

export const bookName = atom({
  key: "bookName",
  default: "",
});

export const bookGenre = atom({
  key: "bookGenre",
  default: "",
});

export const favCheckbox = atom({
  key: "favCheckbox",
  default: false,
});

export const favouriteBooks = atom({
  key: "favouriteBooks",
  default: [] as number[],
});
