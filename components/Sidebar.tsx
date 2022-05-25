const Sidebar = () => {
  return (
    <section className="w-full bg-[#F1AE82] xl:h-screen xl:w-[26rem]">
      {/* logo and text  */}
      <div className="w-full flex items-center justify-evenly sm:justify-center xl:pl-6 xl:pt-4">
        <img
          src="/images/book-logo.png"
          alt="library logo"
          className="w-18 h-16"
        />
        <span className="text-3xl sm:ml-8">Gutenberg Library</span>
      </div>

      {/* search fields  */}
      <div className="w-full pb-5 mt-4 flex flex-col items-center xl:mt-8">
        {/* search by name  */}
        <div className="flex flex-col mb-4">
          <span className="text-lg">search by name:</span>
          <input
            type="text"
            className="bg-[#D9D9D9] focus:outline-none pl-1 w-80 xl:w-72"
          />
        </div>

        {/* filter by genre  */}
        <div className="flex flex-col">
          <span className="text-lg">filter by genre:</span>
          <input
            type="text"
            className="bg-[#D9D9D9] focus:outline-none pl-1 w-80 xl:w-72"
          />
        </div>
      </div>

      {/* favourites  */}
      <div className="w-full flex justify-center pb-6">
        <span className="text-lg w-[320px] underline xl:xl:w-72">
          my favourites {">>"}
        </span>
      </div>
    </section>
  );
};

export default Sidebar;