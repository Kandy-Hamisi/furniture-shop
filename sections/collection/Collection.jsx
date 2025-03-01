import { collections } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Collection = () => {
  return (
    <section className='max-container'>
        <div className='flex flex-col items-center mb-4'>
            <h3 className='mb-3 font-bold text-4xl font-montserrat text-safari-gray'>Our Popular Collections</h3>
            <p>Browse from our most popular collections near your city</p>
        </div>
      <div className='flex items-center gap-12 justify-center w-full'>
        {
            collections.map((collection) => (
                <div key={collection.id}>
                  <div className='relative h-[400px] w-[350px] mb-4'>
                      <Image fill className='object-cover rounded-xl' src={collection.image} alt={collection.title} />
                  </div>
                  <div className='flex justify-center'>
                    <h2 className='font-bold text-xl text-safari-deep-brown'>{collection.title}</h2>
                  </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Collection
