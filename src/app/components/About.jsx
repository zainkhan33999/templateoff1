"use client"
import React from 'react'
import Image from 'next/image'
import pic5 from "../../asset/pic3.jpeg"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
  const handlebuttonClick = (sectionId) => {
   
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
    <div className='mr-3 ml-3'>
      <motion.h1 
        className='text-3xl text-[#B19502] uppercase m-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      
      <div className='flex gap-5'>
        <motion.section 
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textVariants}
          className='w-[90vw] ml-4'
        >
          <p className='text-md text-gray-400'>
            At "Regine inn" every individual is always ready to serve our valued guests with a smile round the clock. While staying with us you can enjoy exotic meals from our kitchen chef. Regine Inn's every room is equipped with T.V, DVD mini Bar and fastest free DSL internet connection round the clock. We have ample car parking for every room and separate visitors parking also. Regine Inn "Two star Hotel" is surrounded by famous hospitals, like Ziauddin, Agha Khan & South City Hospital & top of the line restaurants and shopping malls. We invite you to please come and visit us. We assure you sir that your visit will definitely make up your mind to choose "Regine Inn" as your official hotel for your upcoming business guests and company officials. 
          </p>
          <div className='text-[#f5f5f5] flex gap-5 mt-5 cursor-pointer'>
            <button  onClick={() => handlebuttonClick("clients")} className='border-2 cursor-pointer border-[#B19502] bg-[#B19502] hover:border-white transition-all duration-300 rounded pt-2 pb-2 pl-4 pr-4'>Clients</button>
            <button  onClick={() => handlebuttonClick("owned")} className='border-2 cursor-pointer border-[#B19502] bg-[#B19502] hover:border-white transition-all duration-300 rounded pt-2 pb-2 pl-4 pr-4'>Owned</button>
          </div>
        </motion.section>

        <motion.section 
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className='w-[50vw] hidden md:flex md:w-[100vw] md:text-center'
        >
          <Image 
            alt='pic' 
            className="h-[70vh] rounded" 
            src={pic5}
          />
        </motion.section>
      </div>
    </div>
  )
}

export default About