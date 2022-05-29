import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "react-use";
import { useRecoilState } from "recoil";
import {
  bookGenre,
  bookName,
  favCheckbox,
  favouriteBooks,
} from "../atoms/bookAtom";
import useListBooks from "../common/hooks/useListBooks";
import BookItem from "./BookItem";
import Spinner from "./Spinner";

const Center = () => {
  const { t } = useTranslation();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  useEffect(() => {
    intersection?.isIntersecting && fetchNextPage();
  }, [intersection?.isIntersecting]);

  const { fetchNextPage, books, isLoading, isFetchingNextPage } =
    useListBooks();
  const [nameSearch, setNameSearch] = useRecoilState(bookName);
  const [genreSearch, setGenreSearch] = useRecoilState(bookGenre);
  const [checkbox, setCheckbox] = useRecoilState(favCheckbox);
  const [favList, setFavList] = useRecoilState(favouriteBooks);

  return (
    <section className="h-full w-full pt-8 xl:overflow-auto xl:w-[75%] xl:float-right xl:h-screen 2xl:w-[80%] scrollbar-hide">
      <div className="flex flex-col items-center">
        <span className="text-3xl text-center mb-5 font-bold xl:text-4xl">
          {t("witaj")}
        </span>
        <span className="text-xl xl:text-2xl mb-10">{t("dostepne")}</span>
      </div>

      {/* books  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {books
          ?.filter(
            (book) =>
              nameSearch === "" ||
              book.title.toLowerCase().includes(nameSearch.toLowerCase())
          )
          .filter(
            (book) =>
              genreSearch === "" ||
              book.subjects.filter((subject) =>
                subject.toLowerCase().includes(genreSearch.toLowerCase())
              ).length > 0
          )
          .filter((book) => !checkbox || favList.includes(book.id))
          .map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
      </div>

      <div ref={intersectionRef}>
        {isLoading || isFetchingNextPage ? <Spinner /> : null}
      </div>
    </section>
  );
};

export default Center;
