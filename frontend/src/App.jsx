import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AllTripsPage from "./Pages/AllTripsPage";
import trips from "./assets/data/trips";
import AboutPage from "./Pages/AboutPage";
import SignIn from "./Pages/SignIn";
import SignUpOne from "./Pages/SignUpOne";
import SignUpTwo from "./Pages/SignUpTwo";
import Gallery from "./Pages/Gallery";
import AdminPanel from "./components/adminpanel/AdminPanel";
import UserPanel from "./components/userpanel/UserPanel";
import Test from "./Pages/Popup"
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import axios from "axios";
import Context from "./context/index";
import CreateTrip from "./components/adminpanel/createExperience/CreateTrips"
 axios.defaults.withCredentials = true;

import HostExperience from "./Pages/HostExperience";
import Corporate from "./Pages/Corporate";
import ExperienceDetails from "./Pages/EXPERIENCES/ExperienceDetails";
import Hello from "./Pages/EXPERIENCES/Hello";


const App = () => {

  const dispatch = useDispatch()

  const fetchUserDetails = async() => {
    const dataResponse = await axios.get('http://localhost:8080/api/user-details')
    
    
    if(dataResponse.data.success){
      console.log("dataresponse",dataResponse.data.data)
      dispatch(setUserDetails(dataResponse.data.data))
  }
}

  useEffect(() => {
    fetchUserDetails()
  },[])


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

    <Context.Provider value={{ fetchUserDetails }}>
    <div className="te">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experiences" element={<AllTripsPage trips={trips} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signupone" element={<SignUpOne />} />
          <Route path="/signuptwo" element={<SignUpTwo />} />
          <Route path="/gallery" element={<Gallery images={images} />} />
          <Route path="/admin" element={<AdminPanel />}></Route>
          <Route path="/user" element={<UserPanel />} />
          <Route path="/hostexperience" element={<HostExperience />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="test" element={<Test />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route
            path="/experiences/:tripName"
            element={<ExperienceDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
    </Context.Provider>
  );
};

export default App;
