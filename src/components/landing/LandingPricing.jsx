import React, { useState } from "react";

function LandingPricing() {
  const [isYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "Basic",
      monthly: 299.99,
      yearly: 3300.99,
      description: "For Venues of 5,000 or less people",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Professional",
      monthly: 499.99,
      yearly: 5499.98,
      description: "For Venues of 5,001 to 15,000 people",
      features: ["All Basic Features Plus:", "Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Executive",
      monthly: 899.99,
      yearly: 9899.89,
      description: "For Venues of 15,001+ people",
      features: ["All Professional Features Plus:", "Feature 1", "Feature 2", "Feature 3"],
    },
  ];
  return (
    <div className=" md:px-14 p-4 mx-auto py-10">
      <div className=" text-center">
        <h2 className=" md:text-5xl text-3xl font-extrabold text-primary mb-2">Plans We Offer:</h2>
        <p className=" text-tartiary md:w-1/3 mx-auto px-4">
          Explore our flexible plans tailored to meet your unique needs, ensuring cost-effective
          solutions for every requirement.
        </p>
        {/* Toggle for Year Vs. Month */}
        <div className="mt-16">
          <label htmlFor="toggle" className=" inline-flex items-center cursor-pointer">
            <span className=" mr-8 text-2xl font-semibold">Monthly</span>
            <div className=" w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? " bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className=" ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      {/* Pricing Cards */}
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20 mt-10">
        {packages.map((pkg) => {
          return (
            <div
              key={pkg.name}
              className=" bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-2xl p-8 flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300"
            >
              <h3 className=" text-3xl font-semibold text-primary text-center">{pkg.name}</h3>
              <p className=" text-2xl text-primary text-center">{pkg.description}</p>
              <div className=" mt-8">
                <h4 className=" text-4xl font-bold text-secondary text-center">
                  ${isYearly ? pkg.yearly : pkg.monthly}
                </h4>
                <p className=" text-primary text-center">
                  {isYearly ? "Billed Annually" : "Billed Monthly"}
                </p>
              </div>
              <div className=" mt-8">
                <ul className=" text-primary text-center">
                  {pkg.features.map((feature) => (
                    <li key={feature} className=" mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className=" btnPrimary mt-8">Get Started</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPricing;
