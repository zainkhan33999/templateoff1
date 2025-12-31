import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa"
const Header = () => {
  return (
    <div className='h-[7vh] bg-primary flex     gap-10'>
        <div className=' w-full  flex  items-center  justify-between p-4 text-secondary '>
        <div id='email' className='flex gap-2 items-center'>
        <MdEmail className='text-white'/>
        <p className='text-white'>info@demoinn.net</p>
        </div>
      <div className='hidden md:flex text-amber-50 uppercase text-xl font-extrabold tracking-wider'>
       Hotel demo Inn
      </div>
        <div id='number' className='flex  gap-2 text-white items-center  '>
        <FaPhoneAlt />
        <p className=''>0340-6000000</p>
        </div>
        </div>
    </div>
  )
}

export default Header