import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold">Esha Pickles</h3>
            </div>
            <p className="text-gray-300">
              Authentic Andhra-style pickles crafted with traditional recipes and premium ingredients. 
              Bringing you the taste of heritage with every jar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:csawork065@gmail.com" className="hover:text-white transition-colors">
                  csawork065@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <span>xxxxxxxxxx</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Esha Pickles HQ, Andhra Pradesh, India</span>
              </p>
              <div className="mt-4 p-3 bg-gray-700 rounded-lg">
                <p className="text-sm font-medium text-orange-400">Business Hours:</p>
                <p className="text-sm">Mon-Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-sm">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Esha Pickles. All rights reserved. Made with ❤️ for pickle lovers across India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
