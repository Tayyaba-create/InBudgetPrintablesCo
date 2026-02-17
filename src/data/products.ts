export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  featured: boolean;
  rating: number;
  reviews: number;
  badge?: string;
}

export const categories = [
  { id: "budget-planners", name: "Budget Planners", icon: "📒", description: "Take control of your finances with our beautifully designed budget planners." },
  { id: "savings-trackers", name: "Savings Trackers", icon: "💰", description: "Track your savings goals and watch your money grow." },
  { id: "meal-planners", name: "Meal Planners", icon: "🍽️", description: "Plan your meals for the week with ease and style." },
  { id: "digital-stickers", name: "Digital Stickers", icon: "✨", description: "Add personality to your digital planner with cute stickers." },
  { id: "notebooks", name: "Notebooks", icon: "📓", description: "Beautiful lined and dotted notebooks for every need." },
];

export const products: Product[] = [
  // Budget Planners
  {
    id: "1",
    title: "Monthly Budget Planner",
    description: "A comprehensive monthly budget planner with expense categories, income tracking, and savings goals. Beautifully designed with soft pastel tones to make budgeting a joy.",
    price: 4.99,
    category: "budget-planners",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop",
    ],
    featured: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "6",
    title: "Debt Payoff Tracker",
    description: "Visualize your journey to becoming debt-free with this motivating debt payoff tracker. Includes multiple tracking layouts.",
    price: 2.49,
    category: "budget-planners",
    images: [
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.5,
    reviews: 67,
  },
  {
    id: "9",
    title: "Annual Financial Planner",
    description: "Plan your entire year's finances with this comprehensive annual financial planner. Includes monthly breakdowns, goal setting pages, and net worth tracker.",
    price: 7.99,
    originalPrice: 9.99,
    category: "budget-planners",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.9,
    reviews: 203,
    badge: "Best Seller",
  },
  {
    id: "10",
    title: "Bi-Weekly Pay Budget Sheets",
    description: "Designed specifically for bi-weekly pay schedules. Allocate every dollar with intention using our zero-based budgeting sheets.",
    price: 3.49,
    category: "budget-planners",
    images: [
      "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518458028785-8f5b0f45f3f0?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.6,
    reviews: 89,
  },

  // Savings Trackers
  {
    id: "2",
    title: "52-Week Savings Challenge",
    description: "Stay motivated with this gorgeous 52-week savings challenge tracker. Watch your savings grow week by week with this beautifully illustrated printable.",
    price: 2.99,
    category: "savings-trackers",
    images: [
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1554224155-1696413565d3?w=600&h=800&fit=crop",
    ],
    featured: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "7",
    title: "Sinking Funds Tracker",
    description: "Organize your sinking funds with this cute and functional tracker. Perfect for planning ahead for holidays, birthdays, and more.",
    price: 2.99,
    category: "savings-trackers",
    images: [
      "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.4,
    reviews: 42,
  },
  {
    id: "11",
    title: "Emergency Fund Builder",
    description: "Build your safety net with this motivating emergency fund tracker. Includes milestone celebrations and visual progress bars.",
    price: 1.99,
    category: "savings-trackers",
    images: [
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=600&h=800&fit=crop",
    ],
    featured: true,
    rating: 4.8,
    reviews: 98,
    badge: "New",
  },
  {
    id: "12",
    title: "Vacation Savings Planner",
    description: "Plan and save for your dream vacation with this fun savings planner. Includes destination mood board pages and daily savings tracker.",
    price: 3.99,
    category: "savings-trackers",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.6,
    reviews: 73,
  },

  // Meal Planners
  {
    id: "3",
    title: "Weekly Meal Planner Bundle",
    description: "Plan your meals like a pro with this weekly meal planner bundle including grocery lists and recipe cards. Minimalist design with warm tones.",
    price: 5.99,
    category: "meal-planners",
    images: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=800&fit=crop",
    ],
    featured: true,
    rating: 4.9,
    reviews: 211,
    badge: "Popular",
  },
  {
    id: "13",
    title: "Monthly Meal Prep Calendar",
    description: "30-day meal prep calendar with batch cooking guides and nutritional tracking. Save time and eat healthier.",
    price: 4.49,
    category: "meal-planners",
    images: [
      "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.7,
    reviews: 145,
  },
  {
    id: "14",
    title: "Recipe Card Collection",
    description: "50 beautifully designed recipe cards to organize your favorite dishes. Includes index cards and category dividers.",
    price: 3.99,
    originalPrice: 5.99,
    category: "meal-planners",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.5,
    reviews: 88,
    badge: "Sale",
  },

  // Digital Stickers
  {
    id: "4",
    title: "Boho Floral Sticker Pack",
    description: "200+ beautiful boho floral digital stickers perfect for your digital planner, journal, or notebook. Includes flowers, leaves, and decorative elements.",
    price: 3.49,
    category: "digital-stickers",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=800&fit=crop",
    ],
    featured: true,
    rating: 4.8,
    reviews: 312,
    badge: "Best Seller",
  },
  {
    id: "8",
    title: "Aesthetic Washi Tape Stickers",
    description: "Digital washi tape stickers in soft pastel colors. Perfect borders and dividers for your digital planner pages.",
    price: 1.99,
    category: "digital-stickers",
    images: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.3,
    reviews: 54,
  },
  {
    id: "15",
    title: "Motivational Quote Stickers",
    description: "100+ inspirational quote stickers in elegant typography. Perfect for decorating your planner and staying motivated.",
    price: 2.49,
    category: "digital-stickers",
    images: [
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.6,
    reviews: 127,
  },
  {
    id: "16",
    title: "Seasonal Sticker Bundle",
    description: "400+ stickers covering all four seasons — spring florals, summer vibes, autumn leaves, and winter snowflakes. One purchase for the whole year!",
    price: 5.99,
    originalPrice: 8.99,
    category: "digital-stickers",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.9,
    reviews: 189,
    badge: "Sale",
  },

  // Notebooks
  {
    id: "5",
    title: "Dotted Journal Notebook",
    description: "A clean dotted journal notebook perfect for bullet journaling, note-taking, or sketching. Includes 50 printable pages.",
    price: 3.99,
    category: "notebooks",
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.4,
    reviews: 76,
  },
  {
    id: "17",
    title: "Lined Notebook — Classic",
    description: "Simple, elegant lined notebook pages for everyday note-taking. Includes wide-ruled and college-ruled options. 60 pages.",
    price: 2.99,
    category: "notebooks",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.3,
    reviews: 45,
  },
  {
    id: "18",
    title: "Gratitude Journal",
    description: "Cultivate positivity with this daily gratitude journal. Includes guided prompts, weekly reflections, and mood trackers. 30-day printable set.",
    price: 4.49,
    category: "notebooks",
    images: [
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=800&fit=crop",
    ],
    featured: true,
    rating: 4.8,
    reviews: 168,
    badge: "New",
  },
  {
    id: "19",
    title: "Cornell Notes Template",
    description: "Study smarter with these Cornell method note-taking templates. Perfect for students. Includes 40 printable pages.",
    price: 2.49,
    category: "notebooks",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=800&fit=crop",
    ],
    featured: false,
    rating: 4.5,
    reviews: 92,
  },
];
