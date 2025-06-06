import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import andhraChickenPickleImg from '@/assets/andhra-chicken-pickle.jpg';
import gonguraMuttonPickleImg from '@/assets/gongura-mutton-pickle.jpg';
import prawnPickleImg from '@/assets/prawn-pickle.jpg';
import spicyMangoPickleImg from '@/assets/spicy-mango-pickle.jpg';
import gonguraPickleImg from '@/assets/gongura-pickle.jpg';
import mixedVegetablePickleImg from '@/assets/mixed-vegetable-pickle.jpg';
import lemonPickleImg from '@/assets/lemon-pickle.jpg';
import garlicPickleImg from '@/assets/garlic-pickle.jpg';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
  {
    id: 1,
    name: "Andhra Chicken Pickle",
    price: 299,
    originalPrice: 350,
    image: andhraChickenPickleImg, // <-- updated
    category: "non-veg",
    spiceLevel: "hot",
    rating: 4.5,
    reviews: 128,
    description: "Authentic Andhra-style chicken pickle with traditional spices and tender chicken pieces"
  },
    {
  id: 2,
  name: "Gongura Mutton Pickle",
  price: 399,
  originalPrice: 450,
  image: gonguraMuttonPickleImg, // <-- updated
  category: "non-veg",
  spiceLevel: "extra-hot",
  rating: 4.7,
  reviews: 89,
  description: "Tangy gongura leaves with succulent mutton pieces in aromatic Andhra spices"
},
    {
  id: 3,
  name: "Prawn Pickle",
  price: 349,
  originalPrice: 400,
  image: prawnPickleImg, // <-- updated
  category: "non-veg",
  spiceLevel: "medium",
  rating: 4.6,
  reviews: 156,
  description: "Fresh prawns marinated in coastal spices for an authentic seafood experience"
},
{
  id: 4,
  name: "Spicy Mango Pickle",
  price: 199,
  originalPrice: 250,
  image: spicyMangoPickleImg, // <-- updated
  category: "veg",
  spiceLevel: "hot",
  rating: 4.4,
  reviews: 94,
  description: "Traditional raw mango pickle with perfect blend of spices and mustard oil"
},
   {
  id: 5,
  name: "Garlic Pickle",
  price: 179,
  originalPrice: 220,
  image: garlicPickleImg, // <-- updated
  category: "veg",
  spiceLevel: "medium",
  rating: 4.3,
  reviews: 76,
  description: "Aromatic garlic cloves pickled in traditional spices with rich flavors"
},
{
  id: 6,
  name: "Lemon Pickle",
  price: 159,
  originalPrice: 200,
  image: lemonPickleImg, // <-- updated
  category: "veg",
  spiceLevel: "mild",
  rating: 4.2,
  reviews: 112,
  description: "Tangy lemon pickle with perfect balance of salt and spices"
},
{
  id: 7,
  name: "Mixed Vegetable Pickle",
  price: 229,
  originalPrice: 280,
  image: mixedVegetablePickleImg, // <-- updated
  category: "veg",
  spiceLevel: "medium",
  rating: 4.5,
  reviews: 83,
  description: "Assorted seasonal vegetables pickled in traditional Andhra style"
},
{
  id: 8,
  name: "Gongura Pickle",
  price: 189,
  originalPrice: 230,
  image: gonguraPickleImg, // <-- updated
  category: "veg",
  spiceLevel: "hot",
  rating: 4.6,
  reviews: 67,
  description: "Tangy gongura leaves pickled with traditional Andhra spices"
}
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const spiceMatch = selectedSpiceLevel === 'all' || product.spiceLevel === selectedSpiceLevel;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && spiceMatch && priceMatch;
  });

  return (
    <section id="products" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Esha Pickles Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our authentic Andhra-style pickles, made with traditional recipes and the finest ingredients. 
            From spicy non-veg delicacies to classic vegetarian favorites.
          </p>
        </div>

        <ProductFilters
          selectedCategory={selectedCategory}
          selectedSpiceLevel={selectedSpiceLevel}
          priceRange={priceRange}
          onCategoryChange={setSelectedCategory}
          onSpiceLevelChange={setSelectedSpiceLevel}
          onPriceRangeChange={setPriceRange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products found matching your filters.</p>
            <Button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSpiceLevel('all');
                setPriceRange([0, 1000]);
              }}
              className="mt-4 bg-green-600 hover:bg-green-700"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
