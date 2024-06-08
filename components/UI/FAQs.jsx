'use client'
import React, { useState } from 'react';

const faqs = [
  {
  question: "How can I pay for my appointment?",
  answer: "We accept various payment methods including credit cards, debit cards, and online payments. Details will be provided during the appointment scheduling process.",
  },
  {
  question: "What are the benefits of business process automation?",
  answer: "Business process automation helps streamline operations, reduce errors, save time, and improve overall efficiency, allowing you to focus on core business activities.",
  },
  {
  question: "How does software integration improve my business?",
  answer: "Software integration ensures smooth communication between different applications, enhancing functionality, productivity, and providing a unified system for better decision-making.",
  },
  {
  question: "Do you offer custom web development solutions?",
  answer: "Yes, we offer tailor-made web development solutions to meet your specific business needs. Our team works closely with you to deliver a website that drives growth.",
  },
  {
  question: "What is your project turnaround time?",
  answer: "Project turnaround time depends on the complexity and scope of the project. We strive to deliver high-quality results within the agreed timeline, ensuring client satisfaction.",
  },
  ];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Frequently Asked Questions
        </h1>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button type='button' onClick={() => handleToggle(index)} className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  {faq.question}
                </h1>
                <span className="text-white bg-sky-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={openIndex === index ?  'M18 12H6':'M12 4.5v15m7.5-7.5h-15' }
                    />
                  </svg>
          
                </span>
              </button>
              <hr className="border-gray-200 dark:border-gray-700" />
              {openIndex === index && (
                <p className={`p-8 text-sm text-gray-500 dark:text-gray-300`}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;