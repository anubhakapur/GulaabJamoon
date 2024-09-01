import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AllTripsPage from "./Pages/AllTripsPage";
import trips from "./assets/data/trips";
import AboutPage from "./Pages/AboutPage";
import SignIn from "./Pages/SignIn";
import SignUpOne from "./Pages/SignUpOne";
import SignUpTwo from "./Pages/SignUpTwo";

const App = () => {
  return (
    <div className="te">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-trips" element={<AllTripsPage trips={trips} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signupone" element={<SignUpOne />} />
          <Route path="/signuptwo" element={<SignUpTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
