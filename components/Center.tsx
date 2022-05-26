import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "react-use";
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

  const { fetchNextPage, books } = useListBooks();

  return (
    <section className="h-full w-full pt-8 xl:overflow-auto xl:w-[75%] xl:float-right xl:h-screen 2xl:w-[80%] scrollbar-hide">
      <div className="flex flex-col items-center">
        <span className="text-3xl text-center mb-5 font-bold xl:text-4xl">
          {t("witaj")}
        </span>
        <span className="text-xl xl:text-2xl mb-10">{t("dostepne")}</span>
      </div>
      {/* books  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books?.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>

      <div ref={intersectionRef}>
        <Spinner />
      </div>
    </section>
  );
};

export default Center;
