"use client"
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Card from '@/components/ui/Card';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Tarrif = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
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


  return (
    <motion.div className='ml-3 mr-3
    ' initial='hidden'
    ref={textRef}
    animate={textInView ? "visible" : "hidden"}
    variants={textVariants}>
      <h1 className='text-3xl md:text-4xl text-primary text-center uppercase m-5'>Tariff</h1>
      
     
      <div className='flex gap-3'>

      <Card/>

      </div>
    </motion.div>
  );
};

export default Tarrif;