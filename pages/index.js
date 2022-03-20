import Head from "next/head";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";

export default function Index() {
  return (
    <>
      <Head>
        <title>Siriwat Bunmee</title>
      </Head>
      <Hero />
      <Hero2 />
    </>
  );
}