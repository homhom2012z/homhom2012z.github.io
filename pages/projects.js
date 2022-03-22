import React, { useState } from "react";
import Head from "next/head";

import ProjectCardRender from "../components/Projects/ProjectCardRender";
import { projects } from "../data/projects/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Projects - Siriwat Bunmee</title>
      </Head>
      <ProjectCardRender data={projects} />
    </>
  );
}
