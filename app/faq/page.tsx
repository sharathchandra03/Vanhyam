import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "FAQs | Vanhyam Organics",
  description: "Find answers to commonly asked questions about our organic honey, A2 ghee, cold pressed oils, and farm products.",
};

const faqs = [
  {
    question: "Is your honey raw and unprocessed?",
    answer: "Yes, all our honey is 100% raw and unprocessed. We never heat or ultrafilter our honey, preserving all the natural enzymes, pollen, and beneficial compounds. Our honey is sourced directly from wild forests and flowering fields, ensuring you get nature's purest nectar."
  },
  {
    question: "How do you source your products?",
    answer: "We work directly with farmers, beekeepers, and traditional producers across India. Our team visits farms personally to verify organic practices, traditional processing methods, and quality standards. We pay fair prices to farmers and build long-term partnerships that benefit everyone."
  },
  {
    question: "Is your A2 ghee made using traditional Bilona methods?",
    answer: "Absolutely! Our A2 ghee is hand-churned using the ancient Bilona method - curd is churned to separate makhan (butter), which is then slowly heated to make pure ghee. This traditional process, using A2 milk from grass-fed Gir cows, preserves nutrients and creates that authentic aroma and taste."
  },
  {
    question: "Are your products free from preservatives and additives?",
    answer: "Yes, all our products are 100% natural with no preservatives, additives, or artificial ingredients. Our honey, ghee, oils, and millets are exactly as nature intended - pure, wholesome, and naturally nutritious. We believe in traditional processing that preserves, not alters."
  },
  {
    question: "How do you ensure quality and authenticity?",
    answer: "Every product undergoes rigorous quality checks at multiple stages. We verify farm sources, test for purity, check for adulteration, and ensure traditional processing standards. Many of our products are also lab-tested to guarantee authenticity and nutritional value."
  },
  {
    question: "Do you work directly with farmers?",
    answer: "Yes, farmer partnerships are at the heart of Vanhyam. We work directly with over 200 farming families across India, eliminating middlemen and ensuring fair prices. This direct relationship also guarantees complete transparency in sourcing and production methods."
  },
  {
    question: "How should honey and ghee be stored?",
    answer: "Store honey in a cool, dry place at room temperature. It never expires, but crystallization is natural and reversible by gentle warming. Ghee should be stored in an airtight container at room temperature, away from direct sunlight. When stored properly, ghee has a shelf life of 12+ months."
  },
  {
    question: "Do you offer nationwide shipping?",
    answer: "Yes, we deliver across India. We offer free shipping on orders above ₹500. Standard delivery takes 3-5 business days for metro cities and 5-7 business days for other locations. All products are carefully packed to maintain freshness and quality during transit."
  },
  {
    question: "Are your products lab tested?",
    answer: "Yes, our products undergo quality testing to ensure purity and authenticity. Our honey is tested for adulteration, our ghee for A2 protein content, and our oils for fatty acid profiles. We maintain strict quality standards that honor both tradition and food safety."
  },
  {
    question: "How can I verify product purity?",
    answer: "We provide complete transparency about sourcing on every product page. Additionally, our honey naturally crystallizes over time (a sign of purity), our ghee has that authentic golden color and aroma, and our oils have the distinct nutty fragrance of cold-pressing. We also welcome questions about any specific product's sourcing."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="section-container max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4">Help Center</Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-earth-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-earth-600 text-lg">
              Find answers to commonly asked questions. Can&apos;t find what you&apos;re looking for? 
              Feel free to contact us.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-earth-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-earth-50 transition-colors">
                  <span className="font-semibold text-earth-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 group-open:bg-forest-600 transition-colors">
                    <svg
                      className="w-4 h-4 text-forest-600 group-open:text-white transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-earth-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-forest-50 rounded-2xl">
            <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-earth-600 mb-4">
              Our team is here to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-forest-600 text-white font-semibold rounded-full hover:bg-forest-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
