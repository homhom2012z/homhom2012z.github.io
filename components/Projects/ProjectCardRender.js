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
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import NextLink from "next/link";
import ProjectCard from "./ProjectCard";
import ProjectCardJSON from "./ProjectCardJSON";

export default function ProjectCardRender({ data, length, isPreview }) {
  const [searchValue, setSearchValue] = useState("");
  const [viewSwitch, setViewSwitch] = useState(false);

  const filerteredProjects = data
    .sort((a, b) => a.key - b.key)
    .filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  const colorHv = useColorModeValue("purple.100", "purple.700");

  return (
    <>
      {isPreview && <Divider mb={8} mt={8} w="90%" alignSelf="center" />}

      <Flex as="header" width="full" align="center">
        <Heading as={"h1"} size={"lg"} mb={6}>
          Projects{!isPreview && ` (${filerteredProjects.length} project) `}
        </Heading>
        {!isPreview && (
          <Box marginLeft="auto" mb={6} opacity={"0.7"}>
            <Stack direction={{ base: "row" }} spacing={2}>
              <Button
                colorScheme={viewSwitch ? "purple" : "orange"}
                size={"sm"}
                onClick={() => setViewSwitch(!viewSwitch ? true : false)}
              >
                {!viewSwitch ? "JSON View" : "Card View"}
              </Button>
            </Stack>
          </Box>
        )}
      </Flex>

      {!isPreview ? (
        <>
          <Text mb={4}>
            Below is the list of{" "}
            <Link
              href="https://github.com/homhom2012z"
              textDecorationLine={"underline"}
              isExternal
            >
              Open Source
            </Link>{" "}
            Projects I&apos;ve worked on in learning methods and university term
            projects.
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
            return !viewSwitch ? (
              <ProjectCard data={data} key={key} id={key} />
            ) : (
              <ProjectCardJSON data={data} key={key} id={key} />
            );
          })}
      </List>
      {isPreview && (
        <Flex justify={"center"} width="100%">
          <NextLink href="/projects" passHref>
            <Link _hover={""} mt={8}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="gray"
                variant="outline"
                aria-label="view all projects"
                fontSize={"sm"}
                _hover={{
                  background: `${colorHv}`,
                }}
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
