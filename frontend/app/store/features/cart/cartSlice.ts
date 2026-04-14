import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@/app/types';

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
    isInitialized: boolean;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    isInitialized: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(
                (item) => item.product.id === action.payload.id
            );

            state.totalQuantity++;
            state.totalPrice += action.payload.price;

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({
                    product: action.payload,
                    quantity: 1,
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.product.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.product.price * existingItem.quantity;
                state.items = state.items.filter((item) => item.product.id !== id);
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.product.id === id);

            if (existingItem) {
                state.totalQuantity--;
                state.totalPrice -= existingItem.product.price;

                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.product.id !== id);
                } else {
                    existingItem.quantity--;
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
        setCart: (state, action: PayloadAction<CartState>) => {
            return { ...action.payload, isInitialized: true };
        },
        setInitialized: (state) => {
            state.isInitialized = true;
        },
    },
});

export const { addToCart, removeFromCart, decrementQuantity, clearCart, setCart, setInitialized } = cartSlice.actions;

export default cartSlice.reducer;
