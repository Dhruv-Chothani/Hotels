'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Clock,
  Users,
  MapPin,
  CreditCard,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Your personal data is protected with industry-leading encryption',
  },
  {
    icon: Award,
    title: 'Premium Selection',
    description: 'Carefully curated luxury hotels and resorts worldwide',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service for your peace of mind',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Travel experts ready to help you plan the perfect getaway',
  },
  {
    icon: MapPin,
    title: 'Global Coverage',
    description: 'Hotels in over 150 countries across all continents',
  },
  {
    icon: CreditCard,
    title: 'Best Prices',
    description: 'Guaranteed lowest rates with transparent pricing',
  },
];

export default function WhyChooseUs() {
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
            Why Choose StayEase?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of booking with the world&apos;s most trusted platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-border card-hover"
              >
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
