import Link from "next/link";
import { featuredProducts } from "@/content/products";

export default function FeaturedProductsSection() {
  return (
    <section className="py-24 gradient-bg-elegant overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-reveal">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">The Gold Standard</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-primary-950 mb-2">Exquisite Tech Spares</p>
            <p className="text-primary-700/60">Discover our collection of high-performance mobile essentials and computer masterpieces, engineered for excellence.</p>
          </div>
          <Link href="/products" className="text-primary-900 font-bold flex items-center gap-2 group whitespace-nowrap">
            View All Products
            <span className="w-8 h-8 rounded-full border border-primary-100 flex items-center justify-center group-hover:bg-primary-900 group-hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, idx) => (
            <div 
              key={product.id} 
              className={`group bg-white rounded-3xl p-4 elegant-shadow animate-reveal stagger-${(idx % 4) + 1}`}
            >
              <div className="aspect-square overflow-hidden rounded-2xl mb-6 bg-primary-50 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary-900 uppercase tracking-wider">
                  Featured
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-bold text-lg text-primary-950 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-sm font-bold text-primary-900">{product.priceRange?.split(' - ')[0]}</div>
                </div>
                <p className="text-xs text-primary-700/60 line-clamp-2 mb-6 h-8">
                  {product.description}
                </p>
                <Link 
                  href="/contact" 
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-50 text-primary-900 text-sm font-bold hover:bg-primary-900 hover:text-white transition-all"
                >
                  Check Availability
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
