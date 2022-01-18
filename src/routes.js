import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Container/Home";
import SuccessContact from "./Container/SuccessContact";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" exact element={<SuccessContact />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
