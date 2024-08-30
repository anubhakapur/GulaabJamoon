import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AllTripsPage from "./Pages/AllTripsPage";
import trips from "./assets/data/trips";
import AboutPage from "./Pages/AboutPage";
import Signin from "./Pages/Signin";
const App = () => {
  return (
    <div className="te">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-trips" element={<AllTripsPage trips={trips} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
