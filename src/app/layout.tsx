import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import AnalyticsEvents from "@/components/analytics/AnalyticsEvents";
import { businessInfo } from "@/content/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ||
  (businessInfo.analytics.googleAnalyticsId !== "G-XXXXXXXXXX" ? businessInfo.analytics.googleAnalyticsId : "");

const googleSearchConsoleId =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  (businessInfo.analytics.googleSearchConsoleId !== "XXXXXXXXXX" ? businessInfo.analytics.googleSearchConsoleId : "");

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.seo.siteUrl),
  title: {
    default: businessInfo.name,
    template: `%s | ${businessInfo.shortName}`,
  },
  description: businessInfo.seo.description,
  keywords: [...businessInfo.seo.keywords],
  openGraph: {
    title: businessInfo.seo.title,
    description: businessInfo.seo.description,
    url: businessInfo.seo.siteUrl,
    siteName: businessInfo.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: businessInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: businessInfo.seo.title,
    description: businessInfo.seo.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    ...(googleSearchConsoleId ? { google: googleSearchConsoleId } : {}),
  },
  alternates: {
    canonical: businessInfo.seo.siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
      </head>
      <body className="font-sans antialiased bg-white text-surface-900">
        {googleAnalyticsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        {googleAnalyticsId && <AnalyticsEvents />}
      </body>
    </html>
  );
}
