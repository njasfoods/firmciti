import Mission from '@/components/Sections/About/Mission'
import Values from '@/components/Sections/About/Values'
import CTA from '@/components/UI/CTA'
import FromBlog from '@/components/UI/FromBlog'
import Team from '@/components/UI/Team'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='  mx-auto bg-white px-6 md:px-16 py-16'>
      <div className=''>
        <div className='items-center lg:flex min-h-screen'>
          <div className='w-full lg:w-1/2'>
            <div className='pt-32'>
              <p className='mb-4 text-secondary-dark font-bold text-2xl tracking-wide'>Our Story</p>
              <h1 className='text-4xl font-bold text-secondary-dark dark:text-white lg:text-5xl leading-tight'><span className='text-primary'>Empowering</span> Businesses Through Automation.</h1>
            </div>
          </div>
          <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 h-full'>
            <img className='w-full md:h-[90vh] lg:max-w-3xl' src='https://img.freepik.com/free-vector/robotic-process-automation-illustration_23-2149237081.jpg?t=st=1717791046~exp=1717794646~hmac=a61c39244a1b8159801b671502beb81b1ad7b4b61c27aed2bc290feaf7cb1813&w=740' />
          </div>
        </div>
      </div>

        <Mission/>
        <div className='w-full h-[40vh] relative mt-12'>
            <Image src={'/tech.jpg'} alt='' fill className='rounded-xl object-cover' />
        </div>
        <Values/>
        <Team/>
        <CTA />
    </div>
  )
}

export default AboutUs


