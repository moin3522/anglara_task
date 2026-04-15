'use client';

import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GiDiamonds } from "react-icons/gi"

// Utility component to animate numbers
const AnimatedNumber = ({ value }: { value: number }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 2000;  

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
                const easeOut = 1 - Math.pow(1 - percentage, 4);
                setCurrentValue(Math.floor(value * easeOut));

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setCurrentValue(value);
            }
        };

        requestAnimationFrame(animate);
    }, [value, isInView]);

    return <span ref={ref}>{currentValue.toLocaleString()}</span>;
};

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
                                <div className='stat-number'><AnimatedNumber value={200} />+</div>
                                <p className='stat-label'>International Brands</p>
                            </div> 
                            <div className='px-0 sm:px-8 w-[45%] sm:w-auto text-center sm:text-left border-l-2 sm:border-l-0 border-black/10 ml-[10%] sm:ml-0'>
                                <div className='stat-number'><AnimatedNumber value={2000} />+</div>
                                <p className='stat-label'>High-Quality Products</p>
                            </div>
                            <div className='pl-0 sm:pl-8 w-full sm:w-auto mt-2 sm:mt-0 text-center sm:text-left'>
                                <div className='stat-number'><AnimatedNumber value={30000} />+</div>
                                <p className='stat-label'>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-[400px] sm:h-[500px] lg:h-auto min-h-[400px] overflow-hidden'>
                        {/* Floating Icons */}
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className='absolute top-[10%] right-[10%] z-10 text-black hidden sm:block'
                        >
                            <GiDiamonds size={100} />
                        </motion.div>
                        
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1 }}
                            className='absolute top-[40%] left-[5%] z-10 text-black hidden sm:block'
                        >
                            <GiDiamonds size={50} />
                        </motion.div>

                        <Image 
                            src="/images/hero_image.webp"
                            alt='Hero Section Image'
                            loading='eager'
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
