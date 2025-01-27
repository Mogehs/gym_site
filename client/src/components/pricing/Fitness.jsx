import weld from '/Pricing/weld.jpg';
import { IoArrowForward } from "react-icons/io5";

export default function Fitness() {
    return (
        <div className="w-full h-[300px] sm:h-[500px] bg-cover bg-center bg-no-repeat flex flex-col justify-center" style={{ backgroundImage:`url(${weld})` }}>
            <div className=' w-[100%] sm:w[70%] p-4 sm:p-10'>
                <div className=' text-center w-[100%] sm:w-[100%]   mx-auto'>
                    <h1 className=' text-2xl sm:text-2xl md:text-6xl text-white font-bold sm:mb-3'>Exclusive Pricing Plan</h1>
                    <span className=' text-xl sm:text-2xl font-bold text-[#7a7a7a]'>Get <span className=' text-red-500'>35%</span> Discount</span>
                </div>
            </div>
            <div className=' w-full flex justify-center items-center '>
                <div className=' w-[100%] mx-auto sm:w-[50%] md:w-[70%] flex justify-center items-center   font-semibold'>
                    <button className=' text-xs sm:text-xl  shadow-lg shadow-red-300 hover:shadow-sm transition-all ease-out flex justify-center items-center gap-3 uppercase  bg-red-500 text-white p-3 rounded-md'>contact with us <IoArrowForward /> </button>
                </div>
            </div>
        </div>
    )
}
