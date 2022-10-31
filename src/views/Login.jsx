import PersonIcon from "@mui/icons-material/Person";
import LogoDente from "../assets/images/newDentes.png";
import users from "../../users";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Token from "../security/generateToken";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import TextField from "@mui/material/TextField";

const Login = () => {
  const [user, setUser] = useState("jefferson.gomes@exemplo.com");
  const [password, setPassword] = useState("Saw50812@");
  let [invalid, setinvalid] = useState(false);
  let [moveAnimation, setmoveAnimation] = useState("myLMoveAnimation");

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };

  const handleUser = (e) => {
    setUser(e.target.value);
    setPassword(e.target.value);
  };

  //mover para services.
  const handleLogin = () => {
    if (user === users.user && password === users.password) {
      toast.success("Logado com sucesso!");
      localStorage.setItem("token", Token());
      setTimeout(() => {
        goToHomePage();
      }, 2000);
    } else {
      setinvalid((invalid = true));
      toast.error("Credenciais incorretas!");
    }
  };

  const handleAnimationEnd = () => {
    setinvalid((invalid = false));
    setmoveAnimation((moveAnimation = false));
  };

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
                      name="user"
                      type="text"
                      onChange={handleUser}
                      onAnimationEnd={handleAnimationEnd}
                      placeholder="exemplo@exemplo.com"
                      className={`${
                        invalid ? "invalidForm" : ""
                      } form-control border border-info ${
                        moveAnimation ? "myLMoveAnimation" : ""
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
                      name="password"
                      type="password"
                      onChange={handleUser}
                      placeholder="Sua senha"
                      className={`${
                        invalid ? "invalidForm" : ""
                      } form-control border border-info ${moveAnimation}`}
                    />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="form-group">
                    <Button
                      onClick={handleLogin}
                      className="form-control mt-3 bg-success"
                      variant="contained"
                      endIcon={<LoginIcon />}
                    >
                      Entrar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
