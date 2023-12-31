import React, { useState } from "react";
import { useColor } from "./ColorContext";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Projects = ({ url, name, title }) => {
  const { color } = useColor();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-wrap justify-center  relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-[23em] h-[13em] text-transparent flex justify-center items-center rounded-[0.2em] cursor-pointer">
        <img
          src={url}
          alt={name}
          className="absolute inset-0 object-cover w-[23em] h-[13em] rounded-[0.2em]  "
        />
        <div
          className="absolute inset-0 w-[23em] h-[13em] opacity-0 hover:opacity-100 hover:text-white text-transparent flex flex-col justify-center items-center rounded-[0.2em] transition-all duration-300"
          style={{ backgroundColor: color }}
        >
          <p className="text-center uppercase font-[600]  font-Roboto">
            {name}
          </p>
          <p className="text-center uppercase   font-Roboto">{title}</p>
        </div>
      </div>
      {hovered && (
        <BsBoxArrowUpRight size={25} className="absolute top-2 right-2" />
      )}
    </div>
  );
};

export default Projects;
