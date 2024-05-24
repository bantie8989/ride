import { CardFooter } from "@chakra-ui/react";
import Topbar from "../../HomePage/components/TopbarComponent/Topbar";
import PaymentMethods from "./Payment Methods Component/PaymentMethods";
import Profile from "./Profile Information Componet/Profile";
import RideHistory from "./Ride History Component/RideHistory";
import Footer from "../../HomePage/components/FooterComponent/Footer";
import "./account.css";

function Account() {
  return (
    <>
      <Topbar />
      <Profile />
      <PaymentMethods/>
      <RideHistory />
      <Footer/>
    </>
  );
}

export default Account;
