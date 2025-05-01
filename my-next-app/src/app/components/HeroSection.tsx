// components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface SlideProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgClass: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const slides: SlideProps[] = [
    {
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      buttonText: "Shop Now",
      buttonLink: "/products/summer-collection",
      bgClass: "bg-gradient-to-r from-blue-400 to-indigo-500"
    },
    {
      title: "Special Offers",
      subtitle: "Up to 50% off on selected items",
      buttonText: "View Deals",
      buttonLink: "/deals",
      bgClass: "bg-gradient-to-r from-pink-500 to-orange-400"
    },
    {
      title: "New Electronics",
      subtitle: "Latest gadgets and accessories",
      buttonText: "Explore",
      buttonLink: "/categories/electronics",
      bgClass: "bg-gradient-to-r from-teal-400 to-emerald-500"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="h-full">
        {slides.map((slide, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${slide.bgClass}`}
          >
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.buttonLink}
                  className="inline-block bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;