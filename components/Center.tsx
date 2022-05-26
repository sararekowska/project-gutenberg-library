import useListBooks from "../common/hooks/useListBooks";
import BookItem from "./BookItem";

const Center = () => {
  const { data, fetchNextPage, isLoading, books } = useListBooks();
  console.log(books);
  return (
    <section className="h-full w-full mt-8 xl:overflow-auto xl:w-[75%] xl:float-right xl:h-screen 2xl:w-[80%] scrollbar-hide">
      <div className="flex flex-col items-center">
        <span className="text-3xl text-center mb-5 font-bold xl:text-4xl">
          Welcome to the Gutenberg Library!
        </span>
        <span className="text-xl xl:text-2xl mb-10">Available books:</span>
      </div>

      {/* books  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books?.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <button onClick={() => fetchNextPage()}>x</button>
    </section>
  );
};

export default Center;
