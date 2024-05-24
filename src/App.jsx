import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/components/Home";
import Account from "./pages/Account Page/components/Account";
import Driver from "./pages/Driver App Page/components/Driver";
import Payment from "./pages/Payment Page/components/Payment";
import RideRequest from "./pages/Ride Request Page/components/RideRequest";
import About from "./pages/About us Page/components/About";

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/ride-request" element={<RideRequest />} />
          <Route path="/about" element={<About />} />
          {/* You can add more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;