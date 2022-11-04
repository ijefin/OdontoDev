import Table from "../components/Table/Table";
import Navbar from "../components/Navs/Navbar";
import AuthServices from "../helpers/auth";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal/Modal";
import { render } from "react-dom";

render

const Home = () => {
  const authServices = AuthServices();

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(authServices.verifyToken());
  });

  return (
    <>
      <Navbar />
      <div className="container-fluid  ">
        <div className="container pt-5">
          <h1 className="display-3 myFontColor">Bem vindo!</h1>
          <p className="lead myFontColor">
            Acesse a aba cadastro para um novo paciente/médico, e a aba consulta
            para uma consulta mais filtrada.
          </p>
          <hr className="my-4" />
          <div className="jumbotron">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
