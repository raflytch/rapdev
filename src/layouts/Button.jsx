import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ title, onClick }) => {
  return (
    <div>
      <button
        className="text-white flex flex-row justify-center items-center gap-4 bg-brightColor hover:bg-black hover:text-white transition-all duration-500 px-4 py-2 rounded-md cursor-pointer text-lg font-semibold"
        onClick={onClick}
      >
        {title}
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Button;
