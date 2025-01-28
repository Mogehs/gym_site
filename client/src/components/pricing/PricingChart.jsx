import pricing1 from '/Pricing/pricing1.jpg';
import pricing2 from '/Pricing/pricing2.jpg';
import pricing3 from '/Pricing/pricing3.jpg';
import redimg from '/Pricing/redimg.svg';
import { IoArrowForward } from "react-icons/io5";

export default function PricingChart() {
    const plans = [
        {
            img: pricing1, level: 'Beginners', dollar: "$", price: 10, period: "p/m", features: [
                {
                    name: 'Free Hand', gym: "Gym Fitness", weit: 'Weight Loss',
                    train: "Personal Trainer", cycle: 'Cycling'
                }
            ],
            purchase: 'Purchase Now'
        },
        {
            img: pricing2, level: 'Basic', dollar: "$", price: 59, period: "p/m", features: [
                {
                    name: 'Free Hand', gym: "Gym Fitness", weit: 'Weight Loss',
                    train: "Personal Trainer", cycle: 'Cycling'
                }
            ],
            purchase: 'Purchase Now'

        },
        {
            img: pricing3, level: 'Advance', dollar: "$", price: 69, period: "p/m", features: [
                {
                    name: 'Free Hand', gym: "Gym Fitness", weit: 'Weight Loss',
                    train: "Personal Trainer", cycle: 'Cycling'
                }
            ],
            purchase: 'Purchase Now'
        },
    ]
    return (
        <div className=' w-full mt-10'>
            <div className='w-[100%] sm:w-[90%]  mx-auto'>

                {/* Pricing chart */}

                <div className=' w-[100%] sm:w[70%]'>
                    <div className=' w-[50%] sm:w-[20%] sm:mb-3 bg-no-repeat flex justify-center cover font-bold mx-auto' style={{ backgroundImage: `url(${redimg})` }}>
                        <span className=' text-white text-center'>Pricing Chart</span>
                    </div>
                    <div className=' text-center w-[100%] sm:w-[50%]  mx-auto sm:mb-10'>
                        <h1 className=' text-xl sm:text-3xl font-bold sm:mb-3'>Exclusive Pricing Plan</h1>
                        <span className=' text-xs sm:text-xl text-[#7a7a7a]'>Gymat an unknown printer took a galley of type and scrambled
                            make a type specimen book.</span>
                    </div>
                </div>



                {/* cards map */}

                <div className=' w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        plans.map((plan, index) => (
                            <div className=' w-full' key={index}>
                                <div className=' relative h-[200px] flex justify-center cursor-pointer grayscale w-[100%] bg-cover     
                            hover:grayscale-0 transition-all ease-in ' style={{ backgroundImage: `url(${plan.img})` }}>
                                    <div className=' w-[40%] mx-auto sm:w-[50%] md:w-[70%]  absolute bottom-0 flex justify-center items-center text-xl sm:text-2xl font-bold bg-red-500  text-white p-3 rounded-t-[10px] rounded-l-none'>
                                        <span>{plan.level}</span>
                                    </div>
                                </div>

                                {/* levels */}
                                <div className=' w-full flex justify-center items-center bg-white p-4'>
                                    <div className=' w-[40%] mx-auto sm:w-[50%] md:w-[70%] flex justify-center items-center   font-bold'>
                                        <sup className=' text-xl sm:text-3xl'>{plan.dollar}</sup>
                                        <sub className=' text-xl sm:text-3xl'>{plan.price} </sub> 
                                        <sub className=' text-xl sm:text-3xl'> {plan.period}</sub>
                                    </div>
                                </div>

                                {/* list of period */}

                                <div className=' w-full flex justify-center items-center bg-white p-5'>
                                    {
                                        plan.features.map((feature, index) => (
                                            <ul key={index}>
                                                <li className=' mb-2 text-[#7a7a7a]'>{feature.name}</li>
                                                <li className=' mb-2 text-[#7a7a7a]'>{feature.gym}</li>
                                                <li className=' mb-2 text-[#7a7a7a]'>{feature.weit}</li>
                                                <li className=' mb-2 text-[#7a7a7a]'>{feature.train}</li>
                                                <li className=' mb-2 text-[#7a7a7a]'>{feature.cycle}</li>
                                            </ul>
                                        ))
                                    }
                                </div>
                                
                                {/* purchase now */}
                                <div className=' w-full flex justify-center items-center bg-white p-5'>
                                    <div className=' w-[100%] mx-auto sm:w-[50%] md:w-[70%] flex justify-center items-center   font-semibold'>
                                        <button className=' shadow-lg shadow-red-400 hover:shadow-sm transition-all ease-out flex justify-center items-center gap-3  bg-red-500 text-white p-3 rounded-md'>{plan.purchase} <IoArrowForward /> </button>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
