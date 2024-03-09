import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import LogoForFooter from "../../assets/logo.png";

function Footer() {
  return (
    <Flex
      bg="#34373A"
      pt="5%"
      pb="5%"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        src={LogoForFooter}
        alt="intro-buy-img"
        width={{ base: "70%", md: "40%" }}
        height="40%"
        mr="10%"
      ></Image>
      <Text
        textColor="white"
        fontSize={{ base: "20px", md: "50px" }}
        fontWeight={{ base: "500", md: "700" }}
        textAlign="center"
        width="80%"
        m="auto"
      >
        Just starting out on your coding journey? No Worries! We have
        professionals from top companies from around the globe to help you make
        Interview Ready
      </Text>
    </Flex>
  );
}

export default Footer;
