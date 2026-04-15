import React from 'react'
import Image from 'next/image'

function BrowseByStyle() {
  return (
    <div className='main-container'>
        <div className='main-section padd-X padd-Y'>
            <div className='bg-[#F0F0F0] rounded-3xl sm:rounded-[40px] px-6 py-10 sm:p-14 lg:p-16'>
                <div className='heading1'>
                    <h2 className=' font-black uppercase text-center mb-8 sm:mb-12'>
                        Browse by dress style
                    </h2>
                </div>
                
                <div className='flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6'>
                    <div className='relative h-[190px] sm:h-[260px] lg:h-[289px] sm:col-span-1 rounded-[20px] overflow-hidden bg-white shadow-sm   '>
                        <h3 className='absolute top-6 left-6 text-2xl sm:text-3xl font-bold z-10'>Casual</h3>
                        <Image 
                            src="/images/casual_style.png" 
                            alt="Casual Style" 
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            fill 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className='relative h-[190px] sm:h-[260px] lg:h-[289px] sm:col-span-2 rounded-[20px] overflow-hidden bg-white shadow-sm   '>
                        <h3 className='absolute top-6 left-6 text-2xl sm:text-3xl font-bold z-10'>Formal</h3>
                        <Image 
                            src="/images/formal_style.png" 
                            alt="Formal Style" 
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                            fill 
                            className="w-full h-full  object-cover"
                        />
                    </div> 
                            
                   

                    <div className='relative h-[190px] sm:h-[260px] lg:h-[289px] sm:col-span-2 rounded-[20px] overflow-hidden bg-white shadow-sm   '>
                        <h3 className='absolute top-6 left-6 text-2xl sm:text-3xl font-bold z-10'>Party</h3>
                        <Image 
                            src="/images/party_style.png" 
                            alt="Party Style" 
                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw'
                            fill 
                            className="w-full h-full  object-cover"
                        />
                    </div>

                    <div className='relative h-[190px] sm:h-[260px] lg:h-[289px] sm:col-span-1 rounded-[20px] overflow-hidden bg-white shadow-sm   '>
                        <h3 className='absolute top-6 left-6 text-2xl sm:text-3xl font-bold z-10'>Gym</h3>
                        <Image 
                            src="/images/gym_style.png" 
                            alt="Gym Style" 
                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                            fill 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BrowseByStyle