import React from "react";
import { RxCross1 } from "react-icons/rx";

const ProjectScreen = ({ url, name, onClose }) => {
  return (
    <div className="bg-[#000000b9] z-[10] relative flex justify-center items-center">
      <iframe
        src={url} 
        title={name}
        className="w-[90%] h-screen bg-white"
      />
      <RxCross1
        size={30}
        color="white"
        className="absolute top-5 right-5 cursor-pointer"
        onClick={() => onClose()}
      />
    </div>
  );
};

export default ProjectScreen;
