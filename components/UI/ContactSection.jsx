import React from 'react'

const ContactSection = () => {
  return (
    <section className="py-16">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <form className="mt-8">
        <div className="mb-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <textarea placeholder="Message" className="w-full px-4 py-2 border rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded">Send Message</button>
      </form>
      <div className="mt-8">
        <p>Or reach us at:</p>
        <p>Email: contact@yourcompany.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Your Street, Your City, Your Country</p>
      </div>
    </div>
  </section>
  )
}

export default ContactSection