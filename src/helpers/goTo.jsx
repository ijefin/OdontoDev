import { useNavigate } from "react-router-dom";

const RedirectServices = () => {
  const navigate = useNavigate();

  return {
    goToHomePage: () => {
      navigate("/home");
    },

    goToLoginPage: () => {
      navigate("/login");
    },

    goToRegisterPage: () => {
      navigate("login");
    },
  };
};

export default RedirectServices;
