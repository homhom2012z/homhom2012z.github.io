import { Box, Stack, Code } from "@chakra-ui/react";

const ProjectCardJSON = ({ data, id }) => {
  return (
    <>
      <Box maxWidth={"container.md"}>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </Box>
    </>
  );
};

export default ProjectCardJSON;
