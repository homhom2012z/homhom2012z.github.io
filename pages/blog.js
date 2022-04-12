import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Box,
} from "@chakra-ui/react";

import { getAllFilesFrontMatter } from "../lib/mdx/mdx";
import { SearchIcon } from "@chakra-ui/icons";
import Container from "../components/Container";
import BlogPost from "../components/Blog";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Head>
        <title>Blog - Siriwat Bunmee</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          w={"100%"}
          m="0 auto 4rem auto"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            w={"100%"}
            px={4}
          >
            <Box w={"100%"} mb={8}>
              <Heading letterSpacing="tight" mb={8} as="h1" size="lg">
                Blog ({posts.length} posts)
              </Heading>
              <InputGroup w="100%">
                <Input
                  aria-label="Search by title"
                  placeholder="Search by title"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <InputRightElement>
                  <SearchIcon color="purple.300" />
                </InputRightElement>
              </InputGroup>
            </Box>

            {!filteredBlogPosts.length && (
              <Box w={"100%"} textAlign={"center"} mt={"20vh"} mb={20}>
                <Text>No posts matched your search.</Text>
              </Box>
            )}
            <Stack spacing={10}>
              {filteredBlogPosts.map((frontMatter) => (
                <BlogPost key={frontMatter.title} {...frontMatter} />
              ))}
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
