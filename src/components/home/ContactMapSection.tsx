import { businessInfo } from "@/content/business";

export default function ContactMapSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 animate-reveal">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">Visit Us</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-primary-950 mb-8">Store Location</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-900 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-950 mb-1">Our Address</h4>
                  <p className="text-primary-700/70 leading-relaxed">
                    {businessInfo.address.full}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-900 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-950 mb-3">Business Hours</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-primary-50">
                      <span className="text-sm font-bold text-primary-900 uppercase tracking-wider">Monday — Saturday</span>
                      <span className="text-sm font-medium text-primary-700/80">9:15 AM — 9:15 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary-50">
                      <span className="text-sm font-bold text-primary-900 uppercase tracking-wider">Sunday</span>
                      <span className="text-sm font-bold text-red-500 uppercase">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100 text-xs text-primary-900 font-bold flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span>Daily Lunch Break: 2:00 PM — 4:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href={businessInfo.googleMapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-elegant btn-primary-elegant inline-flex items-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-6-6m0 0l6-6m-6 6h18" /></svg>
                  Get Directions on Maps
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 animate-reveal stagger-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-900/5 rounded-[40px] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative aspect-square md:aspect-[16/12] rounded-[40px] overflow-hidden elegant-shadow border-8 border-white">
                <iframe
                  src={businessInfo.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SagO Store Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
