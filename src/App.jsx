import React from "react";
import AppRoutes from "./routes/routes";
import "bootswatch/dist/pulse/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      <AppRoutes />
      <Modal modalTitle="Sair?" modalContent="Você deseja fazer Logout?" />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
