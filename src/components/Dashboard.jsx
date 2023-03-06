import React from "react";
import Products from "./Products";
import { useNavigate, NavLink } from "react-router-dom";

const Dashboard = () => {
  const history = useNavigate();
  // retrieving jwt token from localstorage
  const jwt = localStorage.getItem("jwtToken");

  // this function will remove jwttoken stored in localstorage
  const logoutFunction = () => {
    localStorage.removeItem("jwtToken", "");
    history("/dashboard");
  };

  return (
    <>
      <div className="flex w-full justify-end">
        <div className="text-white">
          {jwt ? (
            <button
              className="bg-black align-items flex-end py-2  px-6 border border-blue-500 text-white"
              onClick={() => {
                logoutFunction();
              }}
            >
              logout
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="h-full bg-black text-white">
        {/* signed in user check ,  if logged in then products are displayed  */}
        <div>
          {jwt ? (
            <Products />
          ) : (
            <div className="mx-auto">
              User not logged in Sign in{" "}
              <NavLink className="text-[#FF9641] underline" to="/signin">
                here
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
