import React from "react";
import ServicesCard from "../layouts/ServicesCard";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNpm,
  FaJava,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { LiaPhp } from "react-icons/lia";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const techStack = [
  { icon: <FaHtml5 size={55} className="text-brightColor" />, title: "HTML" },
  { icon: <FaCss3Alt size={55} className="text-brightColor" />, title: "CSS" },
  {
    icon: <IoLogoJavascript size={55} className="text-brightColor" />,
    title: "JavaScript",
  },
  {
    icon: <SiTailwindcss size={55} className="text-brightColor" />,
    title: "Tailwind",
  },
  {
    icon: <FaBootstrap size={55} className="text-brightColor" />,
    title: "Bootstrap",
  },
  {
    icon: <FaReact size={55} className="text-brightColor" />,
    title: "React JS",
  },
  { icon: <LiaPhp size={55} className="text-brightColor" />, title: "PHP" },
  {
    icon: <FaPython size={55} className="text-brightColor" />,
    title: "Python",
  },
  { icon: <SiMysql size={55} className="text-brightColor" />, title: "MySQL" },
  { icon: <FaJava size={55} className="text-brightColor" />, title: "Java" },
];

const tools = [
  {
    icon: <DiVisualstudio size={55} className="text-brightColor" />,
    title: "VS Code",
  },
  { icon: <FaGitAlt size={55} className="text-brightColor" />, title: "Git" },
  {
    icon: <FaGithub size={55} className="text-brightColor" />,
    title: "Github",
  },
  { icon: <FaFigma size={55} className="text-brightColor" />, title: "Figma" },
  { icon: <FaNpm size={55} className="text-brightColor" />, title: "NPM" },
];

const Services = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <div
      className="h-fit flex flex-col justify-center items-center lg:px-10 px-5 bg-[url('src/assets/img/bg.jpg')]"
      data-aos="fade-right"
    >
      <h1 className="text-white text-center font-semibold text-4xl mt-20 lg:mt-20 mb-8 lg:mb-20">
        Tech Stack
      </h1>
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
          {techStack.map((tech, index) => (
            <ServicesCard key={index} icon={tech.icon} title={tech.title} />
          ))}
        </div>
      </div>

      <h1 className="text-white text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-20">
        Tools
      </h1>
      <div className="w-full mb-20">
        <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
          {tools.map((tool, index) => (
            <ServicesCard key={index} icon={tool.icon} title={tool.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
