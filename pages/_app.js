import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";

import customTheme from "../styles/theme";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import HandleScroll from "../components/HandleScroll";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <HandleScroll />
      <Navigation />
      <motion.div
        key={router.pathname}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </ChakraProvider>
  );
}

export default MyApp;
