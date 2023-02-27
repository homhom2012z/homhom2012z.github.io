import React, { useState } from "react";
import {
  HStack,
  LinkBox,
  Stack,
  Text,
  Image,
  Heading,
  useColorMode,
  useColorModeValue,
  Box,
  ListItem,
  UnorderedList,
  Divider,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { languageColors } from "../../lib/language-colors/language-colors-schema";

export default function ExperienceCard({ data, id }) {
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
        <HStack>
          <Image
            src={data.image}
            alt="img"
            width={["40px", "50px", "60px"]}
            ml={2}
            mr={4}
          ></Image>
          <Stack width={"100%"}>
            <Stack spacing={2}>
              {/* First row -> Company name and Location */}
              <Stack
                justify={"space-between"}
                direction={{ base: "column", sm: "row" }}
                mt={2}
              >
                {/* Company */}
                <Heading size={"sm"} cursor={"pointer"}>
                  <Text>{data.company}</Text>
                </Heading>
                <Text fontSize={"sm"} as={"b"}>
                  {data.location}
                </Text>
              </Stack>
              {/* Second row -> Job role and job date */}
              <Stack
                justify={"space-between"}
                direction={{ base: "column", sm: "row" }}
              >
                <Text fontSize={"sm"}>{data.role}</Text>
                <Text fontSize={"xs"} as={"i"}>
                  {data.date}
                </Text>
              </Stack>
              {/* Descriptions */}
              <Box>
                <UnorderedList>
                  {data.description.map((r) => (
                    <ListItem key={data.company} color={color[colorMode]}>
                      <Text fontSize={"sm"}>{r}</Text>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Stack>
            <Divider />
            <HStack
              justify={"flex-start"}
              direction={{ base: "column", md: "row", sm: "row" }}
            >
              <Text fontSize={"sm"}>Stacks: </Text>
              {data.stacks.reverse().map((stack) => (
                <Badge key={stack} colorScheme={languageColors[stack]}>
                  <Text fontSize={"xs"}>{stack}</Text>
                </Badge>
              ))}
            </HStack>
          </Stack>
        </HStack>
      </LinkBox>
    </Stack>
  );
}
