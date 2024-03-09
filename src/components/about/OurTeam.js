import React from "react";
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import myPic from "../../assets/profile.jpg";

function OurTeam() {
  return (
    <Flex>
      <Flex flexDirection="column" textAlign="center" mt="40%" mb="20%">
        <Text
          mb={{ base: "10%", md: "2%" }}
          fontSize={{ base: "40px", md: "60px" }}
        >
          Instructor
        </Text>
        <Flex
          flexDirection="column"
          border="1px solid black"
          borderRadius="20px"
          width={{ base: "80%", md: "40%" }}
          margin="auto"
        >
          <Flex
            border="1px solid black"
            borderRadius="20px"
            padding="10px 30px"
            flexDirection={{ base: "column", md: "row" }}
            width="100%"
          >
            <Image
              src={myPic}
              alt="profile-pic"
              width={{ base: "70%", md: "30%" }}
              height={{ base: "50%", md: "90%" }}
              mr="5%"
              borderRadius="50%"
            ></Image>
            <Box
              textAlign="left"
              margin="auto"
              mt={{ base: "20px", md: "0px" }}
            >
              <Text>Anup Yadav</Text>
              <Text fontWeight="600">SDE @ Razorpay</Text>
              <Text>Ex-SDE Intern @ Grow Simplee</Text>
              <Text>Ex-SDE Intern @ Filo</Text>
              <Text fontWeight="600">IITD'22 Graduate</Text>
            </Box>
          </Flex>
          <Box p="20px 50%">
            <a href="https://www.linkedin.com/in/anup-yadav-92174b19a/">
              <span
                role="img"
                aria-label="linkedin"
                class="anticon anticon-linkedin"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="linkedin"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                </svg>
              </span>
            </a>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default OurTeam;
