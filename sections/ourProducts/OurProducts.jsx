import { ProductCard } from '@/components'
import { ourProducts } from '@/constants'
import React from 'react'

const OurProducts = () => {
  return (
    <section className='max-container'>
        <div className='flex gap-12 justify-center'>
            {
                ourProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
            }
        </div>
    </section>
  )
}

export default OurProducts
