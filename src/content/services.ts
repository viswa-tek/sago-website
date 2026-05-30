export interface Service {
  id: string;
  title: string;
  group: "Repairs" | "Connectivity" | "Retail" | "Utility";
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: "mobile-service",
    title: "Mobile Service",
    group: "Repairs",
    description: "Phone diagnosis and service support for common mobile issues.",
    highlights: ["Charging issues", "Display support", "General diagnosis"],
  },
  {
    id: "laptop-service",
    title: "Laptop Service",
    group: "Repairs",
    description: "Laptop service guidance, accessory replacement, and upgrade support.",
    highlights: ["SSD and RAM upgrades", "Charger support", "Performance checks"],
  },
  {
    id: "desktop-service",
    title: "Desktop Service",
    group: "Repairs",
    description: "Desktop computer service support for home and office systems.",
    highlights: ["Hardware support", "Peripheral setup", "Upgrade guidance"],
  },
  {
    id: "mobile-recharge",
    title: "All Recharges",
    group: "Connectivity",
    description: "Quick recharge support for major mobile networks and plans.",
    highlights: ["Prepaid recharge", "Plan guidance", "Fast processing"],
  },
  {
    id: "sim-card-sales",
    title: "SIM Card Sales",
    group: "Connectivity",
    description: "New SIM card purchase support with plan and activation guidance.",
    highlights: ["New connections", "Plan selection", "Activation help"],
  },
  {
    id: "feature-phones",
    title: "Feature Phones",
    group: "Retail",
    description: "New basic phones for calling, long battery life, and everyday use.",
    highlights: ["Simple phones", "Senior-friendly models", "Battery backup"],
  },
  {
    id: "xerox",
    title: "Xerox",
    group: "Utility",
    description: "Convenient document photocopy support for daily needs.",
    highlights: ["Document copies", "ID copies", "Local convenience"],
  },
  {
    id: "printout",
    title: "Printout",
    group: "Utility",
    description: "Printout support for forms, documents, and everyday paperwork.",
    highlights: ["Document printouts", "Forms", "Quick service"],
  },
];
