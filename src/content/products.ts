export interface Product {
  id: string;
  name: string;
  category: "mobile" | "computer";
  description: string;
  image?: string;
  featured?: boolean;
  priceRange?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const productCategories: ProductCategory[] = [
  {
    id: "mobile",
    name: "Mobile Accessories",
    slug: "mobile-accessories",
    description:
      "Complete range of mobile accessories including covers, chargers, earphones, and more.",
    image: "/images/categories/mobile-accessories.png",
    productCount: 15,
  },
  {
    id: "computer",
    name: "Computer Accessories",
    slug: "computer-accessories",
    description:
      "Premium computer peripherals and accessories for laptops and desktops.",
    image: "/images/categories/computer-accessories.png",
    productCount: 23,
  },
];

export const products: Product[] = [
  // Mobile Accessories
  {
    id: "mobile-covers",
    name: "Mobile Covers",
    category: "mobile",
    description:
      "Stylish and protective mobile covers for all major brands including Samsung, iPhone, Realme, Redmi, Vivo, and OPPO.",
    image: "/images/products/mobile-covers.png",
    featured: true,
    priceRange: "₹99 - ₹999",
  },
  {
    id: "tempered-glass",
    name: "Tempered Glass",
    category: "mobile",
    description:
      "Premium quality tempered glass screen protectors for all phone models. 9H hardness, anti-scratch, and bubble-free installation.",
    image: "/images/products/tempered-glass.png",
    featured: true,
    priceRange: "₹99 - ₹499",
  },
  {
    id: "fast-chargers",
    name: "Fast Chargers",
    category: "mobile",
    description:
      "High-speed chargers supporting QC 3.0, PD, and VOOC fast charging protocols from top brands.",
    image: "/images/products/fast-chargers.png",
    featured: true,
    priceRange: "₹199 - ₹1,499",
  },
  {
    id: "usb-cables",
    name: "USB Cables",
    category: "mobile",
    description:
      "Durable USB Type-C, Micro USB, and Lightning cables for fast charging and data transfer.",
    image: "/images/products/usb-cables.png",
    priceRange: "₹49 - ₹499",
  },
  {
    id: "data-cables",
    name: "Data Cables",
    category: "mobile",
    description:
      "High-speed data transfer cables compatible with all devices. Available in various lengths.",
    image: "/images/products/data-cables.png",
    priceRange: "₹99 - ₹599",
  },
  {
    id: "earphones",
    name: "Earphones",
    category: "mobile",
    description:
      "Wired earphones with mic from brands like Samsung, JBL, boAt, and more. Crystal clear audio quality.",
    image: "/images/products/earphones.jpg",
    featured: true,
    priceRange: "₹99 - ₹1,999",
  },
  {
    id: "neckbands",
    name: "Neckbands",
    category: "mobile",
    description:
      "Wireless Bluetooth neckbands with long battery life and premium sound quality.",
    image: "/images/products/neckbands.jpg",
    priceRange: "₹299 - ₹2,499",
  },
  {
    id: "tws-earbuds",
    name: "TWS Earbuds",
    category: "mobile",
    description:
      "True Wireless Stereo earbuds with noise cancellation, touch controls, and compact charging cases.",
    image: "/images/products/tws-earbuds.png",
    featured: true,
    priceRange: "₹399 - ₹4,999",
  },
  {
    id: "bluetooth-speakers",
    name: "Bluetooth Speakers",
    category: "mobile",
    description:
      "Portable Bluetooth speakers with powerful bass, waterproof designs, and long battery life.",
    image: "/images/products/bluetooth-speakers.png",
    priceRange: "₹499 - ₹5,999",
  },
  {
    id: "power-banks",
    name: "Power Banks",
    category: "mobile",
    description:
      "High-capacity power banks from 10000mAh to 20000mAh with fast charging support.",
    image: "/images/products/power-banks.png",
    featured: true,
    priceRange: "₹499 - ₹2,999",
  },
  {
    id: "mobile-holders",
    name: "Mobile Holders",
    category: "mobile",
    description:
      "Car mounts, desk stands, and bike holders for secure phone placement.",
    image: "/images/products/mobile-holders.jpg",
    priceRange: "₹149 - ₹999",
  },
  {
    id: "car-chargers",
    name: "Car Chargers",
    category: "mobile",
    description:
      "Dual USB and USB-C car chargers with fast charging for on-the-go power.",
    image: "/images/products/car-chargers.jpg",
    priceRange: "₹199 - ₹999",
  },
  {
    id: "otg-adapters",
    name: "OTG Adapters",
    category: "mobile",
    description:
      "USB OTG adapters and converters for connecting USB devices to your smartphone.",
    image: "/images/products/otg-adapters.jpg",
    priceRange: "₹49 - ₹299",
  },
  {
    id: "memory-cards",
    name: "Memory Cards",
    category: "mobile",
    description:
      "MicroSD cards from 16GB to 512GB. Class 10 and UHS-I for high-speed performance.",
    image: "/images/products/memory-cards.jpg",
    priceRange: "₹199 - ₹2,999",
  },
  {
    id: "pendrives",
    name: "Pendrives",
    category: "mobile",
    description:
      "USB 2.0 and 3.0 pen drives from 8GB to 128GB from trusted brands.",
    image: "/images/products/pendrives.jpg",
    priceRange: "₹149 - ₹1,499",
  },

  // Computer Accessories
  {
    id: "keyboards",
    name: "Keyboards",
    category: "computer",
    description:
      "Wired and wireless keyboards including mechanical, membrane, and ergonomic options.",
    image: "/images/products/keyboards.jpg",
    featured: true,
    priceRange: "₹299 - ₹4,999",
  },
  {
    id: "mouse",
    name: "Mouse",
    category: "computer",
    description:
      "Optical and laser mice - wired and wireless options for gaming and office use.",
    image: "/images/products/mouse.jpg",
    featured: true,
    priceRange: "₹149 - ₹3,999",
  },
  {
    id: "wireless-kb-mouse-combo",
    name: "Wireless Keyboard and Mouse Combo",
    category: "computer",
    description:
      "Convenient wireless keyboard and mouse sets with single USB receiver.",
    image: "/images/products/keyboard-mouse.png",
    priceRange: "₹599 - ₹3,999",
  },
  {
    id: "laptop-chargers",
    name: "Laptop Chargers",
    category: "computer",
    description:
      "Compatible laptop chargers for HP, Dell, Lenovo, Asus, Acer, and Apple MacBook.",
    image: "/images/products/laptop-chargers.jpg",
    featured: true,
    priceRange: "₹499 - ₹3,999",
  },
  {
    id: "cooling-pads",
    name: "Cooling Pads",
    category: "computer",
    description:
      "Laptop cooling pads with powerful fans to prevent overheating during heavy usage.",
    image: "/images/products/cooling-pads.jpg",
    priceRange: "₹399 - ₹2,499",
  },
  {
    id: "usb-hubs",
    name: "USB Hubs",
    category: "computer",
    description:
      "Multi-port USB hubs including USB 3.0 and Type-C hubs with HDMI and card readers.",
    image: "/images/products/usb-hubs.jpg",
    priceRange: "₹299 - ₹2,999",
  },
  {
    id: "external-hard-drives",
    name: "External Hard Drives",
    category: "computer",
    description:
      "Portable external hard drives from 500GB to 4TB from Seagate, WD, and Toshiba.",
    image: "/images/products/external-hard-drives.jpg",
    priceRange: "₹2,499 - ₹9,999",
  },
  {
    id: "ssds",
    name: "SSDs",
    category: "computer",
    description:
      "SATA and NVMe SSDs for blazing fast storage upgrades. 128GB to 2TB capacities.",
    image: "/images/products/ssds.jpg",
    featured: true,
    priceRange: "₹1,499 - ₹12,999",
  },
  {
    id: "ram",
    name: "RAM",
    category: "computer",
    description:
      "DDR4 and DDR5 RAM modules for laptops and desktops. 4GB to 32GB options.",
    image: "/images/products/ram.jpg",
    priceRange: "₹999 - ₹8,999",
  },
  {
    id: "webcams",
    name: "Webcams",
    category: "computer",
    description:
      "HD and Full HD webcams for video calls, meetings, and streaming.",
    image: "/images/products/webcams.jpg",
    priceRange: "₹499 - ₹4,999",
  },
];

export const mobileProducts = products.filter((p) => p.category === "mobile");
export const computerProducts = products.filter(
  (p) => p.category === "computer"
);
export const featuredProducts = products.filter((p) => p.featured);
