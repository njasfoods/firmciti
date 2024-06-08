import Link from 'next/link';
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Limousine Bookings',
    description: 'Revamped the user interface and experience for a leading e-commerce platform. Increased conversion rates by 25% and improved customer satisfaction.',
    imageUrl: '/callchris.png',
    url:'https://www.callchrislimo.com'
  },
  {
    id: 2,
    title: 'Ecommerce Restaurant Platform',
    description: 'Developed a custom inventory management system for a retail chain. Streamlined inventory tracking, ordering, and restocking processes, resulting in cost savings of over $50,000 per year.',
    imageUrl: '/njas2.png',
    url:"https://njas-one-trexiti.vercel.app/"
  },
  {
    id: 3,
    title: 'Landing Page',
    description: 'Designed and developed a mobile app for a startup in the health and fitness industry. The app provides personalized workout plans, nutrition tracking, and progress monitoring.',
    imageUrl: '/neeks.png',
    url:"https://www.neeksenterprises.com/"
  },
];


const Portfolio = () => {
  return (
    <section className="bg-white py-32 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">Portfolio</h2>
          <p className="text-secondary">Check out some of our recent projects.</p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id} className="col-span-1 bg-gray-200 rounded-lg shadow overflow-hidden">
              <Link target='_blank' href={project.url}>
               <div className="aspect-w-16 aspect-h-9">
                <img src={project.imageUrl} alt={project.title} className="object-cover object-center w-full h-52" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary-dark mb-2">{project.title}</h3>
                <p className="text-sm text-secondary">{project.description}</p>
              </div>
              </Link>
             
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
