"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState<boolean>(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set mounted to true after component has mounted
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  // Toggle dropdowns
  const toggleProductsDropdown = useCallback(() => {
    setIsProductsDropdownOpen((prevState) => !prevState);
    if (!isProductsDropdownOpen) setIsCategoriesDropdownOpen(false);
  }, [isProductsDropdownOpen]);

  const toggleCategoriesDropdown = useCallback(() => {
    setIsCategoriesDropdownOpen((prevState) => !prevState);
    if (!isCategoriesDropdownOpen) setIsProductsDropdownOpen(false);
  }, [isCategoriesDropdownOpen]);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setIsProductsDropdownOpen(false);
        setIsCategoriesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            GiggleMart
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={toggleProductsDropdown}
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
                aria-expanded={isProductsDropdownOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Products
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                  <Link href="/products/new-arrivals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    New Arrivals
                  </Link>
                  <Link href="/products/bestsellers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Bestsellers
                  </Link>
                  <Link href="/products/featured" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Featured Products
                  </Link>
                  <Link href="/products/sale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Sale Items
                  </Link>
                  <Link href="/products/all" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-medium">
                    View All Products
                  </Link>
                </div>
              )}
            </div>

            {/* Categories Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={toggleCategoriesDropdown}
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
                aria-expanded={isCategoriesDropdownOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Categories
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCategoriesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                  <Link href="/categories/electronics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Electronics
                  </Link>
                  <Link href="/categories/fashion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Fashion
                  </Link>
                  <Link href="/categories/home-decor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Home & Decor
                  </Link>
                  <Link href="/categories/beauty" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Beauty & Personal Care
                  </Link>
                  <Link href="/categories/sports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Sports & Outdoors
                  </Link>
                </div>
              )}
            </div>

            <Link href="/deals" className="text-gray-600 hover:text-gray-900 font-medium">
              Deals
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Search, Cart, User Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="text-gray-600 hover:text-gray-900 relative">
              <Heart className="h-6 w-6" />
            </Link>

            {/* Cart */}
            <Link href="/cart" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            <Link href="/account" className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-500" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && hasMounted && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="relative flex-1 mr-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <nav>
              <Link href="/" className="block py-2 text-gray-600 hover:bg-blue-50">
                Home
              </Link>
              <Link href="/products" className="block py-2 text-gray-600 hover:bg-blue-50">
                Products
              </Link>
              <Link href="/categories" className="block py-2 text-gray-600 hover:bg-blue-50">
                Categories
              </Link>
              <Link href="/deals" className="block py-2 text-gray-600 hover:bg-blue-50">
                Deals
              </Link>
              <Link href="/about" className="block py-2 text-gray-600 hover:bg-blue-50">
                About
              </Link>
              <Link href="/contact" className="block py-2 text-gray-600 hover:bg-blue-50">
                Contact Us
              </Link>
              <Link href="/wishlist" className="block py-2 text-gray-600 hover:bg-blue-50">
                Wishlist
              </Link>
              <Link href="/cart" className="block py-2 text-gray-600 hover:bg-blue-50">
                Cart
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
