import React from "react";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const Mission = () => {
  return (
    <Box>
      <Heading size="lg" mb={4}>
        Our Mission and Vision
      </Heading>
      <VStack spacing={8} alignItems="flex-start">
        <Box>
          <Text fontSize="md" fontWeight="bold" mb={2}>
            Mission Statement
          </Text>
          <Text fontSize="md">
            Our mission is to revolutionize employee commutes in Ethiopia by
            providing a convenient, cost-effective, and eco-friendly
            ride-sharing platform.
          </Text>
        </Box>
        <Box>
          <Text fontSize="md" fontWeight="bold" mb={2}>
            Vision Statement
          </Text>
          <Text fontSize="md">
            We envision a future where Ethiopian cities are less congested, the
            environment is cleaner, and employees enjoy a stress-free commute
            experience.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Mission;
