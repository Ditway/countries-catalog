import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "../pages/CountryDetail";
import Home from "../pages/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
