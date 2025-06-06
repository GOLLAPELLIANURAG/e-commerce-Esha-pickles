import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Authentic
              <span className="text-green-600 block">Andhra</span>
              <span className="text-orange-500">Pickles</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the authentic taste of Andhra Pradesh with Esha Pickles. 
              From spicy non-veg delicacies to traditional vegetarian favorites, 
              crafted with love and delivered fresh to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-200 to-orange-200 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white">🥒</span>
                </div>
                <p className="text-gray-600 text-lg font-medium">Esha Pickles</p>
                <p className="text-gray-500 text-sm">Authentic Andhra Taste</p>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-70 animate-pulse flex items-center justify-center">
              <span className="text-2xl">🌶️</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-70 animate-pulse delay-1000 flex items-center justify-center">
              <span className="text-xl">🥭</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
