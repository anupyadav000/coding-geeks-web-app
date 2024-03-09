import React from "react";
import Provides from "./Provides";
import { Flex } from "@chakra-ui/react";
import Syllabus from "./Syllabus";

function Course() {
  return (
    <Flex flexDirection="column">
      <Provides></Provides>
      <Syllabus></Syllabus>
    </Flex>
  );
}

export default Course;
