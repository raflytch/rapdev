import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <div
      className=" min-h-fit flex flex-col justify-around lg:gap-8 lg:px-48 px-5 bg-backgroundColor"
      data-aos="fade-right"
    >
      <div className="mt-20">
        <h1
          className="text-4xl font-semibold text-center mb-10 lg:mb-0 md:mb-0"
          data-aos="fade-down"
        >
          About Me
        </h1>
      </div>

      <div>
        <div className=" mb-20 md:my-10 lg:my-20" data-aos="fade-up">
          <h2 className=" text-3xl font-semibold">I'm Rafly Aziz Abdillah</h2>
          <p className=" mt-4 lg:mt-2 text-justify text-xl">
            A highly passionate and motivated student in the field of
            Information Technology and Front-End Development, boasting a solid
            academic background and practical experience gained from bootcamp
            training. Currently pursuing a Bachelor's degree in Computer Science
            at the University of Pembangunan Nasional "Veteran" Jakarta.
            Passionate about exploring the realm of IT, particularly in
            front-end web development, and proficient in managing both training
            and personal projects from inception to completion. Demonstrates
            exceptional communication and leadership skills, fostering a
            collaborative work environment. Committed to delivering superior
            performance and exceeding expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
