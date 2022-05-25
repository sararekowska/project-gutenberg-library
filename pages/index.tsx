import type { NextPage } from "next";
import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <section className="h-[100%] bg-[#FFFCF2] overflow-hidden">
      <Head>
        <title>Library</title>
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

      <main>
        <Sidebar />
        <Center />
      </main>
    </section>
  );
};

export default Home;
