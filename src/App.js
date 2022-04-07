import "./App.css";

import Navbar from "./Components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/HomeComponets/Home";
import Offer from "./Page/OfferComponets/Offer";
import { Footer } from "./Components/Layout/Footer";
import { Franchise } from "../src/Components/Partners/Franchise";
import { Partner } from "../src/Components/Partners/Partner";
import { Woman } from "./Page/WomanComponents/Woman";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Partner />
      <Franchise />
      <Woman />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
