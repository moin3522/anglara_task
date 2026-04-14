import Image from 'next/image'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

import AddToCartButton from './AddToCartButton'

interface ProductCardProps {
  id?: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number | null;
  discountPercent?: number | null;
}

function ProductCard({ id = 0, name, image, rating, price, originalPrice, discountPercent }: ProductCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className='w-full group'>
        <div className='flex flex-col gap-3'>
            <div className='w-full overflow-hidden rounded-(--radius) bg-(--secondary-color) aspect-square relative'>
                <AddToCartButton 
                    product={{
                        id,
                        title: name,
                        price,
                        description: '',
                        category: '',
                        image,
                        rating: { rate: rating, count: 0 }
                    }} 
                />
                <Image
                 src={image}
                 width={500}
                 alt={name}
                 height={500}
                 className='w-full h-full object-contain Mix-blend-multiply'
                />
            </div>
            <h5 className='line-clamp-1 text-lg sm:text-xl lg:text-2xl font-bold'>{name}</h5>
            <div className='flex gap-2 items-center flex-wrap'>
                <div className='flex text-[#FFC633] gap-1'>
                    {[...Array(fullStars)].map((_, i) => <BsStarFill key={`full-${i}`} size={16} className="w-4 h-4 sm:w-5 sm:h-5" />)}
                    {hasHalfStar && <BsStarHalf size={16} className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {[...Array(emptyStars)].map((_, i) => <BsStar key={`empty-${i}`} size={16} className="w-4 h-4 sm:w-5 sm:h-5" />)}
                </div>
                <p className='text-xs sm:text-sm m-0! opacity-100!'><span className='text-black font-bold'>{rating}</span>/<span>5</span></p>
            </div>
            <div className='flex items-center gap-2 flex-wrap'>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-extrabold'>${price}</h3>
                {originalPrice && (
                    <h3 className='text-xl sm:text-2xl lg:text-3xl text-gray-400 font-extrabold line-through'>${originalPrice}</h3>
                )}
                {discountPercent && (
                    <div className='bg-[#FF333340] text-[#FF3333] text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full'>
                        <span className='leading-none'>-{discountPercent}%</span>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProductCard
