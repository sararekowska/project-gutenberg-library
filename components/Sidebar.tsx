import Link from "next/link";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { bookGenre, bookName, favCheckbox } from "../atoms/bookAtom";
import i18n from "../translations/i18n";

const Sidebar = () => {
  const [lang, setLang] = useState("en");
  const { t } = useTranslation();
  const [nameSearch, setNameSearch] = useRecoilState(bookName);
  const [genreSearch, setGenreSearch] = useRecoilState(bookGenre);
  const [checkbox, setCheckbox] = useRecoilState(favCheckbox);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <section className="w-full bg-[#F1AE82] xl:h-screen xl:fixed xl:w-[25%] 2xl:w-[20%]">
      {/* logo and text  */}
      <div className="w-full flex items-center justify-evenly sm:justify-center xl:pt-4 ">
        <img
          src="/images/book-logo.png"
          alt="library logo"
          className="w-18 h-16"
        />
        <Link href="/">
          <span className="text-3xl sm:ml-8 cursor-pointer xl:ml-2">
            Gutenberg Library
          </span>
        </Link>
      </div>

      {/* search fields  */}
      <div className="w-full pb-5 mt-4 flex flex-col items-center xl:mt-8">
        {/* search by name  */}
        <div className="flex flex-col mb-4">
          <span className="text-lg">{t("szukaj_nazwa")}</span>
          <DebounceInput
            className="bg-[#FFFCF2] focus:outline-none pl-1 w-80 xl:w-72"
            placeholder="ex. dracula, dorian gray"
            minLength={1}
            debounceTimeout={500}
            onChange={(e) => setNameSearch(e.target.value)}
          />
        </div>

        {/* filter by genre  */}
        <div className="flex flex-col">
          <span className="text-lg">{t("szukaj_gatunek")}</span>
          <DebounceInput
            className="bg-[#FFFCF2] focus:outline-none pl-1 w-80 xl:w-72"
            placeholder="ex. adventure, psychological"
            minLength={1}
            debounceTimeout={500}
            onChange={(e) => setGenreSearch(e.target.value)}
          />
        </div>
      </div>

      {/* favourites  */}
      <div className="w-full flex justify-center pb-6 items-center">
        <span className="text-lg w-[320px] xl:w-72 ">
          {t("fav")}
          <input
            type="checkbox"
            className="ml-2"
            onChange={(e) => setCheckbox(e.target.checked)}
          />
        </span>
      </div>

      {/* languages  */}
      <div className="flex flex-row justify-center pb-2 xl:absolute xl:bottom-2 xl:left-4">
        <span className="mr-2">{t("jezyk")}</span>
        <button
          className="underline cursor-pointer mr-2"
          onClick={() => setLang("pl")}
        >
          PL
        </button>
        <button
          className="underline cursor-pointer"
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
