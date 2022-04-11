import NextLink from "next/link";
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Heading,
  Icon,
} from "@chakra-ui/react";

export default function LinkItem({ href, children, rightIcon }) {
  const { colorMode } = useColorMode();

  const navHoverBg = {
    light: "purple.100",
    dark: "purple.700",
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
        target={"_blank"}
        rightIcon={rightIcon && <Icon as={rightIcon} />}
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
