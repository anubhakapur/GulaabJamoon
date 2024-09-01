import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AllTripsPage from "./Pages/AllTripsPage";
import trips from "./assets/data/trips";
import AboutPage from "./Pages/AboutPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/Signup";

const App = () => {
  return (
    <div className="te">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-trips" element={<AllTripsPage trips={trips} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
