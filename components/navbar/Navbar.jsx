'use client'

import { navBarLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { FaCartPlus, FaHeart, FaSearch, FaUsers } from 'react-icons/fa'
import { CartModal } from '..'
import { useGlobalContext } from '@/context/globalContext'

const Navbar = () => {

  const { state, openCartModal, closeCartModal } = useGlobalContext();
  const isModalOpen = state.cartModal;

  const handleOpenModal = () => {
    openCartModal();
  };

  const handleCloseModal = () => {
    closeCartModal();
  };

  return (
    <header className='flex gap-12 items-center justify-between w-full padding-x py-6 shadow-2xl'>
      {/* the logo will go here */}
      <div className='flex-1'>
        <h1 className='font-bold text-2xl'>KandyStore</h1>
      </div>
      {/* navigation items */}
      <ul className='flex flex-1 items-center justify-between'>
        {
            navBarLinks.map((navLink) => (
                <Link key={navLink.label} href={navLink.href} className='cursor-pointer hover:text-orange-400 duration-300 transition-all ease-in-out'>{navLink.label}</Link>
            ))
        }
      </ul>

      {/* The icons part */}
      <div className='flex flex-1 gap-6 justify-center items-center'>
        <span className='cursor-pointer text-xl'><FaUsers /></span>
        <span className='cursor-pointer text-xl'><FaSearch /></span>
        <span className='cursor-pointer text-xl'><FaHeart /></span>
        <span className='cursor-pointer text-xl'><FaCartPlus onClick={handleOpenModal} /></span>
      </div>
      {isModalOpen && <section className="absolute right-0 top-0 z-20">
        <CartModal />
      </section>}
    </header>
  )
}

export default Navbar
