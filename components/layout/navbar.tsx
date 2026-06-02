"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ease-premium",
          isScrolled
            ? "top-2"
            : "top-4"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between px-4 py-3 rounded-full border transition-all duration-300",
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-earth-200 shadow-earth-lg"
              : "bg-white/80 backdrop-blur-lg border-earth-200/50 shadow-earth-md"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-semibold text-forest-700">
              Vanhyam
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-forest-100 text-forest-700 rounded-full">
              Organics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                    "hover:text-forest-700 hover:bg-forest-50/80",
                    isActive 
                      ? "text-forest-700 bg-forest-50" 
                      : "text-earth-700"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-forest-100/50 animate-pulse-once" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              className="p-2.5 text-earth-600 hover:text-forest-700 transition-all duration-300 rounded-full hover:bg-forest-50/80 hover:scale-105 active:scale-95"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={2} />
            </button>
            <button
              className="hidden sm:flex p-2.5 text-earth-600 hover:text-forest-700 transition-all duration-300 rounded-full hover:bg-forest-50/80 hover:scale-105 active:scale-95"
              aria-label="Account"
            >
              <User className="w-[18px] h-[18px]" strokeWidth={2} />
            </button>
            <button
              className="p-2.5 text-earth-600 hover:text-forest-700 transition-all duration-300 rounded-full hover:bg-forest-50/80 hover:scale-105 active:scale-95 relative group"
              aria-label="Cart"
            >
              <ShoppingBag className="w-[18px] h-[18px] group-hover:animate-bounce-subtle" strokeWidth={2} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-forest-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2.5 text-earth-600 hover:text-forest-700 transition-all duration-300 rounded-full hover:bg-forest-50/80 hover:scale-105 active:scale-95"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-forest-900/95 backdrop-blur-2xl transition-all duration-500 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-12">
            <span className="text-2xl font-display font-semibold text-white">
              Vanhyam
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-4 text-2xl font-display transition-all duration-500 border-b border-white/10",
                    "hover:text-white hover:translate-x-2",
                    isActive 
                      ? "text-gold-400 font-semibold" 
                      : "text-white/80",
                    isMobileMenuOpen && "translate-y-0 opacity-100",
                    !isMobileMenuOpen && "translate-y-4 opacity-0"
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms",
                  }}
                >
                  <span className="flex items-center gap-3">
                    {isActive && <span className="w-2 h-2 rounded-full bg-gold-400" />}
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto pt-8">
            <Button
              variant="white"
              size="lg"
              className="w-full"
              showArrow
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
