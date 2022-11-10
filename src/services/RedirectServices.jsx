import { useNavigate } from "react-router-dom";

const RedirectServices = () => {
  const navigate = useNavigate();

  return {

    goToHomePage: () => {
      navigate("/home");
    },

    goToLoginPage: () => {
      navigate("/");
    },

    goToRegisterPage: () => {
      navigate("/register");
    },
  };
};

export default RedirectServices;
