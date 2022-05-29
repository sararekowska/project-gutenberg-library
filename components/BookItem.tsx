import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { favouriteBooks } from "../atoms/bookAtom";
import { Book, Resource } from "../common/types/types";

const BookItem = ({ book }: { book: Book }) => {
  const { t } = useTranslation();
  const [favList, setFavList] = useRecoilState(favouriteBooks);
  const [fav, setFav] = useState(favList.includes(book.id) ? true : false);

  useEffect(() => {
    if (fav) {
      setFavList([...favList, book.id]);
    } else {
      if (favList.includes(book.id)) {
        const newList = favList.filter((item) => item !== book.id);
        setFavList(newList);
      }
    }
  }, [fav]);

  const readlink = book.resources.filter((res: Resource) =>
    res.type.includes("text/html")
  );

  const coverlink = book.resources.filter(
    (element: Resource) =>
      element.type.includes("image/jpeg") && element.uri.includes("medium")
  );

  return (
    <div className="mb-10 flex flex-col justify-center items-center">
      <img
        src={coverlink[0]?.uri}
        alt="cover"
        className="border-[1px] border-black w-[12rem] h-[18rem]"
      />
      <h1 className="mt-2 text-center font-bold">{book.title}</h1>
      <h2>{book.agents[0]?.person.replace(",", " ")}</h2>

      <a
        href={readlink[0]?.uri}
        className="text-blue-600 underline text-lg"
        target="_blank"
        rel="noreferrer"
      >
        {t("czytaj")}
      </a>
      <button
        className="cursor-pointer  text-pink-600 mt-2"
        onClick={() => setFav(!fav)}
      >
        {fav ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default BookItem;
