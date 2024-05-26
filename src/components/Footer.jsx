import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2000,
    });
  });
  return (
    <div
      className=" flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5"
      data-aos="fade-right"
    >
      <div className=" flex gap-10">
        <BsInstagram
          size={32}
          className=" hover:text-black text-brightColor transition-all cursor-pointer"
        />
        <FaLinkedin
          size={32}
          className=" hover:text-black text-brightColor transition-all cursor-pointer"
        />
      </div>
      <div className=" flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className=" text-3xl font-semibold text-brightColor hover:text-black hover:transition-all duration-500">
          Rafly.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
