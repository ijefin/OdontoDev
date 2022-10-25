import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
