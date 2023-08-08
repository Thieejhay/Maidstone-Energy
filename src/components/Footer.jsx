import React from 'react';
import {BiEnvelopeOpen} from 'react-icons/bi'
import {TbLocation} from 'react-icons/tb';
import {MdLocationPin} from 'react-icons/md';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className='flex w-screen lg:h-[44rem] bg-[#090B19] flex-col gap-4'>
        <div className='flex justify-center w-screen lg:py-8 py-4'>
            <div className='flex flex-col gap-8'>
                <div className='flex lg:flex-row flex-col lg:gap-96 gap-6 items-center h-28'>
                    <div className="flex flex-col">
                        <span className="text-2xl font-medium text-white font-gilroy">Subscribe for updates</span>
                        <span className="text-2xl font-medium text-white font-gilroy">From this site</span>
                    </div>
                    <div className='flex flex-col lg:gap-2 gap-4'>
                        <div className='flex gap-2 items-center justify-center'>
                            <BiEnvelopeOpen  className='w-5 h-5 text-[#F05C40]/80'/>
                            <input className="lg:w-[14rem] w-36 h-6 px-3 bg-transparent text-gray-500 placeholder-gray-500 font-gilroy" placeholder="email address"></input>
                            <div className="p-2 bg-[#F05C40] flex gap-1 text-white">
                                <span className="text-sm font-medium">Subscribe now </span>
                                <span><TbLocation className='w-3 h-3 mt-1 text-white'/></span>
                            </div>
                        </div>
                        <hr className="border border-gray-500 lg:w-[26rem] w-screen"></hr>
                    </div>
                </div>
                <hr className="border border-gray-900 w-full"></hr>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col w-screen justify-center lg:gap-32 gap-2'>
            <div className='flex flex-col px-4 lg:px-0 w-[26rem]'>
                <span className="text-lg font-medium text-white mb-4 font-gilroyy">About us</span>
                <span className="text-base font-extralight text-white/70 lg:mb-10 mb-5 font-gilroy">Maidstone Energy, your preffered energy partner. A passion for excellent service delivery while conducting business with high ethical standardsis at the core of what drives Maidstone Energy.</span>
                <span className="text-xl font-medium text-white mb-3 font-gilroyy">Information</span>
                <span className="text-lg font-medium text-white mb-2 font-gilroyy">Contact details</span>
                <span className="flex gap-2 items-center mb-4">
                    <BiEnvelopeOpen  className='w-5 h-5 text-[#F05C40]/80'/>
                    <span className="text-white/70 text-base font-light font-gilroy">trades@maidstoneserv.com</span>
                </span>
                <hr className="border-[0.2px] border-gray-800 w-[15rem]"></hr>
                <span className="text-lg font-medium text-white mt-4 mb-2">Office address</span>
                <span className="flex gap-2 items-center mb-4 w-[80%]">
                    <MdLocationPin className='w-10 h-10 text-[#F05C40]/80'/>
                    <span className="text-white/70 text-base font-light">54b, Forces Avenue, Old GRA,Port Harcourt, Rivers state, Nigeria</span>
                </span>
            </div>
            <div className='flex flex-col lg:pl-6 pl-4 w-[27rem]'>
                <span className="uppercase text-base font-medium text-white font-gilroyy lg:pl-3">navigation</span>
                <hr className="border-[0.2px] border-gray-800 w-full lg:my-4 my-2"></hr>
                <Link to='#about' smooth><span className="text-base font-light text-white/80 lg:pl-6 pl-2 font-gilroy hover:text-[#F05C40]/80">About us</span></Link>
                <hr className="border-[0.2px] border-gray-800 w-full lg:my-4 my-2"></hr>
                <Link to='#culture' smooth><span className="text-base font-light text-white/80 lg:pl-6 pl-2 font-gilroy hover:text-[#F05C40]/80">Culture</span></Link>
                <hr className="border-[0.2px] border-gray-800 w-full lg:my-4 my-2"></hr>
                <Link to='#operation' smooth><span className="text-base font-light text-white/80 lg:pl-6 pl-2 font-gilroy hover:text-[#F05C40]/80">Operations</span></Link>
                <hr className="border-[0.2px] border-gray-800 w-full lg:my-4 my-2"></hr>
                <Link to='#business' smooth><span className="text-base font-light text-white/80 lg:pl-6 pl-2 font-gilroy hover:text-[#F05C40]/80">Business</span></Link>
                <hr className="border-[0.2px] border-gray-800 w-full lg:my-4 my-2"></hr>
                <Link to='#partners' smooth><span className="text-base font-light text-white/80 lg:pl-6 pl-2 font-gilroy hover:text-[#F05C40]/80">Partners</span></Link>
                <hr className="border-[0.2px] border-gray-800 w-full lg:my-4 my-2"></hr>
            </div>
        </div>
        <div className="flex justify-center w-screen lg:mt-7">
            <span className=" text-xs lg:font-normal  font-extralight font-gilroy text-white">© Copyright Maidstone Energy Limited 2023.All Rights Rserved.</span>
        </div>
    </div>
  )
}

export default Footer;