import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
    {
      name: 'Web Development',
      description:
        'We build scalable, responsive, and user-friendly websites tailored to meet your business needs. Our web development services ensure a robust online presence that drives growth.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Business Process Automation',
      description: 'Streamline your business operations with our automation solutions. We create efficient workflows that save time and reduce errors, allowing you to focus on core business activities.',
      icon: LockClosedIcon,
    },
    {
      name: 'Software Integration',
      description: 'Seamlessly integrate your software systems for enhanced functionality and productivity. Our integration services ensure smooth communication between different applications, optimizing your business processes.',
      icon: ServerIcon,
    },
  ]

export default function ServiceList() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">Optimize Your Business</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-dark sm:text-4xl">Innovative Web Solutions</p>
              <p className="mt-6 text-lg leading-8 text-secondary">
              Transform your business with our comprehensive web development and automation services. We specialize in creating customized solutions that enhance efficiency and drive growth.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-secondary lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-secondary-dark">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/service.jpg"
            alt="Product screenshot"
            className="w-[48rem] h-[90vh] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
