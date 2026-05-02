'use client';

import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface FilterSidebarProps {
  onPriceChange: (range: [number, number]) => void;
  onRatingChange: (rating: number) => void;
  onLocationChange: (location: string) => void;
}

const locations = [
  'Maldives',
  'Switzerland',
  'New York',
  'Bora Bora',
  'Paris',
  'Dubai',
  'Greece',
  'Costa Rica',
];

export default function FilterSidebar({
  onPriceChange,
  onRatingChange,
  onLocationChange,
}: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  const handleLocationChange = (location: string) => {
    const updated = selectedLocations.includes(location)
      ? selectedLocations.filter((l) => l !== location)
      : [...selectedLocations, location];
    setSelectedLocations(updated);
    if (updated.length > 0) {
      onLocationChange(updated[0]);
    } else {
      onLocationChange('');
    }
  };

  return (
    <div className="bg-secondary p-6 rounded-xl border border-border sticky top-20">
      <h3 className="text-lg font-bold text-primary mb-6">Filters</h3>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold text-primary mb-4">Price Range</h4>
        <Slider
          defaultValue={[0, 600]}
          min={0}
          max={600}
          step={10}
          onValueChange={handlePriceChange}
          className="mb-4"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-8">
        <h4 className="font-semibold text-primary mb-4">Rating</h4>
        <div className="space-y-3">
          {[5, 4, 3].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRating === rating}
                onCheckedChange={() => {
                  setSelectedRating(selectedRating === rating ? 0 : rating);
                  onRatingChange(selectedRating === rating ? 0 : rating);
                }}
              />
              <Label
                htmlFor={`rating-${rating}`}
                className="font-medium cursor-pointer"
              >
                {rating}+ Stars
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mb-8">
        <h4 className="font-semibold text-primary mb-4">Location</h4>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {locations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox
                id={`location-${location}`}
                checked={selectedLocations.includes(location)}
                onCheckedChange={() => handleLocationChange(location)}
              />
              <Label
                htmlFor={`location-${location}`}
                className="font-medium cursor-pointer text-sm"
              >
                {location}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          setPriceRange([0, 600]);
          setSelectedRating(0);
          setSelectedLocations([]);
          onPriceChange([0, 600]);
          onRatingChange(0);
          onLocationChange('');
        }}
        className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold text-sm"
      >
        Reset Filters
      </button>
    </div>
  );
}
