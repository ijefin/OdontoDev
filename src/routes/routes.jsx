import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TestView from "../views/TestView";
import Home from "../views/Home";
import Login from "../views/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/test" element={<TestView />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        {/* <Route exact path="/cadastro-paciente" element={<Cadastro />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
