import Image from 'next/image'
import React from 'react'

const brands = [
  { id: 1, src: '/images/brand1.png', alt: 'Brand 1' },
  { id: 2, src: '/images/brand2.png', alt: 'Brand 2' },
  { id: 3, src: '/images/brand3.png', alt: 'Brand 3' },
  { id: 4, src: '/images/brand4.png', alt: 'Brand 4' },
  { id: 5, src: '/images/brand5.png', alt: 'Brand 5' },
];

function Brand() {
  return (
    <div className='main-container bg-(--accent-color)'>
        <div className='main-section padd-X py-8'>
            <div className='flex flex-wrap gap-6 md:gap-8 items-center justify-center lg:justify-between'>
                {brands.map((brand) => (
                    <div key={brand.id} className='w-24 sm:w-32 md:w-40 lg:w-40'>
                        <Image
                            src={brand.src}
                            alt={brand.alt}
                            width={200}
                            height={100}
                            className='w-full h-auto object-contain'
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Brand
