import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export default function HandleScroll() {
  const [width, setWidth] = useState(1);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    setWidth(scrollPercentRounded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Box
      h={1}
      as="div"
      bgGradient="linear(to-r, blue.600, blue.400, purple.400, purple.600)"
      position="sticky"
      transition="all 200ms linear"
      top={0}
      zIndex={100}
      w={`${width}%`}
    ></Box>
  );
}
