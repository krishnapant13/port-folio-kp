import React from "react";
import "react-typist/dist/Typist.css";
import dev from "../assets/dev.png";

import "../App.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidBriefcase } from "react-icons/bi";
import { useColor } from "./ColorContext";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const { color } = useColor();
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col md:flex-row relative">
        <div className="flex justify-center items-center md:w-1/2 w-[100%] md:my-0 my-10 md:h-[100vh] h-[30vh]">
          <img
            src={dev}
            alt=""
            className="md:w-[30em] md:h-[30em] w-[20em] h-[20em]"
          />
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-[100vh] flex md:justify-start justify-center items-center mt-4 md:mt-0">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:p-5 p-1">
            <p className="text-[1.5em] font-[400] ">HI THERE! </p>
            <div className="flex">
              <p className="md:text-[2.5em] text-[2em] font-[400] ">
                I'M &nbsp;
              </p>
              <span style={{ color: color }}>
                <TypeAnimation
                  sequence={[
                    "KRISHNA PANT",
                    1000,
                    "WEB DEVELOPER",
                    1000,
                    "REACT DEVELOPER",
                    1000,
                    "ECOPHILE",
                    1000,
                  ]}
                  wrapper="span"
                  speed={20}
                  className="md:text-[2.5em] text-[2em] "
                  style={{
                    display: "inline-block",
                  }}
                  repeat={Infinity}
                />
              </span>
            </div>
            <p className="md:text-start text-center text-[1em] md:w-[80%]">
              I'm a Freelance UI/UX Designer and Developer from Kausani (Almora,
              Uttarakhand), based in Delhi, India. I strive to build immersive
              and beautiful web applications through carefully crafted code,
              user-centric design and css animations.
            </p>
            <div className="flex md:flex-row flex-col justify-start md:mb-0 mb-4 items-center w-full mt-[3em]">
              <Link to="/about">
                <div
                  className={`p-4 w-[15em] rounded-full text-white font-[400] flex justify-center items-center mb-[1em] 800px:mb-0 md:mr-[1em]`}
                  style={{ backgroundColor: color }}
                >
                  <FaUser className="mr-[0.5em]" size={17} color="white" />
                  MORE ABOUT ME
                </div>
              </Link>{" "}
              <Link to="/port">
                <div
                  className="p-4 w-[15em] border rounded-full text-white font-[400] flex justify-center items-center"
                  style={{ borderColor: color }}
                >
                  <BiSolidBriefcase
                    className="mr-[0.5em]"
                    size={17}
                    color="white"
                  />
                  PORTFOLIO
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
