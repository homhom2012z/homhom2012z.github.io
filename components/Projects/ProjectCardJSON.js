import { Box, Stack, Code } from "@chakra-ui/react";
import loadable from "@loadable/component";
const ReactJson = loadable(() => import("react-json-view"));

const ProjectCardJSON = ({ data, id }) => {
  return (
    <>
      <Box maxWidth={"container.md"}>
        {/* <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(data, null, 2)}
        </pre> */}
        <ReactJson
          name={false}
          displayObjectSize={false}
          displayDataTypes={false}
          enableClipboard={false}
          src={data}
          theme="rjv-default"
        />
      </Box>
    </>
  );
};

export default ProjectCardJSON;
