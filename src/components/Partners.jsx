import React from 'react';
import Exon from '../assets/Exon.png';
import Petroli from '../assets/Petroli.png';
import Vitol from '../assets/Vitol.png';
import Vagan from '../assets/Vagan.png';
import Stickland from '../assets/Stickland.png';
import Was from '../assets/Was.png';

const Partners = () => {
  return (
    <div className='flex flex-col w-screen py-12' id='partners'>
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <span className="lg:text-4xl text-2xl font-medium text-[#F05C40] mb-1 font-gilroyy">Partners</span>
            <hr className="border border-[#F05C40]/80 lg:w-[30rem] w-[15rem]"></hr>
            <span className="w-[8rem] h-4 bg-black/90 -mt-4"></span>
        </div>
        <div className='flex lg:gap-9 gap-3 justify-center items-center'>
            <img src={Exon} alt="" className='lg:w-[10.3rem] w-12 h-3 lg:h-[1.7rem]'/>
            <img src={Petroli} alt="" className='lg:w-[8rem] w-10 h-4 lg:h-[3rem]'/>
            <img src={Vitol} alt="" className='lg:w-[9rem] w-10 h-2 lg:h-[1.7rem]'/>
            <img src={Vagan} alt="" className='lg:w-[11rem] w-10 h-3 lg:h-[3rem]'/>
            <img src={Stickland} alt="" className='lg:w-[10rem] w-10 h-5 lg:h-[6rem]'/>
            <img src={Was} alt="" className='lg:w-[10rem] w-10 h-3 lg:h-[3rem]'/>
        </div>
    </div>
  )
}

export default Partners;