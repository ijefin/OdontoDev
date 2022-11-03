import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import RedirectServices from "../../helpers/goTo";
import users from "../../../users";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Token from "../../security/generateToken";

const MyLogin = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  let [invalid, setinvalid] = useState(false);
  let [moveAnimation, setmoveAnimation] = useState("myLMoveAnimation");

  const services = RedirectServices();

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  console.log({ user }, { password });

  console.log(user === users.user && password === users.password);

  //mover para services.
  const handleLogin = () => {
    if (user === users.user && password === users.password) {
      toast.success("Logado com sucesso!");
      localStorage.setItem("token", Token());
      setTimeout(() => {
        services.goToHomePage();
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
              onChange={handlePassword}
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
    </>
  );
};

export default MyLogin;
