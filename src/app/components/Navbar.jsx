"use client"
import React from 'react'
import logo from "../../asset/logo2.jpg"
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image'
import { useState } from 'react';

const Navbar = () => {
    const [navState, setNavState] = useState(false)
    
    const handleNavClick = (sectionId) => {
        setNavState(false); // Close mobile menu on click
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About us', id: 'about' },
        { name: 'Experiences', id: 'experiences' },
        { name: 'Facilities', id: 'f    acilities' },
        { name: 'Tarrif', id: 'tarrif' },
        { name: 'Clients', id: 'clients' },
        { name: 'Gallery', id: 'gallery' },
        { name: 'Owned', id: 'owned' },
        { name: 'Contact Us', id: 'contact' }
    ];

    return (
        <div className='overflow-hidden'>
            {/* PC nav */}
            <div className='hidden md:flex justify-center h-[15vh] items-center ml-3 mr-3  mt-5cursor-pointer'>
              
                <ul className=' uppercase flex gap-5'>
                    {navItems.map((item) => (
                        <li 
                            key={item.id} 
                            className='cursor-pointer hover:text-primary transition-colors duration-200'
                            onClick={() => handleNavClick(item.id)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Nav */}
            <div className='md:hidden'>
                <section className='flex justify-between h-[8vh] items-center cursor-pointer mr-2 ml-2 transition-all duration-300 ease-in-out'>
                    <div>
                        <h1 className='font-primary text-primary font-bold uppercase'>Hotel Demoinn</h1>
                    </div>
                    <div className='border p-1 border-primary'>
                        <RxHamburgerMenu onClick={() => setNavState(!navState)} size={30} />
                    </div>
                </section>
                
                <section>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${navState ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                        <ul className='uppercase flex flex-col gap-2 p-2'>
                            {navItems.map((item) => (
                                <li 
                                    key={item.id}
                                    className='cursor-pointer active:bg-primary active:text-white hover:text-primary transition-colors duration-200 px-2 py-1'
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Navbar;