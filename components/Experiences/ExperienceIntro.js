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
export default function ExperienceIntro() {
  const mockData = {
    company: "National ITMX Co., Ltd.",
    role: "Developer Intern",
    location: "Pakkret, Nonthaburi",
    date: "Jun / 2022 - Dec / 2022",
    description: [
      "Co-op internship as a Back-end developer to develop a microservice for Core-Banking back-end system,  utilizing technologies such as Ktor, Kotlin, and Apache Kafka",
      "Performed schema audits used in the project.",
      "Worked with other interns to brainstorm ideas and implement into the project.",
    ],
    stacks: ["Kotlin", "Ktor", "Kafka"],
    image:
      "https://media.licdn.com/dms/image/C560BAQH5YvHr8wD2oA/company-logo_200_200/0/1636342037210?e=2147483647&v=beta&t=SJT3O2X5J9-FATrWEME5Kc6WLXvtmkSR55Z1N4eVZ5U",
  };
  return (
    <>
      <Divider mb={8} mt={2} w="90%" alignSelf="center" />
      <Flex>
        <Heading as={"h1"} size={"lg"} mb={6}>
          Experience
        </Heading>
      </Flex>
      <List>
        <ExperienceCard data={mockData} key={"Exp1"} id={"Exp1"} />
      </List>
    </>
  );
}
