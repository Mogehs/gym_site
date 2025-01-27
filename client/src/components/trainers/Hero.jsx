import bgImage from "/images/trainers/bg-img.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="hero flex items-center w-full bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-content text-white w-full flex flex-col items-center md:items-start px-4 md:px-16">
        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-center md:text-left">
          Trainers
        </h1>
        <div className="heroPic w-full md:max-w-[50%] lg:max-w-[20%] flex justify-center gap-1 mt-2">
          <a href="#" className="home">
            <span className="hover:text-[#ff0336]">Gymate</span>
          </a>
          <span className=""> - </span>
          <span className="text-[#ff0336]">Trainers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
