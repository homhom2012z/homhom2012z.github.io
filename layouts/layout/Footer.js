import React from "react";
import {
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <Stack>
        <HStack
          pt={6}
          pb={6}
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Divider />

          <Text
            fontSize={{ base: "sm", md: "sm" }}
            color="gray.500"
            minW=""
            align="right"
            noOfLines={[1, 2, 2]}
          >
            Copyright &copy; {new Date().getFullYear()}{" "}
            <Text as="i">Siriwat Bunmee.</Text>
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.instagram.com/_victor.ix/"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
              target="_blank"
            />
            <IconButton
              as="a"
              // href=""
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
              target="_blank"
            />
            <IconButton
              as="a"
              type="email"
              href="mailto:siriwat.bun.forwork@gmail.com"
              aria-label="Email"
              icon={<GrMail fontSize="1.25rem" />}
              target="_blank"
            />
          </ButtonGroup>
        </HStack>
      </Stack>
    </>
  );
}
