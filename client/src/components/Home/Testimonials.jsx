import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "“ When an unknown printer took a galley of type and smbled it togtye their make a type specimen book. It has survived not the leap into electronic types remaining essentially ”",
      name: "Ketty Brown",
      position: "CEO, RTTheme",
    },
    {
      text: "“ Gymatan unknown printer took lle type anscraey retea bled maketype specimen bookayurvived ot onlyive centuries.Gymatan unknown printer took lle type anscraey. ”",
      name: "John Doe",
      position: "Founder, FitClub",
    },
    {
      text: "“ It has survived not the leap into electronic types remaining essentially unchanged over centuries. ”",
      name: "Jane Smith",
      position: "Manager, HealthyLife",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-fit p-10 max-sm:p-4">
      <div>
        <div
          className="text-white h-[1.7rem] w-[13rem] bg-cover bg-center bg-no-repeat flex justify-center items-center text-[1.1rem] font-light uppercase overflow-hidden"
          style={{
            backgroundImage: "url('/svgs/tagline.svg')",
          }}
        >
          <p className="aboslute font-semibold overflow-hidden">Testimonials</p>
        </div>
        <div className="mt-8 flex items-center justify-between gap-10 max-lg:flex-col max-lg:text-center">
          <h1 className="text-[2rem] font-bold leading-[2rem] max-sm:text-[1.5rem]">
            Some Reviews From Our Trusted Clients
          </h1>
          <p className="max-sm:text-sm">
            Gymatan unknown printer took lle type anscraey retea bled maketype
            specimen bookayurvived ot onlyive centuries.Gymatan unknown printer
            took lle type anscraey.
          </p>
        </div>
        <div className="h-fit w-full mt-10 flex justify-center items-center max-sm:flex-col">
          <div className="w-[40%] h-full max-sm:w-full">
            <img
              src="/images/home/testimonial-7-1.jpg"
              alt=""
              className="h-full w-full object-cover rounded-tr-[10rem] max-sm:rounded-none"
            />
          </div>
          <div className="bg-black h-[21.73rem] w-[70%] text-white mt-36 flex justify-center flex-col pl-[10rem] max-lg:pl-[5rem] max-sm:pl-0 max-sm:mt-10 max-sm:w-full max-sm:text-center">
            <p className="w-[70%] h-[8rem] max-sm:w-full">
              {testimonials[currentIndex].text}
            </p>
            <div className="mt-3">
              <p className="text-[1.5rem] font-semibold">
                {testimonials[currentIndex].name}
              </p>
              <p>{testimonials[currentIndex].position}</p>
              <div className="flex gap-3 mt-10 justify-end mr-10 max-sm:justify-center max-sm:mr-0">
                <div
                  className="bg-white w-fit p-1 cursor-pointer"
                  onClick={handlePrevious}
                >
                  <GrPrevious className="text-black text-[2rem]" />
                </div>
                <div
                  className="bg-[#ff0336] w-fit p-1 cursor-pointer"
                  onClick={handleNext}
                >
                  <GrNext className="text-white text-[2rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
