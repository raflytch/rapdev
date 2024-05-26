import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const EducationCard = ({ title, role, date, institute, desc }) => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2000,
    });
  });

  return (
    <div
      className=" flex flex-col lg:flex-row py-4 gap-4"
      data-aos="fade-right"
    >
      <div className=" w-full lg:w-1/5 flex flex-col gap-1">
        <h2 className=" font-semibold">{title}</h2>
        <div className="mt-2 flex flex-col gap-2">
          <p>{role}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="w-full">
        <h2 className=" font-semibold mt-2 lg:mt-0">{institute}</h2>
        <p className=" mt-2 text-justify">{desc}</p>
        <div className=" bg-slate-500 w-full lg:w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;
