import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#090D2B]">
      <div className="max-w-[1240] items-center md:mx-[300px] px-4 justify-between  flex h-[50px] bg-[#090D2B] text-white">
        <h1>
          <a href="/">Changelog App</a>{" "}
        </h1>
        <ul className="flex px-8">
          <Link
            target="_blank"
            to="https://github.com/surajbahadur591/fullstack-changelog-project-frontend"
          >
            <li className="px-8">Github</li>
          </Link>
          <Link
            target="_blank"
            to="https://documenter.getpostman.com/view/13606111/2s93CPqCZj"
          >
            {" "}
            <li className="px-8">Documentation</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
