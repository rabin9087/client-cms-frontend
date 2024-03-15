import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CustomeCarosel = ({ carouselImage }) => {
  const dispatch = useDispatch();

  const [current, setCurrent] = useState(0);
  const previousSlide = () => {
    if (carouselImage.length === 1) {
      return;
    }
    if (current === 0) {
      setCurrent(carouselImage.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (carouselImage.length === 1) {
      return;
    }
    if (current === carouselImage.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    if (carouselImage.length === 1) {
      return;
    }
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    const handelSwipe = (e) => {
      if (e.deltax > 0) {
        nextSlide();
      } else if (e.deltax < 0) {
        previousSlide();
      }
    };

    window.addEventListener("wheel", handelSwipe);

    return () => {
      clearInterval(interval);
      window.removeEventListener("wheel", handelSwipe);
    };
  }, [dispatch, current, carouselImage.length]);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-300 min-h-96`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {carouselImage?.map((s, i) => {
          return <img key={i} src={s} alt="Image" height={"100vh"} />;
        })}
      </div>
      <div className=" absolute top-0 h-full w-full flex justify-between items-center px-2 md:px-10 text-2xl font-bold">
        <button className="" onClick={previousSlide}>
          {carouselImage.length === 1 ? "" : <FaChevronLeft />}
        </button>
        <button onClick={nextSlide}>
          {carouselImage.length === 1 ? "" : <FaChevronRight />}
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-6 w-full">
        {carouselImage.map((s, i) => (
          <button key={i} className="" onClick={() => setCurrent(i)}>
            <div
              className={`rounded-full w-3 h-3 md:w-5 md:h-5 bg-gray-300 ${
                i === current ? "bg-white" : "bg-gray-600"
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomeCarosel;
