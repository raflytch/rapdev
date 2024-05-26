import React from "react";
import img from "../assets/img/home.png";
import Button from "../layouts/Button";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1sCw5E_nOZQVh_LbluDCGybAjoNBzhYP-";
    link.download = "Rafly_Aziz_Abdillah_CV.pdf";
    link.click();
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 bg-[url('src/assets/img/bghome.jpg')] gap-5"
      data-aos="fade-right"
    >
      <div className="flex flex-col items-center justify-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold leading-tight mt-28 lg:mt-20 mb-10 md:px-10 flex flex-col items-center lg:items-start">
          Hello I'm{" "}
          <span className="text-black mb-5">Rafly Aziz Abdillah </span>
          <span className="block text-brightColor mb-5 px-8 lg:px-0">
            <Typewriter
              loop={true}
              words={["Front-End Developer"]}
              cursor={true}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
            />
          </span>
          <Button title="Download CV" onClick={downloadCV} />
        </h1>
      </div>
      <div className="w-full mt-8">
        <img
          src={img}
          alt="img"
          className="w-full object-cover object-center md:object-center lg:object-center h-[250px] md:h-[600px] lg:h-[450px]"
        />
      </div>
    </div>
  );
};

export default Home;
