import NeuButton from "./NeuButton";

const PricingPlans = () => {
  return (
    <div className="relative h-fit w-full overflow-hidden mt-[60rem]">
      <img
        src="/images/Group-47-1-1.jpg"
        alt=""
        className="w-full object-cover h-[84rem] md:h-[73rem] lg:h-[40rem]"
      />
      <div className="absolute top-0 w-full h-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-10">
        {/* Header Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <div
            className="text-white mx-auto lg:mx-0 h-[1.7rem] w-[13rem] bg-cover bg-center bg-no-repeat flex justify-center items-center text-[1.1rem] font-light uppercase"
            style={{ backgroundImage: "url('/svgs/tagline.svg')" }}
          >
            <p className="font-semibold">Pricing Chart</p>
          </div>
          <h1 className="text-white mt-6 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Our Simple Pricing Plans
          </h1>
          <p className="text-white mt-4 text-sm md:text-base">
            Save 25% on yearly Premium Plan
          </p>
        </div>

        {/* Pricing Cards Section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-2/3 items-center justify-center">
          <div className="w-full max-w-sm p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-lg font-medium text-gray-500 dark:text-gray-400">
              Basic
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-2xl font-semibold">$</span>
              <span className="text-4xl font-extrabold">100</span>
              <span className="ml-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                /Mo
              </span>
            </div>
            <ul className="space-y-4 my-6">
              {[
                "Unlimited Access to Home Club",
                "Free Fitness Training",
                "Free training session with a Club",
                "Over 16 free group fitness classes",
                "Free functional movement screen",
                "Movement screen",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <img
                    src="/images/home/pricetick.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <NeuButton text="Choose Plan" className="w-full py-2 text-center" />
          </div>
          <div className="w-full max-w-sm p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-lg font-medium text-gray-500 dark:text-gray-400">
              Premium
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-2xl font-semibold">$</span>
              <span className="text-4xl font-extrabold">200</span>
              <span className="ml-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                /Mo
              </span>
            </div>
            <ul className="space-y-4 my-6">
              {[
                "Unlimited Access to Home Club",
                "Free Fitness Training",
                "Free training session with a Club",
                "Over 16 free group fitness classes",
                "Free functional movement screen",
                "Movement screen",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <img
                    src="/images/home/pricetick.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <NeuButton text="Choose Plan" className="w-full py-2 text-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
