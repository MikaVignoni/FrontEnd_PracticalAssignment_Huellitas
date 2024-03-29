import Head from "next/head";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>HUELLITAS</title>
        <meta name="description" content="Huellitas - Animal Shelter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>
      
    </>
  );
}
