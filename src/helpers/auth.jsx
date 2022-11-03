import RedirectServices from "./RedirectServices";
import { toast } from "react-toastify";

const AuthServices = () => {
  const redirectServices = RedirectServices();

  return {
    verifyToken: () => {
      const getToken = localStorage.getItem("token");
      if (!getToken) {
        console.log('Erro');
        redirectServices.goToLoginPage();
      }
    },

    handleLogout: () => {
      localStorage.removeItem("token");
      toast.error("Deslogando..");
      setTimeout(() => {
        redirectServices.goToLoginPage();
      }, 1500);
    },
  };
};

export default AuthServices;
