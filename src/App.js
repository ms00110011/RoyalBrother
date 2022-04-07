import "./App.css";

import Navbar from "./Components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/HomeComponets/Home";
import Offer from "./Page/OfferComponets/Offer";

import { Footer } from "./Components/Layout/Footer";
import { Homepage } from "./Components/Homepage";
import { Tariff } from "./Components/Layout/Tariff/Tariff";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/tariff" element={<Tariff />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
