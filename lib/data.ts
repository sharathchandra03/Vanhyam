export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  tags: string[];
  benefits: string[];
  ingredients: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wild Forest Honey",
    slug: "wild-forest-honey",
    description: "Raw, unprocessed honey collected from the pristine forests of the Western Ghats. Rich in natural enzymes and antioxidants, with a distinct floral aroma.",
    price: 549,
    originalPrice: 699,
    rating: 4.9,
    reviewCount: 842,
    image: "/Forest honey image.png",
    category: "Honey",
    tags: ["Raw", "Unprocessed", "Forest"],
    benefits: [
      "100% pure and unfiltered",
      "Rich in natural antioxidants",
      "Sourced from wild flowers",
      "No added preservatives"
    ],
    ingredients: [
      "100% Pure Raw Honey",
      "Natural Bee Pollen",
      "Wild Flower Nectar",
      "Natural Enzymes"
    ],
    isBestseller: true,
    inStock: true
  },
  {
    id: "2",
    name: "Multi-Floral Raw Honey",
    slug: "multi-floral-raw-honey",
    description: "Golden nectar collected from diverse flowering fields. A symphony of flavors from mustard, litchi, and wild blossoms. Perfect for daily wellness.",
    price: 449,
    rating: 4.8,
    reviewCount: 623,
    image: "/Forest honey image.png",
    category: "Honey",
    tags: ["Multi-Floral", "Raw", "Daily Use"],
    benefits: [
      "Boosts immunity naturally",
      "Supports digestive health",
      "Natural energy source",
      "Rich in vitamins and minerals"
    ],
    ingredients: [
      "Raw Multi-Floral Honey",
      "Natural Propolis",
      "Bee Pollen",
      "Royal Jelly Traces"
    ],
    isNew: true,
    inStock: true
  },
  {
    id: "3",
    name: "A2 Bilona Cow Ghee",
    slug: "a2-bilona-cow-ghee",
    description: "Traditional hand-churned ghee from grass-fed Gir cows using the ancient Bilona method. A2 protein rich, aromatic, and golden in color.",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviewCount: 956,
    image: "/Cow ghee.png",
    category: "A2 Ghee",
    tags: ["Bilona Method", "A2 Protein", "Traditional"],
    benefits: [
      "Hand-churned using Bilona method",
      "From grass-fed Gir cows",
      "Rich in Omega-3 fatty acids",
      "Boosts immunity and digestion"
    ],
    ingredients: [
      "A2 Cow Milk Curd",
      "Traditional Culture",
      "No Additives"
    ],
    isBestseller: true,
    inStock: true
  },
  {
    id: "4",
    name: "Cold Pressed Groundnut Oil",
    slug: "cold-pressed-groundnut-oil",
    description: "Wood-pressed groundnut oil extracted at low temperatures to preserve nutrients. Perfect for everyday cooking with a rich, nutty flavor.",
    price: 399,
    rating: 4.7,
    reviewCount: 445,
    image: "/Ground nut oil.png",
    category: "Cold Pressed Oils",
    tags: ["Wood Pressed", "Unrefined", "Cooking"],
    benefits: [
      "Wood-pressed at low heat",
      "Rich in antioxidants",
      "Heart-healthy fats",
      "High smoke point"
    ],
    ingredients: [
      "Premium Groundnuts",
      "No Chemicals",
      "No Preservatives"
    ],
    inStock: true
  },
  {
    id: "5",
    name: "Organic Foxtail Millet",
    slug: "organic-foxtail-millet",
    description: "Ancient grain powerhouse rich in protein and fiber. Grown organically without pesticides. Perfect for healthy rotis, porridge, and modern recipes.",
    price: 249,
    rating: 4.8,
    reviewCount: 334,
    image: "/Organic foxtail rice.png",
    category: "Millets",
    tags: ["Organic", "Gluten-Free", "High Protein"],
    benefits: [
      "Rich in protein and fiber",
      "Low glycemic index",
      "Supports weight management",
      "Diabetic-friendly grain"
    ],
    ingredients: [
      "Organic Foxtail Millet",
      "No Additives",
      "No Processing"
    ],
    isNew: true,
    inStock: true
  },
  {
    id: "6",
    name: "Natural Palm Jaggery",
    slug: "natural-palm-jaggery",
    description: "Pure palm jaggery made traditionally from palm sap. Rich in iron and minerals. A wholesome natural sweetener for your family.",
    price: 189,
    rating: 4.6,
    reviewCount: 278,
    image: "/Jaggrey image.png",
    category: "Farm Essentials",
    tags: ["Natural", "Mineral-Rich", "Sweetener"],
    benefits: [
      "Rich in iron and minerals",
      "Natural energy booster",
      "Aids digestion",
      "No refined sugar"
    ],
    ingredients: [
      "Pure Palm Sap",
      "Traditional Processing",
      "No Chemicals"
    ],
    inStock: true
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The Wild Forest Honey is absolutely divine! You can taste the purity. My family uses it daily and we've noticed a real difference in our energy levels. Authentic farm-fresh quality!",
    avatar: "PS",
    product: "Wild Forest Honey"
  },
  {
    id: "2",
    name: "Anjali Patel",
    location: "Bangalore",
    rating: 5,
    text: "Finally found A2 ghee that actually smells and tastes like the real thing. The Bilona method makes all the difference. My grandmother approves!",
    avatar: "AP",
    product: "A2 Bilona Cow Ghee"
  },
  {
    id: "3",
    name: "Meera Krishnan",
    location: "Chennai",
    rating: 5,
    text: "The cold-pressed groundnut oil brings back memories of my childhood. Rich aroma, authentic taste, and knowing it's from trusted farmers gives me peace of mind.",
    avatar: "MK",
    product: "Cold Pressed Groundnut Oil"
  },
  {
    id: "4",
    name: "Ritu Verma",
    location: "Delhi",
    rating: 5,
    text: "Switched to Vanhyam's organic millets for my diabetic father. He loves the taste and his sugar levels have been stable. Truly farm-fresh and trustworthy!",
    avatar: "RV",
    product: "Organic Foxtail Millet"
  }
];

export const benefits = [
  {
    icon: "Leaf",
    title: "Farm Direct",
    description: "Every product is sourced directly from trusted farmers, ensuring authentic farm-to-table freshness."
  },
  {
    icon: "Shield",
    title: "100% Natural",
    description: "No chemicals, no preservatives, no additives. Just pure, natural goodness as nature intended."
  },
  {
    icon: "Heart",
    title: "Traditional Methods",
    description: "We honor ancient wisdom by using time-honored processing techniques that preserve nutrition."
  },
  {
    icon: "Recycle",
    title: "Farmer Partnerships",
    description: "Working directly with farming communities to support sustainable livelihoods and fair trade."
  }
];

export const stats = [
  { value: "50,000+", label: "Happy Families" },
  { value: "100%", label: "Farm Direct" },
  { value: "4.8/5", label: "Quality Rating" },
  { value: "200+", label: "Partner Farmers" }
];
