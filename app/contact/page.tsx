import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export const metadata = {
  title: "Contact Us | Vanhyam Organics",
  description: "Get in touch with Vanhyam. We're here to help with any questions about our products or your order.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vanhyam.com",
    href: "mailto:hello@vanhyam.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Green Valley Road, Bangalore, Karnataka 560001",
    href: "#"
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM IST",
    href: "#"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="section-container max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4">Get in Touch</Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-earth-900 mb-4">
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-earth-600 text-lg">
              Have questions about our products or need help with your order? 
              Our friendly team is here to assist you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-earth-md">
              <h2 className="font-display text-2xl font-semibold text-earth-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-2">
                    Subject
                  </label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="flex w-full rounded-lg border border-earth-300 bg-white px-4 py-3 text-sm placeholder:text-earth-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-earth-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0 group-hover:bg-forest-200 transition-colors">
                        <item.icon className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <p className="text-sm text-earth-500 mb-1">
                          {item.label}
                        </p>
                        <p className="font-medium text-earth-900 group-hover:text-forest-700 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-earth-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center text-earth-600 hover:bg-forest-600 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-earth-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-forest-400 mx-auto mb-2" />
                    <p className="text-earth-600 font-medium">Bangalore, India</p>
                    <p className="text-earth-500 text-sm">View on Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
