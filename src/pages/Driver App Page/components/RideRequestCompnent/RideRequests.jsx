import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
  Avatar,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';



const RideRequests = ({ requests }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  const handleAccept = (requestId) => {
    // handle accepting the request
  };

  const handleDecline = (requestId) => {
    // handle declining the request
  };

  return (
    <Box p={4} bg={bgColor} borderRadius="lg" boxShadow="md" backgroundColor={'goldenrod'} textAlign={'center'} m={10}>
      <Heading as="h2" size="lg" mb={4} w={"100%"}  backgroundColor={'blue.200'} p={2} borderRadius={10}>
        Ride Requests
      </Heading>

      {requests &&(
        <List spacing={4}>
          {requests.map((request) => (
            <ListItem key={request.id} border={'dotted' } borderColor={'black'} p={2}>
              <Flex alignItems="center">
                <Avatar size="sm" name={request.passengerName} src={request.passengerPhoto} />
                <Spacer />
                <Box>
                  <Text fontWeight="bold">{request.passengerName}</Text>
                  <Text>{request.pickupLocation} - {request.destination}</Text>
                  <Text>Estimated fare: ${request.estimatedFare}</Text>
                  <Text>
                    {request.numPassengers} {request.numPassengers > 1 ? 'passengers' : 'passenger'}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    size="sm"
                    mr={2}
                    onClick={() => handleAccept(request.id)}
                  >
                    Accept
                  </Button>
                  <Button colorScheme="red" variant="solid" size="sm" onClick={() => handleDecline(request.id)}>
                    Decline
                  </Button>
                </Box>
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default RideRequests;