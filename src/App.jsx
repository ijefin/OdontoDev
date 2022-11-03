import React from "react";
import "bootswatch/dist/pulse/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navs/Navbar";
import AppRoutes from "./routes/routes";

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
