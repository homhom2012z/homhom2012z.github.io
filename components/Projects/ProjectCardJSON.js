import { Box } from "@chakra-ui/react";
import loadable from "@loadable/component";
const ReactJson = loadable(() => import("react-json-view"));

// JSON Card by RJV
const ProjectCardJSON = ({ data, id }) => {
  return (
    <>
      <Box maxWidth={"container.md"}>
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

// Custom JSON View by Pre tag
// const ProjectCardJSON = ({ data, id }) => {
//   return (
//     <>
//       <Box maxWidth={"container.md"}>
//         <pre style={{ whiteSpace: "pre-wrap" }}>
//           {JSON.stringify(data, null, 2)}
//         </pre>
//       </Box>
//     </>
//   );
// };

export default ProjectCardJSON;
