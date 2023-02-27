import React from "react";

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
import ExperienceCard from "./ExperienceCard";
export default function ExperienceIntro({ data }) {
  return (
    <>
      <Divider mb={8} mt={2} w="90%" alignSelf="center" />
      <Flex>
        <Heading as={"h1"} size={"lg"} mb={6}>
          Experience
        </Heading>
      </Flex>
      <List>
        {data.map((exp) => (
          <ExperienceCard data={exp} key={exp.company} id={exp.company} />
        ))}
      </List>
    </>
  );
}
