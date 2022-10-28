import React from "react";
import AppRoutes from "./routes/routes";
import "bootswatch/dist/pulse/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <>
      {/* <h1>OdontoDev</h1> */}
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
