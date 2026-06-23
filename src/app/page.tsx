import { WhatsAppButton } from "@/components/WhatsAppButton";
import { 
  Star, 
  ArrowRight, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Activity, 
  Brain, 
  Apple, 
  Award, 
  Shield, 
  Check, 
  Phone, 
  MapPin, 
  Clock 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { FAQ } from "@/components/FAQ";
import LineWaves from "@/components/reactbits/LineWaves";
import Threads from "@/components/reactbits/Threads";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-background relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center py-28 md:py-36 px-6 text-center overflow-hidden min-h-[90vh]">
        {/* Animated LineWaves Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <LineWaves
            speed={0.2}
            innerLineCount={28}
            outerLineCount={32}
            warpIntensity={0.6}
            rotation={-30}
            edgeFadeWidth={0.1}
            colorCycleSpeed={0.8}
            brightness={0.35}
            color1="#1886C6"
            color2="#1FA44B"
            color3="#1886C6"
            enableMouseInteraction={true}
            mouseInfluence={1.2}
          />
        </div>
        
        {/* Dark overlay gradients for text readability in both light & dark themes */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" style={{ zIndex: 2 }}></div>

        <div className="space-y-8 max-w-4xl relative z-10 mx-auto">
          {/* Problem & Solution Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-3xl mx-auto">
            Chronic Pain? Get Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Physiotherapy</span> in Mumbai
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl mx-auto leading-relaxed">
            Don't let pain dictate your life. Get diagnosed and treated at <strong>Holistic Health Clinic</strong>. Rebuild strength, mobility, and mental peace with specialized physical therapy, nutrition, and clinical counselling.
          </p>
          
          {/* Hero CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <WhatsAppButton 
              className="text-base px-10 py-5 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all"
              message="Hello, I'd like to book an appointment for a Physiotherapy consultation at Holistic Health Clinic. Please let me know your availability."
            >
              Book Consultation Now
            </WhatsAppButton>
            <Link 
              href="/services" 
              className="group text-sm font-semibold text-foreground hover:text-primary transition-colors py-3.5 px-6 flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm w-full sm:w-auto hover:bg-card"
            >
              Explore Our Services 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Quick Metrics Sub-Header */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-border/80 mt-12">
            <div className="space-y-1">
              <h4 className="text-3xl md:text-4xl font-extrabold text-primary">20+</h4>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Years of Practicing</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-3xl md:text-4xl font-extrabold text-secondary">5,000+</h4>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Patients Treated</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-3xl md:text-4xl font-extrabold text-primary">150+</h4>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Google 5-Star Reviews</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-3xl md:text-4xl font-extrabold text-secondary">100%</h4>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Licensed & Reg.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONDITIONS WE TREAT (Pain Point Section) */}
      <section className="py-24 px-6 bg-gradient-to-b from-primary/5 via-background to-secondary/5 border-y border-border/50">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              What Is Stopping You From Living Pain-Free?
            </h2>
            <p className="text-muted-foreground text-lg">
              We diagnose the root cause of your discomfort to build lasting, drug-free rehabilitation programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Condition 1 */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all shadow-sm hover:shadow-md flex flex-col gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Neck & Back Pain</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Treatment for Sciatica, Cervical & Lumbar Spondylosis, herniated discs, and posture-induced spinal stiffness.
                </p>
              </div>
            </div>

            {/* Condition 2 */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-secondary/30 transition-all shadow-sm hover:shadow-md flex flex-col gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Shoulder & Upper Body</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fast recovery for Frozen Shoulder, Periarthritis, rotator cuff injuries, and upper back tightness.
                </p>
              </div>
            </div>

            {/* Condition 3 */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all shadow-sm hover:shadow-md flex flex-col gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Hip, Knee & Joint Arthritis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gentle physical therapy to relieve Osteoarthritis, reduce joint inflammation, and restore pain-free walking.
                </p>
              </div>
            </div>

            {/* Condition 4 */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-secondary/30 transition-all shadow-sm hover:shadow-md flex flex-col gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sports Injuries & Post-Op</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rehabilitation for ligament tears, muscle strains, and rehabilitation following knee/hip replacements.
                </p>
              </div>
            </div>

            {/* Condition 5 */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all shadow-sm hover:shadow-md flex flex-col gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                <Apple className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Clinical Diet & Nutrition</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Custom meal plans for sustainable weight loss, diabetic dietary control, muscle building, and recovery fuel.
                </p>
              </div>
            </div>

            {/* Condition 6 */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-secondary/30 transition-all shadow-sm hover:shadow-md flex flex-col gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Stress, Anxiety & Counselling</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Confidential psychological support for stress management, relationship conflicts, depression, and ADHD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATIVE SERVICES PATHWAYS */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Our Integrative Services
            </h2>
            <p className="text-muted-foreground text-lg">
              We connect physical movement, mental health, and clinical diet to ensure complete, long-lasting wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Physiotherapy */}
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-primary/25 transition-all">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <Activity className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Physiotherapy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Advanced therapeutic exercise, manual mobilization, and modern electrotherapy modalities for structural recovery.
                  </p>
                </div>
                <ul className="space-y-2.5 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Neck & Back Pain Rehab</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Frozen Shoulder Therapy</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Electrotherapy (IFT, SWD, US)</li>
                </ul>
              </div>
              <div className="pt-8">
                <WhatsAppButton 
                  className="w-full text-center justify-center"
                  message="Hello, I'd like to book an appointment for Physiotherapy treatment at Holistic Health Clinic."
                >
                  Book Physiotherapy
                </WhatsAppButton>
              </div>
            </div>

            {/* Card 2: Counselling */}
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-secondary/25 transition-all">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
                  <Brain className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Counselling</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A safe, confidential therapeutic space to address mental blocks, manage stress, and build cognitive resilience.
                  </p>
                </div>
                <ul className="space-y-2.5 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-secondary shrink-0" /> Cognitive Behavioral Therapy (CBT)</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-secondary shrink-0" /> Relationship & Parenting Guidance</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-secondary shrink-0" /> Adolescent & Child Psychology</li>
                </ul>
              </div>
              <div className="pt-8">
                <WhatsAppButton 
                  className="w-full text-center justify-center bg-secondary hover:bg-secondary/90 focus:ring-secondary"
                  message="Hello, I'd like to schedule a confidential Counselling session at Holistic Health Clinic."
                >
                  Book Counselling
                </WhatsAppButton>
              </div>
            </div>

            {/* Card 3: Nutrition */}
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-amber-500/25 transition-all">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center">
                  <Apple className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Diet & Nutrition</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Personalized nutritional coaching using food as medicine to control weight, build muscle, and optimize clinical recovery.
                  </p>
                </div>
                <ul className="space-y-2.5 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600 shrink-0" /> Body Composition Analysis</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600 shrink-0" /> Weight Reduction Programs</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-600 shrink-0" /> Clinical Diabetic Diet Planning</li>
                </ul>
              </div>
              <div className="pt-8">
                <WhatsAppButton 
                  className="w-full text-center justify-center bg-amber-600 hover:bg-amber-700 focus:ring-amber-600"
                  message="Hello, I'd like to inquire about a customized Diet & Nutrition Plan at Holistic Health Clinic."
                >
                  Consult for Diet Plan
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINIC CREDIBILITY & PROFILE (Authority Builder) */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-slate-950 dark:to-slate-900/30 border-y border-border/50 overflow-hidden relative">
        {/* Subtle background waves */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40" style={{ zIndex: 1 }}>
          <Threads
            amplitude={0.6}
            distance={0.2}
            enableMouseInteraction={false}
            color={[0.1, 0.6, 0.95]}
          />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Clinic/Doctor Portrait Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border bg-slate-100 dark:bg-slate-800">
              <Image 
                src="/dr-shreya-ghag.png" 
                alt="Holistic Health Clinic - Clinical Leadership"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              {/* Overlaid trust badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md rounded-xl p-3 border border-border text-center shadow-lg">
                <p className="text-[11px] uppercase tracking-wider font-bold text-primary">Clinical Registration No.</p>
                <p className="text-sm font-bold text-foreground mt-0.5">OT/PT-2013/05/3752</p>
              </div>
            </div>
          </div>

          {/* Clinic Profile Text details */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-1.5">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">Holistic Health Clinic</h2>
              <p className="text-lg md:text-xl text-primary font-semibold">Founder & Lead Physiotherapist: Dr. Shreya Ghag (P.T.)</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["B.P.Th (Physiotherapy)", "M.I.A.P Member", "P.G.D. Nutrition", "M.A. Clinical Psychology"].map((deg, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full">
                    {deg}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Holistic Health Clinic is a widely respected healthcare provider in Vikhroli East, Mumbai, known for its comprehensive, patient-first methodology. Backed by over 20+ years of practicing experience, our team successfully bridges the gap between physical motor rehabilitation, clinical nutrition, and emotional counselling.
              </p>
              <p>
                We operate from a state-of-the-art facility in Vikhroli East, providing cutting-edge pain relief and muscle rehabilitation therapies. Our focus is to deliver tailored recovery roadmaps in a supportive and healing environment.
              </p>
            </div>

            {/* Quote block */}
            <div className="border-l-4 border-secondary pl-4 italic text-foreground text-sm md:text-base bg-secondary/5 py-3 pr-4 rounded-r-xl">
              "We don't simply treat physical pain; we treat the individual. Our mental resilience and metabolic diet are intrinsically tied to our physical recovery. Aligning all three guarantees faster healing."
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <Link 
                href="/about" 
                className="text-sm font-bold text-primary hover:underline flex items-center gap-1.5"
              >
                Read Professional Bio & Credentials <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PATIENT REVIEWS (Social Proof) */}
      <section className="py-24 bg-primary/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 space-y-12 mb-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full">
              <Star className="h-3.5 w-3.5 fill-current text-amber-500 shrink-0" />
              Verified Patient Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Stories of Recovery & Relief</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Read real feedback from neighbors and athletes in Mumbai who recovered their mobility under our guidance.
            </p>
          </div>
        </div>
        <ReviewsMarquee />
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (Friction Reducer) */}
      <section className="py-24 px-6 bg-gradient-to-tr from-secondary/5 to-primary/5 dark:from-slate-900/30 dark:to-slate-950 border-y border-border/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about starting your physical and mental wellness journey with us.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* 7. FINAL BOOKING CTA SECTION */}
      <section className="py-20 px-6 bg-background relative overflow-hidden">
        {/* Subtle colorful backlights */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-16 border border-slate-800 shadow-2xl relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Ready to Recover Your Movement & Ease?
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Book a comprehensive clinical assessment at Holistic Health Clinic. Get a personalized treatment roadmap built for your body.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <WhatsAppButton 
              className="text-base px-10 py-5 shadow-2xl"
              message="Hello, I'd like to book an appointment at Holistic Health Clinic in Vikhroli East. Please share the next available times."
            >
              Book Physical Assessment Now
            </WhatsAppButton>
            <p className="text-xs text-slate-500 mt-2 flex flex-col md:flex-row items-center justify-center gap-4">
              <span>&bull; Consultation by Prior Appointment Only</span>
              <span className="hidden md:inline">|</span>
              <span>&bull; Clinic Address: Ashok Nagar, Vikhroli East</span>
            </p>
          </div>
        </div>
      </section>

      {/* 8. FLOATING WHATSAPP ACTION WIDGET (Bottom Left - balances the bot in bottom-right) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <div className="relative group">
          {/* Pulsing visual glow */}
          <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-75 blur animate-pulse" />
          <WhatsAppButton 
            className="relative px-5 py-3 text-sm font-bold shadow-2xl hover:scale-105 transition-transform"
            message="Hello, I would like to inquire about booking a session at Holistic Health Clinic in Vikhroli East."
          >
            Chat with Clinic
          </WhatsAppButton>
        </div>
      </div>

    </main>
  );
}
