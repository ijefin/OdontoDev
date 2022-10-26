import PersonIcon from "@mui/icons-material/Person";
import { Component } from "react";
import LogoDente from "../assets/images/newDentes.png";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 myBox bg-light">
              <img
                src={LogoDente}
                alt="logo"
                className="img-fluid myFadeAnimation"
              />
            </div>
            <div className="col bg-info myBox ">
              <div className=" text-white mb-3">
                <div className="row justify-content-center align-items-center myFadeAnimation">
                  <div className="col-sm-8">
                    <div className="myDisplay">
                      <h1 className="card-title mb-5">Login</h1>
                      <PersonIcon sx={{ fontSize: 150 }} />
                    </div>
                    <div className="form-group pb-3">
                      <label>
                        <h5>Usuário</h5>
                      </label>
                      <input
                        type="text"
                        pattern="[a-z]*"
                        placeholder="exemplo@exemplo.com"
                        className="form-control border border-info myInput myMoveAnimation"
                      />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group">
                      <label>
                        <h5>Senha</h5>
                      </label>
                      <input
                        type="password"
                        name="sku"
                        placeholder="Sua senha"
                        className="form-control border border-info myMoveAnimationDelay"
                      />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control mt-3 btn btn-light"
                      >
                        Entrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
