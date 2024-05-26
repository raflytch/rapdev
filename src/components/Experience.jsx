import React from "react";
import EducationCard from "../layouts/EducationCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <div
      className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor"
      data-aos="fade-right"
    >
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">
        Work Experience
      </h1>

      <div className=" bg-white p-5 rounded-md mb-10">
        <EducationCard
          title="Kementerian Keuangan Republik Indonesia"
          role={"Bank Section Finance Accounting Intern"}
          date={"Okt 2021 - Des 2021"}
          institute={"Kementerian Keuangan Republik Indonesia"}
          desc={`The task at hand entails sorting the Proof of Upload ADK documents in accordance with the work unit (satker) codes mentioned within them. This process involves meticulously organizing the documents to align with the respective codes assigned to each work unit. Furthermore, confirming state revenue is a critical responsibility that necessitates utilizing either the SPAN Integration application (spanint) or the Online Monitoring SPAN (OM SPAN). Through these tools, the verification of state revenue is conducted with precision and accuracy, ensuring compliance with regulatory requirements. Additionally, confirming the authenticity of the Non-Indebtedness Certificate (SKTB) issued by the satker forms another integral aspect of the task. This verification process validates the legitimacy of the SKTB, thereby contributing to the overall transparency and accountability within the system.`}
        />
      </div>
    </div>
  );
};

export default Experience;
