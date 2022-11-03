import logo from "../assets/images/odontoLogo.png";
import Table from "../components/Table/Table";
import { Link } from "react-router-dom";
import LogoutButton from "../components/Buttons/LogoutButton/Logout";
import AuthServices from "../helpers/auth";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const authServices = AuthServices();

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(authServices.verifyToken());
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow-sm">
        <div className="container">
          <div className="img myRMoveAnimation">
            <Link to="/home">
              <img src={logo} alt="logo odontoDev" width={"40%"} />
            </Link>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarColor01 ">
              <ul className="navbar-nav me-auto myLMoveAnimation myFontSize">
                <li className="nav-item">
                  <Link to="/home" className="nav-link active myFontSize">
                    <span className="m-2">Início</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link "
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="text-light m-2">Cadastro</span>
                  </span>
                  <div className="dropdown-menu myFastFadeAnimation border border-black">
                    <Link
                      to="/cadastro-paciente"
                      className="dropdown-item "
                      href="#"
                    >
                      Cadastro de paciente
                    </Link>
                    <Link
                      to="/cadastro-funcionario"
                      className="dropdown-item "
                      href="#"
                    >
                      Cadastro de funcionário
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="text-light m-2">Consulta</span>
                  </span>
                  <div className="dropdown-menu myFastFadeAnimation">
                    <Link to="/consulta-paciente" className="dropdown-item">
                      Consulta de paciente
                    </Link>
                    <Link to="/consulta-funcionario" className="dropdown-item">
                      Consulta de funcionario
                    </Link>
                  </div>
                </li>
                <LogoutButton content="Sair" />
              </ul>
            </div>
          </div>
        </div>
      </nav>
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
        <Modal modalTitle="Sair?" modalContent="Você deseja fazer Logout?" />
      </div>
    </>
  );
};

export default Home;
