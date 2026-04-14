'use client';
import React from 'react'
import Link from 'next/link'
import { BsArrowRight, BsChevronRight, BsTag, BsCartX } from 'react-icons/bs'
import CartItemCard from '../components/CartItemCard'
import { useAppSelector } from '../store/hooks'
import { Skeleton } from '../components/ui/skeleton'

export default function CartPage() {
  const isInitialized = useAppSelector((state) => state.cart.isInitialized);
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  
  // Dummy values for visual consistency
  const discountAmount = Math.round(totalPrice * 0.2); // 20% discount
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const finalTotal = totalPrice - discountAmount + deliveryFee;

  return (
    <div className="main-container bg-white w-full">
        <div className="main-section padd-X py-5">
            
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <BsChevronRight size={12} />
                <span className="text-(--text-primary-color)">Cart</span>
            </div>

            <h1 className=" mb-6 sm:mb-8 uppercase">
                Your Cart
            </h1> 
            
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-[1.5]  border border-black/10 rounded-[20px] p-4 sm:p-6 flex flex-col gap-6">
                    {!isInitialized ? (
                        <div className="flex flex-col gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-4 sm:gap-6 border-b border-black/10 pb-6 last:border-0 last:pb-0">
                                    <Skeleton className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl shrink-0" />
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="w-full">
                                                <Skeleton className="h-6 w-3/4 mb-2" />
                                                <Skeleton className="h-4 w-24 mb-1" />
                                                <Skeleton className="h-4 w-24" />
                                            </div>
                                            <Skeleton className="h-5 w-5 rounded-full" />
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <Skeleton className="h-8 w-20" />
                                            <Skeleton className="h-10 w-28 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-gray-500 gap-4">
                            <BsCartX size={64} className="text-gray-300" />
                            <p className="text-lg">Your cart is empty.</p>
                            <Link href="/" className="text-black font-bold underline hover:text-gray-700 transition-colors">Go shopping</Link>
                        </div>
                    ) : (
                        cartItems.map((cartItem) => (
                            <CartItemCard 
                                key={cartItem.product.id} 
                                item={{
                                    id: cartItem.product.id,
                                    name: cartItem.product.title,
                                    image: cartItem.product.image,
                                    size: 'Large', // keeping static as requested
                                    color: 'White', // keeping static as requested
                                    price: cartItem.product.price,
                                    quantity: cartItem.quantity
                                }} 
                            />
                        ))
                    )}
                </div>

                <div className="flex-1 border border-black/10 rounded-[20px] p-6 h-fit flex flex-col gap-6">
                    <h5 className="font-bold text-xl sm:text-2xl mb-2">Order Summary</h5>
                    
                    <div className="flex flex-col gap-4 text-base sm:text-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="font-bold">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Discount (-20%)</span>
                            <span className="font-bold text-red-500">-${discountAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Delivery Fee</span>
                            <span className="font-bold">${deliveryFee.toFixed(2)}</span>
                        </div>
                        
                        <div className="border-t border-black/10 pt-4 mt-2 flex justify-between items-center">
                            <span className="text-black font-normal text-lg">Total</span>
                            <span className="font-bold text-xl sm:text-2xl">${finalTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <div className="bg-[#F0F0F0] flex-1 rounded-full flex items-center px-4 py-3 gap-3">
                            <BsTag className="text-black/40 text-xl shrink-0" />
                            <input 
                                type="text" 
                                placeholder="Add promo code" 
                                className="bg-transparent outline-none w-full text-black placeholder:text-black/40"
                            />
                        </div>
                        <button className="bg-black text-white font-medium rounded-full px-6 py-3 hover:bg-black/80 transition-colors">
                            Apply
                        </button>
                    </div>

                    <button className="w-full bg-black text-white font-medium rounded-full py-4 mt-2 flex items-center justify-center gap-3 hover:bg-black/80 transition-colors">
                        Go to Checkout <BsArrowRight size={20} />
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}