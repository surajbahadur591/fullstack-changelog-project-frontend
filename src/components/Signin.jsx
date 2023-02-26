import React, { useState } from "react";
import { signInService } from "../apiservices/services";
import AccessImage from '../asset/authentication.svg'
const Signin = () => {


  //default userdate with empty value
  const defaultUser = {
    username: "",
    password: "",
  };

  // user state
  const [userData, setUserData] = useState(defaultUser);

  // user token 
const [usertoken, setUserToken] = useState('')
  //  function used to set the value of form to userData
  const changeHandler = (e) => {
    // console.log(e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // when button clicked it calls addUserService of backend api
  const submitFunction = async (event) => {
    event.preventDefault();
    const response = await signInService(userData);
    console.log(response)
    localStorage.setItem("jwtToken",response.data.token)
    setUserToken(response.data.token);
    
  };

  return (
    <>
      {/* flex for two element , for side by side look */}
      <div className="md:flex bg-[#060B27] h-full">
        {/* element 1 : image  */}
        {/* this will be hidden in mobile screen  */}
        <div className=" hidden md:block mx-auto my-auto w-[50%] text-white bg-[#060B27] ">
          <div className="mx-auto text-lg">
            Welcome Back, Thank you for staying in touch
          </div>
          <img src={AccessImage} alt="" width="400px" />
        </div>

        {/* element 2 : form  */}
        <div className="bg-[#060B27] max-w-[50%]  h-full mx-auto py-32">
          <form className=" max-w-[500px]  mx-auto bg-[#060B27] py-20 px- 20">
            <input
              className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none "
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => changeHandler(e)}
            />

            <input
              className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => changeHandler(e)}
            />

            <button
              className="text-white bg-[#060B27] w-full py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none"
              onClick={(e) => {
                submitFunction(e);
              }}
            >
              Sign in
            </button>
            <h1 className="text-white text-lg ">
              Don't have an account? {" "}
              <a className="underline" href="/signup">
                Sign up
              </a>{" "}
            </h1>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
