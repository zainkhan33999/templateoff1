"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import prof1 from "../../asset/prof1.jpg"
import prof2 from "../../asset/prof2.jpg"
import prof3 from "../../asset/prof3.jpg"
import prof4 from "../../asset/prof4.jpg"
const Experiences = () => {
  const testimonials = [
    {
      quote: "Our stay at this hotel was absolutely perfect! The rooms were spacious and clean, the staff was incredibly friendly, and the location couldn't be better. We'll definitely be back!",
      author: "John Philps",
      role: "Meezan Bank CEO",
      img:prof1,
    },
    {
      quote: "The luxury suite exceeded all our expectations. From the breathtaking ocean view to the premium amenities, every detail was thoughtfully designed. The spa services were the perfect way to unwind after a day of exploring.",
      author: "John Doe",
      role: "NIKE Business Executive",
      img:prof2,
    },
    {
      quote: "As a family with young children, we truly appreciated the kid-friendly facilities and attentive staff. The pool area was fantastic and the children's menu had healthy options our kids actually enjoyed!",
      author:  "David Wilson",
      role: "Manager Samsung",
      img:prof3,
    },
    {
      quote: "The concierge service went above and beyond to arrange our anniversary dinner on the private beach. The chef prepared a special menu just for us. It was the most romantic evening we've had in years!",
      author: "Micheal Chen",
      role: "Bahria Town Marketing Head",
      img:prof4,
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const [api, setApi] = useState("")
  const [current, setCurrent] = useState(0)
  
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div
    ref={textRef}
    animate={textInView ? "visible" : "hidden"}
    variants={textVariants}
  
     className="bg-gray-50 dark:bg-gray-800 py-12">
      <h1 className='text-3xl md:text-4xl text-primary text-center uppercase mb-5 font-serif'>Guest Experiences</h1>
      <section className="bg-white dark:bg-gray-900 shadow-lg rounded-lg max-w-4xl mx-auto">
        <div className="px-8 py-12 mx-auto text-center">
          <figure className="max-w-3xl mx-auto">
            <svg
              className="h-12 mx-auto mb-6 text-amber-500"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className={`text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                &quot;{testimonials[currentTestimonial].quote}&quot;
              </p>
            </blockquote>
            <figcaption className={`mt-8 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-amber-500">
      <Image
        src={testimonials[currentTestimonial].img} // Add image URLs to your testimonials array
        alt='pic'
        width={64}
        height={64}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="text-gray-900 dark:text-white font-medium">
      {testimonials[currentTestimonial].author}
    </div>
    <div className="text-gray-500 dark:text-gray-400 text-sm">
      {testimonials[currentTestimonial].role}
    </div>
  </div>
</figcaption>
          </figure>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentTestimonial(index);
                    setFade(true);
                  }, 500);
                }}
                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-amber-500' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experiences;