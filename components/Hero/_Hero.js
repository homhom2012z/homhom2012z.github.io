import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import LogoImage from "../LogoImage";

export default function CallToActionWithVideo() {
  const { colorMode } = useColorMode();

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 4, md: 4 }}
        direction={{ base: "column", md: "row" }}
        px={2}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Write once,
            </Text>
            <br />
            <Text as={"span"} color={"purple.400"}>
              use everywhere!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            I&apos;m graduated in computer science major, and I have an interest
            in Full-Stack software development. Always enjoys coding and
            learning to develop/improve myself. Feel free to reach out via email
            or any social media with any inquiries.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"purple.400"}
              _hover={{ bg: "purple.500" }}
            >
              Get started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            // height={"300px"}
            // rounded={"2xl"}
            // boxShadow={"2xl"}
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
        </Flex>
      </Stack>
    </Container>
  );
}
