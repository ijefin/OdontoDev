import RedirectServices from "./RedirectServices";
import { toast } from "react-toastify";


const AuthServices = () => {
  const redirectServices = RedirectServices();

  return {
    verifyToken: () => {
      const getToken = localStorage.getItem("token");
      if (!getToken) {
        redirectServices.goToLoginPage();
        toast.error("Entre novamente!");
      }
    },

    handleLogout: () => {
      localStorage.removeItem("token");
      toast.error("Saindo..");
      setTimeout(() => {
        redirectServices.goToLoginPage();
      }, 1500);
    },
  };
};

export default AuthServices;
