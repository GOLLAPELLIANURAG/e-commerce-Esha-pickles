import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSpiceLevel: string;
  priceRange: number[];
  onCategoryChange: (category: string) => void;
  onSpiceLevelChange: (spiceLevel: string) => void;
  onPriceRangeChange: (range: number[]) => void;
}

const ProductFilters = ({
  selectedCategory,
  selectedSpiceLevel,
  priceRange,
  onCategoryChange,
  onSpiceLevelChange,
  onPriceRangeChange
}: ProductFiltersProps) => {
  const categories = [
    { value: 'all', label: 'All Pickles', icon: '🥒' },
    { value: 'veg', label: 'Vegetarian', icon: '🌱' },
    { value: 'non-veg', label: 'Non-Vegetarian', icon: '🍖' }
  ];

  const spiceLevels = [
    { value: 'all', label: 'All Levels', icon: '🌶️' },
    { value: 'mild', label: 'Mild', icon: '🟢' },
    { value: 'medium', label: 'Medium', icon: '🟡' },
    { value: 'hot', label: 'Hot', icon: '🟠' },
    { value: 'extra-hot', label: 'Extra Hot', icon: '🔴' }
  ];

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Category</h3>
            <div className="grid grid-cols-1 gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(category.value)}
                  className={`justify-start ${
                    selectedCategory === category.value
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Spice Level Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Spice Level</h3>
            <div className="grid grid-cols-1 gap-2">
              {spiceLevels.map((level) => (
                <Button
                  key={level.value}
                  variant={selectedSpiceLevel === level.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => onSpiceLevelChange(level.value)}
                  className={`justify-start ${
                    selectedSpiceLevel === level.value
                      ? 'bg-orange-500 hover:bg-orange-600'
                      : 'hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  <span className="mr-2">{level.icon}</span>
                  {level.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Price Range</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                title="Maximum price" 
              />
              <div className="grid grid-cols-1 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onPriceRangeChange([0, 200])}
                  className="text-xs"
                >
                  Under ₹200
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onPriceRangeChange([200, 400])}
                  className="text-xs"
                >
                  ₹200-₹400
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onPriceRangeChange([400, 1000])}
                  className="text-xs"
                >
                  ₹400+
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
