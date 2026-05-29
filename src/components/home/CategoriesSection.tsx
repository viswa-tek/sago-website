import Link from "next/link";
import { productCategories } from "@/content/products";

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">Browse Our World</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-primary-950 mb-6">Curated Categories</p>
          <div className="w-24 h-1 bg-primary-900 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((category, idx) => (
            <Link 
              key={category.id} 
              href={`/products#${category.slug}`}
              className={`group relative overflow-hidden rounded-[32px] elegant-shadow animate-reveal stagger-${idx + 1}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-display font-bold mb-2">{category.name}</h3>
                <p className="text-white/80 mb-6 max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {category.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold bg-white/20 backdrop-blur-md px-6 py-2 rounded-full hover:bg-white hover:text-primary-900 transition-all">
                  View {category.productCount}+ Products
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
