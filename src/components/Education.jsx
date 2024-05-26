import React from "react";
import EducationCard from "../layouts/EducationCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const educationData = [
  {
    title: "UPN Veteran Jakarta",
    role: "System Information",
    date: "2022 - Present",
    institute: "IPK 3.96",
    desc: `My name is Rafly Aziz Abdillah, a Systems Information student at UPN "Veteran" Jakarta with a GPA of 3.96. I am particularly interested in Web Development, specifically Front-End Development, as well as other areas including programming, database management, and project management. In addition to my academic pursuits, I am actively involved in various campus organizations and activities, which have helped me develop essential soft skills such as leadership and teamwork. This combination of academic knowledge and practical experience prepares me well for the challenges of the professional world.`,
  },
  {
    title: "SMK Negeri 23 Jakarta",
    role: "Accounting",
    date: "2019 - 2022",
    institute: "Grade 89/100",
    desc: `My name is Rafly Aziz Abdillah, a student of Accounting and Financial Institutions at SMK Negeri 23 Jakarta. I have achieved a grade of 89/100, demonstrating my strong understanding and competence in the field. Through my studies, I have gained valuable skills in financial analysis, accounting principles, and financial management. I have developed a keen eye for detail and a solid foundation in financial reporting and auditing. Additionally, my coursework has prepared me to handle real-world financial scenarios and challenges.`,
  },
];

const Education = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <div
      className="h-fit flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor"
      data-aos="fade-up"
    >
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-48 mb-8 lg:mb-10">
        Education
      </h1>

      <div className="bg-white p-6 rounded-md">
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            title={education.title}
            role={education.role}
            date={education.date}
            institute={education.institute}
            desc={education.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
