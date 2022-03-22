import React, { useState } from "react";
import {
  Heading,
  Divider,
  List,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
  Text,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import NextLink from "next/link";
import ProjectCard from "./ProjectCard";

export default function ProjectCardRender({ data, length, isPreview }) {
  const [searchValue, setSearchValue] = useState("");
  const filerteredProjects = data
    .sort((a, b) => a.key - b.key)
    .filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Divider mb={12} mt={2} w="90%" alignSelf="center" />

      <Heading as={"h1"} size={"lg"} mb={6}>
        Projects{!isPreview && ` ( ${filerteredProjects.length} ) `}
      </Heading>
      {!isPreview ? (
        <>
          <Text mb={4}>
            Below is the list of Open Source Projects I&apos;ve worked on in
            learning methods and university term projects.
          </Text>
          <InputGroup mb={4} mr={4} w="100%">
            <Input
              aria-label="Search by title"
              placeholder="Search by title"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <InputRightElement>
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </>
      ) : (
        <></>
      )}

      {!filerteredProjects.length && (
        <Stack flex={1} justify={"center"} align={"center"}>
          <Text>No projects found.</Text>
        </Stack>
      )}

      <List>
        {filerteredProjects
          .slice(0, `${length ? length : data.length}`)
          .map((data, key) => {
            return <ProjectCard data={data} key={key} id={key} />;
          })}
      </List>
      {isPreview && (
        <Flex justify={"center"} width="100%">
          <NextLink href="/projects" passHref>
            <Link _hover="none" mt={8}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="gray"
                variant="outline"
                aria-label="view all projects"
              >
                View All Projects
              </Button>
            </Link>
          </NextLink>
        </Flex>
      )}
    </>
  );
}
