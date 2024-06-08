import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Al Neville Hall',
    position: 'Lead Developer',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  },
  {
    id: 2,
    name: 'Allisa Colemon',
    position: 'Client Officer',
    imageUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 3,
    name: 'Ike Chow',
    position: 'Lead Designer',
    imageUrl: 'https://images.unsplash.com/photo-1520828314548-5f8da30b1edd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
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
              <img
                className='object-cover object-center w-full h-48 mx-auto rounded-lg'
                src={member.imageUrl}
                alt='avatar'
              />
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
