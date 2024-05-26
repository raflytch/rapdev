import React, { useEffect } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2000,
    });
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5"
      data-aos="fade-right"
    >
      <div className="flex gap-10">
        <a
          href="https://www.instagram.com/raflytch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            size={32}
            className="hover:text-black text-brightColor transition-all cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/raflyazizabdillah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={32}
            className="hover:text-black text-brightColor transition-all cursor-pointer"
          />
        </a>
      </div>
      <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-3xl font-semibold text-brightColor hover:text-black hover:transition-all duration-500">
          Rafly.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
