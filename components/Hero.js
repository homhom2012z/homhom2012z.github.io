import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

export default function Intro() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "grey.700",
    dark: "gray.400",
  };

  return (
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="3xl"
      px={2}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="4xl"
      >
        <Heading md={2}>Hello World</Heading>
        <Text color={colorSecondary[colorMode]}>
          I am seeking for Co-operative internship program in a position related
          to Backend software development and Software engineering as I am
          interested in these fields. And, I am aiming to gain new experiences
          and learn new knowledge to develop and improve myself while
          effectively performing my duties in an organization.
        </Text>
      </Flex>
    </Stack>
  );
  //   const { colorMode } = useColorMode();
  //   const colorSecondary = {
  //     light: "grey.700",
  //     dark: "gray.400",
  //   };

  //   return (
  //     <Stack
  //       as="main"
  //       spacing={8}
  //       justifyContent="center"
  //       alignItems="flex-start"
  //       m="0 auto 4rem auto"
  //       maxWidth="700px"
  //       px={2}
  //     >
  //       <Flex
  //         flexDirection="column"
  //         justifyContent="flex-start"
  //         alignItems="flex-start"
  //         maxWidth="700px"
  //       >
  //         <Heading md={2}>Hello World</Heading>
  //         <Text color={colorSecondary[colorMode]}>
  //           I am seeking for Co-operative internship program in a position related
  //           to Backend software development and Software engineering as I am
  //           interested in these fields. And, I am aiming to gain new experiences
  //           and learn new knowledge to develop and improve myself while
  //           effectively performing my duties in an organization.
  //         </Text>
  //       </Flex>
  //     </Stack>
  //   );
}