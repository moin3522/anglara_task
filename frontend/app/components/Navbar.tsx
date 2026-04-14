"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { BiSearch, BiMenu, BiX } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuCircleUserRound } from "react-icons/lu";

import { useAppSelector } from '../store/hooks';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const { scrollY } = useScroll();

  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
        setHidden(true);
    } else {
        setHidden(false);
    }
  });
 
  return (
    <motion.div 
        variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`main-container overflow-visible! navbar bg-(--bg-color) sticky top-0 z-50 `}
    >
        <div className='main-section overflow-visible! padd-X py-4 lg:py-6'>
            <div className='flex items-center justify-between gap-4 lg:gap-6'>
                <div className='flex items-center gap-4 mr-2 lg:mr-8'>
                    <div className='lg:hidden cursor-pointer' onClick={() => setIsMenuOpen(true)}>
                        <BiMenu size={28} />
                    </div>
                    <Link href="/" className='logo'>
                       <h4 style={{fontFamily: 'var(--font-integralcf-bold)'}} className='text-2xl sm:text-3xl lg:text-4xl -mt-1'>SHOP.CO</h4>
                    </Link>
                </div>
                
                <div className='flex items-center justify-end lg:justify-between flex-1 gap-5 md:gap-10'>
                     <ul className='hidden text-lg gap-6 lg:flex items-center'>
                         <li 
                             className='group relative flex items-center cursor-pointer py-4 hover:font-medium transition-all'
                             onMouseEnter={() => setIsShopHovered(true)}
                             onMouseLeave={() => setIsShopHovered(false)}
                         >
                             Shop <BsChevronDown className='mt-1 ml-1 transition-transform duration-300 group-hover:rotate-180'/>
                             
                             {/* Desktop Hover Dropdown */}
                             <motion.div 
                                 initial={{ opacity: 0, y: 15, visibility: "hidden" }}
                                 animate={{ 
                                     opacity: isShopHovered ? 1 : 0, 
                                     y: isShopHovered ? 0 : 15, 
                                     visibility: isShopHovered ? "visible" : "hidden" 
                                 }}
                                 transition={{ duration: 0.2, ease: "easeOut" }}
                                 className='absolute top-full left-0 pt-2 w-56 z-50'
                             >
                                 <motion.div 
                                     className='bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl p-2 flex flex-col border border-gray-100 font-normal text-base overflow-hidden'
                                 >
                                     <Link href="#" className='px-4 py-3 hover:bg-gray-50 rounded-xl hover:text-black font-medium text-gray-600 transition-colors flex items-center gap-2'>
                                        Men&apos;s
                                     </Link>
                                     <Link href="#" className='px-4 py-3 hover:bg-gray-50 rounded-xl hover:text-black font-medium text-gray-600 transition-colors flex items-center gap-2'>
                                        Women&apos;s
                                     </Link>
                                     <Link href="#" className='px-4 py-3 hover:bg-gray-50 rounded-xl hover:text-black font-medium text-gray-600 transition-colors flex items-center gap-2'>
                                        Accessories
                                     </Link>
                                 </motion.div>
                             </motion.div>
                         </li>
                         <li className='cursor-pointer hover:font-medium transition-all'>On Sale</li>
                         <li className='cursor-pointer hover:font-medium transition-all'>New Arrivals</li>
                         <li className='cursor-pointer hover:font-medium transition-all'>Brands</li>
                     </ul>

                    <div className='bg-(--secondary-color) hidden! lg:flex! flex-1 input-field'>
                        <BiSearch className='text-black/40' size={28}/>
                        <input 
                            placeholder='Search for Products...' 
                            type="text" 
                            className='bg-transparent outline-none w-full text-black'
                        />
                    </div>

                    <div className='flex gap-4 sm:gap-6 items-center'>
                        <div className='cursor-pointer lg:hidden'>
                            <BiSearch size={24} className="sm:w-7 sm:h-7" />
                        </div>
                        <Link href="/cart" className='relative cursor-pointer text-black hover:opacity-70 transition-opacity'>
                            <PiShoppingCartSimpleBold size={24} className="sm:w-7 sm:h-7" />
                            {totalQuantity > 0 && (
                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold'>
                                    {totalQuantity}
                                </span>
                            )}
                        </Link>
                        <div className='cursor-pointer'>
                            <LuCircleUserRound size={24} className="sm:w-7 sm:h-7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <>
            <div 
                className={`fixed inset-0 bg-black/50 z-99 lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
                onClick={() => setIsMenuOpen(false)}
            />
            <div className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-white z-100 p-6 shadow-2xl flex flex-col gap-8 lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex items-center justify-between'>
                    <Link href="/">
                        <h4 style={{fontFamily: 'var(--font-integralcf-bold)'}} className='text-3xl -mt-1'>SHOP.CO</h4>
                    </Link>
                    <BiX size={32} className='cursor-pointer text-gray-500 hover:text-black' onClick={() => setIsMenuOpen(false)} />
                </div>
                <ul className='flex flex-col gap-6 text-lg'>
                     <li className='flex flex-col gap-4'>
                         <div className='flex items-center justify-between font-bold'>
                             Shop <BsChevronDown />
                         </div>
                         <ul className='flex flex-col gap-4 pl-4 text-gray-600 border-l-2 border-gray-100'>
                             <li className='hover:text-black transition-colors'>Men&apos;s</li>
                             <li className='hover:text-black transition-colors'>Women&apos;s</li>
                             <li className='hover:text-black transition-colors'>Accessories</li>
                         </ul>
                     </li>
                     <li className='font-bold cursor-pointer'>On Sale</li>
                     <li className='font-bold cursor-pointer'>New Arrivals</li>
                     <li className='font-bold cursor-pointer'>Brands</li>
                </ul>
            </div>
        </>
    </motion.div>
  )
}

export default Navbar
