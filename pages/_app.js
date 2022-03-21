import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import customTheme from "../styles/theme";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import HandleScroll from "../components/HandleScroll";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <HandleScroll />
      <Navigation />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
