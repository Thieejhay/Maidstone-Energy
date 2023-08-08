import React, { useState } from 'react';
import Logo from '../assets/Logos.png'
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import Logo2 from '../assets/main logo.png';
import {HiOutlineMenu} from 'react-icons/hi';
import {CgClose} from 'react-icons/cg'

const Header = () => {

    const[toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='flex lg:py-8 lg:px-16 py-6 px-4 w-screen'>
        <div className='flex justify-between w-full p-2 border border-gray-400/90 rounded-full'>
            <div className='flex lg:basis-[10%]'>
                <img src={Logo} alt='' className='h-12 lg:w-[3.5rem] w-12'></img>
            </div>
            <div className='lg:flex lg:flex-row hidden basis-[80%] justify-center items-center gap-16'>
                <Link to='#home' smooth><span className="text-base font-semibold cursor-pointer rounded-xl px-2 py-1 hover:bg-[#F05C40]/70 font-gilroyy">Home</span></Link>
                <Link to='#about' smooth><span className="text-base font-semibold cursor-pointer rounded-xl px-2 py-1 hover:bg-[#F05C40]/70 font-gilroyy">About</span></Link>
                <Link to='#culture' smooth><span className="text-base font-semibold cursor-pointer rounded-xl px-2 py-1 hover:bg-[#F05C40]/70 font-gilroyy">Culture</span></Link>
                <Link to='#operation' smooth><span className="text-base font-semibold cursor-pointer rounded-xl px-2 py-1 hover:bg-[#F05C40]/70 font-gilroyy">Operation</span></Link>
                <Link to='#business' smooth><span className="text-base font-semibold cursor-pointer rounded-xl px-2 py-1 hover:bg-[#F05C40]/70 font-gilroyy">Business</span></Link>
            </div>
            <div className='flex lg:basis-[10%] lg:hidden'>
                <span>
                    <HiOutlineMenu className='text-[#F05C40]/90 text-5xl' onClick = {() => {setToggleMenu(true)}}/>
                </span>
            </div>
            <div className="lg:basis-[10%] hidden lg:flex"></div>
        </div>
        {
            toggleMenu && (
                <motion.div className="flex flex-col text-start z-50 top-0 px-4 pt-4 fixed w-screen lg:hidden h-[32rem] rounded-l bg-white" initial={{ x:'100vw'}}
                animate={{ x: 0}} transition={{type: 'spring', duration: 2, bounce: 0.3}}>
                    <CgClose className='mb-2 text-[#F05C40]/90 text-5xl'onClick = {() => {setToggleMenu(false)}}/>
                    <span className="flex items-center justify-center mb-9">
                        <img src={Logo2} alt="" className="h-24 w-[8rem]"></img>
                    </span>
                    <span className="text-[#F05C40] text-2xl font-semibold mb-6 pl-3">Home</span>
                        <Link to='#about' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}>  
                            <span className="text-[#000000]/70 text-2xl font-semibold mb-6">About us</span>
                        </Link>
                        <Link to='#culture' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}>
                        <span className="text-[#000000]/70 text-2xl font-semibold mb-6">Culture</span>
                        </Link>
                        <Link to='#operation' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}><span className="text-[#000000]/70 text-2xl font-semibold mb-6">Operation</span></Link>
                        <Link to='#business' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}><span className="text-[#000000]/70 text-2xl font-semibold mb-6">Business</span></Link>
                    
                        
                </motion.div>
            )
        }
    </div>
  )
}

export default Header;