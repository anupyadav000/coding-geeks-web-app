import React from "react";
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import WhyBuyLeftImg from "../../../src/assets/introCourseLeft.png";
import points1Icon from "../../../src/assets/points1.png";
import points2Icon from "../../../src/assets/points2.png";
import points3Icon from "../../../src/assets/points3.png";
import points4Icon from "../../../src/assets/points4.png";
import points5Icon from "../../../src/assets/points5.png";

function WhyToBuy() {
  return (
    <Box mt="10%" mb="10%">
      <Text textAlign="center" fontSize="40px" mb="50px" m="20px 50px">
        Coding Geeks Interview Ready Course
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Image
          src={WhyBuyLeftImg}
          alt="intro-buy-img"
          width="60%"
          height="40%"
          mr="10%"
        ></Image>
        <Flex flexDirection="row">
          <Flex flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              p={{ base: "10px", md: "30px" }}
              width={{ base: "95%", md: "80%" }}
              border="1px solid #f0f0f0;"
              boxShadow="0 0 10px rgba(0,0,0,.06);"
              m="auto"
              mb="8px;"
              _hover={{
                border: "1px solid #FF725C;",
                textColor: "#FF725C",
              }}
            >
              <Image
                src={points1Icon}
                alt="point1-icon"
                width={{ base: "10%", md: "5%" }}
              ></Image>
              <Text ml="10%" fontSize="30x" fontWeight="500">
                Top notch curriculum , designed by working professionals
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              p={{ base: "10px", md: "30px" }}
              width={{ base: "95%", md: "80%" }}
              border="1px solid #f0f0f0;"
              boxShadow="0 0 10px rgba(0,0,0,.06);"
              m="auto"
              mb="8px;"
              _hover={{
                border: "1px solid #FF725C;",
                textColor: "#FF725C",
              }}
            >
              <Image
                src={points2Icon}
                alt="point2-icon"
                width={{ base: "10%", md: "5%" }}
              ></Image>
              <Text ml="10%" fontSize="30x" fontWeight="500">
                5 month course with interactive live classes
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              p={{ base: "10px", md: "30px" }}
              width={{ base: "95%", md: "80%" }}
              border="1px solid #f0f0f0;"
              boxShadow="0 0 10px rgba(0,0,0,.06);"
              m="auto"
              mb="8px;"
              _hover={{
                border: "1px solid #FF725C;",
                textColor: "#FF725C",
              }}
            >
              <Image
                src={points3Icon}
                alt="point3-icon"
                width={{ base: "10%", md: "5%" }}
              ></Image>
              <Text ml="10%" fontSize="30x" fontWeight="500">
                Weekly contest and separate doubt solving session
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              p={{ base: "10px", md: "30px" }}
              width={{ base: "95%", md: "80%" }}
              border="1px solid #f0f0f0;"
              boxShadow="0 0 10px rgba(0,0,0,.06);"
              m="auto"
              mb="8px;"
              _hover={{
                border: "1px solid #FF725C;",
                textColor: "#FF725C",
              }}
            >
              <Image
                src={points4Icon}
                alt="point4-icon"
                width={{ base: "10%", md: "5%" }}
              ></Image>
              <Text ml="10%" fontSize="30x" fontWeight="500">
                Cheap and affordable price of just 2499/-
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              p={{ base: "10px", md: "30px" }}
              width={{ base: "95%", md: "80%" }}
              border="1px solid #f0f0f0;"
              boxShadow="0 0 10px rgba(0,0,0,.06);"
              m="auto"
              mb="8px;"
              _hover={{
                border: "1px solid #FF725C;",
                textColor: "#FF725C",
              }}
            >
              <Image
                src={points5Icon}
                alt="point5-icon"
                width={{ base: "10%", md: "5%" }}
              ></Image>
              <Text ml="10%" fontSize="30x" fontWeight="500">
                Free Mock Interview at end of the course
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default WhyToBuy;
