import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo } from "@/content/business";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${businessInfo.name}. Learn how we collect, use, and protect customer information.`,
  alternates: { canonical: `${businessInfo.seo.siteUrl}/privacy/` },
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact us through this website, WhatsApp, phone, social media, or in-store, we may collect details such as your name, phone number, email address, enquiry subject, message, and product interests.",
      "We may also receive limited technical information such as browser type, device information, pages visited, and approximate location from analytics, maps, embedded widgets, or standard website logs.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use your information to respond to enquiries, confirm product availability, provide pricing, support store visits, improve our products and services, handle feedback, and maintain the security and performance of the website.",
      "We do not sell customer personal information.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "This website may use third-party services such as FormSubmit for contact form delivery, Google Maps for location display, Elfsight for Google review embeds, and social media platforms for Instagram and Facebook links.",
      "These third parties may process information according to their own privacy policies when you interact with their services.",
    ],
  },
  {
    title: "Consent and Customer Choices",
    body: [
      "By submitting a form, calling us, messaging us, or otherwise sharing your details, you consent to us using that information to respond to your request and provide related service.",
      "You may ask us to correct, update, or delete personal information you have shared with us, subject to any legal or business record requirements.",
    ],
  },
  {
    title: "Data Retention and Security",
    body: [
      "We keep customer enquiry information only as long as reasonably needed for customer support, business records, dispute handling, and legal compliance.",
      "We use reasonable safeguards to protect information, but no internet transmission or storage method can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Our website and services are intended for general customers. If a minor contacts us, we expect a parent or guardian to be involved for purchases or service requests.",
    ],
  },
  {
    title: "Updates to This Policy",
    body: [
      "We may update this Privacy Policy when our services, website features, or legal requirements change. The latest version will be posted on this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Privacy Policy", url: "/privacy/" }]} />

      <main className="min-h-screen pt-32 pb-24 gradient-bg-elegant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary-950 mb-4">Privacy Policy</h1>
            <p className="text-primary-700/70 leading-relaxed">
              Last updated: May 25, 2026. This policy explains how {businessInfo.name} handles information collected through this website and customer contact channels.
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
              <h2 className="text-2xl font-display font-bold mb-4">Contact for Privacy Requests</h2>
              <p className="text-primary-100/80 leading-relaxed mb-5">
                For privacy questions, correction requests, or deletion requests, contact us using the details below.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <a href={`tel:${businessInfo.phone}`} className="rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15 transition-colors">{businessInfo.phoneDisplay}</a>
                <a href={`mailto:${businessInfo.email}`} className="rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15 transition-colors">{businessInfo.email}</a>
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/terms" className="btn-elegant btn-primary-elegant">Terms &amp; Conditions</Link>
            <Link href="/contact" className="btn-elegant btn-secondary-elegant">Contact Us</Link>
          </div>
        </div>
      </main>
    </>
  );
}
