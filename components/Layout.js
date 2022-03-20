import React from "react";
import { useColorMode, Flex, Container } from "@chakra-ui/react";

import GlobalStyle from "../components/GlobalStyle";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  return (
    <Container maxW="4xl">
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
    </Container>
  );
};

export default Layout;
