import React from "react";
import AppRoutes from "./routes/routes";
import "bootswatch/dist/pulse/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Modal from "./components/Modal/Modal";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <AppRoutes />
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
