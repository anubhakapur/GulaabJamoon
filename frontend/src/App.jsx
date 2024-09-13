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
import Test from "./Pages/Popup";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import axios from "axios";
import Context from "./context/index";
import CreateTrip from "./components/adminpanel/createExperience/CreateTrips";
axios.defaults.withCredentials = true;

import HostExperience from "./Pages/HostExperience";
import Corporate from "./Pages/Corporate";
import ExperienceDetails from "./Pages/EXPERIENCES/ExperienceDetails";
import Hello from "./Pages/EXPERIENCES/Hello";
import TnC from "./Pages/legal/t&c";
import Privacy from "./Pages/legal/PrivacyPolicy";
import Refund from "./Pages/legal/RefundPolicy";
import Antislavery from "./Pages/legal/AntiSlavery";
import AntiCorruption from "./Pages/legal/AntiCorruption";
import Responsibletravel from "./Pages/legal/ResponsibleTravel";

import { BASE_URL } from "./constants";

const App = () => {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await axios.get(`${BASE_URL}/user-details`);

    if (dataResponse.data.success) {
      console.log("dataresponse", dataResponse.data.data);
      dispatch(setUserDetails(dataResponse.data.data));
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

 

  return (
    <Context.Provider value={{ fetchUserDetails }}>
      <div className="te">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/experiences"
              element={<AllTripsPage trips={trips} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signupone" element={<SignUpOne />} />
            <Route path="/signuptwo" element={<SignUpTwo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin" element={<AdminPanel />}></Route>
            <Route path="/user" element={<UserPanel />} />
            <Route path="/hostexperience" element={<HostExperience />} />
            <Route path="corporate" element={<Corporate />} />
            <Route path="test" element={<Test />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/terms-and-conditions" element={<TnC />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/refund-policy" element={<Refund />} />
            <Route
              path="/anti-slavery-and-human-trafficking-policy"
              element={<Antislavery />}
            />
            <Route
              path="/anti-corruption-and-bribery-policy"
              element={<AntiCorruption />}
            />
            <Route
              path="/responsible-travel-policy"
              element={<Responsibletravel />}
            />
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
