"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import main1 from "../../asset/main1.jpg"
import main2 from "../../asset/main2.jpg" // Add more images
import main3 from "../../asset/main3.jpg"
import { motion, AnimatePresence } from 'framer-motion'

const Main = () => {
  const images = [
    { src: main1, alt: "Hotel room 1" },
    { src: main2, alt: "Hotel room 2" },
    { src: main3, alt: "Hotel room 3" },
   
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlebuttonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 100); // This matches the fade duration
    }, 5000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden font-lora">
      {/* Image slideshow with fade animation */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image 
            src={images[currentImageIndex].src} 
            fill
            className="object-cover brightness-50"
            alt={images[currentImageIndex].alt}
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
        <section>
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4">
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