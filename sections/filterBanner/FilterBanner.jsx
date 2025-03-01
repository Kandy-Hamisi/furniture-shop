import React from 'react'
import { FaFilter } from 'react-icons/fa'

const FilterBanner = () => {
  return (
    <section className='max-container flex items-center justify-between'>
      <div className='flex items-center gap-6 flex-1'>
        <div className='flex items-center space-x-3'>
            <span><FaFilter className='cursor-pointer' /></span>
            <span>Filter</span>
        </div>
        <div>
         <hr className='border-2 border-safari-deep-brown h-6' />
        </div>
        <div>
            <p>Showing 1-12 of 36 results</p>
        </div>
      </div>
      <div className='flex-1 flex gap-6 items-center justify-end'>
        <div className='flex items-center space-x-3'>
            <span>Show</span>
            <div>
                <input placeholder='12' className='w-12 text-center bg-white border-platinum border p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" name="" id="" />
            </div>
        </div>
        <div className='flex items-center space-x-3'>
            <span>Sort By</span>
            <select className='bg-white border border-platinum p-2 text-center' name="" id="">
                <option value="">Default</option>
                <option value="">Price</option>
                <option value="">Latest</option>
            </select>
        </div>
      </div>
    </section>
  )
}

export default FilterBanner
