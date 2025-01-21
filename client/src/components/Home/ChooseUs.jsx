const ChooseUs = () => {
  return (
    <div className=" relative top-[45rem] md:top-[55rem] lg-[45rem] w-full min-h-[120vh]">
      <div className="h-full flex flex-col items-center lg:flex-row justify-between overflow-hidden">
        <div className="p-5 w-[20rem] md:w-[30rem] lg:w-1/2 h-full">
          <img src="/images/service-2.png" alt="" />
        </div>
        <div className="flex items-center lg:items-start p-2 w-[100vw] lg:w-1/2 mt-10">
          <div className="w-full">
            <img src="/svgs/tagline.svg" alt="" className="relative" />
            <p className="uppercase relative -top-7 left-12 font-bold text-white  ">
              Why Choose Us
            </p>
            <h1 className="text-black uppercase text-[2.5rem] font-bold tracking-normal leading-none">
              Why Choose Us to Join Our Classes
            </h1>
            <p className="mt-6 w-[100%] lg:w-[90%] ">
              Gymat an unknown printer took galle type anscraey aretea bled make
              a type specimen bookayurvived not onlyive centuries.Gymat an
              unknown printer took galle type anscraey.
            </p>
            <ul className="flex gap-12 mt-10  flex-col md:flex-row md:items-center md:justify-between lg:items-start lg:justify-start">
              <li className="flex flex-col justify-center items-center md:items-start gap-5 mt-3">
                <img
                  src="/images/modernEquip.png"
                  alt=""
                  className="object-cover h-8"
                />
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                  <h2 className="font-bold text-[1.2rem]">Modern Equipment</h2>
                  <p className="mt-1 w-[90%] lg:w-[13.6rem] max-sm:text-center">
                    Gymat an unknown printer took a galley of type and scraey.
                  </p>
                </div>
              </li>
              <li className="flex flex-col justify-center items-center md:items-start gap-5">
                <img
                  src="images/ballFitness.png"
                  alt=""
                  className="object-cover h-8"
                />
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                  <h2 className="font-bold text-[1.2rem]">Weight Balance</h2>
                  <p className="mt-1  w-[90%] lg:w-[13.6rem] max-sm:text-center">
                    Gymat an unknown printer took a galley of type and scraey.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex justify-center items-center lg:justify-start lg:items-start gap-10">
              <div className="h-[10rem] w-[15rem] mt-12 flex justify-center items-center border-[0.01rem] border-gray-400">
                <div>
                  <h1 className="text-[3rem] font-bold text-center">1+</h1>
                  <p className="text-gray-600">Expert Trainers</p>
                </div>
              </div>
              <div className=" h-[10rem] w-[15rem] mt-12 flex justify-center items-center border-[0.01rem] border-gray-400">
                <div>
                  <h1 className="text-[3rem] font-bold text-center">13+</h1>
                  <p className="text-gray-600">Trained Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
