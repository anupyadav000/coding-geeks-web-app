import React from "react";
import Intro from "./Intro";
import { Flex } from "@chakra-ui/react";
import Register from "./Register";
import WhyToBuy from "./WhyToBuy";
import AlumniBase from "./AlumniBase";

function Home() {
  return (
    <Flex flexDirection="column">
      <Intro></Intro>
      <hr bg="#FAFAFA" height="2px" box-shadow="5px 10px;"></hr>
      <AlumniBase></AlumniBase>
      <hr bg="#FAFAFA" height="2px" box-shadow="5px 10px;"></hr>
      <WhyToBuy></WhyToBuy>
      <hr bg="#FAFAFA" height="2px" box-shadow="5px 10px;"></hr>
      <Register></Register>
      <hr bg="#FAFAFA" height="2px" box-shadow="5px 10px;"></hr>
    </Flex>
  );
}

export default Home;
