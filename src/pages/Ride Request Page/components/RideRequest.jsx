import "./rideRequest.css"
import Confirmation from "./Confirmation Component/Confirmation"
import RideListing from "./Ride Listings Component/RideListing"
import RideBooking from "./RideBooking Component/RideBooking"
import SearchBar from "./SearchBar Component/SearchBar"

function RideRequest() {
  return (
    <>
    <Confirmation/>
    <RideListing/>
    <RideBooking/>
    <SearchBar/>
    </>
  )
}

export default RideRequest