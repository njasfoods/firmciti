import React from 'react'

const Mission = () => {
  return (
    
    <div className=''>
    <h4 className='text-2xl font-bold text-secondary-dark capitalize lg:text-3xl'>Our Mission</h4>
    <div className='flex w-full justify-between'>
      <div className='w-2/3 text-secondary space-y-8 max-w-xl tracking-wide'>
        <p className='text-xl mt-8'>We&apos;re on a mission to revolutionize the way businesses operate by leveraging cutting-edge technology.</p>
        <p className='text-lg'>Our goal is to empower businesses of all sizes through custom web development, business process automation, and seamless software integration.</p>
        <p className='text-lg'>We believe in simplifying complex processes, improving efficiency, and driving growth for our clients.</p>
      </div>
      <div className='px-6 lg:px-8 w-1/3'>
        <dl className='flex-col space-y-12  mt-8'>
          {stats.map((stat) => (
            <div key={stat.id} className='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt className='text-base leading-7 text-secondary'>{stat.name}</dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-secondary-dark sm:text-4xl'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  )
}

export default Mission

const stats = [
    { id: 1, name: 'Websites Developed', value: '7' },
    { id: 2, name: 'Automated Processes', value: '5' },
    { id: 3, name: 'Software Solutions Delivered', value: '1' },
  ]