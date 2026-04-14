'use client';
import React, { useEffect, useState } from 'react'
import ProductSection from './ProductSection'
import { apiGetAllProducts } from '../../services/api/fakestore'
import type { Product } from '../../types'
import { ProductSectionSkeleton } from './ProductSectionSkeleton'


interface FetchedProductSectionProps {
    title: string;
    limit?: number;
    sort?: 'asc' | 'desc';
    skip?: number;
}

export default function FetchedProductSection({ title, limit = 4, sort = 'desc' }: FetchedProductSectionProps) {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        
        const fetchProducts = async () => {
            try {
                const response = await apiGetAllProducts(limit, sort);
                if (mounted) {
                    setAllProducts(Array.isArray(response) ? response : ((response as unknown as { data: Product[] }).data || []));
                }
            } catch (error) {
                console.error(`Failed to fetch products for section ${title}:`, error);
                if (mounted) setAllProducts([]);
            } finally {
                if (mounted) setIsLoading(false);
            }
        };

        fetchProducts();

        return () => {
            mounted = false;
        };
    }, [limit, sort, title]);

    if (isLoading) {
        return <ProductSectionSkeleton title={title} />;
    }

    return <ProductSection title={title} products={allProducts} />;
}
