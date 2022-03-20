import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import Navigation from "../components/Navigation";
// import Container from "../components/Container";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Navigation />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
