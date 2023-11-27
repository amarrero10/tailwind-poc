import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import bannerLogo from "../assets/banner-logo.svg";
import LandingFeatures from "./landing/LandingFeatures";
import LandingAbout from "./landing/LandingAbout";
import LandingPricing from "./landing/LandingPricing";

function Home() {
  return (
    <div className=" md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div className=" bgGradient rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* Banner Image */}
          <div>
            <img src={bannerLogo} className=" lg:h-[386px]" alt="" />
          </div>
          {/* Banner Content */}
          <div className=" md:w-3/5">
            <h1 className=" md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
              AI Enabled Security
            </h1>
            <p className=" text-[#EBEBEB] text-2xl mb-8">
              Xonar Technology Inc.’s innovative security surveillance system uses sensors,
              artificial intelligence and machine learning to detect concealed weapons on moving
              targets.
            </p>
            <div className=" sm:space-x-5 space-y-4 sm:block flex flex-col items-start justify-start">
              <button className=" btnPrimary">
                <Link to="/contact">Contact Us</Link>
              </button>
              <button className="btnPrimary">
                <Link to="/login">Customer Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <LandingFeatures />
      <LandingAbout />
      <LandingPricing />
    </div>
  );
}

export default Home;
