import Image from 'next/image';
import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Al Neville Hall',
    position: 'Lead Developer',
    imageUrl: '/neville.jpg'
  },
  {
    id: 2,
    name: 'Allisa Colemon',
    position: 'Client Officer',
    imageUrl: '/alli.png'
  },
  {
    id: 3,
    name: 'Ike Chow',
    position: 'Lead Designer',
    imageUrl: '/ike.jpg'
  },
];

const Team = () => {
  return (
    <section className=' mt-16'>
      <div className='container px-6 py-8 mx-auto'>
        <h2 className='text-2xl font-bold text-center text-secondary-dark capitalize lg:text-3xl '>
          Meet the team dedicated to your wellness journey
        </h2>
        <div className='grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {teamMembers.map(member => (
            <div key={member.id} className='w-full max-w-xs text-center'>
              <div className="relative w-full h-64 mx-auto">
                <Image
                className='object-cover object-top rounded-lg'
                src={member.imageUrl}
                alt='avatar'
                fill
                priority
              />
              </div>
              
              <div className='mt-2'>
                <h3 className='text-lg font-medium text-secondary-dark'>{member.name}</h3>
                <span className='mt-1 font-medium text-secondary dark:text-gray-300'>{member.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
