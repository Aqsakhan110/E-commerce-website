// pages/about.tsx
'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Your Shop</title>
        <meta
          name="description"
          content="Learn about our company, values, team, and mission at Your Shop."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section - Now Dark Blue */}
      <motion.div
        className="relative text-center text-white py-20 mb-12 bg-blue-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Dedicated to providing quality products and exceptional customer service since 2010
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Who We Are</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex-1 min-w-[300px]">
              <p className="mb-4">
                Founded in 2010, Your Shop began with a simple mission: to provide high-quality products
                at affordable prices while delivering exceptional customer service...
              </p>
              <p className="mb-4">
                Our journey has been defined by a commitment to quality, innovation, and putting our
                customers first...
              </p>
              <p>
                As we've grown, our vision has remained the same: to create a shopping experience that
                combines convenience with personal touch...
              </p>
            </div>
            <div className="flex-1 min-w-[300px] h-[400px] relative rounded-lg overflow-hidden">
              <Image
                src="/about-story.jpg"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Our Values Section - from LEFT */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              {
                icon: '✨',
                title: 'Quality',
                desc: 'We never compromise on quality...'
              },
              {
                icon: '👥',
                title: 'Customer First',
                desc: 'Your satisfaction is our priority...'
              },
              {
                icon: '🌱',
                title: 'Sustainability',
                desc: 'We are dedicated to reducing our environmental impact...'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                className="flex-1 min-w-[250px] max-w-[350px] p-8 bg-blue-50 rounded-lg text-center shadow-md cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4 text-blue-500">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Meet Our Team Section - from RIGHT */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'Inayatullah Samoo', role: 'Founder & CEO', img: '/team/ceo.jpg' },
              { name: 'Shehneela Khadim', role: 'Chief Technology Officer', img: '/team/cto.jpg' },
              { name: 'Aqsa Khattak', role: 'Customer Service Manager', img: '/team/customer-service.jpg' }
            ].map((member, i) => (
              <motion.div
                key={i}
                className="flex-1 min-w-[250px] max-w-[300px] text-center cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-[200px] h-[200px] mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-blue-600">{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section - from LEFT */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Get In Touch</h2>
          <div className="flex flex-wrap gap-8">
            {[
              {
                icon: '📍',
                title: 'Location',
                lines: ['123 Shopping Avenue', 'Commerce City, CA 90210']
              },
              {
                icon: '📱',
                title: 'Contact',
                lines: ['Email: info@yourshop.com', 'Phone: (123) 456-7890']
              },
              {
                icon: '⏰',
                title: 'Hours',
                lines: ['Online: 24/7', 'Support: Mon-Fri, 9AM-6PM']
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex-1 min-w-[300px] p-8 bg-blue-50 rounded-lg shadow-md cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-4 text-blue-500">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default About;
