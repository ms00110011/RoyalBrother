import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Home from "./Page/HomeComponets/Home";
import Offer from "./Page/OfferComponets/Offer";
import { Blog } from "./Page/BlogComponents/Blog";
import { Franchise } from "../src/Components/Partners/Franchise";
import { Partner } from "../src/Components/Partners/Partner";
import { Woman } from "./Page/WomanComponents/Woman";
import { Terms } from "./Page/TermsComponents/Terms";
import { Privacy } from "./Page/PrivacyComponents/Privacy";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/earn-with-us" element={<Partner />} />
        <Route path="/partner-with-us" element={<Franchise />} />
      </Routes>
    </div>
  );
};
