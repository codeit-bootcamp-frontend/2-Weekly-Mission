import Head from "next/head";
import HomeLayout from "@/layouts/landing";

function HomePage() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeLayout />
    </>
  );
}

export default HomePage;
