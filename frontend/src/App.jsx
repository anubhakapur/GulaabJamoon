import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AllTripsPage from "./Pages/AllTripsPage";
import trips from "./assets/data/trips";
import AboutPage from "./Pages/AboutPage";
import SignIn from "./Pages/SignIn";
import SignUpOne from "./Pages/SignUpOne";
import SignUpTwo from "./Pages/SignUpTwo";
import Gallery from "./Pages/Gallery";

const App = () => {
  const images = [
    {
      url: "/src/assets/images/bg-main.jpg",
      alt: "Image 1",
    },
    {
      url: "/src/assets/images/bg-main.jpg",
      alt: "Image 2",
    },
    {
      url: "/src/assets/images/bg-main.jpg",
      alt: "Image 3",
    },
    {
      url: "/src/assets/images/bg-main.jpg",
      alt: "Image 1",
    },
    {
      url: "/src/assets/images/bg-main.jpg",
      alt: "Image 2",
    },
    {
      url: "/src/assets/images/bg-main.jpg",
      alt: "Image 3",
    },
    // Add more image objects as needed
  ];

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
          <Route path="/gallery" element={<Gallery images={images} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;