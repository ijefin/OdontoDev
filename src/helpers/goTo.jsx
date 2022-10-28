import { useNavigate } from "react-router-dom";
export default class goTo {
  navigate = useNavigate();

  goToHomePage = () => {
    navigate("/home");
  };

  goToLoginPage = () => {
    navigate("/login");
  };

  goToRegisterPage = () => {
    navigate("login");
  };

  return;
}
