"use client";

import Image from "next/image";
import { benefits, stats } from "@/lib/data";
import { Leaf, Shield, Heart, Recycle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Shield,
  Heart,
  Recycle,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-forest-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-800/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <span className="eyebrow mb-4 inline-flex bg-forest-800 text-forest-200">
              Why Vanhyam
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
              Farm Fresh Goodness,{" "}
              <span className="text-gold-400">Delivered with Trust</span>
            </h2>
            <p className="text-forest-200 text-lg leading-relaxed mb-8">
              We believe that the purest nourishment comes directly from nature. Every Vanhyam product 
              is sourced from trusted farmers and traditional producers who follow time-honored methods. 
              From forest honey to Bilona ghee, experience authentic farm products that honor Indian heritage.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = iconMap[benefit.icon] || Leaf;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-forest-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image + Stats */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <Image
                src="/Why Vanhyam.png"
                alt="Why choose Vanhyam organic farm products"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-2xl sm:text-3xl font-semibold text-forest-700">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-earth-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
