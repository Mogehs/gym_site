const Trainers = () => {
  return (
    <div className="h-screen bg-red-800 relative top-[58rem]">
      <img src="/images/Group-47-1-1.jpg" alt="" />
      <div className="absolute top-16 left-[41%]">
        <img src="/svgs/tagline.svg" alt="" className="relative" />
        <p className="uppercase relative -top-7 left-12 font-bold text-white w-fit  ">
          About Gymat
        </p>
      </div>
      <h1 className="absolute w-[25rem] h-fit top-[20%] left-[34%] leading-none bg-slate-600 text-[2rem] text-center font-bold">
        Meet Our Experienced Cool Trainers
      </h1>
      <div className="bg-red-800 h-full w-full absolute top-[35%]">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/images/team-17"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Trainers;
