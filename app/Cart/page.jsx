import { HeroBanner } from '@/components'
import { Cart, FilterBanner, ValueProposition } from '@/sections'
import OurProducts from '@/sections/ourProducts/OurProducts'
import React from 'react'

const page = () => {
  return (
    <main className='relative'>
      <section>
        <HeroBanner title="Shop" />
      </section>
      <section className='padding bg-white'>
        <Cart />
      </section>
      {/* <section className='padding bg-white-400'>
        <OurProducts />
      </section> */}
      <section className='padding'>
        <ValueProposition />
      </section>
    </main>
  )
}

export default page
