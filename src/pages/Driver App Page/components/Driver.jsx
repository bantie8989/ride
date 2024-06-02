import "./driver.css";
import Dashboard from "./Dashboard Component/Dashboard";
import Navigation from "./Navigation Compnent/Navigation";
import RideRequest from "./RideRequestCompnent/RideRequests";
import Settings from "./Settings component/Setting";
import RideManagement from "./Ride Management Component/RideMangement";
import Topbar from "../../HomePage/components/TopbarComponent/Topbar";
import Footer from "../../HomePage/components/FooterComponent/Footer";
import RideHistory from "../../Account Page/components/Ride History Component/RideHistory"

function Driver() {
  const sampleRequests = [
    {
      id: 1,
      passengerName: "John Doe",
      passengerPhoto: "https://via.placeholder.com/40x40",
      pickupLocation: "123 Main St",
      destination: "456 Elm St",
      estimatedFare: 15.5,
      numPassengers: 1,
    },
    {
      id: 2,
      passengerName: "Jane Smith",
      passengerPhoto: "https://via.placeholder.com/40x40",
      pickupLocation: "789 Oak St",
      destination: "321 Pine St",
      estimatedFare: 20.0,
      numPassengers: 2,
    },
    {
      id: 3,
      passengerName: "Bob Johnson",
      passengerPhoto: "https://via.placeholder.com/40x40",
      pickupLocation: "654 Maple St",
      destination: "890 Birch St",
      estimatedFare: 25.5,
      numPassengers: 3,
    },
    {
      id: 4,
      passengerName: "Bob Johnson",
      passengerPhoto: "https://via.placeholder.com/40x40",
      pickupLocation: "654 Maple St",
      destination: "890 Birch St",
      estimatedFare: 25.5,
      numPassengers: 3,
    },
    {
      id: 5,
      passengerName: "Bob Johnson",
      passengerPhoto: "https://via.placeholder.com/40x40",
      pickupLocation: "654 Maple St",
      destination: "890 Birch St",
      estimatedFare: 25.5,
      numPassengers: 3,
    },
    {
      id: 6,
      passengerName: "Bob Johnson",
      passengerPhoto: "https://via.placeholder.com/40x40",
      pickupLocation: "654 Maple St",
      destination: "890 Birch St",
      estimatedFare: 25.5,
      numPassengers: 3,
    },
    {
      id: 7,
      passengerName: "Bob Johnson",
      passengerPhoto: "https://via.placeholder.com/40x40",
      pickupLocation: "654 Maple St",
      destination: "890 Birch St",
      estimatedFare: 25.5,
      numPassengers: 3,
    },
  ];
  const ride = {
    id: 123,
    passenger: {
      name: "John Doe",
      phoneNumber: "123-456-7890",
    },
    pickupLocation: {
      address: "123 Main St",
      lat: 37.7749,
      lng: -122.4194,
    },
    dropoffLocation: {
      address: "456 Market St",
      lat: 37.7849,
      lng: -122.4058,
    },
  };


  return (
    <>
      <Topbar />
      <Dashboard />
      <RideRequest requests={sampleRequests} />
      <Settings />
      <RideHistory/>
      <Navigation />
      <RideManagement ride = {ride}/>
      <Footer />
    </>
  );
}

export default Driver;
