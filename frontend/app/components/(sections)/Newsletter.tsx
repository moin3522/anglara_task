import React from 'react'
import { BsEnvelope } from 'react-icons/bs'

function Newsletter() {
  return (
            <div className='bg-(--accent-color) w-full rounded-3xl sm:rounded-[40px] px-6 py-10 sm:px-14 sm:py-12 lg:px-16 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16'>
                
                <h2 className='uppercase text-white  font-black max-w-md text-center lg:text-left tracking-tight'>
                    Stay upto date about our latest offers 
                </h2> 
                
                <div className='w-full max-w-sm flex flex-col gap-3'>
                    <div className='bg-white rounded-full flex items-center px-4 py-3 gap-3 w-full'>
                        <BsEnvelope className='text-gray-400 text-xl shrink-0' />
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className='outline-none bg-transparent w-full text-black placeholder:text-gray-400'
                        />
                    </div>
                    <button className='bg-white text-black font-bold rounded-full py-3 px-4 w-full hover:bg-gray-100 transition-colors'>
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
  )
}

export default Newsletter