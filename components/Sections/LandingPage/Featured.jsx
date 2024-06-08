import Link from 'next/link';
import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Limousine Bookings',
    description: 'Developed a responsive and user-friendly booking system for a leading limousine service. Enhanced user experience and streamlined booking processes, significantly improving customer satisfaction.',
    imageUrl: '/callchris.png',
    url: 'https://www.callchrislimo.com'
  },
  {
    id: 2,
    title: 'Ecommerce Restaurant Platform',
    description: 'Created an e-commerce platform for a restaurant, enabling online ordering, delivery tracking, and customer feedback integration. Improved customer engagement and increased online sales.',
    imageUrl: '/njas2.png',
    url: 'https://njas-one-trexiti.vercel.app/'
  },
  {
    id: 3,
    title: 'Landing Page',
    description: 'Designed and developed a high-conversion landing page for a business consulting firm. Focused on clear messaging and call-to-action elements to drive lead generation and client acquisition.',
    imageUrl: '/neeks.png',
    url: 'https://www.neeksenterprises.com/'
  },
];


const Featured = () => {
  return (
    <div className="bg-background-light">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-secondary-dark">Featured Projects</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {projects.map((callout) => (
            <div key={callout.title} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={callout.imageUrl}
                  alt={''}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-secondary-light">
                <Link target='_blank' href={callout.url}>
                  <span className="absolute inset-0" />
                  {callout.title}
                </Link>
              </h3>
              <p className="text-base font-semibold text-secondary">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Featured