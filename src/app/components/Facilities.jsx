"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import fac1 from "../../asset/fac1.avif"
import fac2 from "../../asset/fac2.jpg"
import fac3 from "../../asset/fac3.jpg"
import fac4 from "../../asset/fac4.jpg"
import fac5 from "../../asset/fac5.jpg"
import fac6 from "../../asset/fac6.jpg"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Facilities = () => {
  const images = [
    { src: fac1, alt: "Facility 1", text: "Awsome Food" },
    { src: fac2, alt: "Facility 2", text: "Luxury Rooms" },
    { src: fac3, alt: "Facility 3", text: "High Security" },
    { src: fac4, alt: "Facility 4", text: "Gym" },
  ];

  const [api, setApi] = useState("")
  const [current, setCurrent] = useState(0)
  
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
      
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [api])

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

  return (
    <motion.div
      initial="hidden"
      className=''
      ref={textRef}
      animate={textInView ? "visible" : "hidden"}
      variants={textVariants}
    >
      <h1 className='text-3xl md:text-4xl text-center text-[#B19502] uppercase m-5'>Facilities</h1>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <Carousel 
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold text-lg md:text-xl">
                      {image.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 cursor-pointer md:left-4" />
          <CarouselNext className="right-2 cursor-pointer md:right-4" />
        </Carousel>
      </div>
    </motion.div>
  )
}

export default Facilities