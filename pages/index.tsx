import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Library</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <h1 className="underline">TEST</h1>
    </div>
  );
};

export default Home;
