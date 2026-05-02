'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = () => {
    const params = new URLSearchParams({
      location: location || 'all',
      checkIn: checkIn || '',
      checkOut: checkOut || '',
      guests: guests || '2',
    });
    window.location.href = `/hotels?${params.toString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Location */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-primary mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Where to?"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors bg-white"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full mt-6 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 button-hover"
        >
          <Search className="w-5 h-5" />
          Search Hotels
        </button>
      </div>
    </motion.div>
  );
}
