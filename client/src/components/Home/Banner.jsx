import NeuButton from "./NeuButton";

const Banner = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <img
          src="/images/banner-9-1.jpg"
          alt=""
          className="object-cover w-full h-full absolute"
        />
        <div
          className="text-white absolute top-[10rem] left-[3rem] md:top-[12rem] md:left-[6rem] h-[1.7rem] w-[13rem] bg-cover bg-center bg-no-repeat flex justify-center items-center text-[1.1rem] font-light uppercase overflow-hidden"
          style={{
            backgroundImage: "url('/svgs/tagline.svg')",
          }}
        >
          <p className="aboslute font-semibold overflow-hidden">
            Find Your Energy
          </p>
        </div>
        <div className="absolute text-white top-[13rem] left-[3rem] md:top-[14rem] md:left-[6rem] overflow-hidden ">
          <h1 className="text-[2rem] lg:text-[4rem] tracking-normal leading-none font-bold wd-[50vw] md:w-[45vw] uppercase">
            Make Your Body Healthy & Fit
          </h1>
          <p className="mt-4  md:w-[40vw] text-gray-500">
            Gymhen an unknown printer took a galley of type and scrambled.It has
            survived nknown printercenturies.
          </p>
          <div className="mt-2">
            <NeuButton text={"Our Courses"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
