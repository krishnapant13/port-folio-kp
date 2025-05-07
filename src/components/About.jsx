import { Grid, Slider } from "@mui/material";
import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import { styles } from "../styles";
import me from "../assets/me.jpeg";
import { useColor } from "./ColorContext";
import { BsCircle } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

const About = () => {
  const handleDownload = () => {
    const pdfUrl = require("../resume.pdf");
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "Krishna_Pant_React_Developer_Resume.pdf";
    link.click();
  };
  const { color } = useColor();
  const htmlSliderValue = 80;
  return (
    <div className="animate-slide-in-right  800px:p-5 items-center">
      <h5 className=" font-[800] text-[2em] 800px:text-[4em] font-Poppins mt-4 md:mt-0">
        <span> ABOUT</span> <span style={{ color: color }}>ME</span>
      </h5>
      <div className="flex justify-center items-center">
        <div
          className={` hidden 800px:block h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
        <p className="800px:px-5">
          Enthusiastic React developer exploring the MERN stack, eager to
          contribute to web projects
        </p>
        <div
          className={`  hidden 800px:block  h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
      </div>
      {/* details div */}
      <div className="md:h-[70vh] md:flex md:justify-center md:items-center 821px:pl-[8em] pl-[0.2em]">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5}>
            <div
              className={` m-auto 821px:h-[25em] 821px:w-[25em] h-[15em] w-[15em] mt-[3em] relative border-[0.3em] `}
              style={{ borderColor: color }}
            >
              <img
                src={me}
                className="821px:h-[30em] 821px:w-[30em] h-[15em] w-[15em] absolute bottom-[1.5em] right-[1.5em]"
                alt=""
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            alignItems="center"
            justifyContent="center"
            container
          >
            <Grid container className="font-Roboto mt-3">
              <Grid item xs={12} sm={6} md={6}>
                <div className="flex">
                  <div className=" flex flex-col justify-center items-start">
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      First name
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Last name
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      BirthDate
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Nationality
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Experience
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Address
                    </div>
                  </div>
                  <div className=" flex flex-col  items-start">
                    <div className={` m-[0.5em]`}>Krishna</div>
                    <div className={` m-[0.5em]`}>Pant</div>
                    <div className={`m-[0.5em]`}>03-Dec-1999</div>
                    <div className={` m-[0.5em]`}>Indian</div>
                    <div className={` m-[0.5em]`}>3+ Years</div>
                    <div className={` m-[0.5em]`}>Mahipalpur,Delhi</div>
                  </div>
                </div>
              </Grid>{" "}
              <Grid item xs={12} sm={6} md={6}>
                <div className="flex">
                  <div className=" flex flex-col justify-center items-start">
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Languages
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Phone
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Email
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      LinkedIn
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      GitHub
                    </div>
                  </div>
                  <div className=" flex flex-col  items-start">
                    <div className={` m-[0.5em]`}>English,Hindi</div>
                    <div className={` m-[0.5em]`}>
                      +91&nbsp;817&nbsp;154&nbsp;7108
                    </div>
                    <div className={` m-[0.5em]`}>
                      {" "}
                      <a
                        href="mailto:krishnapant1303@gmail.com"
                        className=" decoration-none  text-[#fff] "
                      >
                        krishnapant1303@gmail.com
                      </a>
                    </div>
                    <div className={` m-[0.5em]`}>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/krishna-pant-139883155"
                        className="decoration-none underline text-[#fff] "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit LinkedIn
                      </a>
                    </div>
                    <div className={` m-[0.5em]`}>
                      {" "}
                      <a
                        href="https://www.github.com/krishnapant13"
                        target="_blank"
                        rel="noreferrer"
                        className="decoration-none underline text-[#fff] "
                      >
                        Visit GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>{" "}
            </Grid>{" "}
            <button
              onClick={handleDownload}
              className={`font-[600] m-[1em] 821px:ml-[2.5em] rounded-full h-[2.5em] w-[15em]`}
              style={{ backgroundColor: color }}
            >
              <div className="flex justify-center items-center">
                <span>
                  <BiSolidDownload size={20} className="mr-2" />
                </span>
                Download My CV
              </div>
            </button>
          </Grid>
        </Grid>
      </div>
      <hr className="bg-[#0f0f0f] m-[2em] opacity-30 md:block hidden" />
      {/* <div className="flex mt-2 mb-[2em]">
        <p className="text-start font-[500] font-Poppins text-[1.5em] uppercase w-[50%] pl-[5.5em]">
          Experience
        </p>
        <p className="text-start font-[500] font-Poppins text-[1.5em] uppercase w-[50%] pl-[2em] ">
          Education
        </p>
      </div> */}
      <div className=" md:flex md:justify-center  821px:pl-[8em] pl-[0.2em]">
        <Grid item xs={12} sm={12} md={6} justifyContent="start" container>
          <p className="text-start font-[500] font-Poppins text-[1.5em] uppercase w-[50%] md:pl-[5.5em] pl-[0.7em] mb-[1em] md:mt-0 mt-[2em] ">
            Experience
          </p>
          <div className="flex justify-start pl-[1em] md:pl-[8em]">
            <div className="flex flex-col justify-start items-center mt-1">
              <BsCircle color={color} size={15} />
              <div
                className="md:h-[10em] h-[23em] w-[0.05em]"
                style={{ backgroundColor: color }}
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex justify-start items-center pl-[1em] md:pl-[2em] mb-[1em]">
                <SlCalender size={13} color={color} />
                <p className={`text-[1.2em] ml-1 `} style={{ color: color }}>
                  Auguest 2023- Present
                </p>
              </div>
              <div className="flex justify-start items-start pl-[2em]">
                <p className="font-[500] uppercase text-start text-[0.9em]">
                  Freelance Developer &nbsp; - &nbsp;
                </p>
              </div>
              <div className="flex justify-start items-start pl-[3em] mt-2 text-[0.9em]">
                <ul style={{ listStyleType: "disc" }}>
                  <li className="text-start">
                    Built and deployed a Hotel Management System
                    <a
                      href="https://www.trishulregency.in"
                      style={{ color: color }}
                      className="underline"
                      target="_blank"
                      rel="noopner noreferrer"
                    >
                      {" "}
                      Trishul Regency Kausani
                    </a>
                  </li>{" "}
                  <li className="text-start mt-1">
                    Currently working on a Taxi Booking System
                    <a
                      href="https://www.uttarakhandtravelss.com"
                      style={{ color: color }}
                      className="underline"
                      target="_blank"
                      rel="noopner noreferrer"
                    >
                      {" "}
                      Uttarakhand Tour & Travels
                    </a>{" "}
                    using Next.js..
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-start pl-[1em] md:pl-[8em]">
            <div className="flex flex-col justify-start items-center mt-1">
              <BsCircle color={color} size={15} />
              <div
                className="md:h-[23em] h-[33em] w-[0.05em]"
                style={{ backgroundColor: color }}
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex justify-start items-center pl-[1em] md:pl-[2em] mb-[1em]">
                <SlCalender size={13} color={color} />
                <p className="text-[1.2em] ml-1" style={{ color: color }}>
                  Dec 2021- May 2023
                </p>
              </div>
              <div className="flex justify-start items-start pl-[2em]">
                <p className="font-[500] uppercase text-start text-[0.9em]">
                  Junior Engineer &nbsp; - &nbsp;
                </p>
                <p className="font-[500] uppercase text-start text-[0.9em]">
                  Quodeck Technologies Pvt. Ltd
                </p>
              </div>
              <div className="flex justify-start items-start pl-[3em] mt-2 text-[0.9em]">
                <ul style={{ listStyleType: "disc" }}>
                  <li className="text-start">
                    Developed and maintained web applications using MERN stack
                    (MongoDB, Express.js, React, and Node.js).
                  </li>{" "}
                  <li className="text-start mt-1">
                    Implementing and managing Learning Management Systems for
                    leading organizations, including HUL, Ekart, and Flipkart.
                    With my extensive experience in LMS development and
                    customization.
                  </li>
                  <li className="text-start mt-1">
                    Understanding the principles and architecture of Redux,
                    including the concepts of actions, reducers, and the store.
                  </li>
                  <li className="text-start mt-1">
                    Built RESTful APIs for client-server communication.
                  </li>
                  <li className="text-start mt-1">
                    Implemented user authentication and authorization using JSON
                    Web Tokens (JWT) and Passport.js.{" "}
                  </li>
                  <li className="text-start mt-1">
                    Developed and maintained MongoDB databases and optimized
                    query performance.
                  </li>
                  <li className="text-start mt-1">
                    Implemented automated testing using Jest and Enzyme.
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} justifyContent="start">
          <p className="text-start font-[500] font-Poppins text-[1.5em] uppercase  md:pl-[2em] pl-[0.7em] md:mb-[1em] md:mt-0 mt-[2em] ">
            Education
          </p>
          <div className="flex justify-start pl-[1em] mt-[2em] md:mt-0 md:pl-[3em]">
            <div className="flex flex-col justify-start items-center mt-1">
              <BsCircle color={color} size={15} />
              <div
                className="h-[6.5em] md:h-[5.5em] w-[0.05em]"
                style={{ backgroundColor: color }}
              />{" "}
              <BsCircle color={color} size={15} />
              <div
                className="md:h-[4em] h-[5em] w-[0.05em]"
                style={{ backgroundColor: color }}
              />{" "}
            </div>
            <div className="flex flex-col justify-start items-start">
              <div>
                <div className="flex justify-start items-center pl-[2em] mb-[1em]">
                  <SlCalender size={13} />
                  <p className="text-[0.9em] ml-1">2019-2021</p>
                </div>
                <div className="flex justify-start items-start pl-[2em]">
                  <p className="font-[500] uppercase text-start text-[0.9em]">
                    Master of Computer Application &nbsp; - &nbsp; Uttarakhand
                    Technical University, Dehradun
                  </p>
                </div>
                <div className="mt-[1.3em]">
                  <div className="flex justify-start items-center pl-[2em] mb-[1em]">
                    <SlCalender size={13} />
                    <p className="text-[0.9em] ml-1">2016-2019</p>
                  </div>
                  <div className="flex justify-start items-start pl-[2em]">
                    <p className="font-[500] uppercase text-start text-[0.9em]">
                      Bachelor of Computer Application &nbsp; - &nbsp; Kumaun
                      Univerisity, Nainital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>{" "}
      <p className="text-start font-[500] font-Poppins text-[1.5em] uppercase  mt-[2em] md:pl-[5.5em] pl-[1em]">
        Skills
      </p>
      <Grid container className=" flex flex-wrap px-[1em] md:px-[8em] mt-[2em]">
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2 ">
            <p className=" uppercase text-start">html</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={htmlSliderValue}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: htmlSliderValue - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{htmlSliderValue}%</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2 ">
            <p className=" uppercase text-start">CSS</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={htmlSliderValue}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: htmlSliderValue - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{htmlSliderValue}%</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2">
            <p className=" uppercase text-start">JavaScript</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={60}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: htmlSliderValue - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{60}%</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2 mt-[2em]">
            <p className=" uppercase text-start">Tailwind css</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={85}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: 85 - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{85}%</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m- mt-[2em]">
            <p className=" uppercase text-start">Node js</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={60}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: 60 - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{60}%</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2 mt-[2em]">
            <p className=" uppercase text-start">Mongo DB</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={40}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: 60 - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{40}%</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2 mt-[2em]">
            <p className=" uppercase text-start">React</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={70}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: 90 - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{70}%</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2 mt-[2em]">
            <p className=" uppercase text-start">Next.js</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={30}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: 30 - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[30%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{40}%</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2 mt-[2em]">
            <p className=" uppercase text-start">Express js</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={70}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: 70 - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{70}%</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="flex flex-col relative m-2 mt-[2em]">
            <p className=" uppercase text-start">Java</p>
            <Slider
              valueLabelDisplay="off"
              defaultValue={50}
              disabled
              sx={{
                height: "0.1em",
                "& .MuiSlider-track": {
                  border: "none",
                  color: color,
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
            />
            <div
              className=" absolute top-0 h-[1.8em] w-[2.8em] p-1 border-[0.1em] rounded-md"
              style={{ borderColor: color, left: 50 - 6 + "%" }}
            >
              <div
                className="h-[0.5em] w-[0.5em] border-b-[0.1em] border-r-[0.1em] transform rotate-45 absolute top-[1.4em] left-[40%] bg-[#000]"
                style={{ borderColor: color }}
              ></div>
              <p className="text-[0.8em]">{50}%</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
