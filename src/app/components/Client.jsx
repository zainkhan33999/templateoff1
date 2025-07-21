"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CiCircleMore } from "react-icons/ci";
import client1 from "../../asset/client1.png";
import client2 from "../../asset/client2.png";
import client3 from "../../asset/client3.png";
import client4 from "../../asset/client4.png";
import client5 from "../../asset/client5.png";
import client6 from "../../asset/client6.jpg";
import client7 from "../../asset/client6.png";
import client8 from "../../asset/client8.png";
import client9 from "../../asset/client9.png";
import client10 from "../../asset/client10.png";
import client11 from "../../asset/client11.png";
import client12 from "../../asset/client12.png";
import client13 from "../../asset/client13.jpg";
import client14 from "../../asset/client14.jpg";
import client15 from "../../asset/client15.jpg";
import client16 from "../../asset/client16.jpg";
import Image from 'next/image';
const Client = () => {
  const clients = [
    {
      id: 1,
      name: "Mari Petroleum",
      logo:client1,
    },
    {
      id: 2,
      name: "Australian Concept",
      logo:client2,
    },
    {
      id: 3,
      name: "Bahria Town",
      logo: client3,
    },
    {
      id: 4,
      name: "Bank Alfalah",
      logo:client4,
    },
    {
      id: 5,
      name: "Balochistan Glass",
      logo: client5,
    },
    {
      id: 6,
      name: "Ali Asgher Lahore",
      logo: client6,
    },
    {
      id: 7,
      name: "Exalo Drilling",
      logo: client7,
    },
    {
      id: 8,
      name: "KCA Duetag",
      logo: client8,
    },
    {
      id: 9,
      name: "Orient Electronics",
      logo: client9,
    },
    {
      id: 10,
      name: "Bank Of Khyber",
      logo: client10,
    },
    {
      id: 11,
      name: "United Bank Ltd",
      logo: client11
    },
    {
      id: 12,
      name: "National Bank",
      logo:  client12
    },
    {
      id: 13,
      name: "Express News",
      logo: client13
    },
    {
        id: 14,
        name: "Samma TV",
        logo: client14
      },
      {
        id: 15,
        name: "Dawn News",
        logo: client15
      },
      {
        id: 16,
        name: "And many more",
        logo:  client16,
      },

  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3  
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 2, y: 0 }
  };

  // Split clients into chunks for each column
  const chunkSize = Math.ceil(clients.length / 4);
  const clientColumns = [];
  for (let i = 0; i < clients.length; i += chunkSize) {
    clientColumns.push(clients.slice(i, i + chunkSize));
  }

  return (
    <div className=''>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-3xl text-primary text-center  uppercase m-5'
      >
        CLIENTS
      </motion.h1>
      
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex justify-center items-center  flex-col md:flex-row lg:flex-row'
      >
        {clientColumns.map((column, columnIndex) => (
          <motion.div 
            key={columnIndex} 
            variants={item}
            className="w-full md:w-96 rounded-lg border border-slate-200 bg-white shadow-sm mx-2 mb-4 md:mb-0"
          >
            <nav className="flex   min-w-[240px] flex-col gap-1 p-1.5">
              {column.map(client => (
                <motion.div
                  key={client.id}
                  variants={item}
                  role="button"
                  className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mr-4 grid place-items-center">
                    <motion.div
                     whileHover={{ rotate: 5 }}>
                      <Image
                      width={100}
                      height={100}
                      src={client.logo}
                      alt={client.name}
                      className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <h6 className="text-slate-800 font-medium">
                      {client.name}
                    </h6>
                  </div>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Client;