import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { favouriteBooks } from "../atoms/bookAtom";

const BookItem = (book: any) => {
  const { t } = useTranslation();
  const [favList, setFavList] = useRecoilState(favouriteBooks);
  const [fav, setFav] = useState(favList.includes(book.book.id) ? true : false);

  useEffect(() => {
    if (fav) {
      setFavList([...favList, book.book.id]);
    } else {
      if (favList.includes(book.book.id)) {
        const newList = favList.filter((item) => item !== book.book.id);
        setFavList(newList);
      }
    }
  }, [fav]);

  const readlink = book.book.resources.filter((res: any) =>
    res.type.includes("text/html")
  );

  const coverlink = book.book.resources.filter(
    (element: any) =>
      element.type.includes("image/jpeg") && element.uri.includes("medium")
  );

  return (
    <div className="mb-10 flex flex-col justify-center items-center">
      <img
        src={coverlink[0]?.uri}
        alt="cover"
        className="border-[1px] border-black w-[12rem] h-[18rem]"
      />
      <h1 className="mt-2 text-center font-bold">{book.book.title}</h1>
      <h2>{book.book.agents[0]?.person}</h2>

      <a
        href={readlink[0]?.uri}
        className="text-blue-600 underline text-lg"
        target="_blank"
      >
        {t("czytaj")}
      </a>
      <button
        className="cursor-pointer  text-pink-600 mt-2"
        onClick={() => setFav(!fav)}
      >
        {fav ? "remove ❤️" : "add 🤍"}
      </button>
    </div>
  );
};

export default BookItem;
