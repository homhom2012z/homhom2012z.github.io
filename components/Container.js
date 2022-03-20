import React from "react";
import { useColorMode, Button, Flex, Box, Heading } from "@chakra-ui/react";

import NextLink from "next/link";
import styled from "@emotion/styled";
import ThemeToggle from "../components/ThemeToggle";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#171717",
  };
  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };
  const color = {
    light: "black",
    dark: "white",
  };
  const navHoverFont = {
    light: "white",
    dark: "black",
  };
  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box color={color[colorMode]}>
          <NextLink href="/" passHref>
            <Heading size="sm" as="a" p={[1, 2, 4]}>
              PORTFOLIO
            </Heading>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{
                backgroundColor: navHoverBg[colorMode],
                color: navHoverFont[colorMode],
              }}
            >
              About
            </Button>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{
                backgroundColor: navHoverBg[colorMode],
                color: navHoverFont[colorMode],
              }}
            >
              Projects
            </Button>
          </NextLink>
          <NextLink href="/cv" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{
                backgroundColor: navHoverBg[colorMode],
                color: navHoverFont[colorMode],
              }}
            >
              CV
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{
                backgroundColor: navHoverBg[colorMode],
                color: navHoverFont[colorMode],
              }}
            >
              Blog
            </Button>
          </NextLink>
        </Box>
        <ThemeToggle />
      </StickNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
