import React from 'react';

const BusinessAutomation = () => {
  return (
    <div className="group block overflow-hidden">
      <img
        src="/business_automation_image.jpg"
        alt="Business Automation"
        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />

      <div className="relative bg-white pt-3">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          Business Automation
        </h3>

        <p className="mt-2">
          <span className="sr-only">Regular Price</span>
          <span className="tracking-wider text-gray-900">£24.00 GBP</span>
        </p>
      </div>
    </div>
  );
};

export default BusinessAutomation;
