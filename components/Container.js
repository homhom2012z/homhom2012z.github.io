import React from "react";
import { useColorMode, Button, Flex, Box, Heading } from "@chakra-ui/react";
import { ColorModeProvider } from "@chakra-ui/react";

import NextLink from "next/link";
import styled from "@emotion/styled";
import ThemeToggle from "../components/ThemeToggle";
import Navigation from "../components/Navigation";
import GlobalStyle from "../components/GlobalStyle";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "grey.900",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  return (
    <>
      <GlobalStyle>
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
      </GlobalStyle>
    </>
  );
};

export default Container;
