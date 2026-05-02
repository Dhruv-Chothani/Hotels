'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { HOTELS, AMENITY_ICONS } from '@/lib/constants';
import * as LucideIcons from 'lucide-react';

interface PageProps {
  params: {
    id: string;
  };
}

export default function HotelDetailsPage({ params }: PageProps) {
  const hotelId = parseInt(params.id);
  const hotel = HOTELS.find((h) => h.id === hotelId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Hotel not found</h1>
          <Link href="/hotels" className="text-accent hover:underline">
            Back to hotels
          </Link>
        </div>
      </div>
    );
  }

  // Generate image variations
  const images = [hotel.image, hotel.image, hotel.image, hotel.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Star;
    return IconComponent as React.ComponentType<{ className?: string }>;
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/hotels" className="hover:text-primary">
              Hotels
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">{hotel.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery & Info */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-6"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`${hotel.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </motion.div>

            {/* Hotel Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-primary mb-2">
                    {hotel.name}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{hotel.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-3 bg-secondary rounded-full hover:bg-border transition-colors"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isWishlisted
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </button>
                  <button className="p-3 bg-secondary rounded-full hover:bg-border transition-colors">
                    <Share2 className="w-6 h-6 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(hotel.rating)
                          ? 'fill-accent text-accent'
                          : 'text-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-bold text-primary">
                  {hotel.rating}
                </span>
                <span className="text-muted-foreground">
                  ({hotel.reviews} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8">
                {hotel.description}
              </p>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity) => {
                    const IconComponent = getIconComponent(
                      AMENITY_ICONS[amenity]
                    );
                    return (
                      <div
                        key={amenity}
                        className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
                      >
                        <IconComponent className="w-5 h-5 text-accent" />
                        <span className="text-primary font-medium">
                          {amenity}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-secondary border border-border rounded-xl p-6 space-y-6">
              {/* Price */}
              <div>
                <p className="text-muted-foreground mb-2">Price per night</p>
                <div className="text-4xl font-bold text-primary">
                  ${hotel.price}
                </div>
              </div>

              {/* Booking Info */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Guests
                  </label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent bg-white">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CTA */}
              <Link href="/booking">
                <button className="w-full px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all button-hover">
                  Book Now
                </button>
              </Link>

              {/* Info */}
              <p className="text-xs text-muted-foreground text-center">
                You won&apos;t be charged yet
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
