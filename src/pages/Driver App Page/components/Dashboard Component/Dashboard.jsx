import {
  Box,
  Flex,
  Heading,
  Text,
  Switch,
  List,
  ListItem,
  ListIcon,
  Button,
  space,
} from "@chakra-ui/react";
import { useState } from "react";

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [upcomingRides, setUpcomingRides] = useState([
    {
      id: 1,
      passengerName: "John Doe",
      pickupLocation: "123 Main St",
      estimatedArrivalTime: "10:00 AM",
    },
    {
      id: 2,
      passengerName: "Jane Doe",
      pickupLocation: "456 Elm St",
      estimatedArrivalTime: "11:00 AM",
    },
  ]);
  const [earnings, setEarnings] = useState({
    daily: "$100.00",
    weekly: "$500.00",
  });

  const handleToggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <Box p={4} bg="black" borderRadius="lg" boxShadow="md" textAlign={"center"} >
      <Flex justify="space-between" align="center" mb={4} justifyContent={"space-around"} pb={10}>
        <Heading as="h2" size="lg" >
          Driver Dashboard
        </Heading>
        <Switch
          size="lg"
          isChecked={isOnline}
          onChange={handleToggleOnlineStatus}
        >
          {isOnline ? "Online" : "Offline"}
        </Switch>
      </Flex>

      <Box mb={4}>
        <Heading as="h3" size="md">
          Upcoming Rides
        </Heading>
        <List spacing={2}>
          {upcomingRides.map((ride) => (
            <ListItem key={ride.id} py={2}>
              <ListIcon name="clock" color="gray.500" />
              <Text>
                {ride.passengerName} - {ride.pickupLocation} -{" "}
                {ride.estimatedArrivalTime}
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mb={4}>
        <Heading as="h3" size="md">
          Earnings Summary
        </Heading>
        <Text>
          Daily: {earnings.daily}
          <br />
          Weekly: {earnings.weekly}
        </Text>
      </Box>

      <Button colorScheme="blue" variant="solid" size="lg" w="half">
        Access Navigation Tools
      </Button>
    </Box>
  );
};

export default DriverDashboard;
