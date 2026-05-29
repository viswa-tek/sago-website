import { products, productCategories } from "@/content/products";
import Link from "next/link";

export const metadata = {
  title: "Our Product Catalog",
  description: "Explore our wide range of mobile and computer accessories including covers, chargers, tempered glass, keyboards, and more.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 gradient-bg-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-reveal">
          <h1 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3 text-center">Premium Catalog</h1>
          <p className="text-4xl md:text-6xl font-display font-extrabold text-primary-950 text-center mb-6">Our Collection</p>
          <div className="w-24 h-1 bg-primary-900 mx-auto rounded-full mb-8" />
          <p className="text-center text-primary-700/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Every accessory in our store is hand-picked for quality, durability, and style. Browse our extensive collection of over 38+ product types.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 animate-reveal stagger-1">
          {productCategories.map((cat) => (
            <a 
              key={cat.id} 
              href={`#${cat.slug}`} 
              className="px-8 py-3 rounded-full bg-white border border-primary-100 text-primary-900 font-bold hover:bg-primary-900 hover:text-white hover:shadow-xl hover:shadow-primary-900/10 transition-all"
            >
              {cat.name}
            </a>
          ))}
        </div>

        {/* Product Sections */}
        <div className="space-y-32">
          {productCategories.map((category) => (
            <section key={category.id} id={category.slug} className="scroll-mt-32">
              <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 border-b border-primary-100 pb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-950 mb-2">{category.name}</h2>
                  <p className="text-primary-700/60 max-w-xl">{category.description}</p>
                </div>
                <div className="px-6 py-2 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest">
                  {category.productCount}+ Items
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products
                  .filter((p) => p.category === category.id)
                  .map((product, idx) => (
                    <div 
                      key={product.id} 
                      className={`group bg-white rounded-[32px] p-5 elegant-shadow animate-reveal stagger-${(idx % 4) + 1}`}
                    >
                      <div className="aspect-square overflow-hidden rounded-[24px] mb-6 bg-primary-50 relative">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-primary-200">
                             <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-2 gap-4">
                          <h3 className="font-display font-bold text-lg text-primary-950 group-hover:text-primary-600 transition-colors leading-tight">
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-xs text-primary-700/60 line-clamp-2 mb-6 h-8">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary-50">
                          <span className="text-sm font-bold text-primary-900">{product.priceRange}</span>
                          <Link 
                            href="/contact" 
                            className="w-10 h-10 rounded-full bg-primary-50 text-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-all shadow-sm"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-32 text-center animate-reveal">
          <div className="inline-block glass-card p-12 rounded-[40px] border-primary-100 max-w-3xl">
            <h3 className="text-3xl font-display font-bold text-primary-950 mb-4">Can&apos;t find what you need?</h3>
            <p className="text-primary-700/60 mb-10 text-lg">
              We stock hundreds of items not listed online. Contact us on WhatsApp for live availability and pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-elegant btn-primary-elegant">
                Visit Store
              </Link>
              <a href="https://wa.me/918438887716" className="btn-elegant btn-secondary-elegant !text-[#25D366] !border-[#25D366] hover:!bg-green-50">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
