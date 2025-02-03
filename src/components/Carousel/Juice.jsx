import React from "react";
import TextCarousel from "./TextCarousel";
const Juice = () => {
  return (
    <div className="main-container h-screen w-full md:py-4 md:px-8 duration-500 transition-all">
      {/* navbar */}
      <div className="navbar flex flex-row justify-between items-center z-20">
        <img
          src="https://fruitaco.in/cdn/shop/files/white_logog.png?v=1686331440&width=190"
          alt="logo"
          className="logo pl-10"
        ></img>
        <ul className="navlinks flex flex-row justify-center items-center">
          <li className="font-bold text-white p-4">First</li>
          <li className="font-bold text-white p-4">Second</li>
          <li className="font-bold text-white p-4">Third</li>
          <li className="font-bold text-white p-4">Fourth</li>
        </ul>
      </div>
      {/* content Text carousel*/}
      <div className="md:h-[80vh] h-[100vh] md:w-auto w-full flex justify-start items-center">
        <TextCarousel />
      </div>
    </div>
  );
};

export default Juice;
