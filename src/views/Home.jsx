import React from "react";
import logo from "../assets/images/odontoLogo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Table from "../components/Table/Table";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow-sm">
        <div className="container">
          <div className="img myRMoveAnimation">
            <a href="http://127.0.0.1:5173/home">
              <img src={logo} alt="logo odontoDev" width={"40%"} />
            </a>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarColor01 ">
              <ul className="navbar-nav me-auto myLMoveAnimation myFontSize">
                <li className="nav-item">
                  <a className="nav-link active myFontSize" href="#">
                    <span>Início</span>
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>Cadastro</span>
                  </a>
                  <div className="dropdown-menu myFastFadeAnimation border border-black">
                    <a className="dropdown-item " href="#">
                      Cadastro de paciente
                    </a>
                    <a className="dropdown-item" href="#">
                      Cadastro de funcionário
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>Consulta</span>
                  </a>
                  <div className="dropdown-menu myFastFadeAnimation">
                    <a className="dropdown-item" href="#">
                      Consulta de paciente
                    </a>
                    <a className="dropdown-item" href="#">
                      Consulta de funcionário
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span>
                      Sair <LogoutIcon sx={{ fontSize: 18 }} />
                    </span>
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid fullHeightContainer ">
        <div className="container pt-5">
          <h1 class="display-3 myFontColor">Bem vindo!</h1>
          <p class="lead myFontColor">
            Acesse a aba cadastro para um novo paciente/médico, e a aba consulta
            para uma consulta mais filtrada.
          </p>
          <hr class="my-4" />
          <div class="jumbotron">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
