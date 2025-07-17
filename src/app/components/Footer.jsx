"use client"
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
    const handlebuttonClick = (sectionId) => {
   
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
<div className="footer bg-[#151412] text-white p-10 flex items-center justify-between ">
    <div className="copyright text-sm font-normal">
      <p>Design & developed by Sibex Systems ©-Copyright 2015</p>
    </div>
    <a  onClick={()=>handlebuttonClick("home")} className=" cursor-pointer scroll-smooth inline-flex items-center justify-center bg-[#B19502]  w-[45px] h-[45px] rounded-full text-[var(--text-color)] text-[27px]">
      <FaArrowUp className=''/>
    </a>
  </div>
  )
}

export default Footer