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
          <Stack spacing={3} width={"100%"}>
            <Stack
              justify={"space-between"}
              direction={{ base: "column", sm: "row" }}
            >
              <Heading size={"sm"}>
                <LinkOverlay href={data.link} target={"_blank"}>
                  {data.title}
                </LinkOverlay>
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
            <Text fontSize={"sm"} color={color[colorMode]}>
              {data.description}
            </Text>
          </Stack>
        </HStack>
      </LinkBox>
    </Stack>
  );
}
