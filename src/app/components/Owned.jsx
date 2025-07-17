"use client"; // Add this at the top for Framer Motion
import React from 'react';
import { motion } from 'framer-motion';
import pic11 from "../../asset/pic11.jpeg";
import owned2 from "../../asset/owned2.jpg";
import owned3 from "../../asset/owned3.jpg";
import owned4 from "../../asset/owned4.jpg";
import owned5 from "../../asset/owned5.jpg";
import owned6 from "../../asset/owned6.jpg";
import Image from 'next/image';

const Owned = () => {
  const owned = [
    {
        id:1,
      name: "Hotel Regine Inn",
      description: "Luxury accommodation with premium amenities",
      image: pic11// Replace with actual image path
    },
    {
        id:2,
      name: "Shahzaib Beverages",
      description: "Quality beverages and refreshments",
      image: owned2
    },
    {
        id:3,
      name: "Highbrow Mineral Water",
      description: "Pure mineral water for health and wellness",
      image: owned3
    },
    {
        id:4,
      name: "Khan Petroleum & CNG Station (PSO)",
      description: "Fuel services with PSO standards",
      image: owned5
    },
    {
        id:5,
      name: "Zia Service Station (PSO)",
      description: "Automotive services and fuel solutions",
      image: owned5
    },
    {
        id:6,
      name: "Regine Properties (Real Estate & Builders)",
      description: "Property development and real estate services",
      image: owned6
    }
  ];
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
           
            
        }
    };

    const item = {
        hidden: { opacity: 0, },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className='ml-3 mr-3'>
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-3xl text-[#B19502] uppercase m-5'
            >
                Owned
            </motion.h1>
            
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
                    {owned.map((client) => (
                        <motion.div
                            key={client.id}
                            variants={item}
                            role="button"
                            className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-gray-200"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div 
                                className="mr-4 grid place-items-center"
                                whileHover={{ rotate: 5 }}
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    objectFit='cover'
                                    alt={client.name}
                                    src={client.image}
                                    className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                                />
                            </motion.div>
                            <div>
                                <h1 className="text-slate-800 font-medium">
                                    {client.name}
                                </h1>
                                <p className="text-sm text-gray-600">{client.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </nav>
            </motion.div>
        </div>
    );
};

export default Owned;