import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Trainers = () => {
  return (
    <div className="h-fit relative top-[58rem]">
      <div className="absolute top-16 left-[26%] md:left-[41%]">
        <img src="/svgs/tagline.svg" alt="" className="relative" />
        <p className="uppercase relative -top-7 left-12 font-bold text-white w-fit  ">
          About Gymat
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 pt-32">
        {[
          {
            name: "Dorian Yates",
            img: "/images/home/trainer1.png",
            role: "Yoga Trainer",
          },
          {
            name: "Stefi Cohen",
            img: "/images/home/trainer2.png",
            role: "Body Builder",
          },
          {
            name: "Flex Wheeler",
            img: "/images/home/trainer3.png",
            role: "Yoga Trainer",
          },
          {
            name: "Shawn Ray",
            img: "/images/home/trainer4.png",
            role: "Body Builder",
          },
        ].map((trainer, idx) => (
          <div className="h-fit w-full p-10" key={idx}>
            <a
              href="#"
              className="flex flex-col items-center bg-[#e9ecef] border border-gray-200 rounded-xl px-2 gap-6 shadow md:flex-row md:max-w-[41vw] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg md:ml-20"
                src={trainer.img || "/default-image.png"}
                alt={trainer.name}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {trainer.name}
                </h5>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  {trainer.role}
                </p>
                <div className="bg-[#ff0336] w-[4rem] h-[0.2rem]"></div>
                <p className="flex gap-2 w-fit text-[1.2rem] mt-5">
                  <FaFacebookF />
                  <FaXTwitter />
                  <IoBasketballOutline />
                  <FaInstagram />
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
