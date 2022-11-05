import React from "react";
import "bootswatch/dist/pulse/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default App;
