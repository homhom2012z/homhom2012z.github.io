import Head from "next/head";
import HeroIntro from "../components/Hero/HeroIntro";
import ProjectCardRender from "../components/Projects/ProjectCardRender";
import { projects } from "../data/projects/projects";
import ExperienceIntro from "../components/Experiences/ExperienceIntro";
export default function Index() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home - Siriwat Bunmee</title>
      </Head>

      <HeroIntro />
      <ExperienceIntro />
      <ProjectCardRender data={projects} length={3} isPreview />
    </>
  );
}
