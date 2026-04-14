import React, { Suspense } from 'react'
import HeroSection from './components/(sections)/HeroSection'
import Brand from './components/(sections)/Brand'
import BrowseByStyle from './components/(sections)/BrowseByStyle'
import HappyCustomers from './components/(sections)/HappyCustomers'
import FetchedProductSection from './components/(sections)/FetchedProductSection'
import { ProductSectionSkeleton } from './components/(sections)/ProductSectionSkeleton'

export default function Home() {
  return (
    <>
        <HeroSection/>
        <Brand/>
        
        <Suspense fallback={<ProductSectionSkeleton title="New Arrivals" />}>
            <FetchedProductSection title="New Arrivals" limit={4} sort="desc" />
        </Suspense>

        <div className='main-section padd-X'>
          <hr className='mt-10 border-black/10'/>
        </div>

        <Suspense fallback={<ProductSectionSkeleton title="Top Selling" />}>
            <FetchedProductSection title="Top Selling" limit={4} sort="asc" />
        </Suspense>

        <BrowseByStyle />
        <HappyCustomers />
    </>
  )
}

