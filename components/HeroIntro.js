import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  VStack,
  Button,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LinkItem from "./LinkItem";
import LogoImage from "./LogoImage";

export default function Intro() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "grey.700",
    dark: "gray.400",
  };

  return (
    <Stack
      as="section"
      spacing={{ base: 8, md: 10 }}
      // justifyContent="center"
      direction={{ base: "column-reverse", md: "row" }}
      // alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="3xl"
      px={2}
    >
      <Stack spacing={{ base: 4, md: 6 }}>
        <Heading as="h1" size="lg" md={2}>
          Hi, I&apos;m Siriwat Bunmee
        </Heading>
        <Flex
        // flexDirection="column"
        // justifyContent="flex-start"
        // alignItems="flex-start"
        >
          <Text color={colorSecondary[colorMode]}>
            I&apos;m studying in computer science major, and I have an interest
            in all things about computers, especially Back-end in Software
            Development and Software Engineering. Always learning and practicing
            to develop and improve myself. Feel free to reach out via email or
            any social media with any inquiries.
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
        >
          <LinkItem
            href={"https://github.com/homhom2012z"}
            rightIcon={FaGithub}
          >
            Github
          </LinkItem>
          <LinkItem
            href={"https://www.linkedin.com/in/siriwatbunmee/"}
            rightIcon={FaLinkedin}
          >
            Linkedin
          </LinkItem>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <AspectRatio flexShrink={0} ratio={1} w={56} h={56} as="figure">
          <Box
            position={"relative"}
            // height={"300px"}
            // rounded={"2xl"}
            // boxShadow={"2xl"}
            align={"center"}
            width={"full"}
            overflow={"hidden"}
          >
            <LogoImage colorMode={colorMode} />
            {/* <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
            /> */}
          </Box>
        </AspectRatio>
      </Flex>
    </Stack>
  );
}
