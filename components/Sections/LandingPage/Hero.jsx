import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen bg-primary text-white flex flex-col-reverse md:flex-row justify-end gap-12 md:flex md:items-center md:justify-between px-6 py-24 sm:py-32 lg:overflow-visible lg:px-16">
    <div className="sm:w-1/2 h-full max-w-xl text-center md:text-start">
    <div className="hidden sm:mb-8 sm:flex ">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
          Hello, welcome to our home!
        
        </div>
      </div>
      <h1 className="font-extrabold text-6xl lg:text-7xl mb-4">Automate your Business</h1>
      <p className="text-gray-200"> Streamline processes, boost efficiency, and increase productivity with our automation services.</p>

       <div className="flex mt-8 space-x-4 justify-center md:justify-start text-sm ">  
       <Link
                href="/services"
                className="rounded-md bg-white text-primary hover:bg-accent-orange px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get Started
              </Link>
       </div>
    </div>

    <div className="sm:w-1/2 md:h-full ">
      <div className="relative lg:w-96 w-80 h-80 lg:h-96 mx-auto border  rounded-full">
      <Image priority fill alt="" src={'/pic.jpg'} className="object-cover rounded-full border p-6"/>
      
      </div>
    </div>
  
    </section>

  
  )
}

export default Hero