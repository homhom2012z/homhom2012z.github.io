import React, { useState } from "react";
import ProjectCardRender from "../components/Projects/ProjectCardRender";
import { projects } from "../data/projects/projects";

export default function Projects() {
  return (
    <>
      <ProjectCardRender data={projects} />
    </>
  );
}
