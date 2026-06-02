"use client";

import Link from "next/link";
import Image from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn("group/card", className)}>
      {/* Double-Bezel Card Architecture with lift effect */}
      <div className="card-bezel transition-all duration-500 ease-out group-hover/card:shadow-2xl group-hover/card:shadow-forest-900/10 group-hover/card:-translate-y-2">
        <div className="card-bezel-inner">
          {/* Image Container */}
          <Link href={`/shop/${product.slug}`} className="relative block aspect-product overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-all duration-700 ease-out group-hover/card:scale-110 group-hover/card:brightness-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            {/* Badges with stagger animation */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isBestseller && (
                <Badge variant="gold" className="text-[10px] shadow-lg shadow-gold-500/20 group-hover/card:animate-slide-in-left">
                  Bestseller
                </Badge>
              )}
              {product.isNew && (
                <Badge variant="accent" className="text-[10px] shadow-lg group-hover/card:animate-slide-in-left" style={{ animationDelay: "100ms" }}>
                  New
                </Badge>
              )}
              {product.originalPrice && (
                <Badge variant="success" className="text-[10px] shadow-lg group-hover/card:animate-slide-in-left" style={{ animationDelay: "200ms" }}>
                  Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </Badge>
              )}
            </div>
            {/* Quick Add Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover/card:translate-y-0 transition-all duration-500 ease-out bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <Button
                size="sm"
                className="w-full bg-white text-forest-800 hover:bg-earth-100 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Quick Add
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-50" />
              </Button>
            </div>
          </Link>

          {/* Content */}
          <div className="p-4">
            {/* Category with hover slide */}
            <span className="text-xs font-medium text-forest-600 uppercase tracking-wider group-hover/card:translate-x-1 transition-transform duration-300 inline-block">
              {product.category}
            </span>

            {/* Title with enhanced hover */}
            <Link href={`/shop/${product.slug}`} className="block mt-1 group/title">
              <h3 className="font-display font-semibold text-lg text-earth-900 group-hover/title:text-forest-700 transition-colors line-clamp-1 flex items-center gap-1">
                {product.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300 text-forest-600" />
              </h3>
            </Link>

            {/* Rating with micro-interaction */}
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3.5 h-3.5 transition-all duration-300",
                      i < Math.floor(product.rating)
                        ? "text-gold-400 fill-gold-400 group-hover/card:scale-110"
                        : "text-earth-300"
                    )}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <span className="text-xs text-earth-600 group-hover/card:text-forest-600 transition-colors">
                {product.rating} ({product.reviewCount.toLocaleString()})
              </span>
            </div>

            {/* Price with highlight effect */}
            <div className="flex items-center gap-2 mt-3">
              <span className="font-semibold text-lg text-forest-700 group-hover/card:text-forest-600 transition-colors">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-earth-500 line-through group-hover/card:text-earth-400 transition-colors">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
