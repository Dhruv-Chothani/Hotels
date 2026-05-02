'use client';

import { useState, useMemo } from 'react';
import HeroSection from '@/components/common/HeroSection';
import HotelCard from '@/components/hotels/HotelCard';
import FilterSidebar from '@/components/hotels/FilterSidebar';
import { HOTELS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function HotelsPage() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);
  const [minRating, setMinRating] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState('');

  const filteredHotels = useMemo(() => {
    return HOTELS.filter((hotel) => {
      const matchesPrice =
        hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const matchesRating = minRating === 0 || hotel.rating >= minRating;
      const matchesLocation =
        !selectedLocation || hotel.location === selectedLocation;

      return matchesPrice && matchesRating && matchesLocation;
    });
  }, [priceRange, minRating, selectedLocation]);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Explore Our Hotels"
        subtitle="Find your perfect luxury destination"
        backgroundImage="/images/hotel-oceanfront-maldives.jpg"
        height="medium"
      />

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar
                onPriceChange={setPriceRange}
                onRatingChange={setMinRating}
                onLocationChange={setSelectedLocation}
              />
            </div>

            {/* Hotels Grid */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <p className="text-muted-foreground">
                  Showing <span className="font-bold text-primary">{filteredHotels.length}</span> hotels
                </p>
              </motion.div>

              {filteredHotels.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {filteredHotels.map((hotel, index) => (
                    <HotelCard
                      key={hotel.id}
                      {...hotel}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-16"
                >
                  <p className="text-xl text-muted-foreground mb-4">
                    No hotels found matching your filters.
                  </p>
                  <button
                    onClick={() => {
                      setPriceRange([0, 600]);
                      setMinRating(0);
                      setSelectedLocation('');
                    }}
                    className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
