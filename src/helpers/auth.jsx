import { useNavigate } from "react-router-dom";

const AuthServices = () => {
  const navigate = useNavigate();

  return {

    handleLogin: () => {

    },

    handleLogout: () => {
      localStorage.removeItem("token");
    },
  };
};

export default RedirectServices;
