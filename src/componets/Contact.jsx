import React, { useRef } from 'react'
import  { useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service.
    // For this example, we'll just show a success message.
const publicId = import.meta.env.VITE_EMAIL_PUBLIC_ID;
const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateID =import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicId,
      })
      .then(
        () => {
          console.log('SUCCESS!');
           setFormStatus('');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

    setFormStatus('Message sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    // Hide the status message after a few seconds
   
  };
  return (
    <div className=" md:overflow-y-hidden  h-[90vh] bg-black text-white flex items-center justify-center p-4 font-sans">
      <div className="max-w-xl  w-full p-8 rounded-2xl shadow-lg border border-zinc-700 bg-zinc-900">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Contact Info</h1>
        <p className="text-zinc-400 text-sm mb-6">
          Add here your own text.
        </p>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-zinc-500"
              aria-label="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-zinc-500"
              aria-label="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-zinc-500"
            aria-label="Email Address"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-zinc-500 resize-none"
            aria-label="Message"
            required
          ></textarea>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-black bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              SEND MESSAGE
            </button>
            {formStatus && (
              <p className="mt-4 text-center text-green-500 font-medium">
                {formStatus}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
