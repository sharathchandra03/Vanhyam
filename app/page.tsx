import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Hero,
  FeaturedProducts,
  WhyChooseUs,
  Testimonials,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Vanhyam | Premium Organic Farm Products Direct from Nature",
  description: "Authentic farm-to-home organic products. Raw forest honey, A2 Bilona ghee, cold pressed oils, organic millets. Sourced directly from trusted Indian farmers.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
