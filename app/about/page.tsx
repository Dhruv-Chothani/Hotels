'use client';

import HeroSection from '@/components/common/HeroSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About StayEase"
        subtitle="Your trusted partner in luxury travel"
        backgroundImage="/images/about-company.jpg"
        height="medium"
      />

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6 text-balance">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded in 2015, StayEase began with a simple mission: to make luxury
              travel accessible to everyone. We believed that exceptional
              accommodations and unforgettable experiences shouldn&apos;t be limited to
              those with insider connections or unlimited budgets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we&apos;ve curated partnerships with over 5,000 premium hotels and
              resorts across 150 countries. Our platform connects millions of travelers
              with their dream destinations, and we&apos;re proud to have helped create
              countless cherished memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4 text-balance">
              Our Mission & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-border"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower travelers around the world to discover and experience
                exceptional luxury hotels and resorts, while providing transparent
                pricing, reliable customer support, and unforgettable travel memories.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-border"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ Integrity in every interaction</li>
                <li>✓ Excellence in customer service</li>
                <li>✓ Innovation in travel technology</li>
                <li>✓ Sustainability and responsibility</li>
                <li>✓ Diversity and inclusion</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4 text-balance">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate professionals dedicated to your exceptional travel experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: 'Hotels Worldwide', value: '5,000+' },
              { label: 'Countries Covered', value: '150+' },
              { label: 'Happy Travelers', value: '2M+' },
              { label: 'Years of Service', value: '9+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
