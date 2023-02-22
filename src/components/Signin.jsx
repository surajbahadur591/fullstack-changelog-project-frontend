import React from "react";

const Signin = () => {
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
        <div className="bg-[#060B27] max-w-[50%]  h-full mx-auto py-32">
           <form className=" max-w-[500px]  mx-auto bg-[#060B27] py-20 px- 20">
            

            <input
              className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none "
              type="email"
              placeholder="hi@example.com"
            />

            <input
              className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none"
              type="password"
              placeholder="password"
            />

            <button className="text-white bg-[#060B27] w-full py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
