'use client'

import React from 'react'
import Image from 'next/image'
import { BsTrash } from 'react-icons/bs'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useAppDispatch } from '../store/hooks'
import { addToCart, decrementQuantity, removeFromCart } from '../store/features/cart/cartSlice'

export interface CartItem {
  id: string | number;
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

function CartItemCard({ item }: { item: CartItem }) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 relative sm:gap-6 border-b border-black/10 pb-6 last:border-0 last:pb-0">
        <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-[#F0F0F0] rounded-xl overflow-hidden flex items-center justify-center relative p-2">
            <Image 
                src={item.image} 
                alt={item.name} 
                fill
                className="object-contain mix-blend-multiply p-2" 
            />
        </div>
         
        <div className="flex flex-1  flex-col justify-between">
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="font-bold text-xs sm:text-xl text-(--text-primary-color) leading-tight sm:leading-snug">{item.name}</h3>
                    <p className="text-xs sm:text-sm mt-1 sm:mt-2">
                        <span className="text-black">Size:</span> <span className="text-gray-500">{item.size}</span>
                    </p>
                    <p className="text-xs sm:text-sm mt-0.5 sm:mt-1">
                        <span className="text-black">Color:</span> <span className="text-gray-500">{item.color}</span>
                    </p>
                </div>
                <button onClick={() => dispatch(removeFromCart(Number(item.id)))} className=" absolute right-0 top-0 text-red-500">
                    <BsTrash size={18} className="sm:w-5 sm:h-5" />
                </button>
            </div>
            
            <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-xl sm:text-2xl">${item.price}</p>
                <div className="bg-[#F0F0F0] rounded-full flex items-center px-3 py-1.5 sm:px-4 sm:py-2 gap-4 sm:gap-6">
                    <button onClick={() => dispatch(decrementQuantity(Number(item.id)))} className="text-black hover:text-black/60 transition-colors">
                        <BiMinus size={20} />
                    </button>
                    <span className="font-medium text-sm sm:text-base">{item.quantity}</span>
                    <button onClick={() => dispatch(addToCart({ 
                        id: Number(item.id), 
                        title: item.name, 
                        price: item.price, 
                        image: item.image,
                        category: '',
                        description: '',
                        rating: { rate: 0, count: 0 }
                    }))} className="text-black hover:text-black/60 transition-colors">
                        <BiPlus size={20} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItemCard