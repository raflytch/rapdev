import React from "react";
import img1 from "../assets/img/project01.jpg";
import img2 from "../assets/img/project02.jpg";
import img3 from "../assets/img/project03.jpg";
import img4 from "../assets/img/project04.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import bg from "../assets/img/bg.jpg";

const images = [
  { src: img1, alt: "Project 1" },
  { src: img2, alt: "Project 2" },
  { src: img3, alt: "Project 3" },
  { src: img4, alt: "Project 4" },
];

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <div
      className="h-fit flex flex-col justify-center items-center lg:px-32 px-5"
      style={{ backgroundImage: `url(${bg})` }}
      data-aos="fade-down"
    >
      <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4 text-white">
        Project
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0 mb-20">
        {images.map((image, index) => (
          <div key={index} className="w-full lg:w-1/4">
            <img
              className="transform transition-transform hover:scale-105 grayscale hover:grayscale-0 duration-1000 rounded-md cursor-pointer"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
