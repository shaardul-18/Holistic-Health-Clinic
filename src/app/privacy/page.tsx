import { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import LineWaves from "@/components/reactbits/LineWaves";

export const metadata: Metadata = {
  title: "Privacy Policy | Holistic Health Clinic",
  description: "Privacy Policy for Holistic Health Clinic.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 flex flex-col bg-background pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-4xl space-y-16">
        
        {/* Header */}
        <ScrollReveal animation="slide-up">
          <div className="relative py-12 px-6 text-center max-w-3xl mx-auto space-y-4 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <LineWaves
                speed={0.1}
                innerLineCount={10}
                outerLineCount={15}
                warpIntensity={0.2}
                rotation={0}
                edgeFadeWidth={0.2}
                colorCycleSpeed={0.5}
                brightness={0.15}
                color1="#1886C6"
                color2="#22c55e"
                color3="#1886C6"
                enableMouseInteraction={false}
              />
            </div>
            <div className="relative z-10 space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Privacy Policy</h1>
              <p className="text-muted-foreground font-medium">Last Updated: June 2026</p>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-muted-foreground">
          <ScrollReveal animation="fade-in" delay={150}>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
          <p>
            Welcome to the Holistic Health Clinic website. We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, 
            please contact us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
          <p>
            We automatically collect certain information when you visit, use, or navigate the website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our website, and other technical information.
          </p>
          <p>
            If you choose to subscribe to our newsletter, we collect your email address. We do not collect Protected Health Information (PHI) through our website forms or chatbot. All medical consultations and health-related disclosures should occur during your scheduled appointments.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
          <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>To send marketing and promotional communications:</strong> We may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences.</li>
            <li><strong>To improve our website:</strong> We may use your information to request feedback and to contact you about your use of our website.</li>
            <li><strong>To deliver services to the user:</strong> We may use your information to provide you with the requested service.</li>
            <li><strong>To respond to user inquiries:</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our services.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">4. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice. Our built-in analytics tracker uses anonymous session IDs to understand how users interact with our site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">5. Artificial Intelligence (Chatbot)</h2>
          <p>
            Our website features an AI-powered digital assistant. Conversations with this assistant are processed by a third-party AI provider (Google). Do not share sensitive medical or personal information with the chatbot. The chatbot provides general informational guidance and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may contact us using the WhatsApp button provided on our website.
          </p>
        </section>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
