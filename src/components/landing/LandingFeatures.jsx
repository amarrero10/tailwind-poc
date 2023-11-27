import React from "react";
import featuresImg from "../../assets/features-icon.png";

function LandingFeatures() {
  return (
    <div className=" my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className=" flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className=" lg:w-1/3">
          <h3 className=" text-3xl text-primary font-bold mb-3 text-center flex">
            Xonar: A security platform beyond today’s market
          </h3>
        </div>
        {/* Featured Cards */}
        <div className=" w-full lg:w-4/5">
          <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className=" bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300">
              <img src={featuresImg} alt="" />
              <h5 className=" text-2xl font-semibold text-primary px-5 text-center mt-5">
                Advancements in Hardware
              </h5>
            </div>
            <div className=" bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300">
              <img src={featuresImg} alt="" />
              <h5 className=" text-2xl font-semibold text-primary px-5 text-center mt-5">
                Machine Learning
              </h5>
            </div>
            <div className=" bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300">
              <img src={featuresImg} alt="" />
              <h5 className=" text-2xl font-semibold text-primary px-5 text-center mt-5">
                New Security Paradigm
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingFeatures;
