import React from 'react';
import Entrepreneur from '../assets/Entrepreneur.png';
import Efficient from '../assets/Efficient.png';
import Trustworthy from '../assets/Trustworthy.png';
import {BsDot} from 'react-icons/bs';

const Culture = () => {
  return (
    <div className='flex flex-col pb-20 w-screen lg:h-[55rem] h-[40rem]' id='culture'>
        <div className="flex flex-col items-center justify-center gap-2">
            <span className="lg:text-4xl text-2xl font-medium text-[#F05C40] uppercase mb-1 font-gilroyy">Our Culture</span>
            <hr className="border border-[#F05C40]/80 lg:w-[30rem] w-[15rem]"></hr>
            <span className="w-[8rem] h-4 bg-black/90 -mt-4"></span>
        </div>
        <div className='flex absolute left-1/2'>
            <div className="lg:top-28 top-20 absolute border border-[#BEBEBE]/30 lg:h-[45rem] h-[30rem]"></div>
            <BsDot className='text-[#F94D1D] absolute top-[8rem] lg:top-[14.4rem] -ml-[1.5rem]' size='50px'/>
            <BsDot className='text-[#F94D1D] absolute top-[18rem] lg:top-[26rem] -ml-[1.5rem]' size='50px'/>
            <BsDot className='text-[#F94D1D] absolute top-[28rem] lg:top-[40rem]  -ml-[1.5rem]' size='50px'/>
        </div>
        <div className='flex relative'>
            <div className="flex absolute lg:left-[17rem] left-6 lg:top-24 top-12">
                <div className="flex flex-col relative lg:w-[22rem] w-[9rem]">
                    <img src={Entrepreneur} className="lg:h-[10rem] h-[6rem]" alt=""></img>
                    <div className="flex">
                        <span className="lg:w-[5rem] w-6 h-10 lg:h-[6.5rem] bg-[#F94D1D] absolute lg:top-28 top-[3.5rem] flex flex-col items-center lg:pt-4 lg:gap-1 gap-[2px]">
                            <span className="lg:text-5xl lg:font-extrabold text-xl font-medium text-white">1</span>
                            <hr className=" w-12 border-1 border-white/70"></hr>
                            </span>
                            <div className="flex flex-col justify-center lg:px-3 pt-2 lg:pt-0 px-2 lg:w-[17rem] w-[7.5rem] lg:h-[10rem] absolute lg:top-20 z-10 lg:left-[5rem] left-6 top-10 bg-white shadow-2xl">
                                <span className="uppercase lg:text-2xl text-xs font-medium lg:font-extrabold font-gilroyy">Entrepreneurial</span>
                                <span className="lg:text-lg text-xs font-light tracking-tight lg:font-normal text-[#000000]/70 font-gilroy">We are constantly looking forward, open to new ideas and seeking fresh oppurtunity or methods.</span>
                            </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
        <div className='flex relative'>
            <div className="flex absolute lg:left-[49rem] lg:top-[17rem] left-56 top-52">
                <div className="flex flex-col relative lg:w-[22rem] w-[9rem]">
                    <img src={Trustworthy} className="lg:h-[10rem] h-[6rem]" alt=""></img>
                    <div className="flex">
                        <span className="lg:w-[5rem] w-6 h-10 lg:h-[6.5rem] bg-[#F94D1D] absolute lg:top-28 top-[3.5rem] flex flex-col items-center lg:pt-4 lg:gap-1 gap-[2px]">
                            <span className="lg:text-5xl lg:font-extrabold text-xl font-medium text-white">2</span>
                            <hr className=" w-12 border-1 border-white/70"></hr>
                            </span>
                            <div className="flex flex-col justify-center lg:px-3 pt-2 lg:pt-0 px-2 lg:w-[17rem] w-[7.5rem] lg:h-[10rem] absolute lg:top-20 z-10 lg:left-[5rem] left-6 top-10 bg-white shadow-2xl">
                                <span className="uppercase lg:text-2xl text-xs font-medium lg:font-extrabold font-gilroyy">Trustworthy</span>
                                <span className="lg:text-lg text-xs tracking-tight  font-light lg:font-normal text-[#000000]/70 font-gilroy">We do what is right, we do what we agree with our clients and can be relied on to deliver.</span>
                            </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
        <div className='flex relative'>
            <div className="flex absolute lg:left-[13rem] left-8 lg:top-[32rem] top-96">
                <div className="flex flex-col relative lg:w-[22rem] w-[9rem]">
                    <img src={Efficient} className="lg:h-[10rem] h-[6rem]" alt=""></img>
                    <div className="flex">
                        <span className="lg:w-[5rem] w-6 h-10 lg:h-[6.5rem] bg-[#F94D1D] absolute lg:top-28 top-[3.5rem] flex flex-col items-center lg:pt-4 lg:gap-1 gap-[2px]">
                            <span className="lg:text-5xl lg:font-extrabold text-xl font-medium text-white">3</span>
                            <hr className=" w-12 border-1 border-white/70"></hr>
                            </span>
                            <div className="flex flex-col justify-center lg:px-3 pt-2 lg:pt-0 px-2 lg:w-[17rem] w-[7.5rem] lg:h-[10rem] absolute lg:top-20 z-10 lg:left-[5rem] left-6 top-10 bg-white shadow-2xl">
                                <span className="uppercase lg:text-2xl text-xs font-medium lg:font-extrabold font-gilroyy">Efficient</span>
                                <span className="lg:text-lg text-xs tracking-tight  font-light lg:font-normal text-[#000000]/70 font-gilroy"> We simplify to drive productivity.</span>
                            </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Culture;