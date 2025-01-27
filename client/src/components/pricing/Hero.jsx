import banner from "../../../public/Pricing/banner.jpg";
import breadcumb from "../../../public/Pricing/breadcumb.svg";
import Fitness from "./Fitness";
import PricingChart from "./PricingChart";

export default function Hero() {
  return (
    <div className=" w-full">
      <div
        className="w-full h-[60vh] sm:h-[70vh] bg-cover bg-center flex justify-center flex-col px-5"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="sm:w-[20rem] w-full sm:h-[200px]">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Pricing Page
          </h1>
          <div
            className="bg-no-repeat flex justify-center items-center w-[70%] mt-4 bg-contain"
            style={{ backgroundImage: `url(${breadcumb})` }}
          >
            <span className="text-white text-center text-xl">
              Gymate - <span className="text-red-500">Pricing Page</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing chart */}
      <PricingChart />

      {/* fiteness */}
      <Fitness />
    </div>
  );
}
