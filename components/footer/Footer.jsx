import { footerLinks, footerQuickLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-container'>
      {/* top */}
      <div className='flex gap-12 justify-between'>
        {/* left */}
        <div className='flex-1'>
            <div>
                <h3 className='font-bold text-2xl mb-3 text-safari-gray'>KandyStore.</h3>
                <p className='mb-3'>Likoni - Ukunda Road</p>
                <p className='mb-3'>Likoni</p>
            </div>
        </div>
        {/* center */}
        <div className='flex flex-1 gap-12'>
            <div className='flex-1'>
                <h3 className='font-bold text-2xl mb-4 text-safari-gray'>Links</h3>
                <div className='flex flex-col space-y-6'>
                    {
                        footerLinks.map((footerLink) => (
                            <Link key={footerLink.label} href={footerLink.href}>{footerLink.label}</Link>
                        ))
                    }
                </div>
            </div>
            <div className='flex-1'>
                <h3 className='font-bold text-2xl mb-4 text-safari-gray'>Quick Links</h3>
                <div className='flex flex-col space-y-6'>
                    {
                        footerQuickLinks.map((quickLink) => (
                            <Link key={quickLink.label} href={quickLink.href}>{quickLink.label}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
        {/* right */}
        <div className='flex-1'>
            <h3 className='font-bold text-2xl mb-4 text-safari-gray'>NewsLetter</h3>
            <div>
                <input type='email' placeholder='Your Email Address' className='border-2 mb-3 border-safari-gray p-2 w-full outline-none' />
                <button className='bg-safari-deep-brown text-white p-2 w-full'>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='my-8'>
        <hr />
      </div>
      {/* bottom */}
      <div>
        <p>2024 kandystore. All rights reverved</p>
      </div>
    </div>
  )
}

export default Footer
