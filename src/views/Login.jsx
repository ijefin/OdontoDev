import { Component } from "react";
import LogoDente from "../assets/images/newDentes.png";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 myBox bg-light">
              <img src={LogoDente} alt="logo" className="img-fluid" />
            </div>
            <div className="col bg-info myBox ">
              <div className=" text-white mb-3">
                <div className="card-body"></div>
                <div className="row justify-content-center align-items-center">
                  <div className="col-sm-8">
                    <h1 className="card-title mb-5">Login</h1>
                    <div className="form-group pb-3">
                      <label>
                        <h5>Usuário</h5>
                      </label>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Seu email"
                        className="form-control"
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
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group">
                      <button className="form-control mt-3">Entrar</button>
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
