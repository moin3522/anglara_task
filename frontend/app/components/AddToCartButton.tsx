'use client';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/features/cart/cartSlice';
import type { Product } from '../types';
import type { RootState } from '../store/store';
import { BiPlus, BiCheck } from "react-icons/bi";

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isAdded = cartItems.some((item) => item.product.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent accidental navigation if nested in Link later
    if (isAdded) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <button 
      onClick={handleAddToCart}
      className={`absolute top-3 right-3 p-2 sm:p-2.5 rounded-full shadow-md transition-all duration-300 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto ${
        isAdded 
          ? 'bg-black text-white hover:bg-gray-800' 
          : 'bg-white text-black hover:bg-black hover:text-white'
      }`}
      aria-label="Add to cart"
    >
      {isAdded ? <BiCheck size={24} className="sm:w-6 sm:h-6" /> : <BiPlus size={24} className="sm:w-6 sm:h-6" />}
    </button>
  );
}