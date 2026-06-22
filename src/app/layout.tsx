import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { NewsletterPopup } from "@/components/newsletter-popup";
import { Chatbot } from "@/components/chatbot";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holistic Health Clinic | Vikhroli, Mumbai",
  description: "Expert healthcare for your body and mind. Physiotherapy and counselling services in Vikhroli, Mumbai by Dr. Shreya Ghag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AnalyticsTracker />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <NewsletterPopup />
            <Chatbot />
            <CookieBanner />
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
