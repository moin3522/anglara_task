import React from 'react'
import ProductCard from '../ProductCard'
import { Product } from '@/app/types';



interface ProductSectionProps {
  title: string;
  products: Product[];
}

function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <div className='main-container'>
        <div className='main-section padd-X padd-Y pb-0!'>
            <div className='heading1'>
                <h2 className="text-center">{title}</h2>
            </div>
            <div className='flex gap-4 sm:gap-6 lg:gap-8 mt-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible'>
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className='snap-start shrink-0 w-[65%] sm:w-[45%] md:w-[35%] lg:w-auto lg:shrink'
                    >
                        <ProductCard 
                            id={product.id}
                            name={product.title}
                            image={product.image}
                            rating={product.rating.rate}
                            price={product.price}
                            originalPrice={null}
                            discountPercent={null}
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-10 '>
                <button className='btn-transparent'>
                    View All
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductSection
