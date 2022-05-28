import { useInfiniteQuery } from "react-query";
import { Book } from "../types/types";

type BookResponse = {
  next: string;
  previous: string | null;
  results: Book[];
};

const useListBooks = () => {
  const query = useInfiniteQuery<BookResponse>(
    ["books"],
    async ({ pageParam }) => {
      const response = await fetch(
        pageParam ? pageParam : "https://gnikdroy.pythonanywhere.com/api/book/"
      );
      return response.json();
    },
    { getNextPageParam: (x) => x.next }
  );
  const books = query?.data?.pages.flatMap((x) => x.results);
  return { ...query, books };
};

export default useListBooks;
