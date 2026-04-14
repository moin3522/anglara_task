'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import React, { useEffect } from 'react';
import { setCart, setInitialized } from './features/cart/cartSlice';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Load state from local storage on client mount
    try {
      const storedCart = localStorage.getItem('cartState');
      if (storedCart) {
        store.dispatch(setCart(JSON.parse(storedCart)));
      } else {
        store.dispatch(setInitialized());
      }
    } catch (e) {
      console.warn("Error loading cart state from local storage", e);
      store.dispatch(setInitialized());
    }

    // Subscribe to state changes to save continuously
    const unsubscribe = store.subscribe(() => {
      try {
        localStorage.setItem('cartState', JSON.stringify(store.getState().cart));
      } catch (e) {
        console.warn("Error saving cart state to local storage", e);
      }
    });

    return () => unsubscribe();
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
