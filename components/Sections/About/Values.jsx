import React from 'react'

const Values = () => {
  return (
    <div className='py-32'>
    <h4 className='text-3xl text-secondary-dark font-bold'>Our Values</h4>
    <div className=' text-secondary  mt-8 max-w-2xl tracking-wide'>
      <p className='text-xl mt-8'>At the core of our business are the following values:</p>
      <ul className='list-disc pl-8 mt-4'>
        <li className='text-lg'>Innovation: We constantly seek new ways to innovate and improve.</li>
        <li className='text-lg'>Integrity: We conduct ourselves with honesty and integrity in everything we do.</li>
        <li className='text-lg'>Customer-centricity: We prioritize the needs and success of our customers above all else.</li>
        <li className='text-lg'>Collaboration: We believe in the power of collaboration and teamwork.</li>
      </ul>
    </div>
  </div>
  )
}

export default Values