import React from "react";
import { useColorMode, Button, Flex, Box, Heading } from "@chakra-ui/react";

import NextLink from "next/link";
import styled from "@emotion/styled";
import ThemeToggle from "../components/ThemeToggle";
import { useRouter } from "next/router";
import LinkNav from "./LinkNav";

export default function Navigation() {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;
  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };
  const navHoverFont = {
    light: "white",
    dark: "black",
  };
  const color = {
    light: "black",
    dark: "white",
  };

  return (
    <StickNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="container.lg"
      minWidth="356px"
      width="100%"
      // bg={bgColor[colorMode]}
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
        <LinkNav href="/about">About</LinkNav>
        <LinkNav href="/projects">Projects</LinkNav>
        <LinkNav href="/cv">CV</LinkNav>
        <LinkNav href="/blog">Blog</LinkNav>
      </Box>
      <ThemeToggle />
    </StickNav>
  );
}
