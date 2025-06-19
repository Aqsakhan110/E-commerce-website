// src/app/components/HeroSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

interface SlideProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgImage: string;
}

interface CategoryProps {
  name: string;
  image: string;
  link: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();

  const slides: SlideProps[] = [
    {
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      buttonText: "Shop Now",
      buttonLink: "/products/summer-collection",
      bgImage: "/slider1.jpg",
    },
    {
      title: "Special Offers",
      subtitle: "Up to 50% off on selected items",
      buttonText: "View Deals",
      buttonLink: "/deals",
      bgImage: "/slider2.jpg",
    },
    {
      title: "New Electronics",
      subtitle: "Latest gadgets and accessories",
      buttonText: "Explore",
      buttonLink: "/categories/electronics",
      bgImage: "/slider3.jpg",
    },
  ];

  const categories: CategoryProps[] = [
    { name: "Electronics", image: "electronics.jpg", link: "/categories/electronics" },
    { name: "Fashion", image: "fashion.jpg", link: "/categories/fashion" },
    { name: "Home & Decor", image: "home.jpg", link: "/categories/home" },
    { name: "Beauty", image: "beauty.jpg", link: "/categories/beauty" },
    { name: "Sports", image: "sports.jpg", link: "/categories/sports" },
  ];

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 3000);
    return () => clearInterval(iv);
  }, [slides.length]);

  return (
    <div>
      {/* ——— Slider ——— */}
      {/* Added min-h-[400px] to ensure visibility */}
      <section className="relative w-full overflow-hidden m-0 p-0 h-screen">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
              i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image src={slide.bgImage} fill className="object-cover" alt={slide.title} />
            {i === currentSlide && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center px-4">
                <Box>
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={slide.title}
                      initial={{ opacity: 0, y: -30, rotate: -5 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, y: 20, rotate: 5 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="text-3xl md:text-5xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.h5
                      key={slide.subtitle}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-lg md:text-xl opacity-90 mb-6"
                    >
                      {slide.subtitle}
                    </motion.h5>
                    <motion.div
                      key={slide.buttonText}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <Link href={slide.buttonLink}>
                        <Button
                          variant="contained"
                          sx={{
                            background: "linear-gradient(135deg, #00aaff, #003366)",
                            color: "#fff",
                            px: 4,
                            py: 1,
                            borderRadius: "25px",
                            fontSize: "1rem",
                            "&:hover": {
                              background: "linear-gradient(135deg, #003366, #00aaff)",
                            },
                          }}
                        >
                          {slide.buttonText}
                        </Button>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </Box>
              </div>
            )}
          </div>
        ))}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ——— Shop by Category ——— */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Shop by Category
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={cat.link}>
                  <div className="h-[300px] bg-white rounded-lg shadow-sm overflow-hidden transition-all group-hover:scale-105 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-blue-300">
                    <Image
                      src={`/${cat.image}`}
                      alt={cat.name}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-3 text-center font-medium text-gray-900">
                    {cat.name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Featured Products ——— */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Products
          </motion.h2>
          <div className="flex justify-center mb-6">
            <a href="/products/featured" className="text-blue-600 hover:text-blue-800 font-medium">
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["product1.jpg", "product2.jpg", "product3.jpg", "product4.jpg"].map((img, index) => (
              <motion.div
                key={img}
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              >
                <div className="group bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 w-full hover:shadow-xl hover:ring-4 hover:ring-blue-300">
                  <div className="overflow-hidden transition-transform group-hover:scale-105">
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                      <Image
                        src={`/${img}`}
                        alt={`Product ${index + 1}`}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-2">Product Name</h3>
                      <span className="text-gray-900 font-bold block">$99.99</span>
                    </div>
                  </div>
                </div>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;