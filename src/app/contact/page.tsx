import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${businessInfo.name} in Maharaja Nagar, Tirunelveli for mobile accessories, computer accessories, mobile service, laptop service, SIM cards, recharges, Xerox, and printout services.`,
  alternates: { canonical: `${businessInfo.seo.siteUrl}/contact/` },
};

export default function ContactPage() {
  return <ComingSoonPage />;
}
