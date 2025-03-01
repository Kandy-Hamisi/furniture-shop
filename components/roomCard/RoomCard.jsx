import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const RoomCard = ({ image, id, title, type, description }) => {
  return (
    <div className='relative'>
        <div className='relative h-[400px] w-[300px]'>
            <Image className='object-cover' src={image} fill />
        </div>
        <div className='absolute bottom-0 ml-4 mb-4 flex'>
            <div className='flex flex-col bg-platinum bg-opacity-70 p-2'>
                <div className='flex font-bold space-x-2 items-center'>
                    <span>{id}</span>
                    <span><hr className='w-3 border border-3 border-safari-gray' /></span>
                    <span>{title}</span>
                </div>
                <div>
                    <h5 className='font-bold'>{description}</h5>
                </div>
            </div>
            <button className='bg-safari-deep-brown p-2 text-white'>
                <FaArrowRight />
            </button>
        </div>
    </div>
  )
}

export default RoomCard
