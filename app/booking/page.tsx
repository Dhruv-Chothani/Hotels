'use client';

import { useState } from 'react';
import HeroSection from '@/components/common/HeroSection';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hotel: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
    specialRequests: '',
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setBookingConfirmed(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Calculate night count
  const checkInDate = new Date(formData.checkIn);
  const checkOutDate = new Date(formData.checkOut);
  const nights = Math.max(
    0,
    Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
  );
  const pricePerNight = 250;
  const totalPrice = nights * pricePerNight * parseInt(formData.rooms);

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-white">
        <HeroSection
          title="Booking"
          subtitle="Complete your reservation"
          backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop"
          height="small"
        />

        <div className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-primary mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your booking has been confirmed. A confirmation email will be sent to{' '}
                <span className="font-bold text-primary">{formData.email}</span>
              </p>

              {/* Booking Summary */}
              <div className="bg-secondary p-8 rounded-xl border border-border mb-8 text-left">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Booking Details
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guest:</span>
                    <span className="font-semibold text-primary">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Check-in:</span>
                    <span className="font-semibold text-primary">
                      {formData.checkIn}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Check-out:</span>
                    <span className="font-semibold text-primary">
                      {formData.checkOut}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rooms:</span>
                    <span className="font-semibold text-primary">
                      {formData.rooms}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-4">
                    <span className="text-muted-foreground">Total Price:</span>
                    <span className="text-2xl font-bold text-accent">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Link href="/">
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all button-hover">
                    Back to Home
                  </button>
                </Link>
                <Link href="/hotels">
                  <button className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-border transition-all border border-border">
                    Browse More Hotels
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Complete Your Booking"
        subtitle="Secure your luxury stay in just a few steps"
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop"
        height="small"
      />

      {/* Booking Form */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      s <= step
                        ? 'bg-accent text-primary'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {s}
                  </motion.div>
                  {s < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        s < step ? 'bg-accent' : 'bg-secondary'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Hotel</span>
              <span>Personal Info</span>
              <span>Details</span>
              <span>Review</span>
            </div>
          </div>

          {/* Form Content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-secondary p-8 rounded-xl border border-border mb-8"
          >
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Select Your Hotel
                  </h2>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Hotel Name
                    </label>
                    <select
                      name="hotel"
                      value={formData.hotel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                    >
                      <option value="">Choose a hotel...</option>
                      <option value="Luxury Oceanfront Resort">
                        Luxury Oceanfront Resort
                      </option>
                      <option value="Mountain Retreat Wellness">
                        Mountain Retreat Wellness
                      </option>
                      <option value="Urban Elegance Downtown">
                        Urban Elegance Downtown
                      </option>
                      <option value="Tropical Paradise Island">
                        Tropical Paradise Island
                      </option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Your Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Booking Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Number of Rooms
                      </label>
                      <select
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-accent resize-none"
                      rows={4}
                      placeholder="Any special requirements or requests?"
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Review Your Booking
                  </h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="text-muted-foreground">Hotel:</span>
                      <span className="font-semibold text-primary">
                        {formData.hotel}
                      </span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="text-muted-foreground">Guest:</span>
                      <span className="font-semibold text-primary">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="text-muted-foreground">Dates:</span>
                      <span className="font-semibold text-primary">
                        {formData.checkIn} to {formData.checkOut}
                      </span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="text-muted-foreground">Rooms:</span>
                      <span className="font-semibold text-primary">
                        {formData.rooms}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-bold bg-white p-4 rounded-lg border border-border">
                      <span className="text-primary">Total:</span>
                      <span className="text-accent">${totalPrice}</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                    <p className="text-sm text-blue-800">
                      ✓ Your payment information is secure and encrypted
                    </p>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="px-6 py-2 bg-secondary text-primary font-semibold rounded-lg hover:bg-border transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all button-hover"
                >
                  {step === 4 ? 'Confirm Booking' : 'Next'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
