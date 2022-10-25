import { Component } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
export default class Login extends Component {
  render() {
    return (
      <>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-8 myBox  bg-secondary">
              <h1 className="text-white">OdontoDev</h1>
            </div>
            <div className="col bg-primary">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h4 className="card-title">Acessar Sistema</h4>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="form-group pb-3">
                      <label>
                        <h4>Usuário</h4>
                      </label>
                      <input
                        type="text"
                        name="nome"
                        placeholder=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group">
                      <label>
                        <h4>Senha</h4>
                      </label>
                      <h1>{LogoutIcon}</h1>
                      <input
                        type="text"
                        name="sku"
                        placeholder={""}
                        className="form-control"
                      />
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
