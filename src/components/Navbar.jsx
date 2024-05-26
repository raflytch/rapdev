import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2000,
    });
  });
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full z-10" data-aos="fade-down">
      <div>
        <div className=" flex flex-row justify-between p-7 md:px-32 px-5 bg-[url('/src/assets/img/bg.jpg')] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <h1 className="text-white text-2xl font-semibold hidden lg:block">
              Rafly.
            </h1>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            >
              Home
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            >
              About
            </Link>

            <Link
              to="tech"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            >
              Tech
            </Link>

            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            >
              Education
            </Link>

            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            >
              Experience
            </Link>

            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            >
              Portfolio
            </Link>
          </nav>

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose
                size={28}
                onClick={handleChange}
                className="text-white"
              />
            ) : (
              <RiMenu5Fill
                size={28}
                onClick={handleChange}
                className="text-white"
              />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-brightColor text-white left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="tech"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            onClick={closeMenu}
          >
            Tech
          </Link>

          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            onClick={closeMenu}
          >
            Education
          </Link>

          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            onClick={closeMenu}
          >
            Experience
          </Link>

          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-black transition-all cursor-pointer text-white font-semibold"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
