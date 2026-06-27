import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { Chatbot } from "@/components/chatbot";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holistic Health Clinic",
  description: "Holistic Health Clinic provides expert physiotherapy, clinical nutrition, and counselling in Vikhroli East, Mumbai. Over 20+ years of practicing experience. Recover from back pain, sports injuries, and stress naturally.",
  keywords: [
    "Holistic Health Clinic",
    "physiotherapy in Vikhroli East",
    "best physiotherapist in Vikhroli East",
    "physiotherapy clinic in Mumbai",
    "clinical nutrition Vikhroli East",
    "counselling Vikhroli East",
    "back pain treatment Mumbai",
    "physical therapist near me"
  ],
  authors: [{ name: "Holistic Health Clinic" }],
  openGraph: {
    title: "Holistic Health Clinic",
    description: "Expert physiotherapy, diet planning, and counselling services in Vikhroli East, Mumbai by Holistic Health Clinic. Over 20+ years of practicing experience.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Holistic Health Clinic",
    "image": "https://holistichealthclinic.in/clinic-logo.png",
    "@id": "https://holistichealthclinic.in",
    "url": "https://holistichealthclinic.in",
    "telephone": "+91-9987258931", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Raj Legacy, Shop No. 1, Ground Floor",
      "addressLocality": "Vikhroli East, Mumbai",
      "postalCode": "400083",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.1118,
      "longitude": 72.9272
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    },
    "medicalSpecialty": [
      "Physiotherapy",
      "Dietetics"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={null}>
              <PageLoader />
            </Suspense>
            <AnalyticsTracker />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Chatbot />
            <CookieBanner />
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

