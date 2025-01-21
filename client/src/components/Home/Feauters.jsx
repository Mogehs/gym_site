import NeuButton from "./NeuButton";

const Feauters = () => {
  return (
    <div className="relative top-[38rem] h-fit flex flex-col lg:flex-row justify-center p-3 md:top-[45rem] gap-7 w-[93vw] mx-auto lg:mt-[5rem]">
      <div className="lg:w-[47vw] flex flex-col md:flex-row-reverse md:justify-between items-center pt-1">
        <img
          src="/images/feature-3.jpg"
          alt=""
          className="h-[10rem] lg:w-[15rem] xl:h-[10rem] xl:w-[24rem] object-cover rounded-md"
        />
        <div>
          <h1 className="font-bold text-[1.2rem]">Classes For Her</h1>
          <NeuButton text={"Join Our Team"} className="h-10 pt-2" />
        </div>
      </div>
      <div className="lg:w-[47vw] flex flex-col md:flex-row-reverse md:justify-between items-center pt-1">
        <img
          src="/images/feature-4.jpg"
          alt=""
          className="h-[10rem] lg:w-[15rem] xl:w-[24rem] object-cover rounded-md"
        />
        <div>
          <h1 className="font-bold text-[1.2rem]">Classes For Him</h1>
          <NeuButton text={"Join Our Team"} className="h-10 pt-2" />
        </div>
      </div>
    </div>
  );
};

export default Feauters;
