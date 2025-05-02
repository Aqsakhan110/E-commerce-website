// components/Footer.tsx
"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ShopZone</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for all your shopping needs. Quality products, 
              competitive prices, and excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-400 hover:text-white transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-gray-400 hover:text-white transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Commerce Street, Shopville, SV 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <a href="mailto:support@shopzone.com" className="text-gray-400 hover:text-white transition-colors">
                  support@shopzone.com
                </a>
              </li>
            </ul>
            
            {/* Newsletter subscription */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment methods */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-wrap justify-center space-x-4">
            <img src="/api/placeholder/50/30" alt="Visa" className="h-8" />
            <img src="/api/placeholder/50/30" alt="Mastercard" className="h-8" />
            <img src="/api/placeholder/50/30" alt="American Express" className="h-8" />
            <img src="/api/placeholder/50/30" alt="PayPal" className="h-8" />
            <img src="/api/placeholder/50/30" alt="Apple Pay" className="h-8" />
            <img src="/api/placeholder/50/30" alt="Google Pay" className="h-8" />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>© {new Date().getFullYear()} ShopZone. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ for a great shopping experience</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;