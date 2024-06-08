import React from 'react'

const callouts = [
    {
      name: 'Zen Noodles',
      description: 'eCommerce',
      imageSrc: 'https://st4.depositphotos.com/1007298/27483/i/600/depositphotos_274831588-stock-photo-raw-chicken-eggs.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'AMY',
      description: 'Appointment Application',
      imageSrc: 'https://st3.depositphotos.com/13349494/19241/i/600/depositphotos_192410848-stock-photo-organic-green-avocado-clean-eating.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Go Bjoun',
      description: 'Appointment Application',
      imageSrc: 'https://st4.depositphotos.com/1006789/28255/i/600/depositphotos_282554738-stock-photo-glass-fresh-goat-milk.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]

const Featured = () => {
  return (
    <div className="bg-background-light">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-secondary-dark">Featured Projects</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-secondary-light">
                <a href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
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