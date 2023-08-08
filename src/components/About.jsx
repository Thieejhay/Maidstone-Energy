import React from 'react';
import Aboutt from '../assets/About Us.png';

const About = () => {
  return (
    <div className='flex flex-col pb-20' id='about'>
        <div className='flex flex-col items-center justify-center gap-2'>
            <span className="lg:text-4xl text-2xl font-medium text-[#F05C40] mb-1 font-gilroyy">About us</span>
            <hr className="border border-[#F05C40]/80 lg:w-[30rem] w-[15rem]"></hr>
            <span className="w-[8rem] h-4 bg-black/90 -mt-4"></span>
        </div>
        <div className='lg:flex-row flex flex-col w-screen lg:pt-16 pt-6'>
            <div className="flex flex-col basis-[45%] lg:pl-28 pl-3">
                <span className="text-3xl text-[#F05C40] font-medium mb-3 font-gilroyy">Who we are</span>
                <span className="text-5xl font-light leading-none text-left text-[#000000]/70 tracking-wide mb-6 font-gilroyy">Maidstone enegry is an integrated energy and commodities business.</span>
                <span className="text-2xl font-normal text-[#000000]/70 tracking-tight text-left w-[95%] font-gilroy">Focused on the sourcing, trading and supply of crude oil and its derivaties. We operate and invest in the upstream, midstream, downstream and power sectors.</span>
            </div>
            <div className="flex lg:basis-[55%] relative lg:h-[30rem] h-[22rem]">
                <div className="">
                    <span className="w-[80%] h-[15rem] bg-[#F05C40]/70 absolute bottom-0 left-2"></span>
                    <img className="absolute lg:left-8 lg:bottom-6 bottom-5 left-7 lg:w-[39rem] lg:h-[29rem] w-[21rem] h-[18rem]" src={Aboutt} alt=""></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;