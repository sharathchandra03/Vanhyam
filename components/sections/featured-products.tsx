"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="section-container max-w-7xl mx-auto">
        {/* Section Header with scroll reveal */}
        <div className={cn(
          "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div>
            <span className="eyebrow mb-4 inline-flex">Farm Direct Favorites</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-earth-900">
              Most Loved Products
            </h2>
            <p className="mt-3 text-earth-600 max-w-md">
              Our best-selling farm products, backed by thousands of families who trust Vanhyam for authentic, pure food.
            </p>
          </div>
          <Button 
            variant="outline" 
            showArrow 
            asChild 
            className="self-start sm:self-auto hover:bg-forest-50 transition-colors duration-300"
          >
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>

        {/* Product Grid with staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "transition-all duration-700",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className={cn(
          "mt-10 text-center sm:hidden transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )} style={{ transitionDelay: "500ms" }}>
          <Button variant="outline" showArrow asChild>
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
