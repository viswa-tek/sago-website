import { businessInfo } from "@/content/business";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-primary-950">
      <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="/images/shop/shop-front.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/88" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,30,51,0.12),rgba(25,146,212,0.08),rgba(255,255,255,0.94))]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-xl shadow-primary-900/10">
                <img src="/logo.png" alt="SagO logo" className="h-full w-full object-contain p-2" />
              </div>
              <div>
                <p className="font-pristina text-6xl leading-none text-primary-950 sm:text-7xl">
                  {businessInfo.shortName}
                </p>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-primary-500">
                  Mobile & Computer Accessories
                </p>
              </div>
            </div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-accent-600">
              Website launching soon
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-primary-950 sm:text-6xl">
              SagO Mobile & Computer Accessories
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-surface-800 sm:text-lg">
              Our online store experience is getting ready. Until then, visit our Tirunelveli
              store or contact us directly for mobile accessories, computer accessories, chargers,
              storage, peripherals, and product availability.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center justify-center rounded-full bg-primary-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-primary-900/20 transition hover:bg-primary-800"
              >
                Call {businessInfo.phoneDisplay}
              </a>
              <a
                href={businessInfo.whatsapp}
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-green-700/15 transition hover:bg-[#1fb85a]"
              >
                WhatsApp Us
              </a>
              <a
                href={businessInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-7 py-4 text-sm font-bold text-primary-950 shadow-sm transition hover:border-primary-400"
              >
                Get Directions
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/70 bg-white/84 p-6 shadow-2xl shadow-primary-900/10 backdrop-blur sm:p-8">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-primary-500">
              Store details
            </p>
            <h2 className="text-2xl font-black text-primary-950">Open for walk-in customers</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-surface-800">
              <div>
                <p className="font-bold text-primary-950">Address</p>
                <p>{businessInfo.address.full}</p>
              </div>
              <div>
                <p className="font-bold text-primary-950">Business hours</p>
                <p>Monday - Saturday</p>
                <p>9:15 AM - 2:00 PM, 4:00 PM - 9:15 PM</p>
                <p className="text-red-600">Sunday closed</p>
              </div>
              <div>
                <p className="font-bold text-primary-950">Email</p>
                <a href={`mailto:${businessInfo.email}`} className="text-accent-600 hover:text-accent-500">
                  {businessInfo.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
