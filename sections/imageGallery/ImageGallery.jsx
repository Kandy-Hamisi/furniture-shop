import Image from 'next/image'
import React from 'react'

const ImageGallery = () => {
  return (
    <section className='flex items-center gap-12'>
      <div className=' flex-1'>
        <div className='flex gap-8 mb-6'>
          {/* top */}
          <div className='-ml-[20%] relative h-[300px] w-[200px]'>
            <Image src="/bedroom.jpg" fill className='object-cover' />
          </div>
          <div className='flex self-end relative h-[200px] w-full'>
            <Image src='/kitchen-closet.jpg' fill className='object-cover'/>
          </div>
        </div>
        <div className='flex gap-8'>
          {/* bottom */}
          <div className='relative h-[300px] w-[500px]'>
            <Image src="/bedroom.jpg" fill className='object-cover' />
          </div>
          <div className='flex self-start relative h-[200px] w-full'>
            <Image src='/hero.jpg' fill className='object-cover'/>
          </div>
        </div>
      </div>
      <div className='relative h-[350px] w-[250px]'>
        <Image src='/kitchen.jpg' fill />
      </div>
      <div className='flex-1'>
        {/* top */}
        <div className='mb-6 flex gap-8'>
          <div className='relative h-[300px] w-full'>
            <Image src="/living-room.jpg" fill className='object-cover' />
          </div>
          <div className='flex self-end relative h-[250px] w-full'>
            <Image src='/kitchen.jpg' fill className='object-cover'/>
          </div>
        </div>
        {/* bottom */}
        <div className='flex gap-8'>
          <div className='relative h-[300px] w-[250px]'>
            <Image src="/bedroom.jpg" fill className='object-cover' />
          </div>
          <div className='flex self-start relative h-[200px] w-[300px]'>
            <Image src='/hero.jpg' fill className='object-cover'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
