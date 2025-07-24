import icons from "./icons";

const header_links = [
  { href: "#home", label: "Home", type: "link" },
  { href: "#services", label: "Services", type: "link" },
  { href: "#about", label: "About", type: "link" },
  { href: "#contact", label: "Contact", type: "link" },
];

const links = [
  {
    id: 1,
    title: "About",
    href: "/about",
  },
  {
    id: 2,
    title: "Journal",
    href: "/journal",
  },
  {
    id: 3,
    title: "Faq's",
    href: "/faqs",
  },
  {
    id: 4,
    title: "Contact us",
    href: "/contact-us",
  },
];

const sublinks = [
  {
    id: 1,
    title: "Headphones",
    href: "/headphones",
  },
  {
    id: 2,
    title: "Speakers",
    href: "/speakers",
  },
  {
    id: 3,
    title: "Charging stations",
    href: "/earphones",
  },
  {
    id: 4,
    title: "Lanterns",
    href: "/lanterns",
  },
  {
    id: 5,
    title: "Portable chargers",
    href: "/portable-chargers",
  },
];

const social_links = [
  {
    href: "https://www.instagram.com/",
    icon: icons.Instagram,
    icon_stroke: icons.InstagramStroke,
  },
  {
    href: "https://www.facebook.com/",
    icon: icons.Facebook,
    icon_stroke: icons.FacebookStroke,
  },
  {
    href: "https://www.tiktok.com/",
    icon: icons.Tiktok,
    icon_stroke: icons.TiktokStroke,
  },
  {
    href: "https://www.youtube.com/",
    icon: icons.Youtube,
    icon_stroke: icons.YoutubeStroke,
  },
];

const breadcrumbs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Collections",
    path: "/collections",
  },
  {
    name: "All products",
    path: "/shop/all-products",
  },
];

const collections = [
  {
    id: 1,
    image: "/images/aem.webp",
    backgroundImage: "/images/store.webp",
    title: "All products",
    quantiy: 24,
    subtitle: "Check out all our products",
    slug: "all-products",
  },
  {
    id: 2,
    image: "/images/agile.jpg",
    backgroundImage: "/images/modern-headphones.webp",
    title: "Headphones",
    quantiy: 12,
    subtitle: "Eco tunes for every mood",
    slug: "headphones",
  },
  {
    id: 3,
    image: "/images/pm.png",
    backgroundImage: "/images/old-speaker.webp",
    title: "Speakers",
    quantiy: 6,
    subtitle: "Eco beats, pure vibes",
    slug: "speakers",
  },
  {
    id: 4,
    image: "/images/charging-stations-x2.webp",
    backgroundImage: "/images/station-setup.webp",
    title: "Charging stations",
    quantiy: 3,
    subtitle: "Green power, any hour",
    href: "/collections/charging-stations",
    slug: "charging-stations",
  },
  {
    id: 5,
    image: "/images/lantern-x2.webp",
    backgroundImage: "/images/light-room.webp",
    title: "Lanterns",
    quantiy: 8,
    subtitle: "Eco lights, bright lights",
    slug: "lanterns",
  },
  {
    id: 6,
    image: "/images/water-bottle-x2.webp",
    backgroundImage: "/images/power-solutions.webp",
    title: "Water bottles",
    quantiy: 2,
    subtitle: "Stay hydrated, stay green",
    slug: "water-bottles",
  },
];

const featured_collections = [
  {
    id: 1,
    image: "/images/eco-tunes-x2.webp",
    title: "Headphones",
    subtitle: "Eco tunes for every mood",
    slug: "headphones",
  },
  {
    id: 2,
    image: "/images/speakers-x2.webp",
    title: "Speakers",
    subtitle: "Eco beats, pure vibes",
    slug: "speakers",
  },
  {
    id: 3,
    image: "/images/charging-stations-x2.webp",
    title: "Charging stations",
    subtitle: "Charging stations",
    href: "/collections/charging-stations",
    slug: "charging-stations",
  },
  {
    id: 4,
    image: "/images/headphones-background.webp",
    title: "All collections",
    subtitle: "Check out all our products",
    slug: "all-products",
  },
];

const reviews = [
  {
    id: 1,
    review:
      "Working with Paramount Consultants was a turning point. Their AEM expertise and agile delivery brought structure, speed, and real results to our digital transformation.",
    reviewer: "Natalie R., Digital Programme Lead",
  },
  {
    id: 2,
    review:
      "From the first consultation to launch, they were strategic, responsive, and committed to quality. It felt like working with an in-house team, not an external agency.",
    reviewer: "Sanjay M., CTO, Fintech Startup",
  },
  {
    id: 3,
    review:
      "We needed a partner who understood both tech and business — Paramount exceeded expectations. Their solutions were scalable, elegant, and built for long-term growth.",
    reviewer: "Claire D., Head of Digital Strategy",
  },
];

const products = [
  {
    id: 1,
    thumbnail: "/images/eco-tunes-x2.webp",
    images: [
      {
        src: "/images/eco-tunes.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-case.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-material.webp",
        alt: "Product view",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "var(--success-300)",
      },
      {
        name: "Orange",
        value: "var(--orange-300)",
      },
      {
        name: "Cyan",
        value: "var(--cyan-300)",
      },
    ],

    tag: "Hot",
    tagBackground: "var(--danger-600)",
    ratings: 5.0,
    brand: "Paramount Consultants",
    title: "Strategic Solutions for Modern Business",
    description:
      "Compact, stylish, and engineered for the future, Eco Tunes are more than just headphones; they're a statement. Hear the future, save the planet.",
    color: "var(--success-300)",
    price: "689.00",
    quantity: 4,
    collection: "headphones",
    slug: "eco-tunes",
  },
  {
    id: 2,
    thumbnail: "/images/lumi-flare-x2.webp",
    images: [
      {
        src: "/images/lumi-flare-x2.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-case.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-material.webp",
        alt: "Product view",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "var(--success-600)",
      },
      {
        name: "Orange",
        value: "var(--orange-300)",
      },
      {
        name: "Cyan",
        value: "var(--cyan-300)",
      },
    ],

    tag: "New",
    tagBackground: "var(--success-600)",
    ratings: 5.0,
    brand: "Nova",
    title: "Lumi Flare",
    description:
      "Illuminate your path with the Lumi Flare lantern. Perfect for camping, hiking, and emergencies.",
    color: "var(--white)",
    price: "145.00",
    category: "lanterns",
    quantity: 2,
    collection: "lanterns",
    slug: "lumi-flare",
  },
  {
    id: 3,
    thumbnail: "/images/white-speaker-x2.webp",
    images: [
      {
        src: "/images/white-speaker-x2.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-case.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-material.webp",
        alt: "Product view",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "var(--success-600)",
      },
      {
        name: "Orange",
        value: "var(--orange-300)",
      },
      {
        name: "Cyan",
        value: "var(--cyan-300)",
      },
    ],
    tag: "New",
    tagBackground: "var(--success-600)",
    ratings: 5.0,
    brand: "Nova",
    title: "Tone Cube",
    description:
      "Experience the future of sound with the Tone Cube. Compact, powerful, and eco-friendly, it's the perfect speaker for your home or office.",
    color: "var(--orange)",
    price: "245.00",
    quantity: 4,
    collection: "speakers",
    slug: "tone-cube",
  },
  {
    id: 4,
    thumbnail: "/images/charging-stations-x2.webp",
    images: [
      {
        src: "/images/charging-stations-x2.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-case.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-material.webp",
        alt: "Product view",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "var(--success-600)",
      },
      {
        name: "Orange",
        value: "var(--orange-300)",
      },
      {
        name: "Cyan",
        value: "var(--cyan-300)",
      },
    ],
    tag: "New",
    tagBackground: "var(--success-600)",
    ratings: 5.0,
    brand: "Nova",
    title: "EcoVolt Dock",
    description:
      "Charge your devices in style with the EcoVolt Dock. Sleek, eco-friendly, and designed for the future.",
    color: "var(--orange-300)",
    price: "49.00",
    quantity: 3,
    collection: "charging-stations",
    slug: "ecovolt-dock",
  },
  {
    id: 5,
    thumbnail: "/images/water-bottle-x2.webp",
    images: [
      {
        src: "/images/water-bottle-x2.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-case.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-material.webp",
        alt: "Product view",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "var(--success-600)",
      },
      {
        name: "Orange",
        value: "var(--orange-300)",
      },
      {
        name: "Cyan",
        value: "var(--cyan-300)",
      },
    ],
    tag: "New",
    tagBackground: "var(--success-600)",
    ratings: 5.0,
    brand: "Nova",
    title: "Hydra Smart",
    description:
      "Stay hydrated and stay connected with the Hydra Smart water bottle. Perfect for the gym, office, or outdoor adventures.",
    color: "var(--white)",
    price: "89.00",
    quantity: 5,
    collection: "water-bottles",
    slug: "hydra-smart",
  },
  {
    id: 6,
    thumbnail: "/images/speakers-x2.webp",
    images: [
      {
        src: "/images/speakers-x2.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-case.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-material.webp",
        alt: "Product view",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "var(--success-600)",
      },
      {
        name: "Orange",
        value: "var(--orange-300)",
      },
      {
        name: "Cyan",
        value: "var(--cyan-300)",
      },
    ],
    tag: "New",
    tagBackground: "var(--success-600)",
    ratings: 5.0,
    brand: "Nova",
    title: "Terra Tunes",
    description:
      "Experience the future of sound with the Terra Tunes. Compact, powerful, and eco-friendly, it's the perfect speaker for your home or office.",
    color: "var(--orange-300)",
    price: "209.00",
    quantity: 10,
    collection: "speakers",
    slug: "terra-tunes",
  },
  {
    id: 7,
    thumbnail: "/images/lumi-glow-x2.webp",
    images: [
      {
        src: "/images/lumi-glow-x2.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-case.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-material.webp",
        alt: "Product view",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "var(--success-600)",
      },
      {
        name: "Orange",
        value: "var(--orange-300)",
      },
      {
        name: "Cyan",
        value: "var(--cyan-300)",
      },
    ],
    tag: "New",
    tagBackground: "var(--success-600)",
    ratings: 5.0,
    brand: "Nova",
    title: "Lumi Glow",
    description:
      "Light up the night with the Lumi Glow lantern. Perfect for camping, hiking, and emergencies.",
    color: "var(--white-300)",
    price: "109.00",
    quantity: 6,
    collection: "lanterns",
    slug: "lumi-glow",
  },
  {
    id: 8,
    thumbnail: "/images/leaf-torch-x2.webp",
    images: [
      {
        src: "/images/leaf-torch-x2.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-case.webp",
        alt: "Product view",
      },
      {
        src: "/images/eco-tunes-material.webp",
        alt: "Product view",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "var(--success-600)",
      },
      {
        name: "Orange",
        value: "var(--orange-300)",
      },
      {
        name: "Cyan",
        value: "var(--cyan-300)",
      },
    ],
    tag: "New",
    tagBackground: "var(--success-600)",
    ratings: 5.0,
    brand: "Nova",
    title: "Leaf Torch",
    description:
      "Illuminate your path with the Leaf Torch lantern. Perfect for camping, hiking, and emergencies.",
    color: "var(--success-300)",
    price: "128.00",
    quantity: 3,
    collection: "lanterns",
    slug: "leaf-torch",
  },
];

const tabs = [
  { id: 0, title: "All", slug: "all-products" },
  {
    id: 1,
    title: "Headphones",
    slug: "headphones",
  },
  {
    id: 2,
    title: "Speakers",
    slug: "speakers",
  },
  {
    id: 3,
    title: "Lanterns",
    slug: "lanterns",
  },
  {
    id: 4,
    title: "Charging stations",
    slug: "charging-stations",
  },
  {
    id: 5,
    title: "Water bottles",
    slug: "water-bottles",
  },
];

const blog_posts = [
  {
    id: 1,
    image: "/images/speaker-view.webp",
    title: "Harmony with nature",
    description:
      "Join the symphony of sustainability with our audio innovations that are as kind to your ears as they are to the earth.",
    tag: "Speakers",
    tagBackground: "var(--success-600)",
    date: "April 1, 2024",
    comments: 0,
    category: "speakers",
    slug: "harmony-with-nature",
  },
  {
    id: 2,
    image: "/images/power-solutions.webp",
    title: "Eco power solutions",
    description:
      "Energize your gadgets and your green conscience with our innovative charging solutions—where tech meets eco.",
    tag: "Water bottles",
    tagBackground: "var(--cyan-600)",
    date: "April 2, 2024",
    comments: 2,
    category: "news & events",
    slug: "eco-power-solutions",
  },
  {
    id: 3,
    image: "/images/modern-headphones.webp",
    title: "Tunes for trees",
    description:
      "Dive into the acoustic embrace of our eco-conscious sound systems designed to delight both you and nature.",
    tag: "Headphones",
    tagBackground: "var(--orange-600)",
    date: "April 5, 2024",
    comments: 3,
    category: "headphones",
    slug: "tunes-for-trees",
  },
  {
    id: 4,
    image: "/images/store.webp",
    title: "The future is here",
    description:
      "Stay updated with the latest breakthroughs in eco-technology as we unveil cutting-edge products designed for tomorrow’s world.",
    tag: "News & Events",
    tagBackground: "var(--danger-600)",
    date: "April 19, 2024",
    comments: 1,
    category: "news & events",
    slug: "the-future-is-here",
  },
];

// const support = [
//   {
//     id: 1,
//     icon: icons.Headset,
//     title: "Customer service",
//     subtitle: "Exceptional Support, Sustainable Solutions",
//   },
//   {
//     id: 2,
//     icon: icons.DeliveryBox,
//     title: "Fast free shipping",
//     subtitle: "Get free shipping on orders of $150 or more",
//   },
//   {
//     id: 3,
//     icon: icons.Users,
//     title: "Refer a friend",
//     subtitle: "Refer a friend and get 15% off each other.",
//   },
//   {
//     id: 4,
//     icon: icons.ShieldDone,
//     title: "Secure payment",
//     subtitle: "We ensure secure payment with PEV.",
//   },
// ];

const accesories = [
  {
    id: 1,
    icon: icons.Headphones,
    title: "Headphones",
  },
  {
    id: 2,
    icon: icons.Case,
    title: "Fabric case",
  },
  {
    id: 3,
    icon: icons.Cable,
    title: "Charging cable",
  },
  {
    id: 4,
    icon: icons.USB,
    title: "USB adapter",
  },
];

const specs = [
  {
    id: 1,
    title: "Sound",
    items: [
      {
        id: 1,
        title: "Advanced sound features",
        subItems: ["Adaptive", "Transparency mode"],
      },
      {
        id: 2,
        title: "Frequency response",
        subItems: ["20Hz to 20,000Hz"],
      },
      {
        id: 3,
        title: "Driver type",
        subItems: ["40mm plant-based bio-cellulose drivers"],
      },
      {
        id: 4,
        title: "Harmonic distortion",
        subItems: ["<0.3% at 1kHz"],
      },
    ],
  },
  {
    id: 2,
    title: "Design",
    items: [
      {
        id: 1,
        title: "Advanced sound features",
        subItems: ["Adaptive", "Transparency mode"],
      },
      {
        id: 2,
        title: "Frequency response",
        subItems: ["20Hz to 20,000Hz"],
      },
      {
        id: 3,
        title: "Driver type",
        subItems: ["40mm plant-based bio-cellulose drivers"],
      },
      {
        id: 4,
        title: "Harmonic distortion",
        subItems: ["<0.3% at 1kHz"],
      },
    ],
  },
  {
    id: 3,
    title: "Battery",
    items: [
      {
        id: 1,
        title: "Advanced sound features",
        subItems: ["Adaptive", "Transparency mode"],
      },
      {
        id: 2,
        title: "Frequency response",
        subItems: ["20Hz to 20,000Hz"],
      },
      {
        id: 3,
        title: "Driver type",
        subItems: ["40mm plant-based bio-cellulose drivers"],
      },
      {
        id: 4,
        title: "Harmonic distortion",
        subItems: ["<0.3% at 1kHz"],
      },
    ],
  },
  {
    id: 4,
    title: "Connectivity",
    items: [
      {
        id: 1,
        title: "Advanced sound features",
        subItems: ["Adaptive", "Transparency mode"],
      },
      {
        id: 2,
        title: "Frequency response",
        subItems: ["20Hz to 20,000Hz"],
      },
      {
        id: 3,
        title: "Driver type",
        subItems: ["40mm plant-based bio-cellulose drivers"],
      },
      {
        id: 4,
        title: "Harmonic distortion",
        subItems: ["<0.3% at 1kHz"],
      },
    ],
  },
];

const avatars = [
  {
    id: 1,
    url: "/avatars/avatar-1.webp",
  },
  {
    id: 2,
    url: "/avatars/avatar-2.webp",
  },
  {
    id: 3,
    url: "/avatars/avatar-3.webp",
  },
];

const faqs = [
  {
    id: 1,
    question: "What materials are Eco Tunes headphones made from?",
    answer:
      "Eco Tunes headphones are crafted from sustainable materials such as recycled plastics, bamboo, and biodegradable fabrics to minimize environmental impact.",
  },
  {
    id: 2,
    question: "How long does the battery last on Eco Tunes headphones?",
    answer: "Eco Tunes headphones have a battery life of up to 20 hours.",
  },
  {
    id: 3,
    question: "Are Eco Tunes headphones water-resistant?",
    answer:
      "Eco Tunes headphones are water-resistant and can withstand light rain and sweat.",
  },
  {
    id: 4,
    question: "Can I make calls with Eco Tunes headphones?",
    answer:
      "Eco Tunes headphones have a built-in microphone that allows you to make calls hands-free.",
  },
  {
    id: 5,
    question: "What is the warranty period for Eco Tunes headphones?",
    answer:
      "Eco Tunes headphones come with a one-year warranty that covers manufacturing defects.",
  },
];

const values = [
  {
    id: 1,
    image: "/images/craftmanship.webp",
    title: "Craftmanship",
  },
  {
    id: 2,
    image: "/images/integrity.webp",
    title: "Integrity",
  },
  {
    id: 3,
    image: "/images/innovation.webp",
    title: "Innovation",
  },
];

const messages = [
  {
    id: 1,
    message:
      "I'm thrilled to present a lineup where technology meets eco-friendly innovation. Join us in advancing a sustainable future. ",
    author: "Angel Uriostegui, Founder of Nova",
  },
  {
    id: 2,
    message:
      "We're committed to reducing our carbon footprint and enhancing energy efficiency across all operations.",
    author: "Maria Lee, Sustainability Officer",
  },
  {
    id: 3,
    message:
      "Join us in embracing eco-friendly solutions that do not compromise on performance or design.",
    author: "Linda Bates, Chief Design Officer",
  },
];

const timeline = [
  {
    year: 2020,
    image: "/images/old-tech.webp",
    subject: "Foundations for change",
    description:
      "Nova - Tech Store was founded with the vision to merge cutting-edge technology with sustainability, aiming to create products that are as kind to the planet as they are innovative.",
  },
  {
    year: 2021,
    image: "/images/old-speaker.webp",
    subject: "Expansion and Innovation",
    description:
      "Introduced our first line of eco-friendly smart devices, setting a new standard for the integration of technology and environmental consciousness.",
  },
  {
    year: 2022,
    image: "/images/newer-tech.webp",
    subject: "Global Reach",
    description:
      "Expanded our operations globally, opening stores in over 20 countries worldwide.",
  },
  {
    year: 2023,
    image: "/images/stations.webp",
    subject: "Redefining Technology",
    description:
      "Launched a revolutionary new product that promises to redefine how we think about and use technology in our daily lives.",
  },
  {
    year: 2024,
    image: "/images/modern-speaker.webp",
    subject: "Looking Forward",
    description:
      "Announced plans for groundbreaking new technologies focused on further reducing environmental impact.",
  },
];

const blog_tabs = [
  {
    id: 1,
    title: "All",
    category: "",
  },
  {
    id: 2,
    title: "Headphones",
    category: "headphones",
  },
  {
    id: 3,
    title: "News & Events",
    category: "news & events",
  },
  {
    id: 4,
    title: "Speakers",
    category: "speakers",
  },
];

const extended_faqs = [
  {
    id: 1,
    title: "Shipping and returns",
    subtitle: "Quick, eco-friendly shipping hassle-free returns.",
    faqs: [
      {
        id: 1,
        question: "How long does shipping take?",
        answer:
          "We ship orders within 1-2 business days. Shipping times vary depending on the destination. You can expect your order to arrive within 3-5 business days.",
      },
      {
        id: 2,
        question: "What is your return policy?",
        answer:
          "We accept returns within 30 days of purchase. Items must be unworn and in their original condition. Return shipping is free for domestic orders.",
      },
      {
        id: 3,
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide. International shipping rates apply.",
      },
    ],
  },
  {
    id: 2,
    title: "Orders",
    subtitle: "Track your order, manage your account.",
    faqs: [
      {
        id: 1,
        question: "How do I track my order?",
        answer:
          "You can track your order by logging into your account and selecting the order you wish to track. You will receive an email with tracking information once your order has shipped.",
      },
      {
        id: 2,
        question: "Can I cancel or modify my order?",
        answer:
          "You can cancel or modify your order within 24 hours of placing it. After 24 hours, your order will be processed and cannot be changed.",
      },
      {
        id: 3,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and Apple Pay.",
      },
    ],
  },
  {
    id: 3,
    title: "Products",
    subtitle: "Learn more about our products and materials.",
    faqs: [
      {
        id: 1,
        question: "What materials are Eco Tunes headphones made from?",
        answer:
          "Eco Tunes headphones are crafted from sustainable materials such as recycled plastics, bamboo, and biodegradable fabrics to minimize environmental impact.",
      },
      {
        id: 2,
        question: "How long does the battery last on Eco Tunes headphones?",
        answer: "Eco Tunes headphones have a battery life of up to 20 hours.",
      },
      {
        id: 3,
        question: "Are Eco Tunes headphones water-resistant?",
        answer:
          "Eco Tunes headphones are water-resistant and can withstand light rain and sweat.",
      },
      {
        id: 4,
        question: "Can I make calls with Eco Tunes headphones?",
        answer:
          "Eco Tunes headphones have a built-in microphone that allows you to make calls hands-free.",
      },
      {
        id: 5,
        question: "What is the warranty period for Eco Tunes headphones?",
        answer:
          "Eco Tunes headphones come with a one-year warranty that covers manufacturing defects.",
      },
    ],
  },
];

const options = [
  {
    id: 1,
    value: "general",
    label: "General Inquiry",
  },
  {
    id: 2,
    value: "support",
    label: "Customer Support",
  },
  {
    id: 3,
    value: "sales",
    label: "Sales Inquiry",
  },
  {
    id: 4,
    value: "technical",
    label: "Technical Issues",
  },
];

const countries = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "Mexico", value: "mx" },
];

const states = [
  { label: "California", value: "ca" },
  { label: "New York", value: "ny" },
  { label: "Texas", value: "tx" },
];

const cards = [
  { id: 1, icon: icons.Visa },
  { id: 2, icon: icons.MasterCard },
  { id: 5, icon: icons.UnionPay },
  { id: 3, icon: icons.Maestro },
  { id: 4, icon: icons.Cirrus },
];

const slides = [
  {
    id: 0,
    image: "/images/sliders/slider-1.webp",
    title: "Digital Transformation Starts Here",
    subtitle: `Empower your business with modern, scalable, and user-centric digital solutions.
At Paramount Consultants, we blend strategy, design, and technology to accelerate your digital future.`,
  },
  {
    id: 1,
    image: "/images/sliders/slider-2.webp",
    title: "Seamless AEM Experiences",
    subtitle: `Unlock the full power of Adobe Experience Manager.
From integration to personalization, our AEM specialists help you deliver memorable customer journeys.`,
  },
  {
    id: 2,
    image: "/images/sliders/slider-3.webp",
    title: "Agile Delivery, Real Results",
    subtitle: `Fast, flexible, and focused on outcomes.
Our Agile project managers keep your goals at the centre, ensuring transparency, velocity, and client success.`,
  },
  {
    id: 3,
    image: "/images/sliders/slider-4.webp",
    title: "Build, Launch, Grow",
    subtitle: `From full-stack development to data-driven digital marketing, we help you build smart platforms and amplify your brand across every channel.`,
  },
];

const filterConfig = [
  {
    id: 1,
    type: "dropdown",
    options: [
      { id: 1, value: "best-selling", label: "Best selling" },
      { id: 2, value: "newest", label: "Newest" },
      { id: 3, value: "price-asc", label: "Price: Low to High" },
      { id: 4, value: "price-desc", label: "Price: High to Low" },
    ],
    placeholder: "Sort by",
  },
  {
    id: 2,
    type: "brand",
    options: [
      { id: 1, value: "cosmos", label: "Cosmos", quantity: 3, checked: false },
      { id: 2, value: "nova", label: "Nova", quantity: 8, checked: false },
    ],
    title: "Brand",
  },
  {
    id: 3,
    type: "in-stock",
    title: "In stock",
    checked: false,
  },
  {
    id: 4,
    type: "color",
    options: [
      {
        id: 1,
        value: "green",
        label: "Green",
        color: "var(--success-300",
        checked: false,
      },
      {
        id: 2,
        value: "orange",
        label: "Orange",
        color: "var(--orange-300)",
        checked: false,
      },
      {
        id: 3,
        value: "cyan",
        label: "Cyan",
        color: "var(--cyan-300)",
        checked: false,
      },
    ],
    title: "Color",
  },
  {
    id: 5,
    type: "price",
    title: "Price",
    min: 0,
    max: 5000,
    step: 50,
    unit: "$",
  },
];

export default {
  header_links,
  links,
  sublinks,
  social_links,
  breadcrumbs,
  collections,
  reviews,
  products,
  tabs,
  blog_posts,
  // support,
  accesories,
  specs,
  avatars,
  faqs,
  values,
  messages,
  timeline,
  blog_tabs,
  extended_faqs,
  options,
  featured_collections,
  countries,
  states,
  cards,
  slides,
  filterConfig,
};
