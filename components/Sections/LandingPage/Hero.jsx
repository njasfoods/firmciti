import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen  grid bg-background-light pt-20 pb-10 px-20"   >
        <div className="relative px-6 lg:px-8">
   
        <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-secondary-dark ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Hello, welcome to our home!
            
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Automate your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-dark">
            Streamline processes, boost efficiency, and increase productivity with our automation services.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/book-consultation"
                className="rounded-md bg-primary text-white hover:bg-accent-orange px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get Started
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-secondary-dark">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      
      </div>
      
      </div>
  
  )
}

export default Hero