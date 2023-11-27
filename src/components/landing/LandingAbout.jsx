import React from "react";
import aboutImg from "../../assets/about-section.png";
import aboutImgTwo from "../../assets/about-section-two.png";

function LandingAbout() {
  return (
    <div className=" md:px-14 p-4 mx-auto">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
        <div className=" md:w-1/2">
          <img src={aboutImg} alt="" />
        </div>
        {/* About content */}
        <div className=" md:w-2/5">
          <p className=" text-3xl font-bold text-primary mb-5 leading-normal">
            RF-based sensors transmit radio waves, interpreted by AI and machine learning, to{" "}
            <span className=" text-secondary">detect weapons on moving targets</span>.
          </p>
          <button className="btnPrimary flex w-1/8 mx-auto">Questions?</button>
        </div>
      </div>
      {/* Second "About Us" Section */}
      <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-8 mt-20 sm:mt-0">
        <div className=" md:w-1/2">
          <img src={aboutImgTwo} alt="" />
        </div>
        {/* About content */}
        <div className=" md:w-2/5">
          <p className=" text-3xl font-bold text-primary mb-5 leading-normal">
            Integrating RF sensors and AI enhances threat identification speed and optimizes overall
            performance for a{" "}
            <span className=" text-secondary">highly efficient security solution</span>.
          </p>
          <button className="btnPrimary flex w-1/8 mx-auto">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default LandingAbout;
