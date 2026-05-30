import type { Metadata } from "next";
import { businessInfo } from "@/content/business";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${businessInfo.name} in Maharaja Nagar, Tirunelveli for mobile accessories, computer accessories, mobile service, laptop service, SIM cards, recharges, Xerox, and printout services.`,
  alternates: { canonical: `${businessInfo.seo.siteUrl}/contact/` },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact/" }]} />

      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary-950 via-primary-900 to-surface-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-primary-100/80 max-w-2xl mx-auto">Have a question or need a product? Get in touch with us through any of these channels.</p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href={`tel:${businessInfo.phone}`} className="bg-primary-50 rounded-2xl p-6 text-center card-hover group" id="contact-call-card">
              <div className="w-14 h-14 rounded-xl bg-primary-500 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-bold text-surface-900 mb-1">Call Us</h3>
              <p className="text-primary-600 text-sm font-medium">{businessInfo.phoneDisplay}</p>
            </a>

            <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-50 rounded-2xl p-6 text-center card-hover group" id="contact-whatsapp-card">
              <div className="w-14 h-14 rounded-xl bg-green-500 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="font-bold text-surface-900 mb-1">WhatsApp</h3>
              <p className="text-green-600 text-sm font-medium">Chat with us</p>
            </a>

            <a href={businessInfo.googleMapsLink} target="_blank" rel="noopener noreferrer" className="bg-orange-50 rounded-2xl p-6 text-center card-hover group" id="contact-directions-card">
              <div className="w-14 h-14 rounded-xl bg-orange-500 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-bold text-surface-900 mb-1">Visit Store</h3>
              <p className="text-orange-600 text-sm font-medium">Get Directions</p>
            </a>

            <div className="bg-purple-50 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-purple-500 text-white flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-surface-900 mb-1">Store Hours</h3>
              <p className="text-purple-600 text-sm font-medium">Mon-Sat 9:15AM-9:15PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100/50">
              <h2 className="text-2xl font-bold text-surface-900 mb-2">Send Us a Message</h2>
              <p className="text-surface-800/60 text-sm mb-6">Fill out the form and we&apos;ll get back to you as soon as possible.</p>
              <ContactForm />
            </div>

            {/* Map & Address */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-primary-100 h-[300px]">
                <iframe
                  src={businessInfo.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                />
              </div>
              <div className="bg-white rounded-2xl p-6 border border-primary-100/50">
                <h3 className="font-bold text-surface-900 mb-3">Store Address</h3>
                <p className="text-surface-800/60 text-sm leading-relaxed">{businessInfo.address.full}</p>
                <h3 className="font-bold text-surface-900 mt-4 mb-2">Business Hours</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between items-start text-sm pb-3 border-b border-primary-100/50">
                    <span className="text-surface-800/80 font-medium">Monday - Saturday</span>
                    <div className="text-right text-surface-900 font-medium space-y-1">
                      <div>9:15 AM - 2:00 PM</div>
                      <div className="text-[10px] text-primary-500 font-bold uppercase tracking-wider">Lunch Break</div>
                      <div>4:00 PM - 9:15 PM</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-surface-800/80 font-medium">Sunday</span>
                    <span className="text-red-500 font-bold tracking-wide">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
