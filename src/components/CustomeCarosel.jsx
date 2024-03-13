import shoes from "../assets/images/shoes.png";
import machine from "../assets/images/machine.png";
import bat from "../assets/images/bat.png";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const CustomeCarosel = () => {
  const slides = [shoes, machine, bat];
  const [current, setCurrent] = useState(0);
  console.log(slides);
  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-100 ]`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides?.map((s) => {
          return <img key={s} src={s} alt="Image" />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center px-10 text-2xl font-bold">
        <button className="" onClick={previousSlide}>
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-6 w-full">
        {slides.map((s, i) => (
          <div
            key={"circle" + i}
            className={`rounded-full w-3 h-3 md:w-5 md:h-5 ${(i = current
              ? "bg-white"
              : "bg-gray-300")} `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomeCarosel;
