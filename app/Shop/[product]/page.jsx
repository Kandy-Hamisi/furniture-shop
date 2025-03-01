import { HeroBanner } from '@/components'
import { ProductDescription } from '@/sections'
import OurProducts from '@/sections/ourProducts/OurProducts'
import React from 'react'

const page = () => {
  return (
    <main className='relative'>
        <section>
            <HeroBanner title="Shop" />
        </section>
        <section className='padding bg-white-400'>
            <ProductDescription />
        </section>
        <section className='padding'>
            <section className='max-container'>
                <div className='flex justify-center mb-4'>
                    <h1 className='text-4xl text-safari-gray'>Related Products</h1>
                </div>
                <OurProducts />
            </section>
        </section>
    </main>
  )
}

export default page
