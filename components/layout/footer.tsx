"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Youtube, Leaf } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Raw Honey", href: "/shop/honey" },
    { label: "A2 Ghee", href: "/shop/ghee" },
    { label: "Cold Pressed Oils", href: "/shop/oils" },
    { label: "Organic Millets", href: "/shop/millets" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Farm Partners", href: "/farmers" },
    { label: "Our Process", href: "/process" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Blog", href: "/blog" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Track Order", href: "/track" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-forest-800">
        <div className="section-container max-w-7xl mx-auto py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-display font-semibold mb-2">
                Join the Vanhyam Family
              </h3>
              <p className="text-forest-200">
                Subscribe for farm updates, exclusive offers, and recipes using our authentic products.
              </p>
            </div>
            <form className="flex gap-3 w-full max-w-md group">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-forest-800 border-forest-700 text-white placeholder:text-forest-400 focus-visible:ring-gold-400 h-12 transition-all duration-300 focus:bg-forest-750"
              />
              <Button
                type="submit"
                className="bg-gold-500 hover:bg-gold-400 text-forest-900 font-semibold h-12 px-6 whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/20"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-semibold">
                Vanhyam
              </span>
            </Link>
            <p className="text-forest-200 text-sm leading-relaxed mb-6 max-w-xs">
              Premium organic farm products. Direct from trusted farmers to your home. Raw honey, A2 ghee, cold pressed oils, and organic millets.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-forest-300 hover:bg-forest-700 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-forest-300 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-all duration-300 text-sm inline-flex items-center gap-1 group/link"
                  >
                    <span className="w-0 group-hover/link:w-2 h-0.5 bg-gold-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-forest-300 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-all duration-300 text-sm inline-flex items-center gap-1 group/link"
                  >
                    <span className="w-0 group-hover/link:w-2 h-0.5 bg-gold-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-forest-300 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-all duration-300 text-sm inline-flex items-center gap-1 group/link"
                  >
                    <span className="w-0 group-hover/link:w-2 h-0.5 bg-gold-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-800">
        <div className="section-container max-w-7xl mx-auto py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-forest-300">
              <span>© 2026 Vanhyam Organics. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-forest-300">
              <Leaf className="w-4 h-4 text-gold-400" />
              <span>100% Natural • Farm Direct • Traditionally Crafted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
