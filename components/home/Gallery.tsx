'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    image: '/images/luxury-resort.jpg',
    title: 'Tropical Paradise',
  },
  {
    id: 2,
    image: '/images/hotel-room-suite.jpg',
    title: 'Luxurious Rooms',
  },
  {
    id: 3,
    image: '/images/spa-wellness.jpg',
    title: 'Wellness & Spa',
  },
  {
    id: 4,
    image: '/images/fine-dining.jpg',
    title: 'Fine Dining',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Experience Our Luxury
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the stunning beauty and comfort of our partner hotels worldwide
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:row-span-2 rounded-xl overflow-hidden card-hover h-64 md:h-full min-h-96"
          >
            <Image
              src={galleryImages[0].image}
              alt={galleryImages[0].title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">{galleryImages[0].title}</h3>
            </div>
          </motion.div>

          {/* Right column - 2 rows */}
          <div className="space-y-6">
            {galleryImages.slice(1, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                className="rounded-xl overflow-hidden card-hover h-48"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors flex items-end p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-xl overflow-hidden card-hover h-56"
        >
          <Image
            src={galleryImages[3].image}
            alt={galleryImages[3].title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors flex items-end p-6">
            <h3 className="text-white text-2xl font-bold">{galleryImages[3].title}</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
