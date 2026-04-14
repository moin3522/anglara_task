import React from 'react'
import ProductSection from './ProductSection'
import type { Product } from '../../types'
import axios from 'axios';

interface FetchedProductSectionProps {
    title: string;
    limit?: number;
    sort?: 'asc' | 'desc';
    skip?: number;
}

export default async function FetchedProductSection({ title, limit = 4, sort = 'desc' }: FetchedProductSectionProps) {
    let allProducts: Product[] = [];
    try {
        let baseUrl = process.env.API_URL || 'https://fakestoreapi.com';
        // Remove trailing slash if present
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        
        const url = `${baseUrl}/products?limit=${limit}&sort=${sort}`;
        
        // Added User-Agent because some public APIs block Vercel serverless requests missing it
       const res = await axios.get(url)

        if (res.status !== 200) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = res.data;
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
