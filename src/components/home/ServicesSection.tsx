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

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-primary-50/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 animate-reveal">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">Services We Offer</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-primary-950 mb-5">
              More than accessories
            </p>
            <p className="text-primary-700/70 text-lg leading-relaxed">
              SagO also supports everyday tech needs with mobile, laptop, and desktop service guidance, recharges, SIM cards, feature phones, Xerox, and printout services for customers around {businessInfo.nearbyAreas.join(", ")}.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-primary-900/15 transition hover:bg-primary-800"
          >
            Enquire About a Service
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`group min-h-[300px] rounded-3xl border border-primary-100 bg-white p-6 elegant-shadow transition-all duration-500 hover:-translate-y-1 hover:border-primary-200 animate-reveal stagger-${(index % 4) + 1}`}
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${groupStyles[service.group]}`}>
                <ServiceIcon group={service.group} />
              </div>
              <div className="mb-4 inline-flex rounded-full bg-primary-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-primary-500">
                {service.group}
              </div>
              <h3 className="text-xl font-display font-bold text-primary-950 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-primary-700/65 mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-primary-800/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
