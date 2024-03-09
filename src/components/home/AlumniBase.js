import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Logo1 from "../../../src/assets/logo1.svg";
import Logo2 from "../../../src/assets/logo2.svg";
import Logo3 from "../../../src/assets/logo3.svg";
import Logo4 from "../../../src/assets/logo4.png";
import Logo5 from "../../../src/assets/logo5.svg";

function AlumniBase() {
  return (
    <Box p="100px 10px">
      <Text
        textAlign="center"
        fontSize={{ base: "35px", md: "50px" }}
        fontWeight="500px"
        mb="40px"
      >
        Our students placed with Alumni Base at
      </Text>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          width={{ base: "60%", md: "15%" }}
          m={{ base: "30px 5%", md: "10px 2%" }}
        >
          <Image
            class="d-block w-100"
            src={Logo1}
            alt="First slide"
            width="100%"
          />
        </Box>
        <Box
          width={{ base: "60%", md: "15%" }}
          m={{ base: "30px 5%", md: "10px 2%" }}
        >
          <Image
            class="d-block w-100"
            src={Logo2}
            alt="First slide"
            width="100%"
          />
        </Box>

        <Box
          width={{ base: "60%", md: "15%" }}
          m={{ base: "30px 5%", md: "10px 2%" }}
        >
          <Image
            class="d-block w-100"
            src={Logo3}
            alt="First slide"
            width="100%"
          />
        </Box>

        <Box
          width={{ base: "60%", md: "15%" }}
          m={{ base: "30px 5%", md: "10px 2%" }}
        >
          <Image
            class="d-block w-100"
            src={Logo4}
            alt="First slide"
            width="100%"
            height="15%"
          />
        </Box>

        <Box
          width={{ base: "60%", md: "15%" }}
          m={{ base: "30px 5%", md: "10px 2%" }}
        >
          <Image
            class="d-block w-100"
            src={Logo5}
            alt="First slide"
            width="100%"
            mr="20%"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default AlumniBase;
