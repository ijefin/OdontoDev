import PersonIcon from "@mui/icons-material/Person";
import { Component } from "react";
import LogoDente from "../assets/images/newDentes.png";
import users from "../../users";

export default class Login extends Component {
  state = {
    user: "",
    password: "",
    invalid: false,
    moveAnimation: "myMoveAnimation",
  };

  handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.setState({ [fieldName]: fieldValue });
    console.log(fieldName, fieldValue);
  };

  handleLogin = () => {
    const { user: myAuthUser, password: myAuthPassword } = this.state;

    if (myAuthUser === users.user && myAuthPassword === users.password) {
      console.log("Logado com sucesso");
    } else {
      this.setState({
        invalid: true,
      });
    }
  };

  handleAnimationEnd = () => {
    this.setState({ invalid: false, moveAnimation: false });
  };

  render() {
    const { user, password, moveAnimation, invalid } = this.state;

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
                        onChange={this.handleInput}
                        name="user"
                        type="text"
                        onAnimationEnd={this.handleAnimationEnd}
                        // value={user}
                        placeholder="exemplo@exemplo.com"
                        className={`${
                          invalid ? "invalidForm" : ""
                        } form-control  myInput ${
                          moveAnimation ? "myMoveAnimation" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group">
                      <label>
                        <h5>Senha</h5>
                      </label>
                      <input
                        onChange={this.handleInput}
                        name="password"
                        type="password"
                        // value={password}
                        placeholder="Sua senha"
                        className={`${
                          this.state.invalid ? "invalidForm" : ""
                        } form-control border border-info ${moveAnimation}`}
                      />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group">
                      <button
                        onClick={this.handleLogin}
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
