import React from 'react';
import Logo from '../assets/main logo.png';
import Rec from '../assets/Rectangle.png';
import Banner from '../assets/Banner.png';
import Banner1 from '../assets/Banner1.png';
import Mission from '../assets/Mission.png';
import Vission from '../assets/Vission.png';

const Hero = () => {
  return (
    <div className='flex flex-col w-screen lg:px-16 px-2 lg:pb-28 pb-12 relative text-center lg:mt-24 mt-16' id='#home'>
        <div className='flex z-20 absolute lg:-top-24 -top-12 left-[50%] -translate-x-[50%] bg-white'>
            <img src={Logo} alt='' className='lg:w-48 lg:h-32 w-24 h-16'></img>
        </div>
        <div className='flex z-20 absolute lg:-top-24 -top-12 left-[50%] -translate-x-[50%] bg-white'>
            <img src={Logo} alt='' className='lg:w-48 lg:h-32 w-24 h-16'></img>
        </div>
        <div className='bg-black rounded-2xl flex relative'>
            <img src={Banner} alt='' className='w-full lg:h-[38rem] h-[42rem] rounded-2xl opacity-80 hidden lg:flex'></img>
            <img src={Banner1} alt='' className='w-full lg:h-[38rem] h-[42rem] rounded-2xl opacity-80 flex lg:hidden'></img>
            <div className='flex lg:z-10 absolute top-0 left-[50%] -translate-x-[50%]'>
                <img src={Rec} alt='' className='w-96'></img>
            </div>
        </div>
        <div className='flex z-10 absolute top-[17%] left-[22%] -translate-x-[10%]'>
            <span className="lg:text-[7rem] text-6xl font-semibold lg:font-bold text-white font-gilroyy">Maidstone Energy</span>
        </div>
        <div className="flex z-10 absolute lg:top-[30%] top-[35%] lg:left-[50%] lg:-translate-x-[50%] -translate-x-[10%] left-[25%]">
            <span className="lg:text-4xl text-xl font-normal text-white font-gilroyy">Your preferred energy partner.</span>
        </div>
        <div className="flex lg:gap-24 gap-3 items-center justify-center lg:-mt-28 -mt-36 z-10">
            <div className="flex flex-col">
                <img src={Vission} alt="" className="lg:w-[20rem] w-[10rem] h-[6rem] lg:h-[12rem] rounded"></img>
                <div className="flex flex-col gap-2 items-center justify-center lg:w-[20rem] w-[10rem] h-[9.5rem] lg:h-fit shadow-2xl bg-white">
                    <span className="text-xl font-extrabold font-gilroyy text-[#F05C40]">Our vision</span>
                    <span className="lg:text-xl text-base font-normal text-[#000000]/70 text-center font-gilroy">To be an emerging market energy leader at the core of the global economy</span>
                </div>
                </div>
                <div className="flex flex-col">
                    <img src={Mission} alt="" className="lg:w-[20rem] w-[10rem] h-[6rem] lg:h-[12rem] rounded"></img>
                    <div className="flex flex-col gap-2 items-center justify-center lg:w-[20rem] w-[10rem] h-[9.5rem] lg:h-fit shadow-2xl bg-white">
                        <span className="text-xl font-extrabold font-gilroyy text-[#F05C40]">Our mission</span>
                        <span className="lg:text-xl text-base font-normal text-center text-[#000000]/70 font-gilroy">To be a solution provider, enhancing business and driving trade while creating value</span>
                    </div>
                </div>
             </div>
    </div>
  )
}

export default Hero;