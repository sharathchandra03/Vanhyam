import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Award, Users } from "lucide-react";

export const metadata = {
  title: "Our Story | Vanhyam Organics",
  description: "Discover the story behind Vanhyam. Our mission to bring authentic farm-sourced organic products directly from trusted farmers to your home.",
};

const values = [
  {
    icon: Leaf,
    title: "Nature First",
    description: "We source directly from trusted farms that prioritize natural growing methods and ecological balance."
  },
  {
    icon: Award,
    title: "Authenticity Matters",
    description: "Every product is carefully selected and processed using traditional methods that preserve nutrition and purity."
  },
  {
    icon: Users,
    title: "Farmer Partnerships",
    description: "We work closely with farming communities and local producers to support ethical and sustainable livelihoods."
  },
  {
    icon: Heart,
    title: "Transparency & Trust",
    description: "We believe customers deserve to know where their food comes from and how it is produced."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-earth-100 to-forest-50">
          <div className="section-container max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="gold" className="mb-4">
                  Our Story
                </Badge>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-earth-900 mb-6">
                  Rooted in Nature.{" "}
                  <span className="text-forest-600">Built on Trust.</span>
                </h1>
                <p className="text-earth-600 text-lg leading-relaxed mb-6">
                  Vanhyam was born from a simple belief: The purest nourishment comes directly from nature.
                  In a world filled with processed foods, artificial ingredients, and shortcuts, we wanted 
                  to reconnect families with authentic farm-sourced products rooted in traditional Indian wisdom.
                </p>
                <p className="text-earth-600 leading-relaxed">
                  Our journey began by partnering directly with farmers, beekeepers, and traditional 
                  producers across India who still follow time-honored practices. Every jar of honey, 
                  every spoon of ghee, and every grain we offer reflects our commitment to purity, 
                  transparency, and sustainable farming.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"
                  alt="Organic farm landscape with green fields"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="section-container max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge className="mb-4">Our Values</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-earth-900 mb-4">
                What We Stand For
              </h2>
              <p className="text-earth-600">
                Every decision we make is guided by our commitment to purity, sustainability, and your wellbeing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-forest-100 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-forest-600" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-earth-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-forest-900 text-white">
          <div className="section-container max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=800&fit=crop"
                  alt="Farmers harvesting organic crops"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                  Creating a healthier future through{" "}
                  <span className="text-gold-400">honest food</span>
                </h2>
                <div className="space-y-4 text-forest-200">
                  <p>
                    We are committed to preserving traditional farming wisdom, supporting local communities, 
                    and providing products that are free from unnecessary processing and harmful additives.
                  </p>
                  <p>
                    Through responsible sourcing and sustainable practices, we aim to make authentic farm 
                    products accessible to modern families while protecting the environment for future generations.
                  </p>
                  <p>
                    By 2030, we aim to partner with 1000+ farmers across India, creating a network that 
                    benefits both producers and consumers while preserving our agricultural heritage.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="white" showArrow>
                    Explore Our Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
