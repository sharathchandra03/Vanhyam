"use client";

import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-earth-100">
      <div className="section-container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 inline-flex">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-earth-900 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-earth-600 text-lg">
            Real stories from real customers who have transformed their skincare routine with Vanhyam.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-earth-md relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-forest-50 flex items-center justify-center">
                <Quote className="w-5 h-5 text-forest-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-earth-700 leading-relaxed mb-6 text-lg font-serif italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Product Tag */}
              <div className="inline-flex items-center px-3 py-1 bg-forest-50 text-forest-700 text-sm rounded-full mb-6">
                Purchased: {testimonial.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-earth-200">
                <div className="w-12 h-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-earth-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-earth-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
