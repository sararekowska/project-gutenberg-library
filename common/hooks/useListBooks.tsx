import { useInfiniteQuery } from "react-query";

const useListBooks = () => {
  const query = useInfiniteQuery(
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
