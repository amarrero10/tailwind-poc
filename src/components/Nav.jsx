import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiLogin, CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";

import React, { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Overview", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
  ];
  return (
    <>
      <nav className=" bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0 z-10 border-b">
        <div className=" text-xl */container/*  mx-auto flex justify-between items-center">
          <div className=" flex space-x-14 items-center">
            <a href="/">
              <img className=" inline-block items-center" src={logo} alt="logo" />
            </a>
            <ul className="md:flex hidden space-x-12">
              {navItems.map((item) => (
                <li key={item.name} className=" block hover:text-gray-300">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" space-x-12 hidden md:flex items-center">
            <Link to="/login" className="hidden lg:flex items-center hover:text-secondary">
              <CiLogin className=" mr-2" />
              Login
            </Link>
            <button className=" bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
          {/* Hamburger Menu */}
          <div className=" md:hidden block ">
            <button
              onClick={toggleMenu}
              className=" text-white text-lg focus:outline-none focus:text-gray-300 "
            >
              {!isMenuOpen ? (
                <CiMenuBurger className=" text-primary text-3xl" />
              ) : (
                <CgClose className=" text-primary text-3xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${
          isMenuOpen ? " block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className=" block hover:text-gray-300">
              <Link className=" block hover:text-gray-300 py-3" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Nav;
