"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pic1 from "../../asset/pic1.jpeg";
import pic3 from "../../asset/pic3.jpeg";
import pic4 from "../../asset/pic4.jpeg";
import pic5 from "../../asset/pic5.jpeg";
import pic6 from "../../asset/pic6.jpeg";
import pic7 from "../../asset/pic7.jpeg";
import pic8 from "../../asset/pic8.jpeg";
import pic9 from "../../asset/pic9.jpeg";
import pic10 from "../../asset/pic10.jpeg";
import Image from 'next/image';

const Gallery = () => {
    const images = [pic1, pic3, pic4,  pic6, pic7, pic8];

    // Animation variants
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='ml-3 mr-3 mt-10'>
            <motion.h1 
                className='text-3xl md:text-4xl text-[#B19502] text-center uppercase m-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                Gallery
            </motion.h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => {
                    const [ref, inView] = useInView({
                        triggerOnce: true,
                        threshold: 0.1,
                        rootMargin: "-50px 0px"
                    });

                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={imageVariants}
                            transition={{ delay: index * 0.1 }} // Staggered animation
                            className="relative group"
                        >
                            {/* Image */}
                            <Image
                                className="rounded-lg w-[200px] h-[200px] md:w-[390px] md:h-[290px] object-cover transition-opacity duration-300 group-hover:opacity-70"
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={500}
                                priority={index < 3}
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-transparent bg-opacity-40 w-full h-full rounded-lg flex items-center justify-center">
                                    {/* You can add any overlay content here */}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>  
    );
}

export default Gallery;