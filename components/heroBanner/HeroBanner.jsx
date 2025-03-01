'use client'

import React from 'react'
import { usePathname, useParams } from 'next/navigation'
import Link from 'next/link';
import { FaCaretRight } from 'react-icons/fa';

const HeroBanner = ({ title }) => {

    const pathname = usePathname();
    const params = useParams();


  return (
    <div className='relative h-[30vh] flex justify-center items-center'>
        <div className='absolute inset-0 bg-hero bg-center bg-cover filter blur-sm'></div>
        <div className='relative flex flex-col items-center'>
            <h2 className='text-4xl font-bold mb-3 text-white'>{title}</h2>
            <div className='flex items-center space-x-3'>
                <span>
                    <Link href="/">Home</Link>
                </span>
                <span>
                    <FaCaretRight />
                </span>
                <span>
                    <Link href={pathname}>{title}</Link>
                </span>
                {Object.keys(params).length > 0 && <div className='flex items-center space-x-3'>
                    <span>
                        <hr className="border-2 border-red-500 h-6"/>
                    </span>
                    <span>
                        <p>{params.product}</p>
                    </span>
                </div>}
            </div>
        </div>
    </div>

  )
}

export default HeroBanner
