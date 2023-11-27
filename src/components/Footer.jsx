import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className=" bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div>
        <div className=" md:w-1/2 space-y-8 mx-auto">
          <Link to="/" className=" flex items-center justify-center space-x-3 text-primary">
            <img src={logo} alt="" />
          </Link>
          <p className=" md:w-1/2 text-center mx-auto">
            Xonar Technology Inc. © 2022 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
