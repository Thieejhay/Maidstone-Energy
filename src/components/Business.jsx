import React from 'react';
import Trading from '../assets/Trading.png';
import Power from '../assets/Power.png';
import Logistics from '../assets/Logistics.png';
import Retail from '../assets/Retail.png';
import {RxDoubleArrowRight} from 'react-icons/rx';


const Business = () => {
  return (
    <div className='flex flex-col w-screen bg-gray-100 py-12' id='business'>
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <span className="lg:text-4xl text-2xl font-medium text-[#F05C40] mb-1 font-gilroyy">Our Business</span>
            <hr className="border border-[#F05C40]/80 lg:w-[30rem] w-[15rem]"></hr>
            <span className="w-[8rem] h-4 bg-black/90 -mt-4"></span>
        </div>
        <div className='lg:flex-row flex-col flex lg:gap-12 gap-6 w-screen items-center justify-center'>
            <div className='bg-white rounded shadow-xl lg:w-[35rem] w-[22rem] lg:h-[17rem] h-[27rem] lg:pl-8 lg:pt-8 pl-4 pt-8 flex gap-4 relative'>
                <img src={Trading} alt='' className='p-[8px] bg-gray-200 rounded-full w-24 h-24 lg:mt-0 mt-4'></img>
                <span className="flex flex-col lg:gap-4 gap-2">
                    <span className="text-2xl font-bold uppercase font-gilroyy">Trading</span>
                    <span className="lg:text-base text-lg font-normal text-[#000000]/60 lg:pr-16 pr-3 font-gilroy">Maidstone Energy's core is sourcing, trading and supplying crude oil and its derivative product.We have operational expertise in phyiscal trading and aim to position ourselves as an efficient and preffered trading partner surpporting the oil and gas industry.</span>
                </span>
                <span className="bg-[#F05C40] p-[7px] rounded-full absolute lg:left-[33.5rem] lg:top-1/2 top-[94%] left-1/2">
                    <RxDoubleArrowRight className=' text-[#ffffff] w-6 h-6'/>
                </span>
            </div>
            <div className='bg-white rounded shadow-xl lg:w-[35rem] w-[22rem] lg:h-[17rem] h-[25rem] lg:pl-8 lg:pt-8 pl-4 pt-8 flex gap-4 relative'>
                <img src={Power} alt='' className='p-[8px] bg-gray-200 rounded-full w-24 h-24 lg:mt-0 mt-4'></img>
                <span className="flex flex-col lg:gap-4 gap-2">
                    <span className="text-2xl font-bold uppercase font-gilroyy">Power</span>
                    <span className="lg:text-base text-lg font-normal text-[#000000]/60 lg:pr-16 pr-3 font-gilroy">Maidstone Energy aims to deliver customized power solutions to governmemt, industry and retail users.</span>
                </span>
                <span className="bg-[#F05C40] p-[7px] rounded-full absolute lg:left-[33.5rem] lg:top-1/2 top-[94%] left-1/2">
                    <RxDoubleArrowRight className='w-6 h-6 text-[#ffffff]'/>
                </span>
            </div>
        </div>
        <div className='lg:flex-row flex-col flex lg:gap-12 gap-6 w-screen items-center justify-center mt-8'>
            <div className='bg-white rounded shadow-xl lg:w-[35rem] w-[22rem] lg:h-[17rem] h-[27rem] lg:pl-8 lg:pt-8 pl-4 pt-8 flex gap-4 relative'>
                <img src={Logistics} alt='' className='p-[8px] bg-gray-200 rounded-full w-24 h-24 lg:mt-0 mt-4'></img>
                <span className="flex flex-col lg:gap-4 gap-2">
                    <span className="text-2xl font-bold uppercase font-gilroyy">Infrastructure & Logistics</span>
                    <span className="lg:text-base text-lg font-normal text-[#000000]/60 lg:pr-16 pr-3 font-gilroy">Maidstone has strong relationships within the freight industry and is able to consult on and organize the movement of cargo, facilitate time charters and provide vessel capabilities in support of the oil and gas industry.</span>
                </span>
                <span className="bg-[#F05C40] p-[7px] rounded-full absolute lg:left-[33.5rem] lg:top-1/2 top-[94%] left-1/2">
                    <RxDoubleArrowRight className='w-6 h-6 text-[#ffffff]'/>
                </span>
            </div>
            <div className='bg-white rounded shadow-xl lg:w-[35rem] w-[22rem] lg:h-[17rem] h-[25rem] lg:pl-8 lg:pt-8 pl-4 pt-8 flex gap-4 relative'>
                <img src={Retail} alt='' className='p-[8px] bg-gray-200 rounded-full w-24 h-24 lg:mt-0 mt-4'></img>
                <span className="flex flex-col lg:gap-4 gap-2">
                    <span className="text-2xl font-bold uppercase font-gilroyy">Retail</span>
                    <span className="lg:text-base text-lg font-normal text-[#000000]/60 lg:pr-16 pr-3 font-gilroy">Maidstone Energy's retail stragegy is focused on creating efficeint distrubtion channels to support the increased use of luquefied petroleum Gas(LPG) over the domestic fuels used in households. </span>
                </span>
                <span className="bg-[#F05C40] p-[7px] rounded-full absolute lg:left-[33.5rem] lg:top-1/2 top-[94%] left-1/2">
                    <RxDoubleArrowRight className='w-6 h-6 text-[#ffffff]'/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Business;