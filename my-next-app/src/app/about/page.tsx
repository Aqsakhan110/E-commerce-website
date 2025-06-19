"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaUsers,
  FaLeaf,
  FaStar,
  FaLightbulb,
  FaHeart,
  FaChartLine,
} from "react-icons/fa";

const sectionVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const iconVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Section = ({
  children,
  from = "left",
}: {
  children: React.ReactNode;
  from?: "left" | "right";
}) => (
  <motion.section
    initial={from === "left" ? "hiddenLeft" : "hiddenRight"}
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={sectionVariants}
    className="max-w-7xl mx-auto px-4 py-16"
  >
    {children}
  </motion.section>
);

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Who We Are */}
      <Section from="right">
        <motion.h2 className="text-4xl font-bold text-center mb-8 text-blue-800">
          Who We Are
        </motion.h2>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 md:justify-center">
          {/* Text */}
          <p className="text-lg max-w-xl text-center md:text-left">
            At <span className="text-blue-500 font-semibold">GiigleMart</span>, we’re more than a marketplace — we’re a
            movement. Passionate about quality and obsessed with customer satisfaction, our team is here to transform
            your shopping into something delightful, simple, and sustainable.
          </p>

          {/* Image */}
          <div className="w-full max-w-xs relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/whoweare.jpg" // 🔁 Replace with your image in /public
              alt="Who We Are"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section from="left">
        <motion.h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaStar className="text-yellow-400 text-4xl" />,
              title: "Quality",
              desc: "Every product is tested and chosen to meet the highest standards.",
            },
            {
              icon: <FaUsers className="text-blue-500 text-4xl" />,
              title: "Customer First",
              desc: "Our users come first — always. Fast support and friendly care.",
            },
            {
              icon: <FaLeaf className="text-green-500 text-4xl" />,
              title: "Sustainability",
              desc: "We source and ship responsibly to care for our planet.",
            },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center gap-4"
            >
              {val.icon}
              <h3 className="text-xl font-semibold">{val.title}</h3>
              <p>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Impact */}
      <Section from="right">
        <motion.h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
              title: "Innovation",
              desc: "Tech meets retail for a smart and smooth experience.",
            },
            {
              icon: <FaHeart className="text-red-500 text-4xl" />,
              title: "Community",
              desc: "Giving back and building together with our customers.",
            },
            {
              icon: <FaChartLine className="text-indigo-500 text-4xl" />,
              title: "Growth",
              desc: "We help customers and small businesses scale confidently.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center gap-4"
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Meet Our Team */}
      <Section from="right">
        <motion.h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              img: "ceo.jpg",
              title: "CEO",
              name: "Inayatullah Samoon",
              desc: "Visionary leader driving GiigleMart forward with passion and innovation.",
            },
            {
              img: "aqsa.jpg",
              title: "CTO",
              name: "Aqsa Ayub",
              desc: "Technology strategist ensuring our platform is cutting-edge and secure.",
            },
            {
              img: "shehneela.jpg",
              title: "Product Manager",
              name: "Shehneela Khadim",
              desc: "Detail-oriented planner delivering features customers love.",
            },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="w-28 h-28 mx-auto relative mb-4">
                <Image
                  src={`/${member.img}`}
                  alt={member.title}
                  fill
                  className="rounded-full object-cover border-2 border-blue-300 shadow-md"
                />
              </div>
              <p className="italic text-gray-700">{member.desc}</p>
              <p className="mt-2 font-semibold text-blue-600">{member.name}</p>
              <p className="text-sm text-gray-500">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social Media Links */}
      <Section from="left">
        <motion.h2 className="text-4xl font-bold text-center mb-10 text-blue-800">
          Connect With Us
        </motion.h2>
        <div className="flex justify-center gap-6">
          {[
            { icon: <FaFacebook />, color: "text-blue-600", href: "https://facebook.com" },
            { icon: <FaInstagram />, color: "text-pink-500", href: "https://instagram.com" },
            { icon: <FaTwitter />, color: "text-sky-400", href: "https://twitter.com" },
            { icon: <FaYoutube />, color: "text-red-500", href: "https://youtube.com" },
            { icon: <FaLinkedin />, color: "text-blue-700", href: "https://linkedin.com" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`text-3xl ${social.color} transition duration-300`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
