import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Shop All Products | Vanhyam Organics",
  description: "Browse our collection of premium organic farm products. Raw honey, A2 ghee, cold pressed oils, and organic millets. Direct from trusted farms.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="section-container max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="gold" className="mb-4">
              Farm Direct Collection
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-earth-900 mb-4">
              Shop All Products
            </h1>
            <p className="text-earth-600 text-lg">
              Discover our range of authentic farm products - raw honey, traditional ghee, 
              cold pressed oils, and organic millets sourced directly from trusted farmers.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {["All", "Honey", "A2 Ghee", "Cold Pressed Oils", "Millets", "Farm Essentials"].map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === "All"
                    ? "bg-forest-600 text-white"
                    : "bg-earth-100 text-earth-700 hover:bg-forest-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-12 text-center text-earth-500">
            Showing {products.length} products
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
