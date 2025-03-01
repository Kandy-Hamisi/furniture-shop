import Image from 'next/image'
import React from 'react'

const ProductCard = ({ image, title, description, price, prevPrice, badgeDetails }) => {
  return (
    <div className='bg-gray-200/55 shadow-3xl relative'>
      <div className='relative h-[300px] w-full'>
        <Image className='object-cover' fill alt={title} src={image} />
      </div>
      <div className='p-3'>
        <h3 className='font-bold mb-3'>{title}</h3>
        <p className='text-md mb-3 text-safari-gray'>{description}</p>
        <div className='flex text-sm mb-3 justify-between items-center'>
            <span className='font-bold'>USD {price}</span>
            <span className='italic line-through text-red-500'>USD {prevPrice}</span>
        </div>
        <div className='absolute top-0 right-5 mt-4 p-2 h-[40px] w-[40px] bg-green-500/100 flex items-center justify-center rounded-full'>
            <span className='text-sm'>{badgeDetails}</span>
        </div>
        <div className='flex items-center gap-2 justify-between'>
          <button className='w-full p-2 bg-safari-brown'>Add Cart</button>
          <button className='w-full p-2 border border-safari-brown'>Compare</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
