import { useColorModeValue } from "@chakra-ui/react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const iconColor = {
    light: "black",
    dark: "white",
  };
  const colorHv = useColorModeValue("purple.100", "purple.700");

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
      _hover={{
        background: `${colorHv}`,
      }}
    />
  );
};

export default ThemeToggle;
