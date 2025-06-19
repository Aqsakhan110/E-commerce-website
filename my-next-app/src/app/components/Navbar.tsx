"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showFirst, setShowFirst] = useState(true);

  // Banner animation ke liye interval
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Menu items
  const menuItems = [
    { label: "HOME", link: "/" },
    { label: "NEW ARRIVALS", link: "/new-arrivals" },
    { label: "WOMEN", link: "/women" },
    { label: "MEN", link: "/men" },
    { label: "BOYS & GIRLS", link: "/boys-girls" },
    { label: "FRAGRANCES", link: "/fragrances" },
    { label: "ELECTRONICS", link: "/electronics" },
    { label: "MAKEUP", link: "/makeup" },
    { label: "SKINCARE", link: "/skincare" },
    { label: "ABOUT", link: "/about" },
    { label: "CONTACT US", link: "/contact" },
  ];

  // Dropdown categories ke items ke saath URLs
  const dropdownCategories: Record<string, any> = {
    "NEW ARRIVALS": {
      Women: [
        { name: "Stitched Collection", link: "/new-arrivals/women/stitched-collection" },
        { name: "Kurti Collection", link: "/new-arrivals/women/kurti-collection" },
        { name: "Unstitched Collection", link: "/new-arrivals/women/unstitched-collection" },
        { name: "Bottomwear Collection", link: "/new-arrivals/women/bottomwear" },
      ],
      Men: [
        { name: "Kameez Shalwar", link: "/new-arrivals/men/kameez-shalwar" },
        { name: "Kurta", link: "/new-arrivals/men/kurta" },
        { name: "Waistcoat", link: "/new-arrivals/men/waistcoat" },
      ],
      "Boys & Girls": [
        { name: "Teen Girls", link: "/new-arrivals/boys-girls/teen-girls" },
        { name: "Teen Boys", link: "/new-arrivals/boys-girls/teen-boys" },
        { name: "Kid Girls", link: "/new-arrivals/boys-girls/kid-girls" },
        { name: "Kid Boys", link: "/new-arrivals/boys-girls/kid-boys" },
        { name: "Infant Girls", link: "/new-arrivals/boys-girls/infant-girls" },
        { name: "Infant Boys", link: "/new-arrivals/boys-girls/infant-boys" },
      ],
      Electronics: [
        { name: "Headphones", link: "/new-arrivals/electronics/headphones" },
        { name: "Smartphones", link: "/new-arrivals/electronics/smartphones" },
        { name: "Laptops", link: "/new-arrivals/electronics/laptops" },
      ],
      Makeup: [
        { name: "Lipstick", link: "/new-arrivals/makeup/lipstick" },
        { name: "Foundation", link: "/new-arrivals/makeup/foundation" },
        { name: "Eyeshadow", link: "/new-arrivals/makeup/eyeshadow" },
      ],
    },
    WOMEN: {
      Clothing: [
        { name: "Sarees", link: "/women/clothing/sarees" },
        { name: "Kurtas", link: "/women/clothing/kurtas" },
        { name: "Dresses", link: "/women/clothing/dresses" },
        { name: "Lehengas", link: "/women/clothing/lehengas" },
      ],
      Accessories: [
        { name: "Handbags", link: "/women/accessories/handbags" },
        { name: "Jewelry", link: "/women/accessories/jewelry" },
        { name: "Scarves", link: "/women/accessories/scarves" },
      ],
    },
    MEN: {
      Clothing: [
        { name: "Shirts", link: "/men/clothing/shirts" },
        { name: "Trousers", link: "/men/clothing/trousers" },
        { name: "Jackets", link: "/men/clothing/jackets" },
        { name: "Kurta Pajama", link: "/men/clothing/kurta-pajama" },
      ],
      Accessories: [
        { name: "Watches", link: "/men/accessories/watches" },
        { name: "Wallets", link: "/men/accessories/wallets" },
        { name: "Shoes", link: "/men/accessories/shoes" },
      ],
    },
    "BOYS & GIRLS": {
      Kids: [
        { name: "Teen Girls", link: "/boys-girls/kids/teen-girls" },
        { name: "Teen Boys", link: "/boys-girls/kids/teen-boys" },
        { name: "Kid Girls", link: "/boys-girls/kids/kid-girls" },
        { name: "Kid Boys", link: "/boys-girls/kids/kid-boys" },
        { name: "Infants", link: "/boys-girls/kids/infants" },
      ],
    },
    FRAGRANCES: {
      Types: [
        { name: "Perfume", link: "/fragrances/perfume" },
        { name: "Attars", link: "/fragrances/attars" },
        { name: "Body Spray", link: "/fragrances/body-spray" },
        { name: "Gift Sets", link: "/fragrances/gift-sets" },
      ],
    },
    ELECTRONICS: {
      Devices: [
        { name: "Mobiles", link: "/electronics/mobiles" },
        { name: "Laptops", link: "/electronics/laptops" },
        { name: "Smartwatches", link: "/electronics/smartwatches" },
        { name: "Headphones", link: "/electronics/headphones" },
      ],
    },
    MAKEUP: {
      Products: [
        { name: "Lipstick", link: "/makeup/lipstick" },
        { name: "Foundation", link: "/makeup/foundation" },
        { name: "Blush", link: "/makeup/blush" },
        { name: "Highlighter", link: "/makeup/highlighter" },
        { name: "Concealer", link: "/makeup/concealer" },
      ],
    },
    SKINCARE: {
      Products: [
        { name: "Moisturizers", link: "/skincare/moisturizer" },
        { name: "Serums", link: "/skincare/serum" },
        { name: "Cleansers", link: "/skincare/cleanser" },
        { name: "Sunscreens", link: "/skincare/sunscreen" },
      ],
    },
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div
        className="fixed top-0 w-full z-50 h-10 flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #00aaff, #003366)",
        }}
      >
        {showFirst ? (
          <div className="text-white font-semibold animate-slideInLeft whitespace-nowrap">
            Mid Season Sale Up To 40% Off
          </div>
        ) : (
          <div className="text-white font-semibold animate-slideInRight whitespace-nowrap">
            PKR 199 Shipping Charges & PKR 1 POS Charges are available on all orders
          </div>
        )}
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }}></div>

      {/* Logo, Search, Icons */}
      <div className="w-full bg-white py-3 px-4 flex flex-wrap items-center justify-between shadow-md">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 tracking-wide">
          GIGGLE MART
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-4 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-black text-sm"></i>
          </div>
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{
              color: "#1f2937",
              caretColor: "#1f2937",
            }}
          />
        </div>

        {/* Icons */}
        <div className="flex space-x-5 items-center text-gray-800">
          <Link href="/track" className="hover:text-black text-xl" aria-label="Tracking Info">
            <i className="fas fa-truck"></i>
          </Link>
          <Link href="/signup" className="hover:text-black text-xl" aria-label="Signup">
            <i className="fas fa-user"></i>
          </Link>
          <Link href="/cart" className="relative hover:text-black text-2xl" aria-label="Cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
              3
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="w-full shadow-md" style={{ background: "linear-gradient(135deg, #00aaff, #003366)" }}>
        <div className="flex px-4 py-3 justify-start space-x-4 flex-wrap">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.link}
                className="px-3 py-2 font-semibold rounded flex items-center cursor-pointer text-white hover:text-gray-300 transition-colors duration-200"
              >
                {item.label}
              </Link>
              {/* Dropdown */}
              {activeDropdown === item.label && dropdownCategories[item.label] && (
                <div
                  className={`absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg flex ${
                    item.label === "MAKEUP" ? "p-6 flex-row min-w-[650px]" : "p-4 flex-wrap"
                  } gap-6 w-max z-50`}
                >
                  {typeof dropdownCategories[item.label] === "object" &&
                  !Array.isArray(dropdownCategories[item.label]) ? (
                    Object.entries(dropdownCategories[item.label] as Record<string, { name: string; link: string }[]>).map(
                      ([section, items]) => (
                        <div key={section} className="w-[200px]">
                          <h4 className="font-semibold mb-2">{section}</h4>
                          <ul className="space-y-1 text-sm">
                            {items.map((subItem, i) => (
                              <li key={i} className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer">
                                <Link href={subItem.link} className="block">
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )
                  ) : (
                    <div className="w-[200px]">
                      <ul className="space-y-1 text-sm">
                        {(dropdownCategories[item.label] as { name: string; link: string }[]).map((subItem, i) => (
                          <li key={i} className="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer">
                            <Link href={subItem.link} className="block">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Banner animation styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-in-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}