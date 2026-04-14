import React from 'react'
import ProductSection from './ProductSection'
import { apiGetAllProducts } from '../../services/api/fakestore'



interface FetchedProductSectionProps {
    title: string;
    limit?: number;
    sort?: 'asc' | 'desc';
    skip?: number;
}

export default async function FetchedProductSection({ title, limit = 4, sort = 'desc' }: FetchedProductSectionProps) {
    const response = await apiGetAllProducts(limit, sort);

    const allProducts = response || [];
    
    if (!allProducts.length) {
        return <ProductSection title={title} products={[]} />;
    }

    return <ProductSection title={title} products={allProducts} />;
}
