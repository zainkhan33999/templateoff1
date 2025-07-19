"use client"
import Image from 'next/image'
import React from 'react'
import main1 from "../../asset/main2.jpg"

const Main = () => {
  const handlebuttonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative w-full h-screen overflow-hidden font-lora ">
      {/* Image with full viewport coverage */}
      <Image 
        src={main1} 
        fill
        className="object-cover brightness-50" // Reduced brightness more
        alt='Hotel room'
        priority // Add priority if this is above the fold
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div> {/* Semi-transparent black overlay */}
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col  gap-2 items-center justify-center">
        <section>
          <h1 className="text-white text-3xl md:text-4xl font-bold  text-center px-4">
          Luxurious & Comfortable Rooms Are Available In Our Hotel
          </h1>
        </section>
        <section>
          <p className='text-white opacity-89 text-center'>Your Home Away From Home</p>
        </section>
        <section className='text-[#f5f5f5] flex gap-5 mt-5 cursor-pointer'>
          <button onClick={() => handlebuttonClick("about")} className='cursor-pointer border-2 border-[#B19502] bg-[#B19502] hover:border-white transition-all duration-300 rounded pt-2 pb-2 pl-5 pr-5'>
            About Us
          </button>
          <button onClick={() => handlebuttonClick("tarrif")} className='cursor-pointer border-2 border-[#B19502] bg-[#B19502] hover:border-white transition-all duration-300 rounded pt-2 pb-2 pl-5 pr-5'>
            Rack Rates
          </button>
        </section>
      </div>
    </div>
  )
}

export default Main