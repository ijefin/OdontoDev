import { useNavigate } from "react-router-dom";

const AuthServices = () => {
  const navigate = useNavigate();

  return {


    handleLogout: () => {
      localStorage.removeItem("token");
    },
  };
};

export default AuthServices;
