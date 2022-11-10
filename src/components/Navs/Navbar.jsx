import logo from "../../assets/images/odontoLogo.png";
import { Link } from "react-router-dom";
import LogoutButton from "../../components/Buttons/LogoutButton/Logout";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-info shadow-sm"
        style={{ display: props.display }}
      >
        <div className="container">
          <div className="img myRMoveAnimation">
            <Link to="/home">
              <img src={logo} alt="logo odontoDev" width={"40%"} />
            </Link>
          </div>
          <div>
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
      </nav>
    </>
  );
};

export default Navbar;
