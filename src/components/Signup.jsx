import React, { useState } from "react";
import TopLogo from '../asset/icons8.png'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeHandler = (e) => {
    console.log(e.target.name = e.target.value)
    setUsername=(e.target.value)
  }
  const submitFunction = () => {
    console.log( username, email, password)
  }
  return (
    <>
      {/* flex for two element , for side by side look */}
      <div className="md:flex bg-[#060B27] h-full">
        {/* element 1 : image  */}
        {/* this will be hidden in mobile screen  */}
        <div className=" hidden md:block w-[50%] text-white bg-black ">
          <div className="mx-auto">MERN APP : Built for Learning</div>
        </div>

        {/* element 2 : form  */}
        <div className="bg-[#060B27] max-w-[50%] items-center justify-center  h-full mx-auto py-32">
          <img src={TopLogo} alt="" />
          <h1 className="text-white text-3xl font-bold"> Create your account</h1>
          <h1 className="text-white text-lg ">Already registered? <a className="underline" href="/signin">Sign in</a> </h1> 
          <form className=" max-w-[500px]  mx-auto bg-[#060B27] py-20 px- 20">
            <input
              className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none"
              type="text"
              placeholder="username"
              name='username'
              onChange={ (e) => changeHandler(e)}
            />

            <input
              className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none "
              type="email"
              name='email'
              placeholder="hi@example.com"
              onChange={ (e) => changeHandler(e)}
            />

            <input
              className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none"
              type="password"
              placeholder="password"
              name='password'
              onChange={ (e) => changeHandler(e)}
            />

            <button className="text-white bg-[#060B27] w-full py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none"
              onClick={ () => {submitFunction()}}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
