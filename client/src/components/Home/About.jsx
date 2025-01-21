const About = () => {
  return (
    <div className="min-h-screen w-[98.5vw] relative top-[30rem] md:top-[31rem] lg:top-[42rem]  flex justify-center items-center overflow-hidden xl:top-[47rem]">
      <div className="h-fit m-1 w-full md:w-[94vw] flex flex-col md:flex-row gap-3 items-center md:justify-center xl:justify-center xl:gap-14">
        <div className="flex items-center w-[33rem] h-screen md:h-fit xl:top-[8rem] relative">
          <img
            src="/svgs/halfCircle.svg"
            alt=""
            className="h-[60vh] relative left-36 md:h-[80vh] md:left-14"
          />
          <img
            src="/images/running.png"
            alt=""
            className="h-[60vh] relative left-40 md:left-20 md:h-[80vh]"
          />
          <img
            src="/images/girlRunning.png"
            alt=""
            className="h-[50vh] right-[5rem]  md:h-[75vh] relative md:right-[14rem] lg:right-[19rem] xl:right-[25rem]"
          />
        </div>
        <div className="flex items-start p-2 md:w-[30rem] lg:w-[30rem] md:h-fit">
          <div>
            <img src="/svgs/tagline.svg" alt="" className="relative" />
            <p className="uppercase relative -top-7 left-12 font-bold text-white  ">
              About Gymat
            </p>
            <h1 className="text-black uppercase text-[2.5rem] font-bold tracking-normal leading-none">
              We Can Give A Shape Of Your Body Here!
            </h1>
            <p className="mt-6">
              Gymat an unknown printer took a galley of type and scraey aretea
              bled make a type specimen book. May has survived not onlyive
              centuries but also the leap electronic.
            </p>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="flex justify-center items-center gap-5">
                <img
                  src="/images/modernEquip.png"
                  alt=""
                  className="object-cover h-8"
                />
                <div>
                  <h2 className="font-bold text-[1.2rem]">Modern Equipment</h2>
                  <p className="mt-1">
                    Gymat an unknown printer took a galley of type and scraey.
                  </p>
                </div>
              </li>
              <li className="flex justify-center items-center gap-5">
                <img
                  src="images/ballFitness.png"
                  alt=""
                  className="object-cover h-8"
                />
                <div>
                  <h2 className="font-bold text-[1.2rem]">Body Fitness</h2>
                  <p className="mt-1">
                    Gymat an unknown printer took a galley of type and scraey.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
