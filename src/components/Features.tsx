import React from 'react';
import { Truck, Shield, Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Fast Delivery",
      description: "Free shipping on orders over $25. Get your pickles delivered fresh to your doorstep."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality Guarantee",
      description: "100% authentic ingredients and traditional recipes. Money-back guarantee if not satisfied."
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: "Customer Rated",
      description: "Highly rated by thousands of customers. Read reviews and share your experience."
    },
    {
      icon: <User className="w-8 h-8 text-green-600" />,
      title: "24/7 Support",
      description: "Our customer service team is always here to help with your orders and questions."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose PickleCraft?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering the highest quality pickles with exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
