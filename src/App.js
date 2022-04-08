import "./App.css";

import Navbar from "./Components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/HomeComponets/Home";
import Offer from "./Page/OfferComponets/Offer";
import { Footer } from "./Components/Layout/Footer";
import { Blog } from "./Page/BlogComponents/Blog";
import { Franchise } from "../src/Components/Partners/Franchise";
import { Partner } from "../src/Components/Partners/Partner";
import { Woman } from "./Page/WomanComponents/Woman";
import { Terms } from "./Page/TermsComponents/Terms";
import { Privacy } from "./Page/PrivacyComponents/Privacy";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Partner />
      <Franchise />
      <Woman />
      <Terms />
      <Privacy /> */}
      {/* <Home/> */}
      <Blog/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/offer" element={<Offer />} />
        <Route path="/earn-with-us" element={<Partner />} />
        <Route path="/partner-with-us" element={<Franchise />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
