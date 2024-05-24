import React from "react";
import { Box, Text, Heading, VStack, Avatar, Center } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box>
      <Center>
        <VStack>
          <Heading size="lg" mb={4}>
            Profile Information
          </Heading>
          <VStack spacing={4} alignItems="center">
            <Avatar size="xl" src="https://bit.ly/sage-adebayo" />
            <Text fontSize="md" fontWeight="bold">
              John Doe
            </Text>
            <Text fontSize="md">johndoe@example.com</Text>
            <Text fontSize="md">+1 (123) 456-7890</Text>
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default Profile;
