"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Leaf, Star, Truck, Droplets, Wheat, Award } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add entrance animation classes after mount
    const timer = setTimeout(() => {
      heroRef.current?.classList.add("hero-animated");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-100 via-earth-50 to-forest-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-forest-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 section-container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="hero-badge opacity-0 translate-y-4 transition-all duration-700 delay-100">
              <Badge variant="gold" className="px-4 py-1.5 text-xs font-semibold">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                Farm to Home • Direct from Nature
              </Badge>
            </div>

            {/* Headline */}
            <div className="hero-headline opacity-0 translate-y-4 transition-all duration-700 delay-200">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-earth-900 leading-[1.1]">
                Nature&apos;s Purest{" "}
                <span className="text-gradient-forest">Harvest</span>
                <br />
                From Trusted Farms
              </h1>
            </div>

            {/* Description */}
            <div className="hero-description opacity-0 translate-y-4 transition-all duration-700 delay-300">
              <p className="text-lg text-earth-700 leading-relaxed max-w-lg">
                Authentic farm products delivered to your doorstep. Raw forest honey, 
                traditional A2 ghee, cold-pressed oils, and organic millets - 
                sourced directly from farmers who honor nature&apos;s wisdom.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="hero-trust opacity-0 translate-y-4 transition-all duration-700 delay-400 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-earth-700">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <span className="font-medium">4.8/5</span>
                <span className="text-earth-500">(12,000+ reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-earth-700">
                <Truck className="w-4 h-4 text-forest-600" />
                <span>Free shipping over ₹500</span>
              </div>
            </div>

            {/* CTAs - Enhanced visual hierarchy */}
            <div className="hero-cta opacity-0 translate-y-4 transition-all duration-700 delay-500 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                showArrow 
                asChild
                className="shadow-xl shadow-forest-600/20 hover:shadow-2xl hover:shadow-forest-600/30 transition-shadow duration-300"
              >
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                asChild
                className="backdrop-blur-sm"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>

            {/* Trust badges row */}
            <div className="hero-trust-badges opacity-0 translate-y-4 transition-all duration-700 delay-600 flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-earth-600">
                <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-forest-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-earth-600">
                <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-forest-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Lab Tested</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-earth-600">
                <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-forest-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>200+ Farmers</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative animate-scale-in">
            <div className="relative aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:max-w-none">
              {/* Main Image */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-forest-900/10">
                <Image
                  src="/Home banner image.png"
                  alt="Premium organic farm products from Vanhyam"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-xl p-3 shadow-xl shadow-earth-900/10 animate-fade-in delay-700">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-xs text-earth-500">Farm Direct</p>
                    <p className="text-sm font-semibold text-earth-900">Sourced</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl p-3 shadow-xl shadow-earth-900/10 animate-fade-in delay-900">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs text-earth-500">100% Pure</p>
                    <p className="text-sm font-semibold text-earth-900">Natural</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entrance Animation Styles */}
      <style jsx>{`
        .hero-animated .hero-badge,
        .hero-animated .hero-headline,
        .hero-animated .hero-description,
        .hero-animated .hero-trust,
        .hero-animated .hero-cta,
        .hero-animated .hero-trust-badges {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
