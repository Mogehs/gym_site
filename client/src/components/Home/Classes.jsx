import { GiMuscularTorso } from "react-icons/gi";
const Classes = () => {
  return (
    <div className="h-[100vh] relative top-[34rem] md:top-[38rem] lg:top-[44rem] xl:top-[50rem] overflow-hidden">
      <div className="relative h-1/2 w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="md:flex md:flex-row justify-center min-h-screen w-[100vw] p-4 flex-col">
            <div className="relative flex items-center h-screen   md:w-[35vw] lg:w-[40vw]">
              <div>
                <div className="relative ">
                  <img src="/svgs/tagline.svg" alt="" />
                  <p className="absolute top-0 ml-7 mt-1 uppercase text-white font-bold ">
                    Upcoming Course
                  </p>
                </div>
                <h2 className="uppercase text-[2.5rem] font-bold tracking-normal leading-none md:w-[20rem] lg:w-[30rem] md:text-[1.8rem] lg:text-[2rem]">
                  We Offer Body Change Courses
                </h2>
                <p className="md:text-[0.8rem] lg:text-[1rem] lg:w-[24rem] md:w-[16rem] mt-2 z-10">
                  Gymat an unknown printer took galle type anscr aey aretea bled
                  make a type specimen bookay survived not onlyive centuries.
                </p>
              </div>
            </div>
            <div className="courseImage w-[100vw] overflow-hidden md:w-[60vw] hidden md:flex p-3 items-center gap-2">
              <div className="relative overflow-hidden w-[30vw]">
                <img
                  src="/images/courseImage.jpg"
                  alt=""
                  className="h-[90vh] rounded-lg  object-cover"
                />
                <div className="bg-white h-[39vh] w-[31vw] absolute top-[23rem] lg:top-[26rem] xl:top-[33rem] left-[1rem] rotate-[18deg] rounded-2xl md:top-[17rem] md:-left-[0.3rem]">
                  <GiMuscularTorso className="-rotate-[18deg] flex ml-[7rem] mt-[3rem] text-[3rem]" />
                  <h1 className="-rotate-[18deg] flex ml-[6rem] font-bold uppercase">
                    Body building
                  </h1>
                  <p className="-rotate-[18deg] ml-[8rem]">By Trainer 1</p>
                </div>
              </div>
              <div className="relative overflow-hidden w-[30vw]">
                <img
                  src="/images/courseImage.jpg"
                  alt=""
                  className="h-[90vh] rounded-lg object-cover"
                />
                <div className="bg-white h-[39vh] w-[31vw] absolute top-[23rem] lg:top-[26rem] xl:top-[33rem]  left-[1rem] rotate-[18deg] rounded-2xl md:top-[17rem] md:-left-[0.3rem]">
                  <GiMuscularTorso className="-rotate-[18deg] flex ml-[7rem] mt-[3rem] text-[3rem]" />
                  <h1 className="-rotate-[18deg] flex ml-[6rem] font-bold uppercase">
                    Body building
                  </h1>
                  <p className="-rotate-[18deg] ml-[8rem]">By Trainer 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
