import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Select,
  Checkbox,
  CheckboxGroup,
  VStack,
  HStack,
  Avatar,
  Badge,
  grid,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

const RideListing = () => {
  const [filters, setFilters] = useState({
    numSeats: "",
    carType: "",
    driverPrefs: [],
  });

  const [rideListings, setRideListings] = useState([
    // sample ride listing data
    {
      id: 1,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 2,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 3,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 4,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 5,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 6,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 7,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 8,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 9,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 10,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 11,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 12,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    // ...
  ]);

  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  const filteredRideListings = rideListings.filter((ride) => {
    if (filters.numSeats && ride.numSeats < filters.numSeats) return false;
    if (filters.carType && ride.carType !== filters.carType) return false;
    if (filters.driverPrefs.length > 0) {
      const matchingPrefs = ride.driverPrefs.filter((pref) =>
        filters.driverPrefs.includes(pref)
      );
      if (matchingPrefs.length !== filters.driverPrefs.length) return false;
    }
    return true;
  });

  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box w={"100%"} p={10} m={10}>
      {/* Filter section */}
      <VStack mb={4}>
        <Text fontSize="lg" mb={2}>
          Filter by:
        </Text>
        <HStack spacing={4}>
          <Select
            value={filters.numSeats}
            onChange={(e) => handleFilterChange("numSeats", e.target.value)}
            placeholder="Number of seats"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <Select
            value={filters.carType}
            onChange={(e) => handleFilterChange("carType", e.target.value)}
            placeholder="Car type"
          >
            <option value="Fuel-efficient">Fuel-efficient</option>
            <option value="Luxury">Luxury</option>
            <option value="Eco-friendly">Eco-friendly</option>
          </Select>
          <CheckboxGroup
            value={filters.driverPrefs}
            onChange={(values) => handleFilterChange("driverPrefs", values)}
          >
            <HStack spacing={2}>
              <Checkbox value="Non-smoking">Non-smoking</Checkbox>
              <Checkbox value="No music">No music</Checkbox>
              <Checkbox value="Pet-friendly">Pet-friendly</Checkbox>
            </HStack>
          </CheckboxGroup>
        </HStack>
      </VStack>

      {/* Ride listings section */}

      <SimpleGrid columns={columnCount} spacing={18} mt={10}>
        {filteredRideListings.map((ride , index) => (
          <Grid templateColumns="repeat(1, 1fr)" gap={14} key={index}>
            <GridItem key={ride.id} p={10}>
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <Avatar src={ride.driver.profilePicture} size="sm" />
                <Text fontSize="lg" fontWeight="bold" ml={2}>
                  {ride.driver.name}
                </Text>
                <Badge
                  variant="outline"
                  colorScheme="green"
                  fontSize="sm"
                  ml={2}
                >
                  {ride.driver.rating} stars
                </Badge>
              </Flex>
              <Text fontSize="md" mb={2}>
                {ride.origin} → {ride.destination}
              </Text>
              <Text fontSize="md" mb={2}>
                Estimated travel time: {ride.travelTime}
              </Text>
              <Text fontSize="md" mb={2}>
                Estimated cost: {ride.cost}
              </Text>
              <Text fontSize="md" mb={2}>
                Number of seats available: {ride.numSeats}
              </Text>
              {ride.vehicle && (
                <Text fontSize="md" mb={2}>
                  Vehicle: {ride.vehicle}
                </Text>
              )}
              <Text fontSize="md" mb={2}>
                Driver preferences:{" "}
                {ride.driverPrefs.map((pref, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    colorScheme="gray"
                    mr={1}
                  >
                    {pref}
                  </Badge>
                ))}
              </Text>
              <Button
                colorScheme="blue"
                variant="solid"
                size="sm"
                w="100%"
                mb={4}
              >
                Select
              </Button>
            </GridItem>
          </Grid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RideListing;
