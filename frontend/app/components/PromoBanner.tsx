'use client';

import { useState } from 'react';
import { CgClose } from "react-icons/cg"
import { motion, AnimatePresence } from 'framer-motion'

function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ height: 'auto', opacity: 1 }}
           animate={{ height: 'auto', opacity: 1 }}
           exit={{ height: 0, opacity: 0, overflow: 'hidden' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='main-container bg-(--accent-color)'
        >
          <div className='main-section relative text-[0.9em] text-white text-center flex gap-2 items-center justify-center padd-X py-2'>
                <p className="opacity-100! text-white!">Sign up and get 20% off to your first order. </p> <span><a className='underline text-[1em] cursor-pointer'>Sign Up Now</a></span>
                <button 
                  onClick={() => setIsVisible(false)}
                  className='absolute hidden xl:block cursor-pointer z-1 text-white right-0'
                >
                    <CgClose size={20}/>
                </button> 
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 

export default PromoBanner
