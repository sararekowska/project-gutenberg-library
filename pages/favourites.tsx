import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const Favourites: NextPage = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Head>
        <title>Favourites</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Sidebar />
      <div className="h-full w-full pt-8 xl:overflow-auto xl:w-[75%] xl:float-right xl:h-screen 2xl:w-[80%] scrollbar-hide bg-[#FFFCF2]">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-center mb-5 font-bold xl:text-4xl">
            {t("witaj")}
          </span>
          <span className="text-xl xl:text-2xl mb-10">{t("dostepne")}</span>
        </div>
      </div>
    </section>
  );
};

export default Favourites;
