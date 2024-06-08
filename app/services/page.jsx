import HowWeWork from '@/components/Sections/Services/HowWeWork'
import ServiceIntro from '@/components/Sections/Services/Intro'
import ServiceList from '@/components/Sections/Services/ServiceList'
import FAQs from '@/components/UI/FAQs'
import React from 'react'

const Services = () => {
  return (
    <section className='min-h-screen'>
        {/* <ServiceIntro/> */}
        <ServiceList/>
        <HowWeWork/>
        <FAQs/>
    </section>
  )
}

export default Services