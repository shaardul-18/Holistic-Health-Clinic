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
import { ScrollReveal } from "@/components/ScrollReveal";
import { AssessmentQuiz } from "@/components/AssessmentQuiz";
import dynamic from "next/dynamic";

const LineWaves = dynamic(() => import("@/components/reactbits/LineWaves"));
const Threads = dynamic(() => import("@/components/reactbits/Threads"));
const HolisticApproach = dynamic(() => import("@/components/HolisticApproach").then(m => m.HolisticApproach));
const TextReveal = dynamic(() => import("@/components/animations/TextReveal").then(m => m.TextReveal));
const Plasma = dynamic(() => import("@/components/reactbits/Plasma"));

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-background relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center py-28 md:py-36 px-6 text-center overflow-hidden min-h-[90vh]">
        {/* Animated LineWaves Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <LineWaves
            speed={0.03}
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

        <div className="space-y-8 max-w-4xl relative z-10 mx-auto mt-12">
          {/* Trust Badge */}
          <ScrollReveal animation="slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4">
              <Shield className="w-4 h-4" /> Trusted by 20,000+ patients in Mumbai
            </div>
          </ScrollReveal>

          {/* Problem & Solution Headline */}
          <ScrollReveal animation="slide-up" delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-3xl mx-auto">
              End Chronic Pain & Reclaim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Active Life</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={250}>
            <p className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl mx-auto leading-relaxed">
              Holistic Health Clinic’s integrated approach combines advanced <strong>physiotherapy</strong>, <strong>clinical nutrition</strong>, and <strong>counselling</strong> to treat the root cause of your pain—not just the symptoms.
            </p>
          </ScrollReveal>
          
          {/* Hero CTAs */}
          <ScrollReveal animation="slide-up" delay={400}>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
              <Link 
                href="#assessment" 
                className="text-base px-10 py-5 w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold rounded-full shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
              >
                Take Free Health Assessment <ArrowRight className="w-5 h-5" />
              </Link>
              <WhatsAppButton 
                className="text-sm font-semibold w-full sm:w-auto bg-card text-foreground border border-border hover:bg-muted py-4 shadow-sm"
                message="Hello, I would like to book a direct consultation with your clinic."
              >
                Book Direct Consultation
              </WhatsAppButton>
            </div>
          </ScrollReveal>
          
          {/* Quick Metrics Sub-Header */}
          <ScrollReveal animation="slide-up" delay={550}>
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-border/80 mt-12">
              <div className="space-y-1">
                <h4 className="text-3xl md:text-4xl font-extrabold text-primary">20+</h4>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl md:text-4xl font-extrabold text-secondary">20k+</h4>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Patients Treated</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl md:text-4xl font-extrabold text-primary">150+</h4>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">5-Star Reviews</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl md:text-4xl font-extrabold text-secondary">100%</h4>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Licensed Clinic</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Blocks (Why Choose Us & Our Approach) */}
      <section className="py-16 px-6 bg-card border-y border-border/50 relative z-10 -mt-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0"><Award className="w-6 h-6" /></div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Why Choose Us</h3>
              <p className="text-sm text-muted-foreground">Led by our clinical experts with 20+ years of multi-disciplinary experience.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-secondary/10 text-secondary rounded-xl shrink-0"><Brain className="w-6 h-6" /></div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Our Approach</h3>
              <p className="text-sm text-muted-foreground">We treat the root cause by integrating physical rehab, nutrition, and mental wellness.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-500/10 text-green-600 rounded-xl shrink-0"><CheckCircle2 className="w-6 h-6" /></div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Results You Can Expect</h3>
              <p className="text-sm text-muted-foreground">Faster recovery times, long-term pain relief, and sustainable healthy habits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONDITIONS WE TREAT (Pain Point Section) */}
      <section className="py-24 px-6 bg-gradient-to-b from-primary/5 via-background to-secondary/5 border-y border-border/50">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal animation="slide-up">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                What Is Stopping You From Living Pain-Free?
              </h2>
              <p className="text-muted-foreground text-lg">
                We diagnose the root cause of your discomfort to build lasting, drug-free rehabilitation programs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Condition 1 */}
            <ScrollReveal animation="slide-up" delay={100}>
              <Link href="/blog/cervical-lumbar-spondylosis" className="block h-full group">
                <div className="bg-card p-6 rounded-2xl border border-border group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-md flex flex-col gap-4 h-full cursor-pointer">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Neck & Back Pain</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Treatment for Sciatica, Cervical & Lumbar Spondylosis, herniated discs, and posture-induced spinal stiffness.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Condition 2 */}
            <ScrollReveal animation="slide-up" delay={200}>
              <Link href="/blog/frozen-shoulder-rehab" className="block h-full group">
                <div className="bg-card p-6 rounded-2xl border border-border group-hover:border-secondary/30 transition-all shadow-sm group-hover:shadow-md flex flex-col gap-4 h-full cursor-pointer">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-secondary transition-colors">Shoulder & Upper Body</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fast recovery for Frozen Shoulder, Periarthritis, rotator cuff injuries, and upper back tightness.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Condition 3 */}
            <ScrollReveal animation="slide-up" delay={300}>
              <Link href="/blog/knee-osteoarthritis" className="block h-full group">
                <div className="bg-card p-6 rounded-2xl border border-border group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-md flex flex-col gap-4 h-full cursor-pointer">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Hip, Knee & Joint Arthritis</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Gentle physical therapy to relieve Osteoarthritis, reduce joint inflammation, and restore pain-free walking.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Condition 4 */}
            <ScrollReveal animation="slide-up" delay={400}>
              <Link href="/blog/sports-injury-recovery" className="block h-full group">
                <div className="bg-card p-6 rounded-2xl border border-border group-hover:border-secondary/30 transition-all shadow-sm group-hover:shadow-md flex flex-col gap-4 h-full cursor-pointer">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-secondary transition-colors">Sports Injuries & Post-Op</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Rehabilitation for ligament tears, muscle strains, and rehabilitation following knee/hip replacements.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Condition 5 */}
            <ScrollReveal animation="slide-up" delay={500}>
              <Link href="/blog/metabolic-weight-management" className="block h-full group">
                <div className="bg-card p-6 rounded-2xl border border-border group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-md flex flex-col gap-4 h-full cursor-pointer">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Apple className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Clinical Diet & Nutrition</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Custom meal plans for sustainable weight loss, diabetic dietary control, muscle building, and recovery fuel.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Condition 6 */}
            <ScrollReveal animation="slide-up" delay={600}>
              <Link href="/blog/managing-chronic-stress" className="block h-full group">
                <div className="bg-card p-6 rounded-2xl border border-border group-hover:border-secondary/30 transition-all shadow-sm group-hover:shadow-md flex flex-col gap-4 h-full cursor-pointer">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-secondary transition-colors">Stress, Anxiety & Counselling</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Confidential psychological support for stress management, relationship conflicts, depression, and ADHD.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATIVE SERVICES PATHWAYS */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal animation="slide-up">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Our Integrative Services
              </h2>
              <p className="text-muted-foreground text-lg">
                We connect physical movement, mental health, and clinical diet to ensure complete, long-lasting wellness.
              </p>
            </div>
          </ScrollReveal>

          {/* Holistic Approach Rotating Circles Animation */}
          <ScrollReveal animation="fade-in" delay={150}>
            <HolisticApproach />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Physiotherapy */}
            <ScrollReveal animation="slide-up" delay={100}>
              <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-primary/25 transition-all h-full">
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
            </ScrollReveal>

            {/* Card 2: Counselling */}
            <ScrollReveal animation="slide-up" delay={200}>
              <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-secondary/25 transition-all h-full">
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
            </ScrollReveal>

            {/* Card 3: Nutrition */}
            <ScrollReveal animation="slide-up" delay={300}>
              <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-amber-500/25 transition-all h-full">
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
            </ScrollReveal>
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
          <div className="md:col-span-5 flex justify-center w-full">
            <ScrollReveal animation="slide-right" className="w-full max-w-[340px] mx-auto">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border bg-slate-100 dark:bg-slate-800">
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
            </ScrollReveal>
          </div>

          {/* Clinic Profile Text details */}
          <div className="md:col-span-7 space-y-6">
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">Holistic Health Clinic</h2>
                  <p className="text-lg md:text-xl text-primary font-semibold">Our Expert Clinical Team</p>
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
                    Read Clinic Profile & Credentials <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 4.5 REAL PATIENT CASE STUDIES (Social Proof) */}
      <section className="py-24 px-6 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal animation="slide-up">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Clinical Case Studies
              </h2>
              <p className="text-muted-foreground text-lg">
                See how we diagnose, treat, and resolve chronic conditions. Real patients. Real results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="slide-right" delay={100}>
              <div className="bg-background border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-all h-full">
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">Orthopedic Rehab</span>
                    <span className="text-sm text-muted-foreground">Patient: M. Desai (52)</span>
                  </div>
                  <h3 className="text-2xl font-bold">Severe Lumbar Spondylosis</h3>
                  <div className="space-y-4 pt-2">
                    <div className="border-l-2 border-red-500/50 pl-4">
                      <h4 className="text-sm font-bold text-red-500 uppercase">Condition</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">Bedridden for 2 weeks due to severe lower back pain shooting down the leg. Unable to walk without support.</p>
                    </div>
                    <div className="border-l-2 border-primary/50 pl-4">
                      <h4 className="text-sm font-bold text-primary uppercase">Treatment (8 Weeks)</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">Lumbar traction, IFT for pain management, followed by targeted core strengthening and CBT for pain anxiety.</p>
                    </div>
                    <div className="border-l-2 border-green-500/50 pl-4 bg-green-500/5 py-2 pr-4 rounded-r-lg">
                      <h4 className="text-sm font-bold text-green-600 uppercase">Result</h4>
                      <p className="text-foreground font-medium text-sm leading-relaxed mt-1">100% pain reduction. Returned to daily morning walks and independent living without surgical intervention.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={200}>
              <div className="bg-background border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-all h-full">
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-600 text-xs font-bold rounded-full uppercase tracking-wider">Metabolic Diet</span>
                    <span className="text-sm text-muted-foreground">Patient: R. Sharma (34)</span>
                  </div>
                  <h3 className="text-2xl font-bold">PCOS & Stubborn Weight Gain</h3>
                  <div className="space-y-4 pt-2">
                    <div className="border-l-2 border-red-500/50 pl-4">
                      <h4 className="text-sm font-bold text-red-500 uppercase">Condition</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">Struggling with irregular cycles, chronic fatigue, and insulin resistance. Gained 15kg over 2 years despite exercising.</p>
                    </div>
                    <div className="border-l-2 border-amber-500/50 pl-4">
                      <h4 className="text-sm font-bold text-amber-600 uppercase">Treatment (12 Weeks)</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">Customized clinical nutrition plan focusing on low-GI foods, gut health optimization, and hormonal balance.</p>
                    </div>
                    <div className="border-l-2 border-green-500/50 pl-4 bg-green-500/5 py-2 pr-4 rounded-r-lg">
                      <h4 className="text-sm font-bold text-green-600 uppercase">Result</h4>
                      <p className="text-foreground font-medium text-sm leading-relaxed mt-1">Lost 8kg of fat, normalized menstrual cycle, and completely reversed afternoon energy crashes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. PATIENT REVIEWS (Social Proof) */}
      <section className="py-24 bg-primary/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 space-y-12 mb-4">
          <ScrollReveal animation="slide-up">
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
          </ScrollReveal>
        </div>
        <ScrollReveal animation="fade-in" delay={150}>
          <ReviewsMarquee />
        </ScrollReveal>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (Friction Reducer) */}
      <section className="py-24 px-6 bg-gradient-to-tr from-secondary/5 to-primary/5 dark:from-slate-900/30 dark:to-slate-950 border-y border-border/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal animation="slide-up">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about starting your physical and mental wellness journey with us.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={150}>
            <FAQ />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FREE HEALTH ASSESSMENT (QUIZ FUNNEL) */}
      <section id="assessment" className="py-24 px-6 bg-background relative overflow-hidden">
        {/* Subtle colorful backlights */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <ScrollReveal animation="slide-up">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">Take the Free Health Assessment</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Not sure where to start? Answer 3 quick questions so we can understand your pain points and prepare a custom recovery plan before you even step into the clinic.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="scale-up" delay={200}>
            <AssessmentQuiz />
          </ScrollReveal>
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
