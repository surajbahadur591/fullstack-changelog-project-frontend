import React from "react";
import Products from "./Products";

const Dashboard = () => {
  const jwt = localStorage.getItem("jwtToken");

  const logoutFunction = () => {
    localStorage.removeItem("jwtToken", "");
  };

  return (
    <div className="h-full bg-black text-white item-end">

      <button
        className="bg-black py-2  px-6 border border-blue-500 text-white"
        onClick={() => {
          logoutFunction();
        }}
      >
        logout
      </button>

      <div>
      {jwt ? <Products /> : <div>User not logged in</div>}
        </div>
    </div>
  );
};

export default Dashboard;
