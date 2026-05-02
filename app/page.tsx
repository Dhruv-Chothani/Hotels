import HeroSection from '@/components/common/HeroSection';
import SearchBar from '@/components/common/SearchBar';
import FeaturedHotels from '@/components/home/FeaturedHotels';
import Gallery from '@/components/home/Gallery';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Discover Luxury Stays"
        subtitle="Explore the world's finest hotels and resorts"
        backgroundImage="/images/hero-luxury-hotel.jpg"
        height="large"
      >
        <div className="w-full max-w-md px-4">
          <SearchBar />
        </div>
      </HeroSection>

      {/* Featured Hotels */}
      <FeaturedHotels />

      {/* Gallery */}
      <Gallery />

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
