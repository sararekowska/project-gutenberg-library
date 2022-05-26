import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";

/// FIX HEAD AND FONT

const Favourites: NextPage = () => {
  return (
    <section>
      <Sidebar />
      <div className="h-full w-full pt-8 xl:overflow-auto xl:w-[75%] xl:float-right xl:h-screen 2xl:w-[80%] scrollbar-hide bg-[#FFFCF2]">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-center mb-5 font-bold xl:text-4xl">
            Welcome to the Gutenberg Library!
          </span>
          <span className="text-xl xl:text-2xl mb-10">
            You favourite books:
          </span>
        </div>
      </div>
    </section>
  );
};

export default Favourites;
