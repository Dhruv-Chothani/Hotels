'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  index?: number;
}

export default function HotelCard({
  id,
  name,
  location,
  price,
  rating,
  reviews,
  image,
  description,
  index = 0,
}: HotelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <Link href={`/hotels/${id}`}>
        <div className="card-hover bg-white rounded-xl overflow-hidden border border-border h-full">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
              ${price}/night
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-2">
              {name}
            </h3>
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? 'fill-accent text-accent'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {rating} ({reviews})
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {description}
            </p>

            {/* Button */}
            <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
