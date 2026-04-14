import Image from 'next/image'
import React from 'react'

function HeroSection() {
    return (
        <div className='main-container bg-(--secondary-color)'>
            <div className='main-section padd-X'>
                <div className='grid  lg:grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-6 lg:gap-8 py-10 lg:py-16 justify-center'>
                        <h1 className='uppercase'>Find clothes that matches your style</h1>
                        <p className='max-w-lg'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='btn-primary w-full sm:w-max'>
                            Shop Now 
                        </button>
                        <div className='flex mt-5 flex-wrap justify-center sm:justify-start gap-y-6 sm:divide-x-2 divide-black/10'>
                            <div className='pr-0 sm:pr-8 w-[45%] sm:w-auto text-center sm:text-left'>
                                <div className='stat-number'>200+</div>
                                <p className='stat-label'>International Brands</p>
                            </div> 
                            <div className='px-0 sm:px-8 w-[45%] sm:w-auto text-center sm:text-left border-l-2 sm:border-l-0 border-black/10 ml-[10%] sm:ml-0'>
                                <div className='stat-number'>2000+</div>
                                <p className='stat-label'>High-Quality Products</p>
                            </div>
                            <div className='pl-0 sm:pl-8 w-full sm:w-auto mt-2 sm:mt-0 text-center sm:text-left'>
                                <div className='stat-number'>30,000+</div>
                                <p className='stat-label'>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-[400px] sm:h-[500px] lg:h-auto min-h-[400px] overflow-hidden'>
                        <Image 
                            src="/images/hero_image.png"
                            alt='Hero Section Image'
                            fetchPriority='high'
                            fill
                            className='object-cover object-top'
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
