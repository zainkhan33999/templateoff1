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
    <div className='px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto mt-5'>
      <motion.h1 
        className='text-3xl md:text-4xl text-primary uppercase mb-6 md:mb-8 text-center '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      
      <div className='flex flex-col md:flex-row gap-8'>
        <motion.section 
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textVariants}
          className='w-full md:w-1/2'
        >
          <p className='text-gray-400 text-base md:text-lg leading-relaxed'>
            At "demo inn" every individual is always ready to serve our valued guests with a smile round the clock. While staying with us you can enjoy exotic meals from our kitchen chef. demo Inn's every room is equipped with T.V, DVD mini Bar and fastest free DSL internet connection round the clock. We have ample car parking for every room and separate visitors parking also. demo Inn "Two star Hotel" is surrounded by famous hospitals, like Ziauddin, Agha Khan & South City Hospital & top of the line restaurants and shopping malls. We invite you to please come and visit us. We assure you sir that your visit will definitely make up your mind to choose "demo Inn" as your official hotel for your upcoming business guests and company officials. 
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <button 
              onClick={() => handlebuttonClick("clients")} 
              className='border-2 cursor-pointer border-primary bg-primary text-white hover:bg-transparent hover:text-primary transition-all duration-300 rounded py-2 px-6 text-sm sm:text-base'
            >
              Clients
            </button>
            <button 
              onClick={() => handlebuttonClick("owned")} 
              className='border-2 cursor-pointer border-primary bg-primary text-white hover:bg-transparent hover:text-primary transition-all duration-300 rounded py-2 px-6 text-sm sm:text-base'
            >
              Owned
            </button>
          </div>
        </motion.section>

        <motion.section 
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className='w-full md:w-1/2 flex justify-center'
        >
          <div className='relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden'>
            <Image 
              alt='Hotel interior' 
              src={pic5}
              fill
              className='object-cover'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About