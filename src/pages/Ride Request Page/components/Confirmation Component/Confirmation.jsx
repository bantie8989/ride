import { Box, Text, Button, Center } from "@chakra-ui/react";

const Confirmation = ({ride, user}) => {
  return (
    <Center w={"50%"}>
      <Box
        w="100%"
        p={14}
        bg="green.50"
        borderRadius="md"
        boxShadow="md"
        mb={4}
      >
        <Text fontSize="lg" fontWeight="bold" color="green.800">
        You have selected {ride}. Please wait...
        </Text>
        <Button
          colorScheme="blue"
          variant="solid"
          size="sm"
          w="100%"
          mt={2}
          onClick={() => {
            // Add logic to proceed with the ride request
          }}
        >
          Proceed
        </Button>
      </Box>
    </Center>
  );
};

export default Confirmation;
