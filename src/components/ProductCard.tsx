import React, { useState } from 'react';
import { Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  spiceLevel: string;
  rating: number;
  reviews: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const spiceLevelColors = {
    mild: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hot: 'bg-orange-100 text-orange-800',
    'extra-hot': 'bg-red-100 text-red-800'
  };

  const categoryColors = {
    veg: 'bg-green-100 text-green-800',
    'non-veg': 'bg-red-100 text-red-800'
  };

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to Cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            -{discountPercentage}%
          </div>
        )}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${categoryColors[product.category as keyof typeof categoryColors]}`}>
          {product.category === 'veg' ? '🌱 Veg' : '🍖 Non-Veg'}
        </div>
        <div className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${spiceLevelColors[product.spiceLevel as keyof typeof spiceLevelColors]}`}>
          🌶️ {product.spiceLevel.replace('-', ' ')}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Quantity:</span>
          <div className="flex items-center space-x-2">
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(1)}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        </div>
        
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:bg-orange-500 group-hover:text-white transition-colors"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add ₹{product.price * quantity} to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
