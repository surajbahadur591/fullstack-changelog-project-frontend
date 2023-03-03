import React, { useCallback, useEffect } from "react";
import Products from "./Products";
import { useNavigate, NavLink } from "react-router-dom";

const Dashboard =  () => {
  const history = useNavigate();
  // retrieving jwt token from localstorage 
  const jwt = localStorage.getItem("jwtToken");

  // this function will remove jwttoken stored in localstorage 
  const logoutFunction =  () => {
    localStorage.removeItem("jwtToken", "");
    history('/dashboard')

    
  };

  // useEffect( () => {
  //   logoutFunction()
  // }
  // ,[])



  

  

  return (
    <div className="h-full bg-black text-white item-end">
{jwt ? <button
        className="bg-black py-2  px-6 border border-blue-500 text-white"
        onClick={() => {
          logoutFunction();
        }}
      >
        logout
      </button> : ""}
        {/* logout button  */}
      

        {/* signed in user check ,  if logged in then products are displayed  */}
      <div>
      {jwt ? <Products /> : <div>User not logged in Sign in <NavLink className="underline" to='/signin'>here</NavLink></div>}
        </div>
    </div>
  );
};

export default Dashboard;
