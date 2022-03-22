import React from "react";
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Stack,
  HStack,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import NextLink from "next/link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import ThemeToggle from "../components/ThemeToggle";
import LinkNav from "./LinkNav";

export default function Navigation(props) {
  const { colorMode } = useColorMode();

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: blur(20px);
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
    light: "#000000",
    dark: "#FFFFFF",
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
      {...props}
    >
      <HStack color={color[colorMode]}>
        <motion.a
          whileHover={{
            scale: 1.05,
            color: [`${color[colorMode]}`, "hsl(266, 59, 55)"],
          }}
          whileTap={{
            scale: 0.8,
          }}
        >
          <NextLink href="/" passHref>
            <Heading size="sm" as={"button"} p={[1, 2, 4]}>
              PORTFOLIO
            </Heading>
          </NextLink>
        </motion.a>

        <Box
          display={{ base: "none", md: "flex" }}
          direction={{ base: "row", md: "none" }}
        >
          {/* <LinkNav href="/about">About</LinkNav> */}
          <LinkNav href="/projects">Projects</LinkNav>
          <LinkNav href="/blog">Blog</LinkNav>
          <LinkNav href="/files/pdf/CV.pdf">CV</LinkNav>
        </Box>
      </HStack>
      <Box flex={1} align="right">
        <ThemeToggle />
        <Box ml={2} pl={2} display={{ base: "inline-block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {/* <NextLink href="/" passHref>
                <MenuItem>About</MenuItem>
              </NextLink> */}
              <NextLink href="/projects" passHref>
                <MenuItem>Projects</MenuItem>
              </NextLink>
              <NextLink href="/blog" passHref>
                <MenuItem>Blog</MenuItem>
              </NextLink>
              <NextLink href="/files/pdf/CV.pdf" passHref>
                <MenuItem>CV</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </StickNav>
  );
}
