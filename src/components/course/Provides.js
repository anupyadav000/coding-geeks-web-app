import React from "react";
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import programmerImg from "../../../src/assets/programmer.jpg";
import points1Icon from "../../../src/assets/points1.png";
import points2Icon from "../../../src/assets/points2.png";
import points3Icon from "../../../src/assets/points3.png";

function Provides(props) {
  return (
    <Box mt={{ base: "40%", md: "10%" }}>
      <Text
        textAlign="center"
        fontSize={{ base: "30px", md: "60px" }}
        mb="100px"
        fontWeight="700"
      >
        Coding Geeks Provides You:
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
      >
        <Image
          src={programmerImg}
          alt="intro-buy-img"
          width={{ base: "80%", md: "25%" }}
          height="20%"
          mr="5%"
          ml="5%"
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
                width={{ base: "15%", md: "5%" }}
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
              mt="5%"
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
                width={{ base: "15%", md: "5%" }}
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
              mt="5%"
              _hover={{
                border: "1px solid #FF725C;",
                textColor: "#FF725C",
              }}
            >
              <Image
                src={points3Icon}
                alt="point3-icon"
                width={{ base: "15%", md: "5%" }}
              ></Image>
              <Text ml="10%" fontSize="30x" fontWeight="500">
                Weekly contest and separate doubt solving session
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Provides;
