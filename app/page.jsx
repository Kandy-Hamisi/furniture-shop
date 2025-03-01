import { CartModal, Footer, Navbar } from "@/components";
import { BeautifulRooms, Collection, HomeHero, ImageGallery } from "@/sections";
import OurProducts from "@/sections/ourProducts/OurProducts";
import Image from "next/image";

export default function Home() {
  return (
   <main className="relative">
    
    <section className="bg-hero min-h-screen padding bg-center bg-cover">
      <HomeHero />
    </section>
    <section className=" relative padding">
      <Collection />
      <div className="h-[200px] w-[400px] absolute gradient-03 top-[50%] left-[40%]"></div>
    </section>
    <section className="padding">
      <section className="max-container">
        <div className='flex justify-center mb-8'>
            <h3 className='text-4xl text-safari-gray'>Our Products</h3>
        </div>
      </section>
      <OurProducts />
    </section>
    <section className="padding bg-white-400">
      <BeautifulRooms />
    </section>
    <section>
      <section className="flex flex-col py-12 justify-center items-center">
        <h5 className="text-2xl">Share Your Setup With</h5>
        <h1 className="text-safari-gray text-4xl font-bold">#KandyStore</h1>
      </section>
      <ImageGallery />
    </section>
   </main>
  );
}
