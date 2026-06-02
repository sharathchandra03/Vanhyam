"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96] relative overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-forest-600 text-white hover:bg-forest-700 hover:shadow-lg hover:shadow-forest-600/20 hover:-translate-y-0.5",
        secondary:
          "border-2 border-forest-600 text-forest-700 bg-transparent hover:bg-forest-50 hover:border-forest-700 hover:-translate-y-0.5",
        ghost:
          "text-forest-700 hover:bg-forest-100 bg-transparent hover:-translate-y-0.5",
        outline:
          "border border-earth-300 text-earth-800 hover:border-forest-500 hover:text-forest-700 bg-transparent hover:-translate-y-0.5",
        white:
          "bg-white text-forest-700 hover:bg-earth-100 shadow-md hover:shadow-lg hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-sm",
        lg: "h-14 px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  showArrow?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, showArrow, asChild, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }), "group");
    
    // When asChild is true, clone the single child and merge props
    if (asChild && React.isValidElement(children)) {
      const childProps = children.props as { className?: string };
      return React.cloneElement(children, {
        className: cn(classes, childProps.className),
        ref,
        ...props,
      } as React.Attributes);
    }
    
    return (
      <button
        className={cn(classes, "group/btn")}
        ref={ref}
        {...props}
      >
        {/* Ripple effect overlay */}
        <span className="absolute inset-0 bg-white/20 opacity-0 group-active/btn:opacity-100 group-active/btn:scale-150 transition-all duration-300 rounded-full" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/10 group-hover/btn:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
