import React from 'react'

const Step = ({ currentStep, step, label, svgPath, hiddenSvgPath }) => {
  const isActiveOrBefore = currentStep >= step
  const stepClass = isActiveOrBefore ? 'text-accent-orange' : 'text-gray-500'
  const circleClass = isActiveOrBefore ? 'bg-accent-orange' : 'bg-gray-200'

  return (
    <li className={`relative flex ${step === 1 ? 'justify-start' : step === 2 ? 'justify-center' : 'justify-end'} ${stepClass}`}>
      <span className={`absolute -bottom-[1.75rem] ${step === 1 ? 'start-0' : step === 2 ? 'left-1/2 -translate-x-1/2' : 'end-0'} rounded-full text-white ${circleClass}`}>
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d={svgPath} clipRule="evenodd" />
        </svg>
      </span>
      <span className="hidden sm:block">{label}</span>
      <svg className="size-6 sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d={hiddenSvgPath} />
      </svg>
    </li>
  )
}

const Steps = ({ step }) => {
  return (
    <div className='mt-8'>
      <h2 className="sr-only">Steps</h2>
      <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
        <ol className="grid grid-cols-3 text-sm font-medium">
          <Step
            currentStep={step}
            step={1}
            label="Details"
            svgPath="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            hiddenSvgPath="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
          <Step
            currentStep={step}
            step={2}
            label="Contact"
            svgPath="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            hiddenSvgPath="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <Step
            currentStep={step}
            step={3}
            label="Success!"
            svgPath="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            hiddenSvgPath="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </ol>
      </div>
    </div>
  )
}

export default Steps
