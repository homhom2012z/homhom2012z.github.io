import React from "react";
import Head from "next/head";

import { useColorMode, Flex, VStack, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";

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
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Siriwat Bunmee</title>
      </Head> */}

      <Container
        display="flex"
        maxW="container.md"
        minH={{ base: "auto", md: "100vh" }}
      >
        <GlobalStyle>
          <VStack flex={1} spacing={16} alignItems="stretch" w="full">
            <Flex
              flex={1}
              as="main"
              justifyContent="top"
              flexDirection="column"
              bg={bgColor[colorMode]}
              color={color[colorMode]}
              // px={[0, 4, 4]}
              mt={[4, 8, 8]}
            >
              {children}
            </Flex>
            <Footer />
          </VStack>
        </GlobalStyle>
      </Container>
    </>
  );
};

export default Layout;
