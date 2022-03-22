import Head from "next/head";
import HeroIntro from "../components/Hero/HeroIntro";
import ProjectCardRender from "../components/Projects/ProjectCardRender";
import { projects } from "../data/projects/projects";
import { motion } from "framer-motion";
export default function Index() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home - Siriwat Bunmee</title>
      </Head>

      <HeroIntro />
      <ProjectCardRender data={projects} length={3} isPreview />
    </>
  );
}
