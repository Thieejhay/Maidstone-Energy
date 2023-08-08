import React from 'react';
import {RxDoubleArrowRight} from 'react-icons/rx';

const Operations = () => {
  return (
    <div className='flex lg:flex-row flex-col relative w-screen' id='operation'>
        <div className="flex flex-col basis-[30%] px-8 pt-10 lg:mt-8 pb-5 lg:pb-0 bg-[#000000]/70 h-[44.1rem]">
            <span className="flex flex-col gap-2">
                <span className="uppercase text-5xl font-medium text-white font-gilroyy">operations</span>
                <hr className="border-2 border-[#FFD808] w-[15rem]"></hr>
            </span>
            <span className="text-xl tracking-tight  leading-6 font-light text-white/80 mt-5 mr-3 font-gilroy">At the core of Maidstone Energy is a passion for execllent service delivery while conductuing business with high ethical standards.</span>
            <span className="text-2xl font-medium text-white mt-8 font-gilroyy">Our focus areas include:</span>
            <div className="mt-6 space-y-6">
                <span className="flex gap-6">
                    <span className="bg-white p-[7px] border rounded-full border-[#000000]/70">
                        <RxDoubleArrowRight className='w-4 h-4 text-[#000000]/70'/>
                    </span>
                    <span className="text-xl tracking-tight font-light text-white/80 font-gilroy">Trading</span>
                </span>
                <span className="flex gap-6">
                    <span className="bg-white p-[7px] border rounded-full border-[#000000]/70">
                        <RxDoubleArrowRight className='w-4 h-4 text-[#000000]/70'/></span>
                    <span className="text-xl tracking-tight font-light text-white/80 font-gilroy">Power</span>
                </span>
                <span className="flex gap-6 items-center">
                    <span className="bg-white p-[7px] border rounded-full border-[#000000]/70">
                        <RxDoubleArrowRight className='w-4 h-4 text-[#000000]/70'/></span>
                    <span className="text-xl tracking-tight font-light text-white/80 font-gilroy">Infrastructure & Logistics</span>
                </span>
                <span className="flex gap-6">
                    <span className="bg-white p-[7px] border rounded-full border-[#000000]/70">
                        <RxDoubleArrowRight className='w-4 h-4 text-[#000000]/70'/></span>
                    <span className="text-xl tracking-tight font-light text-white/80 font-gilroy">Retail</span>
                </span>
            </div>
        </div>
        <div className="flex flex-col basis-[70%] h-[46rem]">
            <div className="lg:h-[38rem] h-[15rem] w-full">
                <div className="">
                </div>
            </div>
            <div className="bg-[#F05C40]/95 lg:-mt-8 -mt-3 lg:h-[10rem] h-[8rem] flex flex-col items-center justify-center gap-1 lg:gap-2">
                <span className="lg:text-4xl text-xl font-normal text-white font-gilroy">"...excellent service delivery and high </span>
                <span className="lg:text-4xl text-xl font-normal text-white font-gilroy">ethical standards"</span>
            </div>
        </div>
    </div>
  )
}

export default Operations;