import { GrNext } from "react-icons/gr";
const Testimonials = () => {
  return (
    <div className="h-fit p-10">
      <div>
        <div
          className="text-white h-[1.7rem] w-[13rem] bg-cover bg-center bg-no-repeat flex justify-center items-center text-[1.1rem] font-light uppercase overflow-hidden"
          style={{
            backgroundImage: "url('/svgs/tagline.svg')",
          }}
        >
          <p className="aboslute font-semibold overflow-hidden">
            Testimonials{" "}
          </p>
        </div>
        <div className=" mt-8 flex items-center justify-between gap-10 max-lg:flex-col max-lg:text-center">
          <h1 className="text-[2rem]  font-bold leading-[2rem]">
            Some Reviews From Our Trusted Clients
          </h1>
          <p>
            Gymatan unknown printer took lle type anscraey retea bled maketype
            specimen bookayurvived ot onlyive centuries.Gymatan unknown printer
            took lle type anscraey.
          </p>
        </div>
        <div className="bg-red-800 h-fit w-full mt-10 flex justify-center items-center">
          <div className="w-[40%] h-full">
            <img
              src="/images/home/testimonial-7-1.jpg"
              alt=""
              className="h-full w-full object-cover rounded-tr-[10rem]"
            />
          </div>
          <div className="bg-black h-[22.2rem] w-[70%] text-white mt-36 flex justify-center flex-col pl-[10rem]">
            <p className="w-[70%] ">
              “ When an unknown printer took a galley of type and smbled it
              togtye their make a type specimen book. It has survived not the
              leap into electronic types remaining essentially ”
            </p>
            <div className="mt-10">
              <p className="text-[1.5rem] font-semibold">Ketty Brown</p>
              <p>CEO,RTTheme</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
