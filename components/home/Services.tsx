'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Wifi, Utensils, Dumbbell, Droplet } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Spa & Wellness',
    description: 'Rejuvenate your body and mind with our premium spa services and wellness programs',
    image: '/images/spa-wellness.jpg',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Experience culinary excellence at our world-class restaurants and bars',
    image: '/images/fine-dining.jpg',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art equipment and professional trainers available 24/7',
    image: '/images/hotel-room-suite.jpg',
  },
  {
    icon: Wifi,
    title: 'Business Center',
    description: 'High-speed internet and modern facilities for all your business needs',
    image: '/images/hotel-room-suite.jpg',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-secondary">
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
            World-Class Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enjoy premium amenities designed to make your stay unforgettable
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl overflow-hidden border border-border"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-80">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-6 flex flex-col justify-center w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
