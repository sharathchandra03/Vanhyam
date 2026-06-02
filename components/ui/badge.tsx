import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-forest-100 text-forest-800",
        secondary: "bg-earth-200 text-earth-800",
        outline: "border border-earth-300 text-earth-700",
        gold: "bg-gold-400/20 text-gold-600 border border-gold-400/30",
        success: "bg-green-100 text-green-800",
        accent: "bg-gold-300/30 text-earth-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
