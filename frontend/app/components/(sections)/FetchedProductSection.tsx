import React from 'react'
import ProductSection from './ProductSection'
import type { Product } from '../../types'

interface FetchedProductSectionProps {
    title: string;
    limit?: number;
    sort?: 'asc' | 'desc';
    skip?: number;
}

export default async function FetchedProductSection({ title, limit = 4, sort = 'desc' }: FetchedProductSectionProps) {
    let allProducts: Product[] = [];
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'https://fakestoreapi.com'}/products?limit=${limit}&sort=${sort}`;
        const res = await fetch(url, { 
            next: { revalidate: 3600 } 
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        allProducts = Array.isArray(data) ? data : [];
    } catch (error) {
        console.error(`Failed to fetch products for section ${title}:`, error);
        allProducts = []; // Fallback to empty array
    }

    if (!allProducts.length) {
        return <ProductSection title={title} products={[]} />;
    }

    return <ProductSection title={title} products={allProducts} />;
}
