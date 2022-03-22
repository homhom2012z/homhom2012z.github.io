import HeroIntro from "../components/Hero/HeroIntro";
import ProjectCardRender from "../components/Projects/ProjectCardRender";
import { projects } from "../data/projects/projects";

export default function Index() {
  return (
    <>
      <HeroIntro />
      <ProjectCardRender data={projects} length={3} isPreview />
    </>
  );
}
