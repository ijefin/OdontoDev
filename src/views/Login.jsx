import PersonIcon from "@mui/icons-material/Person";
import { Component } from "react";
import LogoDente from "../assets/images/newDentes.png";
import users from "../../users";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Token from "../security/generateToken";
import { useNavigate } from "react-router-dom";

export default class Login extends Component {
  state = {
    user: "jefferson.gomes@exemplo.com",
    password: "Saw50812@",
    invalid: false,
    moveAnimation: "myMoveAnimation",
  };

  handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.setState({ [fieldName]: fieldValue });
    console.log(fieldName, fieldValue);
  };


  goToHomePage = () => {
    useNavigate("/home")
  };

  handleLogin = () => {
    const { user: myAuthUser, password: myAuthPassword } = this.state;

    if (myAuthUser === users.user && myAuthPassword === users.password) {
      toast.success("Logado com sucesso!");
      localStorage.setItem("token", Token());
      this.goToHomePage();
    } else {
      this.setState({
        invalid: true,
      });
      toast.error("Credenciais incorretas!");
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
                        value={user}
                        placeholder="exemplo@exemplo.com"
                        className={`${
                          invalid ? "invalidForm" : ""
                        } form-control border border-info myInput ${
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
                        value={password}
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
