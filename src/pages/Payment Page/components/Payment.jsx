import "./payment.css";
import PaymentSection from "./PaymentComponent/PaymentSection";
import UserRideHistory from "./UserRideHistoryComponent/UserRideHistory";
import Receipts from "./ReceiptsComponent/Receipts";


function Payment() {
  return (
    <>
    <PaymentSection/>
    <UserRideHistory/>
    <Receipts/>

    </>
  )
}

export default Payment