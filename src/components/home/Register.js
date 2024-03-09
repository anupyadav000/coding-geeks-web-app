import React from "react";
import { Flex, Link, Text, Box } from "@chakra-ui/react";

function Register() {
  return (
    <Flex
      bg="#FFD3CB"
      width="100%"
      flexDirection="column"
      height="50%"
      alignItems="center"
    >
      <Text mt="50px" fontSize={{ base: "30px", md: "50px" }} fontWeight="600">
        Enroll Now!
      </Text>
      <Text
        mt="20px"
        mb="5px"
        fontSize="30px"
        fontWeight="400"
        textAlign="center"
      >
        What are you waiting for?
      </Text>
      <Text mb="20px" fontSize="30px" fontWeight="400" textAlign="center">
        Enroll Now In Program Which Makes You Interview Ready.
      </Text>
      <Box
        bg="#FF725C"
        _hover={{ bg: "#FFFFFF" }}
        p="10px 40px"
        borderRadius="40px"
        fontSize="30px"
        mt="20px"
        mb="80px"
      >
        <Link href="https://forms.gle/F8wgaiPS33Sgj4Zj7">Apply Now</Link>
      </Box>
    </Flex>
  );
}

export default Register;
