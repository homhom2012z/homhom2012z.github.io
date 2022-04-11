import React from "react";
import { useColorMode, Flex } from "@chakra-ui/react";

import GlobalStyle from "../styles/global";

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
