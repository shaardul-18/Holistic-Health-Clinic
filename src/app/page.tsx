import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Star, ArrowRight, Calendar, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import LineWaves from "@/components/reactbits/LineWaves";
import Threads from "@/components/reactbits/Threads";
import Particles from "@/components/reactbits/Particles";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      <section className="relative flex-1 flex flex-col items-center justify-center py-32 px-6 text-center overflow-hidden min-h-[85vh]">
        {/* Animated LineWaves Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <LineWaves
            speed={0.25}
            innerLineCount={32}
            outerLineCount={36}
            warpIntensity={0.8}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.4}
            color1="#1886C6"
            color2="#1FA44B"
            color3="#1886C6"
            enableMouseInteraction={true}
            mouseInfluence={1.5}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background pointer-events-none" style={{ zIndex: 2 }}></div>
        
        {/* Decorative background shapes */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" style={{ zIndex: -3 }} />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" style={{ zIndex: -3 }} />

        <div className="space-y-8 max-w-4xl relative z-10 mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
            Holistic Health Clinic
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Expert care for your body and mind. Dedicated Physiotherapy, Nutrition, and Professional Counselling in Vikhroli, Mumbai.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton className="text-lg px-10 py-4 w-full sm:w-auto shadow-primary/25" />
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline py-3 px-6 flex items-center gap-2">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="pt-16 grid grid-cols-2 gap-8 max-w-xl mx-auto text-center border-t border-border pt-12 mt-12">
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-primary">5000+</h4>
              <p className="text-sm text-muted-foreground">Patients Treated</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-primary">20+</h4>
              <p className="text-sm text-muted-foreground">Years Practicing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="py-24 bg-primary/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 space-y-12 mb-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Patient Reviews</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Read what our patients have to say about their recovery journey with us.
            </p>
          </div>
        </div>
        <ReviewsMarquee />
      </section>

      <section className="relative py-24 px-6 bg-background overflow-hidden">
        {/* Threads Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <Threads
            amplitude={1.2}
            distance={0.3}
            enableMouseInteraction={true}
            color={[0.1, 0.6, 0.95]}
          />
        </div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Upcoming Events & Camps</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join us in our community outreach programs. We regularly host free camps to promote health awareness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-card p-8 rounded-3xl shadow-sm border border-border flex flex-col gap-6 group hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Free Camp</div>
                <h3 className="text-2xl font-bold mb-3">Free BMD (Bone Mineral Density) Camp</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Early detection of osteoporosis and osteopenia is crucial for preventing fractures. Join our free Bone Mineral Density check-up camp. Our experts will assess your bone health and provide personalized dietary and physiotherapy advice.
                </p>
              </div>
              <WhatsAppButton className="mt-auto self-start hover:bg-[#128C7E]">Register Now</WhatsAppButton>
            </div>

            {/* Event 2 */}
            <div className="bg-card p-8 rounded-3xl shadow-sm border border-border flex flex-col gap-6 group hover:shadow-md transition-shadow">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Awareness Program</div>
                <h3 className="text-2xl font-bold mb-3">Child Mental Health Camp</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Children face unique stresses in today's fast-paced world. This specialized camp focuses on early identification of behavioral issues, anxiety, and learning difficulties, offering a safe space for evaluation and parental guidance.
                </p>
              </div>
              <WhatsAppButton className="mt-auto self-start hover:bg-[#128C7E]">Register Now</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-card border-t border-border/50 overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <Particles
            particleCount={40}
            particleColor="#4ade80"
            particleSize={3}
            speed={0.4}
          />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
          <Link href="/services" className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <ArrowRight className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Our Services</h3>
            <p className="text-muted-foreground">Discover our comprehensive Physiotherapy, Counselling, and Nutrition treatments.</p>
          </Link>
          
          <Link href="/about" className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
              <ArrowRight className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Meet The Doctor</h3>
            <p className="text-muted-foreground">Learn about Dr. Shreya Ghag's qualifications and holistic approach to healthcare.</p>
          </Link>
          
          <Link href="/location" className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <ArrowRight className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Visit Us</h3>
            <p className="text-muted-foreground">Find our clinic in Vikhroli, view photos, and get directions via Google Maps.</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Holistic Health</h4>
            <p className="text-sm text-slate-400">
              Physiotherapy, Nutrition & Counselling clinic dedicated to your complete well-being.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/location" className="hover:text-primary transition-colors">Location</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">+91 8591180090</li>
              <li className="flex items-center">Vikhroli, Mumbai</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>© {new Date().getFullYear()} Holistic Health Clinic. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
