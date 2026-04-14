'use client';
import React from 'react'
import { BsStarFill, BsCheckCircleFill, BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    name: "Alex K.",
    review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    name: "James L.",
    review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true
  },
  {
    id: 4,
    name: "Moiden K.",
    review: "The quality of the clothing is phenomenal, and the fit is perfect every time. Will definitely be shopping here again for my seasonal wardrobes.",
    rating: 5,
    verified: true
  },
  {
    id: 5,
    name: "Lisa R.",
    review: "Great customer service and fantastic quality products. I absolutely love my new denim pieces!",
    rating: 4,
    verified: true
  }
];

function HappyCustomers() {
  return (
    <div className='main-container'>
        <div className='main-section padd-X  overflow-hidden'>
            <div className='flex items-center justify-between lg:mb-5'>
                <div className='heading1'>
                    <h2 className=' text-left uppercase flex-1'>
                        Our Happy Customers
                    </h2>
                </div>
                <div className='flex gap-4 font-bold items-center pl-4'>
                    <button 
                        className='swiper-button-prev-custom w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition cursor-pointer'
                        aria-label="Previous reviews"
                    >
                        <BsArrowLeft size={24} />
                    </button>
                    <button 
                        className='swiper-button-next-custom w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition cursor-pointer'
                        aria-label="Next reviews"
                    >
                        <BsArrowRight size={24} />
                    </button>
                </div>
            </div>
            
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1.1} // Shows a tiny bit of the next slide on mobile
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }}
                className='!pb-8 h-[200px] lg:h-[300px]' // Padding bottom for shadow/spacing
            >
                {REVIEWS.map((review) => (
                    <SwiperSlide key={review.id} className='h-full'>
                        <div className='border border-black/10 rounded-[20px] p-6 sm:p-8 h-full flex flex-col'>
                            <div className='flex text-[#FFC633] gap-1 mb-4'>
                                {[...Array(review.rating)].map((_, i) => (
                                    <BsStarFill key={i} size={20} className="w-5 h-5" />
                                ))}
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <h4 className='text-xl flex items-center gap-2 font-bold'>
                                    {review.name}
                                    {review.verified && (
                                        <BsCheckCircleFill className="text-green-500 w-5 h-5" />
                                    )}
                                </h4>
                            </div>
                            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                                &quot;{review.review}&quot;
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default HappyCustomers