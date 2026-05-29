import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo } from "@/content/business";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for using ${businessInfo.name}'s website and store services.`,
  alternates: { canonical: `${businessInfo.seo.siteUrl}/terms/` },
};

const sections = [
  {
    title: "Use of This Website",
    body: [
      "This website provides information about our mobile and computer accessory products, store location, contact options, customer reviews, and service availability.",
      "By using this website, you agree to use it lawfully and not interfere with its security, operation, or content.",
    ],
  },
  {
    title: "Product Information and Pricing",
    body: [
      "Product lists, images, descriptions, and price ranges are provided for general information. Actual availability, brand, model compatibility, and final price may vary in-store.",
      "Please contact us or visit the store to confirm current stock, exact pricing, warranty terms, and compatibility before purchase.",
    ],
  },
  {
    title: "Orders, Enquiries, and Store Purchases",
    body: [
      "Submitting an enquiry through the website does not confirm an order or reserve stock unless our team confirms it directly.",
      "Purchases, exchanges, warranty support, and service requests are handled according to the product condition, brand policy, bill details, and store verification.",
    ],
  },
  {
    title: "Third-Party Links and Embeds",
    body: [
      "The website may include links or embeds from Google Maps, Google reviews, WhatsApp, Instagram, Facebook, FormSubmit, and similar services.",
      "We are not responsible for third-party websites, policies, content, availability, or technical issues outside our control.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The SagO name, logo, website layout, product content, images, and written material on this website are owned by or licensed to us unless otherwise stated.",
      "You may not copy, reproduce, or reuse website content for commercial purposes without permission.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "We try to keep the website accurate and available, but we do not guarantee that it will always be error-free, uninterrupted, or fully up to date.",
      "To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential loss arising from website use, delayed response, third-party services, or reliance on general website information.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms and Conditions from time to time. The latest version will be posted on this page and will apply from the date shown.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Terms & Conditions", url: "/terms/" }]} />

      <main className="min-h-screen pt-32 pb-24 gradient-bg-elegant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary-950 mb-4">Terms &amp; Conditions</h1>
            <p className="text-primary-700/70 leading-relaxed">
              Last updated: May 25, 2026. These terms apply to your use of this website and interactions with {businessInfo.name}.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title} className="bg-white rounded-2xl border border-primary-100/60 p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-primary-950 mb-4">{section.title}</h2>
                <div className="space-y-3 text-primary-800/75 leading-relaxed">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="bg-primary-950 text-white rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-display font-bold mb-4">Business Contact</h2>
              <p className="text-primary-100/80 leading-relaxed mb-5">
                For questions about these terms, purchases, warranties, or service requests, contact us directly.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <a href={`tel:${businessInfo.phone}`} className="rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15 transition-colors">{businessInfo.phoneDisplay}</a>
                <a href={`mailto:${businessInfo.email}`} className="rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15 transition-colors">{businessInfo.email}</a>
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/privacy" className="btn-elegant btn-primary-elegant">Privacy Policy</Link>
            <Link href="/contact" className="btn-elegant btn-secondary-elegant">Contact Us</Link>
          </div>
        </div>
      </main>
    </>
  );
}
