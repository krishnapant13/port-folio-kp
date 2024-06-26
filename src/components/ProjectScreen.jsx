import React from "react";
import { RxCross1 } from "react-icons/rx";

const ProjectScreen = ({ url, name, onClose }) => {
  return (
    <div className="bg-[#000000b9] z-[10] relative flex justify-center items-center">
      <iframe
        src={url} // Replace with the URL you want to display
        title={name}
        width="1200"
        height="600"
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
