import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AllTripsPage from "./Pages/AllTripsPage";
import trips from "./assets/data/trips";

const App = () => {
  return (
    <div className="te">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-trips" element={<AllTripsPage trips={trips} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
