import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Story1 from "../../../src/assets/story1.jpeg";
import Story2 from "../../../src/assets/story2.jpeg";
import Story3 from "../../../src/assets/story3.jpeg";
import Story4 from "../../../src/assets/story4.jpeg";

function SuccessStories() {
  return (
    <Box p="100px 10px">
      <Text textAlign="center" fontSize="50px" fontWeight="500px" mb="40px">
        Our Top Success Stories
      </Text>
      <Flex alignItems="center" justifyContent="center">
        <Box width="20%" m="10px 2%">
          <Image
            class="d-block w-100"
            src={Story1}
            alt="First slide"
            width="100%"
          />
        </Box>
        <Box width="20%" m="10px 2%">
          <Image
            class="d-block w-100"
            src={Story2}
            alt="First slide"
            width="100%"
          />
        </Box>

        <Box width="20%" m="10px 2%">
          <Image
            class="d-block w-100"
            src={Story3}
            alt="First slide"
            width="100%"
          />
        </Box>

        <Box width="20%" m="10px 2%">
          <Image
            class="d-block w-100"
            src={Story4}
            alt="First slide"
            width="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default SuccessStories;
