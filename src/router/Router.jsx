import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Home />} />
      <Route path="/about" element={<Home />} />
    </Routes>
  );
};

export default Router;
