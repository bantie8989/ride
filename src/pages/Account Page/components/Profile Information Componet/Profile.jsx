import React from "react";
import { Box, Text, Heading, VStack, Avatar, Center } from "@chakra-ui/react";
import { FaMailBulk, FaPhone, FaVoicemail } from "react-icons/fa";

const Profile = () => {
  return (
    <Box>
      <Center>
        <VStack>
          <Heading size="lg" mb={29} mt={10}>
            Profile Information
          </Heading>
          <VStack
            spacing={4}
            alignItems="center"
            mt={20}
            mb={20}
            fontWeight={"bolder"}
            fontFamily={"initial"}
            color={"goldenrod"}
          >
            <Avatar size="xl" src="https://bit.ly/sage-adebayo" />
            <Text fontSize="md" fontWeight="bold" mb={10}>
              John Doe
            </Text>
            <Box display={"flex"} alignItems={"center"}>
              <FaMailBulk size={30} />
              <Text ml={5} fontSize="md">
                johndoe@example.com
              </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <FaPhone size={30} />

              <Text ml={30} fontSize="md">
                +1 (123) 456-7890
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default Profile;
