import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicesCard = ({ icon, title }) => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <div
      className=" flex flex-col items-center justify-center bg-white hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2 w-1/3 md:h-[220px] md:w-1/4 lg:w-1/5 py-8 gap-4 cursor-pointer rounded-md"
      data-aos="fade-up"
    >
      <div>
        <span>{icon}</span>
      </div>
      <h2 className=" text-sm md:text-lg lg:text-xl font-semibold text-center">
        {title}
      </h2>
    </div>
  );
};

export default ServicesCard;
