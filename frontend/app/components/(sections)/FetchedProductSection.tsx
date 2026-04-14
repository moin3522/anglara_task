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
        let baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'https://fakestoreapi.com';
        // Remove trailing slash if present
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        
        const url = `${baseUrl}/products?limit=${limit}&sort=${sort}`;
        
        // Added User-Agent because some public APIs block Vercel serverless requests missing it
        const res = await fetch(url, { 
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'application/json'
            },
            cache: 'no-store' // Bypass Next.js cache to clear any poisoned/failed edge cache temporarily
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
