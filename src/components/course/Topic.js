import React from "react";
import { useCollapse } from 'react-collapsed';
import { Text, Box } from "@chakra-ui/react";

function Topic({ topicData }) {
  const config = {
    duration: 300,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <Box
      className="collapsible"
      _hover={{ bg: "#FFD3CB", border: "1px solid #FF725C" }}
      border="1px solid #F0F0F0"
      mb="10px"
      pl="10px"
      pt="10px"
      pb="10px"
      pr="20px"
    >
      <div className="header" {...getToggleProps()}>
        <Box display="flex" flexDirection="row">
          <Text mr="10px" fontWeight="900">
            {isExpanded ? "^" : ">"}
          </Text>
          <Text>{topicData[0][0]}</Text>
        </Box>
      </div>
      <Box {...getCollapseProps()} ml="20px" mt="10px" mb="10px">
        <div className="content">
          <ol>
            {topicData[1].map((topic, ind) => {
              return (
                <li>
                  <Text key={ind}>{topic}</Text>
                </li>
              );
            })}
          </ol>
        </div>
      </Box>
    </Box>
  );
}

export default Topic;
