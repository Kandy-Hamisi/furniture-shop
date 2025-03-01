'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const ProductDescription = ({ title, price, sizes, colors, description, reviews, ratings, category, tags }) => {

    const images = [
        '/kitchen.jpg',
        '/bedroom.jpg',
        '/living-room.jpg',
    ];

    const [ activeImage, setActiveImage ] = useState(images[0]);
    const [ quantity, setQuantity ] = useState(1);

  return (
    <section className='max-container flex gap-12'>
      <div className='flex gap-12 flex-1'>
        <div className='flex flex-col gap-[30px]'>
            {
                images.map((image, idx) => (
                    <div key={idx} className='relative h-[100px] w-[100px] cursor-pointer shadow-xl' onClick={() => setActiveImage(images[idx])}>
                        <Image src={image} alt="product" fill className='object-cover rounded-md' />
                    </div>
                ))
            }
        </div>
        <div className='flex-1'>
            <div className='relative h-[400px] w-[400px] transition-all duration-300 ease-in-out'>
                <Image src={activeImage} fill className="object-cover rounded-xl" />
            </div>
        </div>
      </div>
      <div className='flex-1'>
        <div>
            <h3 className='font-bold text-xl mb-4'>Asgaard Sofa</h3>
            <h5 className='font-bold text-safari-gray mb-3'>KES. 250,000.00</h5>
            <span className=''>5 Customer Reviews</span>
            <p className='my-3 leading-[35px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugit qui eum quisquam laborum omnis. Ipsa pariatur esse quo ducimus laudantium id, corporis provident vitae eum perferendis blanditiis ab nemo!</p>
        </div>
        <div>
            <h6 className='font-bold mb-3'>Size</h6>
            <div className='flex space-x-3'>
                <span className='bg-safari-gray p-1.5 h-[20-px] w-[30px] rounded-md flex items-center justify-center text-sm text-white'>L</span>
                <span className='bg-safari-gray p-1.5 h-[20-px] w-[30px] rounded-md flex items-center justify-center text-sm text-white'>XL</span>
                <span className='bg-safari-gray p-1.5 h-[20-px] w-[30px] rounded-md flex items-center justify-center text-sm text-white'>XS</span>
            </div>
        </div>
        <div className='my-4'>
            <h6 className='mb-3 font-bold'>color</h6>
            <div className='flex space-x-3'>
                <div className='h-6 w-6 rounded-full cursor-pointer bg-green-300'></div>
                <div className='h-6 w-6 rounded-full cursor-pointer bg-red-300'></div>
                <div className='h-6 w-6 rounded-full cursor-pointer bg-blue-400'></div>
            </div>
        </div>
        <div className='flex gap-8 items-center'>
            <div className='relative w-[100px] border border-safari-black rounded-md'>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='w-full bg-transparent text-center p-2 outline-none border-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' name="" id="" />
                <span className='absolute right-0 mr-[8px] mt-[15px]'><FaPlus className='text-xs cursor-pointer' onClick={() => setQuantity((prev) => prev <= 9 ? prev + 1 : prev) } /></span>
                <span className='absolute left-0 ml-[8px] mt-[15px]'><FaMinus className='text-xs cursor-pointer' onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev) } /></span>
            </div>
            <div>
                <button className='cursor-pointer rounded-md border p-2 border-safari-black'>Add To Cart</button>
            </div>
            <div>
                <button className='cursor-pointer rounded-md flex items-center space-x-3 justify-center border p-2 border-safari-black'>
                    <span><FaPlus className='text-xs' /></span>
                    <span>Compare</span>
                </button>
            </div>
        </div>
      </div>

    </section>
  )
}

export default ProductDescription