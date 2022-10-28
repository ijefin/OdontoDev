import React from "react";
import { redirect } from "react-router-dom";

const Home = () => {
  const loader = async () => {
    const user = true;
    if (user) {
      return redirect("/login");
    }
  };

  return (
    <>
      <h1 className="text-primary">Home</h1>
      <button onClick={loader}>Go</button>
    </>
  );
};

export default Home;
