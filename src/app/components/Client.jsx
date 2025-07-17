"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Client = () => {
  const clients = [
    {
      id: 1,
      name: "Mari Petroleum",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 2,
      name: "Baluchistan Glass",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 3,
      name: "Hilong Oil Company",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 4,
      name: "Exalo Drilling",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 5,
      name: "Australian Concept",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 6,
      name: "Ali Asgher Lahore",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 7,
      name: "KCA Duetag",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 8,
      name: "Orient Electronics",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 9,
      name: "Bahria Town",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 10,
      name: "Bank Of Khyber",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 11,
      name: "United Bank Ltd",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 12,
      name: "National Bank",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
      id: 13,
      name: "Bank Alfalah",
      logo: "https://docs.material-tailwind.com/img/face-2.jpg"
    },
    {
        id: 14,
        name: "Express News",
        logo: "https://docs.material-tailwind.com/img/face-2.jpg"
      },
      {
        id: 15,
        name: "Samma TV",
        logo: "https://docs.material-tailwind.com/img/face-2.jpg"
      },
      {
        id: 16,
        name: "And many more",
        logo: "https://docs.material-tailwind.com/img/face-2.jpg"
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
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-3xl text-[#B19502] uppercase m-5'
      >
        CLIENTS
      </motion.h1>
      
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex flex-col md:flex-row'
      >
        {clientColumns.map((column, columnIndex) => (
          <motion.div 
            key={columnIndex} 
            variants={item}
            className="w-full md:w-96 rounded-lg border border-slate-200 bg-white shadow-sm mx-2 mb-4 md:mb-0"
          >
            <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
              {column.map(client => (
                <motion.div
                  key={client.id}
                  variants={item}
                  role="button"
                  className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mr-4 grid place-items-center">
                    <motion.img
                      alt={client.name}
                      src={client.logo}
                      className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                      whileHover={{ rotate: 10}}
                    />
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