'use client'
import { ProductCardSkeleton } from '../ProductCardSkeleton'

export function ProductSectionSkeleton({ title }: { title: string }) {
  return (
    <div className='main-container'>
        <div className='main-section padd-X padd-Y pb-0!'>
            <div className='heading1'>
                <h2 className="text-center">{title}</h2>
            </div>
            <div className='flex gap-4 sm:gap-6 lg:gap-8 mt-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible'>
                {[1, 2, 3, 4].map((i) => (
                    <div 
                        key={i} 
                        className='snap-start shrink-0 w-[65%] sm:w-[45%] md:w-[35%] lg:w-auto lg:shrink'
                    >
                        <ProductCardSkeleton />
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-10'>
                <button className='btn-transparent' disabled>
                    Loading...
                </button>
            </div>
        </div>
    </div>
  )
}
