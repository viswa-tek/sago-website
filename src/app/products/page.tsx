import type { Metadata } from "next";
import { products, productCategories } from "@/content/products";
import { businessInfo } from "@/content/business";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile & Computer Accessories Catalog",
  description:
    "Shop mobile covers, tempered glass, chargers, earphones, keyboards, mouse, laptop chargers, SSD, RAM, and computer accessories in Maharaja Nagar, Tirunelveli.",
  alternates: { canonical: `${businessInfo.seo.siteUrl}/products/` },
};

export default function ProductsPage() {
  return <ComingSoonPage />;
}
