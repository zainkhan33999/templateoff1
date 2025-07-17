"use client"
import Image from 'next/image'
import React from 'react'
import pic2 from "../../asset/pic5.jpeg"

const Main = () => {
  const handlebuttonClick = (sectionId) => {
   
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
    <div className="relative w-full h-screen overflow-hidden font-cormorant">
      {/* Image with full viewport coverage */}
      <Image 
        src={pic2} 
        fill
        className="object-cover brightness-70 "
        alt='Hotel room'
      />
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center darken "> {/* Semi-transparent overlay */}
        <section>

        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
          Luxurious & Comfortable Rooms Are Available In Our Hotel
        </h1>
        </section>
        <section className='text-[#f5f5f5] flex gap-5 mt-5 cursor-pointer '>
        <button onClick={() => handlebuttonClick("about")} className=' cursor-pointer border-2 border-[#B19502]  bg-[#B19502] hover:border-white transition-all duration-300 rounded pt-2 pb-2 pl-5 pr-5'>About Us</button>
        <button   onClick={() => handlebuttonClick("tarrif")} className=' cursor-pointer border-2  border-[#B19502] bg-[#B19502] hover:border-white transition-all duration-300 rounded pt-2 pb-2 pl-5 pr-5'>Rack Rates</button>
        </section>
      </div>
    </div>
  )
}

export default Main