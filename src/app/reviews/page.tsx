import type { Metadata } from "next";
import Script from "next/script";
import { averageRating, totalReviews } from "@/content/reviews";
import { businessInfo } from "@/content/business";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Read what customers say about ${businessInfo.name}. ${averageRating.toFixed(1)}★ average rating from ${totalReviews} verified reviews.`,
  alternates: { canonical: `${businessInfo.seo.siteUrl}/reviews/` },
};

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "w-6 h-6" : "w-4 h-4";
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`${cls} ${star <= rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Reviews", url: "/reviews/" }]} />

      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary-950 via-primary-900 to-surface-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Customer Reviews</h1>
          <p className="text-primary-100/80 max-w-2xl mx-auto">See what our valued customers have to say about their experience.</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-white border-b border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold text-surface-900">{averageRating.toFixed(1)}</div>
              <StarRating rating={Math.round(averageRating)} size="lg" />
              <p className="text-surface-800/60 mt-2">Based on {totalReviews} Google reviews</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a href={businessInfo.googleMapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-xl font-semibold text-sm hover:bg-primary-800 transition-colors shadow-lg">
                View on Google
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a href={businessInfo.googleReviewLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors border border-primary-100">
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Google Reviews */}
      <section className="py-16 bg-primary-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="google-reviews-widget bg-white rounded-2xl p-4 sm:p-6 border border-primary-100/50 shadow-sm min-h-[420px]">
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div className="elfsight-app-2a331013-dcdf-4bfe-ba1d-489bff6399ee" data-elfsight-app-lazy></div>
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  .google-reviews-widget h1,
                  .google-reviews-widget h2,
                  .google-reviews-widget h3,
                  .google-reviews-widget [class*="WidgetTitle"],
                  .google-reviews-widget [class*="widget-title"],
                  .google-reviews-widget [class*="Title__"],
                  .google-reviews-widget [class*="Header__Title"] {
                    display: none !important;
                  }
                `,
              }}
            />
          </div>

          {/* Write Review CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Share Your Experience</h2>
            <p className="text-white/80 mb-6">Had a great experience? Leave us a review on Google!</p>
            <a href={businessInfo.googleReviewLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors btn-shine shadow-xl" id="write-review-btn">
              Write a Review on Google
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
