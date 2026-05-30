import Link from "next/link";
import { businessInfo } from "@/content/business";
import { services, type Service } from "@/content/services";

function ServiceIcon({ group }: { group: Service["group"] }) {
  const iconClass = "h-7 w-7";

  if (group === "Repairs") {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-2.9-2.9 2.3-2.5Z" />
      </svg>
    );
  }

  if (group === "Connectivity") {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.3 16.7a5.2 5.2 0 0 1 7.4 0M5.2 13.6a9.7 9.7 0 0 1 13.6 0M2.5 10.4a14 14 0 0 1 19 0M12 20h.01" />
      </svg>
    );
  }

  if (group === "Retail") {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 15h2" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M7 14h10v7H7v-7Z" />
    </svg>
  );
}

const groupStyles: Record<Service["group"], string> = {
  Repairs: "bg-blue-50 text-blue-700 border-blue-100",
  Connectivity: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Retail: "bg-amber-50 text-amber-700 border-amber-100",
  Utility: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100",
};

const serviceFlow = ["Tell us the issue", "Visit the store", "Get the right support"];

export default function ServicesSection() {
  const repairServices = services.filter((service) => service.group === "Repairs");
  const quickServices = services.filter((service) => service.group !== "Repairs");
  const areaChips = businessInfo.nearbyAreas;

  return (
    <section id="services" className="py-24 bg-[linear-gradient(180deg,#f7fafc_0%,#ffffff_48%,#eef5fb_100%)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-stretch mb-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary-950 p-8 sm:p-10 lg:p-12 text-white shadow-2xl shadow-primary-900/20 animate-reveal">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(72,187,239,0.28),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-sm mb-7">
                <span className="h-2 w-2 rounded-full bg-accent-400" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-primary-100">Services We Offer</span>
              </div>
              <h2 className="max-w-3xl text-4xl md:text-6xl font-display font-black tracking-tight leading-tight mb-6">
                Quick local help for devices, documents, and connections
              </h2>
              <p className="max-w-2xl text-primary-100/78 text-lg leading-8">
                SagO brings mobile service, laptop and desktop support, recharges, SIM cards, feature phones, Xerox, and printout services together in one walk-in friendly store.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {serviceFlow.map((step, index) => (
                  <div key={step} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur">
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-sm font-black text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm font-bold text-white">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="flex min-h-[560px] flex-col rounded-[2rem] border border-primary-100 bg-white p-7 shadow-[0_24px_70px_-42px_rgba(16,42,67,0.75)] animate-reveal stagger-1">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-primary-500 mb-3">Nearby Coverage</p>
            <h3 className="text-2xl font-display font-bold text-primary-950 mb-4">Serving Maharaja Nagar and nearby areas</h3>
            <div className="flex flex-wrap gap-2">
              {areaChips.map((area) => (
                <span
                  key={area}
                  tabIndex={0}
                  className="rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-xs font-bold text-primary-700 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400 hover:bg-accent-500 hover:text-white hover:shadow-lg hover:shadow-accent-500/20 focus-visible:-translate-y-0.5 focus-visible:border-accent-400 focus-visible:bg-accent-500 focus-visible:text-white focus-visible:shadow-lg focus-visible:shadow-accent-500/20"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
              <a href={`tel:${businessInfo.phone}`} className="rounded-2xl bg-primary-950 px-4 py-4 text-center text-sm font-bold text-white transition hover:bg-primary-800">
                Call Now
              </a>
              <a href={businessInfo.whatsapp} className="rounded-2xl bg-[#25D366] px-4 py-4 text-center text-sm font-bold text-white transition hover:bg-[#1fb85a]">
                WhatsApp
              </a>
            </div>
          </aside>
        </div>

        <div className="mb-12 grid lg:grid-cols-3 gap-5">
          {repairServices.map((service, index) => (
            <article
              key={service.id}
              className={`group rounded-3xl border border-primary-100 bg-white p-6 sm:p-7 shadow-[0_22px_60px_-36px_rgba(16,42,67,0.62)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 animate-reveal stagger-${index + 1}`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${groupStyles[service.group]}`}>
                  <ServiceIcon group={service.group} />
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">Priority Service</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-950 mb-3">{service.title}</h3>
              <p className="text-sm leading-6 text-primary-700/70 mb-5">{service.description}</p>
              <div className="grid gap-2">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-primary-50 px-3 py-2 text-xs font-bold text-primary-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-primary-800">
                Enquire About {service.title}
              </Link>
            </article>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {quickServices.map((service, index) => (
            <Link
              key={service.id}
              href="/contact"
              className={`group rounded-2xl border border-primary-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_18px_50px_-34px_rgba(16,42,67,0.6)] animate-reveal stagger-${(index % 4) + 1}`}
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${groupStyles[service.group]}`}>
                <ServiceIcon group={service.group} />
              </div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary-500">{service.group}</p>
              <h3 className="text-lg font-display font-bold text-primary-950 mb-2 group-hover:text-primary-600 transition-colors">{service.title}</h3>
              <p className="text-sm leading-6 text-primary-700/65">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
