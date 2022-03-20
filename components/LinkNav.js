import NextLink from "next/link";
import { useColorMode, Button, Flex, Box, Heading } from "@chakra-ui/react";

export default function LinkNav({ href, children }) {
  const { colorMode } = useColorMode();
  const navHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };
  const navHoverFont = {
    light: "white",
    dark: "black",
  };

  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        variant="ghost"
        p={[1, 2, 4]}
        _hover={{
          backgroundColor: navHoverBg[colorMode],
          // color: navHoverFont[colorMode],
        }}
      >
        {children}
      </Button>
    </NextLink>
  );
}
