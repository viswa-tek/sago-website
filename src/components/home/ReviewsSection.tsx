import Script from "next/script";

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">Happy Customers</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-primary-950 mb-6">Voices of SagO</p>
          <div className="w-24 h-1 bg-primary-900 mx-auto rounded-full" />
        </div>

        <div className="animate-reveal stagger-2 min-h-[400px]">
          {/* Elfsight Google Reviews Widget */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-2a331013-dcdf-4bfe-ba1d-489bff6399ee" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
