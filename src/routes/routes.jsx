import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TestView from "../views/TestView";
import Home from "../views/Home";
import Login from "../views/Login";
import CadastroPaciente from "../views/CadastroPaciente";
import Navbar from "../components/Navs/Navbar";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/test" element={<TestView />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cadastro-paciente" element={<CadastroPaciente />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
