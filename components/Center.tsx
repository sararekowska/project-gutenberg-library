import useListBooks from "../common/hooks/useListBooks";

const Center = () => {
  const { data, fetchNextPage, isLoading } = useListBooks();
  console.log(data);
  return (
    <section className="h-screen w-full flex flex-col items-center mt-8 xl:overflow-auto xl:w-[75%] xl:float-right xl:h-screen 2xl:w-[80%]">
      <span className="text-3xl text-center mb-5 font-bold xl:text-4xl">
        Welcome to the Gutenberg Library!
      </span>
      <span className="text-xl xl:text-2xl">Available books:</span>
      <button onClick={() => fetchNextPage()}>x</button>
    </section>
  );
};

export default Center;
