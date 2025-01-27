import React from "react";
import bg from "/images/biography/background.png";
import profile from "/images/biography/profile.png";
import Icons from "./Icons";
import { FaCircleCheck } from "react-icons/fa6";
import ProgressiveBar from "./ProgressiveBar";
import MyForm from "./Form";

const cardcolor = "#f8f8f8";

const biodata =
  "Authoritatively disseminate multimedia based total linkage through market-driven methodologies. Continually transform integrated results via multidisciplinary manufacturing products. Appropriately foster fully researched and disseminated multimedia-based total linkage through market-driven approaches.";

const checklist = [
  {
    id: 1,
    text: "Certificate in Fitness Instructing – Gym",
  },
  {
    id: 2,
    text: "Diploma in Fitness Instructing and Personal Training",
  },
  {
    id: 3,
    text: "Diploma in Instructing Exercise and Fitness",
  },
];

const Hero = () => {
  return (
    <div className="mx-6 sm:mx-10 flex flex-col lg:flex-row gap-6 sm:gap-10 h-full p-4">
      {/* Left Section */}
      <div className="flex flex-col w-full sm:w-1/2 lg:w-[30%]">
        {/* Profile Card */}
        <div
          className="bg-cover bg-center rounded-lg shadow-lg text-center text-white p-6"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="flex flex-col items-center relative">
            <div className="w-48 h-48 rounded-full bg-[#fff5f2] flex items-center justify-center shadow-lg">
              {/* Profile Image */}
              <img
                src={profile}
                alt="trainer"
                className="w-40 h-40 rounded-full object-contain"
              />
            </div>

            {/* Profile Details */}
            <div className="mt-4 text-center flex flex-col justify-between">
              <h1 className="text-2xl font-bold text-white">Dorian Yates</h1>
              <p className="text-lg text-gray-300">Yoga Trainer</p>
              <div className="pt-6">
                <hr className="border-t-4 w-1/4 mx-auto border-red-600" />
              </div>
              <div className="flex py-6">
                <Icons />
              </div>
            </div>
          </div>
        </div>

        {/* Class Schedule Section */}
        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg text-black flex flex-col gap-4">
          <h2 className="text-xl font-bold py-2">Class Schedule</h2>
          <hr className="border-t-4 w-10 border-red-500 py-2" />
          <p className="mt-2 text-lg">
            <b>Monday:</b> 6:00 am - 8:00 am
          </p>
          <p className="mt-2 text-lg">
            <b>Saturday:</b> 7:00 am - 9:00 am
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-evenly w-full sm:w-1/2 lg:w-[60%]">
        {/* Biography Section */}
        <div className="p-4 bg-white rounded-lg shadow-lg px-10">
          <h2 className="text-3xl md:text-2xl font-bold mb-4">Biography</h2>
          <p className="text-gray-700">{biodata}</p>

          {/* Qualifications Section */}
          <div className="my-8">
            <h2 className="text-3xl md:text-2xl font-bold mb-4">
              Qualifications
            </h2>
            {checklist.map((item) => (
              <div key={item.id} className="flex items-center mb-2">
                <FaCircleCheck className="text-red-600" />
                <p className="ml-2 text-gray-700">{item.text}</p>
              </div>
            ))}
            <ProgressiveBar />
          </div>
        </div>

        <div className="p-6 mt-6 flex flex-col justify-start rounded-lg shadow-lg bg-white">
          <MyForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
