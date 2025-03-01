import React from 'react'

const HomeHero = () => {
  return (
    <section className='flex justify-end items-center max-container min-h-[70vh] w-full'>
      <div className='w-[40vw] bg-safari-brown shadow-3xl p-12 mr-12'>
        <div className='mb-6'>
            <h5>New Arrival</h5>
        </div>
        <div className='mb-6'>
            <h3 className='flex flex-col text-safari-deep-brown text-4xl font-bold'><span>Discover Our</span><span> New Collection</span></h3>
        </div>
        <div className='mb-6'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque repellat alias architecto veritatis?</p>
        </div>
        <div>
            <button className='bg-safari-deep-brown text-white p-2 w-[150px]'>Buy Now</button>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
