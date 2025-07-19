import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa"
const Header = () => {
  return (
    <div className='h-[7vh] bg-[#B19502] flex     gap-10'>
        <div className=' w-full  flex  items-center  justify-between p-4 text-[#151412] '>
        <div id='email' className='flex gap-2 items-center'>
        <MdEmail className='text-white'/>
        <p className='text-white'>info@regineinn.net</p>
        </div>
      <div className='hidden md:flex text-white uppercase font-bold '>
        Regine Inn
      </div>
        <div id='number' className='flex gap-2 text-white items-center  '>
        <FaPhoneAlt />
        <p className=''>0340-6000000</p>
        </div>
        </div>
    </div>
  )
}

export default Header