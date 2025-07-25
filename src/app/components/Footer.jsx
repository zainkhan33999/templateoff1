"use client"
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import logo from "../../asset/logo2.jpg"
import Image from 'next/image';
const Footer = () => {
    const handlebuttonClick = (sectionId) => {
   
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
<div className="footer bg-secondary text-white p-10 ">
  <section className='flex items-center justify-between '>

    <div className="copyright text-sm font-normal flex items-center gap-5">
      <Image alt='logo' src={logo} width={100} className='rounded-sm cursor-pointer' />
      <p>Design & developed by Sibex Systems ©- 2025</p>
    </div>
    <a  onClick={()=>handlebuttonClick("home")} className=" cursor-pointer scroll-smooth inline-flex items-center justify-center bg-primary  w-[45px] h-[45px] rounded-full text-[var(--text-color)] text-[27px]">
      <FaArrowUp className=''/>
    </a>
  </section>
   
  </div>
  )
}

export default Footer