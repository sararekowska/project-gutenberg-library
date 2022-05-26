const BookItem = (book: any) => {
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
        src={coverlink[0].uri}
        alt="cover"
        className="border-[1px] border-black w-[12rem] h-[18rem]"
      />
      <h1 className="mt-2 text-center font-bold">{book.book.title}</h1>
      <h2>{book.book.agents[0].person}</h2>

      <a
        href={readlink[0].uri}
        className="text-blue-600 underline"
        target="_blank"
      >
        read {">>"}
      </a>
    </div>
  );
};

export default BookItem;
