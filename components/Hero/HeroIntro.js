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
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LinkItem from "../LinkItem";
import LogoImage from "../LogoImage";
import { motion } from "framer-motion";

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
      <Stack justify={"center"} spacing={{ base: 4, md: 6 }}>
        <HStack align={"baseline"} justify={{ base: "flex-start" }}>
          <Heading
            size={"3xl"}
            color={useColorModeValue("purple.500", "white")}
          >
            Hi
          </Heading>
          <Heading
            as="h1"
            size="lg"
            md={2}
            color={useColorModeValue("black", "purple.500")}
          >
            , I&apos;m Siriwat Bunmee
          </Heading>
        </HStack>

        <Flex
        // flexDirection="column"
        // justifyContent="flex-start"
        // alignItems="flex-start"
        >
          <Text color={colorSecondary[colorMode]}>
            I studying in computer science major, and I have an interest in
            Back-end in Software Development and Software Engineering. Always
            learning and practicing to develop and improve myself. Feel free to
            reach out via email or any social media with any inquiries.
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
          <motion.div
            animate={{ y: 20, scale: 0.97 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          >
            <Box
              position={"relative"}
              // height={"300px"}
              // rounded={"2xl"}
              // boxShadow={"2xl"}
              align={"center"}
              width={"full"}
              overflow={"hidden"}
              transform="scale(1.0)"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
            >
              <LogoImage colorMode={colorMode} />
            </Box>
          </motion.div>
        </AspectRatio>
      </Flex>
    </Stack>
  );
}
