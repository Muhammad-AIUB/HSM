import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import AboutSection from "@/components/Homepage/AboutSection";

import { AnimatedTestimonialsDemo } from "@/components/Homepage/Testimonials/Testimonials";
import Youtube from "@/components/Homepage/Youtube/Youtube";

import ResourcesSection from "@/components/Homepage/ResourcesSection";
import NewsNewsletterSection from "@/components/Homepage/NewsNewsletterSection";
import BlogsInterviewsSection from "@/components/Homepage/BlogsInterviewsSection";

import ContactSection from "@/components/Homepage/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <ResourcesSection />

      <NewsNewsletterSection />

      <BlogsInterviewsSection />

      <Youtube />

      <AnimatedTestimonialsDemo />

      <ContactSection />
    </>
  );
}
