import React from "react";
import Products from "./Products";

const Dashboard = () => {

  // retrieving jwt token from localstorage 
  const jwt = localStorage.getItem("jwtToken");

  // this function will remove jwttoken stored in localstorage 
  const logoutFunction = () => {
    localStorage.removeItem("jwtToken", "");
  };

  return (
    <div className="h-full bg-black text-white item-end">

        {/* logout button  */}
      <button
        className="bg-black py-2  px-6 border border-blue-500 text-white"
        onClick={() => {
          logoutFunction();
        }}
      >
        logout
      </button>

        {/* signed in user check ,  if logged in then products are displayed  */}
      <div>
      {jwt ? <Products /> : <div>User not logged in</div>}
        </div>
    </div>
  );
};

export default Dashboard;
