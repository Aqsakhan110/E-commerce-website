"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', subject: '', message: '' };

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
    if (!/^\+?\d{1,4}[\d\-\(\) ]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      valid = false;
    }
    if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
      valid = false;
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 3000);
    setErrors({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Contact Us | GiggleMart</title>
      </Head>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
          <p className="text-base text-gray-600">
            Questions? Feedback? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex md:items-stretch">

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/3 bg-indigo-600 text-white p-4 space-y-4"
            >
              <h2 className="text-xl font-bold">Contact Info</h2>

              <div className="space-y-3">
                <div className="flex items-start">
                  <FiMail className="text-lg mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold text-sm">Email</h3>
                    <p className="text-sm">support@gigglemart.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="text-lg mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold text-sm">Phone</h3>
                    <p className="text-sm">+92 300 1234567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="text-lg mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold text-sm">Address</h3>
                    <p className="text-sm">123 Commerce St, Business City</p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="font-semibold text-sm mb-1">Subscribe</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-1.5 rounded-l-lg text-sm focus:outline-none"
                  />
                  <button className="bg-white text-indigo-600 px-3 rounded-r-lg text-sm">Subscribe</button>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-2/3 p-4"
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}
                  className="text-center py-6"
                >
                  <FiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2 animate-bounce" />
                  <h3 className="text-xl font-semibold mb-1">Thank You!</h3>
                  <p className="text-sm">Your message has been sent.</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <div>
                      <label htmlFor="name" className="block text-xs font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium mb-1">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-xs font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500"
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="md:col-span-2 w-full bg-indigo-600 text-white py-2 text-sm rounded-lg font-medium flex items-center justify-center hover:bg-indigo-700 transition disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        ) : (
                          <FiSend className="mr-2 text-sm" />
                        )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>

          {/* FAQ Section */}
          <section className="mt-12 px-10 pb-10">
            <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              <details className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">What is GiggleMart?</summary>
                <p className="mt-2 text-gray-600">GiggleMart is a one-stop online marketplace offering a curated selection of electronics, fashion, home décor and more.</p>
              </details>
              <details className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">How long does shipping take?</summary>
                <p className="mt-2 text-gray-600">Most orders ship within 1–2 business days and arrive within 3–5 days.</p>
              </details>
              <details className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">Can I track my order?</summary>
                <p className="mt-2 text-gray-600">Yes! After shipping, you’ll receive a tracking number via email.</p>
              </details>
            </div>
          </section>

          {/* Map & Socials */}
          <div className="w-full mt-12">
            <iframe
              width="100%"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42229.354385687875!2d68.80213551244279!3d24.653509093977885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394dd9c126445483%3A0x65e0831b1b5d1246!2sBadin%2C%20Pakistan!5e1!3m2!1sen!2s!4v1746103709562!5m2!1sen!2s"
              className="border-0 rounded-lg"
            ></iframe>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6 mt-8 pb-10">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="w-8 h-8 text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="w-8 h-8 text-pink-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter className="w-8 h-8 text-blue-400" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
