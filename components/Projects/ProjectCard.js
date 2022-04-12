import React, { useState } from "react";
import {
  HStack,
  LinkBox,
  Stack,
  Text,
  Image,
  Heading,
  LinkOverlay,
  Badge,
  useColorMode,
  Icon,
  useColorModeValue,
  Link,
  Divider,
  Box,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { languageColors } from "../../lib/language-colors/language-colors-schema";

export default function ProjectCard({ data, id }) {
  const { colorMode } = useColorMode();
  const [opacity, setOpacity] = useState(0);

  const color = {
    light: "grey.700",
    dark: "gray.400",
  };
  return (
    <Stack>
      <LinkBox
        position={"relative"}
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        borderRadius={"xl"}
        background={useColorModeValue("gray.50", "#1A1A1A")}
        transitionProperty="transform"
        transitionDuration="slower"
        transition-timing-function="easing-ease-out"
        _hover={{
          transform: "translate(-4px,-4px)",
          shadow: "lg",
        }}
        onMouseOver={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        p={4}
        mt={2}
        mb={2}
      >
        <HStack
        //   alignContent={"center"}
        >
          <Image
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${data.stacks[0]}/${data.stacks[0]}-original.svg`}
            alt="img"
            width={["40px", "50px", "60px"]}
            ml={2}
            mr={4}
          ></Image>
          <Stack width={"100%"}>
            <Stack spacing={3}>
              <Stack
                justify={"space-between"}
                direction={{ base: "column", sm: "row" }}
                mt={2}
              >
                <Heading size={"sm"} cursor={"pointer"}>
                  {/* <LinkOverlay href={data.link} target={"_blank"}>
                    {data.title}
                  </LinkOverlay> */}
                  <Text>{data.title}</Text>
                </Heading>
                <HStack>
                  {data.stacks
                    .slice(0)
                    .reverse()
                    .map((stack) => (
                      <Badge key={stack} colorScheme={languageColors[stack]}>
                        {stack}
                      </Badge>
                    ))}
                  <Icon as={FiExternalLink} opacity={opacity} />
                </HStack>
              </Stack>
              <Box>
                <Text fontSize={"sm"} color={color[colorMode]}>
                  {data.description}
                </Text>
              </Box>
            </Stack>

            <Divider />
            <HStack spacing={2}>
              <Link
                href={data.source}
                fontSize={"sm"}
                color={color[colorMode]}
                opacity={0.7}
                _hover={{
                  opacity: "1",
                  textDecorationLine: "underline",
                }}
                // textDecorationLine={"underline"}
                isExternal
              >
                source
              </Link>
              {data.demo && (
                <Link
                  href={data.demo}
                  fontSize={"sm"}
                  color={color[colorMode]}
                  opacity={0.7}
                  _hover={{
                    opacity: "1",
                    textDecorationLine: "underline",
                  }}
                  // textDecorationLine={"underline"}
                  isExternal
                >
                  demo
                </Link>
              )}
            </HStack>
          </Stack>
        </HStack>
      </LinkBox>
    </Stack>
  );
}
