'use client'

import { useGlobalContext } from '@/context/globalContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const CartModal = () => {
    const { closeCartModal } = useGlobalContext();

  return (
    <div className='bg-white-400 flex flex-col shadow-3xl p-6 w-[350px] h-[400px] rounded-bl-xl'>
        <div className='flex items-center justify-between'>
            <h4 className='font-bold'>Shopping Cart</h4>
            <span><FaTimes className='text-xs cursor-pointer' onClick={() => closeCartModal()} /></span>
        </div>
        <div className='my-6'><hr className='border-safari-black' /></div>
        <div>
            {/* Cart items */}
            <div className='flex items-center gap-4 mb-4'>
                <div className='w-[85px] relative h-[75px]'>
                    <Image src='/kitchen.jpg' fill className="object-cover rounded-md" />
                </div>
                <div className='flex-1'>
                    <h5 className='text-sm font-bold'>Product Name</h5>
                    <div className='flex items-center space-x-3 text-sm'>
                        <p>2</p>
                        <span>X</span>
                        <p>$100</p>
                    </div>
                </div>
                <div>
                    <span><FaTimes className='text-xs cursor-pointer' /></span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='w-[85px] relative h-[75px]'>
                    <Image src='/kitchen.jpg' fill className="object-cover rounded-md" />
                </div>
                <div className='flex-1'>
                    <h5 className='text-sm font-bold'>Product Name</h5>
                    <div className='flex items-center space-x-3 text-sm'>
                        <p>2</p>
                        <span>X</span>
                        <p>$100</p>
                    </div>
                </div>
                <div>
                    <span><FaTimes className='text-xs cursor-pointer' /></span>
                </div>
            </div>
            <div className='flex-1 text-right'>
                <p>Subtotal: $200</p>
            </div>
            <div className='mt-4 flex items-center justify-between'>
                <Link href="/Cart" className='border border-safari-black p-2 rounded-md'>Cart</Link>
                {/*<Link href="/Checkout" className='border border-safari-black p-2 rounded-md'>Checkout</Link>*/}
                {/*<Link href="/Compare" className='border border-safari-black p-2 rounded-md'>Compare</Link>*/}
            </div>
        </div>
    </div>
  )
}

export default CartModal
