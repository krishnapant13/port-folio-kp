import React, { useState } from "react";
import img1 from "./assets/GREEM.png";
import img2 from "./assets/orange.png";
import img3 from "./assets/litchi.png";
import img4 from "./assets/lemon.png";
import img5 from "./assets/bubble.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const TextCarousel = () => {
  const [slide, setSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    const nextSlide = (slide + 1) % data.length;
    setSlide(nextSlide);
  };
  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    const prevSlide = (slide - 1 + data.length) % data.length;
    setSlide(prevSlide);
  };
  //dummy data
  const data = [
    {
      header: "FRUITACO",
      subHeader: "GREEN MINT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente iusto non culpa, fugiat quis. Corporis, voluptas repellendus quaerat asperiores qui incidunt nam necessitatibus iusto eaque, aut dolores tempore tempora?",
      buttonText: "Buy Item",
      img: img1,
      color: "#3ba324",
    },

    {
      header: "FRUITACO",
      subHeader: "ORANGE MINT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente iusto non culpa, fugiat quis. Corporis, voluptas repellendus quaerat asperiores qui incidunt nam necessitatibus iusto eaque, aut dolores tempore tempora?",
      buttonText: "Buy Item",
      img: img2,
      color: "#cf7b27",
    },

    {
      header: "FRUITACO",
      subHeader: "EXOTIC LITCHI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente iusto non culpa, fugiat quis. Corporis, voluptas repellendus quaerat asperiores qui incidunt nam necessitatibus iusto eaque, aut dolores tempore tempora?",
      buttonText: "Buy Item",
      img: img3,
      color: "#bfaa86",
    },
    {
      header: "FRUITACO",
      subHeader: "LEMON TEA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente iusto non culpa, fugiat quis. Corporis, voluptas repellendus quaerat asperiores qui incidunt nam necessitatibus iusto eaque, aut dolores tempore tempora?",
      buttonText: "Buy Item",
      img: img4,
      color: "#8f4521",
    },
    {
      header: "FRUITACO",
      subHeader: "BUBBLE GUM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente iusto non culpa, fugiat quis. Corporis, voluptas repellendus quaerat asperiores qui incidunt nam necessitatibus iusto eaque, aut dolores tempore tempora?",
      buttonText: "Buy Item",
      img: img5,
      color: "#db3d3d",
    },
  ];
  return (
    <div className="flex flex-col justify-start items-start">
      {data.map((slide, index) => (
        <div
          className={`absolute  transition-all duration-300 ease-linear -z-10 ${
            currentSlide === index
              ? "h-screen w-full  bottom-0 right-0"
              : "bottom-[3em] right-[43%]  h-1 w-1 opacity-0 delay-300"
          }`}
          style={{ backgroundColor: slide.color }}
        />
      ))}
      <div className="content-container  overflow-hidden relative">
        <div
          className="slide-container transition-all duration-500 w-[30em] h-[17em]"
          style={{ transform: `translateY(-${slide * 100}%)` }}
        >
          {data.map((slide, index) => (
            <div
              className="slide flex flex-col justify-center items-start h-full  "
              key={index}
            >
              <p className="text-left text-white font-bold text-[2.5em]">
                {slide?.header}
              </p>
              <p className="text-left text-white font-bold text-[2.5em]">
                {slide?.subHeader}
              </p>
              <p className="text-left text-white">{slide?.description}</p>
              <button
                className="bg-white py-2 px-4 w-40 rounded-md mt-2 font-bold"
                style={{ color: slide.color }}
              >
                {slide.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        className="rounded-full w-10 h-10 left-[4em] z-10 bottom-10  bg-[#ffffff2d] absolute"
        onClick={handlePrev}
      >
        <FaAngleLeft className="m-auto" color="white" />
      </button>
      <button
        className="rounded-full w-10 h-10 left-[7em] z-10 bottom-10 bg-[#ffffff2d] absolute"
        onClick={handleNext}
      >
        <FaAngleRight className="m-auto" color="white" />
      </button>
      {/* bottleCarousel */}
      <div className="bottleCarousel absolute w-[65%] right-0 bottom-2  overflow-hidden ">
        <div
          className="slide-container transition-all duration-500 flex flex-row justify-center items-end"
          style={{ transform: `translateX(-${slide * 20}%)` }}
        >
          {data.map((slide, index) => (
            <div
              className={`slide ${
                index === currentSlide ? "w-[20%]" : "w-[10%] mx-10"
              } transition-all ease-linear duration-300`}
              key={index}
            >
              <img src={slide.img} alt={slide + index + "image"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
