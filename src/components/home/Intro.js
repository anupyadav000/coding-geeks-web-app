import React from "react";
import { Flex, Text, Box, Link, Image } from "@chakra-ui/react";
import IntroRightImg from "../../../src/assets/intro.png";

function Intro() {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-around"
      bgColor="#FFD3CB"
      pt="200px"
      pb="100px"
    >
      <Flex flexDirection="column">
        <Text
          fontSize={{ base: "30px", md: "60px" }}
          fontWeight="800"
          textAlign="left"
          ml={{ base: "20px", md: "0px" }}
        >
          Grab your dream job <br></br>with{" "}
          <Text display="inline" color="#FF725C">
            Coding-Geeks
          </Text>
          <br></br>
          Interview Ready<br></br> Course
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          ml={{ base: "20px", md: "0px" }}
        >
          <Box
            bg="#FF725C"
            p={{ base: "10px 20px", md: "10px 60px" }}
            borderRadius="40px"
            fontSize="20px"
            mt="20px"
            bgColor="#FF725C"
            textColor="white"
            mr={{ base: "20px", md: "0px" }}
            _hover={{ bg: "white", textColor: "#FF725C" }}
          >
            <Link href="https://forms.gle/F8wgaiPS33Sgj4Zj7">Get Started</Link>
          </Box>
          <Box
            bg="#FF725C"
            p={{ base: "10px 20px", md: "10px 60px" }}
            borderRadius="40px"
            fontSize="20px"
            mt="20px"
            bgColor="white"
            textColor="#FF725C"
            _hover={{ bg: "#FF725C", textColor: "white" }}
          >
            <Link href="https://forms.gle/F8wgaiPS33Sgj4Zj7">Enroll Now</Link>
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Image src={IntroRightImg} alt="intro-right-img"></Image>
      </Flex>
    </Flex>
  );
}

export default Intro;
