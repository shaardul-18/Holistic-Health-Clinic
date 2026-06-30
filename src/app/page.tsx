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
import { GalleryMasonry } from "@/components/GalleryMasonry";
import { HoverCard } from "@/components/animations/HoverCard";
import dynamic from "next/dynamic";

const LineWaves = dynamic(() => import("@/components/reactbits/LineWaves"));
const Threads = dynamic(() => import("@/components/reactbits/Threads"));
const HolisticApproach = dynamic(() => import("@/components/HolisticApproach").then(m => m.HolisticApproach));
const TextReveal = dynamic(() => import("@/components/animations/TextReveal").then(m => m.TextReveal));
const Plasma = dynamic(() => import("@/components/reactbits/Plasma"));

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-background relative">

      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative flex flex-col md:flex-row items-center justify-between py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto min-h-[90vh] gap-12 overflow-hidden">
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

        {/* Dark overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent pointer-events-none md:hidden" style={{ zIndex: 2 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 pointer-events-none hidden md:block" style={{ zIndex: 2 }}></div>

        {/* Text Content (Left) */}
        <div className="w-full md:w-1/2 space-y-8 relative z-10 flex flex-col pt-16 md:pt-0">
          {/* Trust Badges Row */}
          <ScrollReveal animation="slide-up">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-current" /> 5.0 Rated
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-xs uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" /> 20,000+ Patients
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 font-bold text-xs uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" /> 20+ Years Exp.
              </div>
            </div>
          </ScrollReveal>

          {/* Hook Headline */}
          <ScrollReveal animation="slide-up" delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              <TextReveal direction="up" delay={150}>We Solve Chronic Joint & Back Pain So You Can Return to an</TextReveal> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block animate-pulse mt-2">
                Active Life
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={250}>
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
              Mumbai’s leading multi-disciplinary clinic combining advanced <strong>Physiotherapy</strong>, <strong>Clinical Diet</strong>, and <strong>Psychology</strong> with a 95% non-surgical recovery rate.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal animation="slide-up" delay={400}>
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="#assessment"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-full shadow-lg hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
              >
                Start Here — Free Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <WhatsAppButton
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-primary/20 text-foreground font-bold text-base rounded-full hover:bg-primary/5 transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
                message="Hello, I would like to book a direct consultation with your clinic."
              >
                <Phone className="w-4 h-4 text-primary" /> Book Direct
              </WhatsAppButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Image Content (Right) */}
        <div className="w-full md:w-1/2 relative z-10 flex justify-center md:justify-end mt-12 md:mt-0">
          <ScrollReveal animation="fade-in" delay={300} className="relative w-full max-w-xl">
            <div className="relative aspect-[4/3] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background/50">
              <Image
                src="/gallery-1.png"
                alt="Holistic Health Clinic Facility"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
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
      <section className="py-24 px-6 bg-gradient-to-b from-background via-muted/30 to-background border-y border-border/50">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal animation="slide-up">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                What Is Stopping You From Living Pain-Free?
              </h2>
              <p className="text-muted-foreground text-lg font-medium">
                We diagnose the root cause of your discomfort to build lasting, drug-free rehabilitation programs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Neck & Back Pain",
                desc: "Treatment for Sciatica, Cervical & Lumbar Spondylosis, herniated discs, and posture-induced spinal stiffness.",
                icon: Activity,
                color: "primary"
              },
              {
                title: "Shoulder & Upper Body",
                desc: "Fast recovery for Frozen Shoulder, Periarthritis, rotator cuff injuries, and upper back tightness.",
                icon: Award,
                color: "secondary"
              },
              {
                title: "Hip, Knee & Joint Arthritis",
                desc: "Gentle physical therapy to relieve Osteoarthritis, reduce joint inflammation, and restore pain-free walking.",
                icon: Shield,
                color: "primary"
              },
              {
                title: "Sports Injuries & Post-Op",
                desc: "Rehabilitation for ligament tears, muscle strains, and rehabilitation following knee/hip replacements.",
                icon: Activity,
                color: "secondary"
              },
              {
                title: "Clinical Diet & Nutrition",
                desc: "Custom meal plans for sustainable weight loss, diabetic dietary control, muscle building, and recovery fuel.",
                icon: Apple,
                color: "primary"
              },
              {
                title: "Stress, Anxiety & Counselling",
                desc: "Confidential psychological support for stress management, relationship conflicts, depression, and ADHD.",
                icon: Brain,
                color: "secondary"
              }
            ].map((condition, idx) => (
              <ScrollReveal key={idx} animation="scale-up" delay={idx * 100}>
                <Link href="#assessment" className="block h-full outline-none">
                  <HoverCard 
                    whileHover={{ scale: 1.03, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-card p-8 rounded-3xl border border-border hover:border-${condition.color}/50 transition-all shadow-sm hover:shadow-2xl flex flex-col gap-5 h-full cursor-pointer relative overflow-hidden group`}
                  >
                    {/* Background glow on hover */}
                    <div className={`absolute -inset-24 bg-gradient-to-br from-${condition.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-3xl pointer-events-none`} />
                    
                    <div className={`bg-${condition.color}/10 text-${condition.color} p-4 rounded-2xl w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10`}>
                      <condition.icon className="h-7 w-7" />
                    </div>
                    <div className="relative z-10">
                      <h3 className={`font-bold text-xl mb-3 group-hover:text-${condition.color} transition-colors`}>{condition.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                        {condition.desc}
                      </p>
                    </div>
                  </HoverCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 FREE HEALTH ASSESSMENT (QUIZ FUNNEL - MOVED UP) */}
      <section id="assessment" className="py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <ScrollReveal animation="slide-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Where Should You Start?</h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto">
                Take our 3-question Clinical Assessment. We’ll analyze your pain points and prepare a custom recovery plan before you even step into the clinic.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={200}>
            <div className="bg-card shadow-2xl rounded-3xl border border-border p-2">
              <AssessmentQuiz />
            </div>
          </ScrollReveal>
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
              <HoverCard 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/50 transition-colors h-full"
              >
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
                    className="w-full text-center justify-center hover:scale-105 transition-transform"
                    message="Hello, I'd like to book an appointment for Physiotherapy treatment at Holistic Health Clinic."
                  >
                    Book Physiotherapy
                  </WhatsAppButton>
                </div>
              </HoverCard>
            </ScrollReveal>

            {/* Card 2: Counselling */}
            <ScrollReveal animation="slide-up" delay={200}>
              <HoverCard 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-secondary/50 transition-colors h-full"
              >
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
                    className="w-full text-center justify-center bg-secondary hover:bg-secondary/90 focus:ring-secondary hover:scale-105 transition-transform"
                    message="Hello, I'd like to schedule a confidential Counselling session at Holistic Health Clinic."
                  >
                    Book Counselling
                  </WhatsAppButton>
                </div>
              </HoverCard>
            </ScrollReveal>

            {/* Card 3: Nutrition */}
            <ScrollReveal animation="slide-up" delay={300}>
              <HoverCard 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-colors h-full"
              >
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
                    className="w-full text-center justify-center bg-amber-600 hover:bg-amber-700 focus:ring-amber-600 hover:scale-105 transition-transform"
                    message="Hello, I'd like to inquire about a customized Diet & Nutrition Plan at Holistic Health Clinic."
                  >
                    Consult for Diet Plan
                  </WhatsAppButton>
                </div>
              </HoverCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. CLINIC CREDIBILITY & PROFILE (Authority Block) */}
      <section className="py-28 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-background text-slate-50 border-y border-border/50 overflow-hidden relative">
        {/* Subtle background waves */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ zIndex: 1 }}>
          <Threads
            amplitude={0.8}
            distance={0.3}
            enableMouseInteraction={false}
            color={[0.2, 0.5, 0.9]}
          />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Clinic/Doctor Portrait Image */}
          <div className="flex justify-center md:justify-start w-full">
            <ScrollReveal animation="slide-right" className="w-full max-w-md mx-auto md:mx-0">
              <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                <Image
                  src="/dr-shreya-ghag.png"
                  alt="Dr. Shreya Ghag - Holistic Health Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-110 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Clinic Profile Text details */}
          <div className="space-y-8">
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    Led by Dr. Shreya Ghag
                  </h2>
                  <p className="text-xl md:text-2xl text-primary font-bold">Mumbai’s Foremost Musculoskeletal & Rehab Specialist</p>
                  
                  {/* Visual Pill Badges */}
                  <div className="flex flex-wrap gap-3 pt-3">
                    <span className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-full font-bold text-sm text-white shadow-sm">
                      <Award className="w-4 h-4 text-primary" /> B.P.Th (Physiotherapy)
                    </span>
                    <span className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-full font-bold text-sm text-white shadow-sm">
                      <Shield className="w-4 h-4 text-secondary" /> M.I.A.P Member
                    </span>
                    <span className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-full font-bold text-sm text-white shadow-sm">
                      <Apple className="w-4 h-4 text-amber-500" /> P.G.D. Nutrition
                    </span>
                    <span className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-full font-bold text-sm text-white shadow-sm">
                      <Brain className="w-4 h-4 text-purple-400" /> M.A. Clinical Psych
                    </span>
                  </div>
                </div>

                {/* Bold Stats Row */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800">
                  <div>
                    <p className="text-3xl font-extrabold text-white">5,000+</p>
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mt-1">Complex Cases Resolved</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-white">20+</p>
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mt-1">Years Clinical Excellence</p>
                  </div>
                </div>

                {/* Quote block */}
                <div className="border-l-4 border-primary pl-5 italic text-slate-300 text-lg md:text-xl font-medium bg-white/5 py-4 pr-6 rounded-r-2xl">
                  "We don't simply manage your pain; we engineer your complete recovery by treating your structure, metabolism, and mind."
                </div>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold text-base rounded-full hover:bg-slate-200 transition-colors shadow-xl group"
                  >
                    Read Full Credentials <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4.5 REAL PATIENT CASE STUDIES (Proof Blocks) */}
      <section className="py-28 px-6 bg-muted/20 border-y border-border/50">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal animation="slide-up">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Proof of Recovery
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium">
                We don't just treat symptoms; we deliver measurable transformations. Real metrics from real patients.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Case Study 1 */}
            <ScrollReveal animation="slide-right" delay={100}>
              <HoverCard 
                whileHover={{ y: -10 }}
                className="bg-card border-2 border-border hover:border-primary/50 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col group"
              >
                <div className="p-10 flex-1 space-y-8">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-extrabold rounded-full uppercase tracking-widest flex items-center gap-2">
                      <Activity className="w-4 h-4" /> Orthopedic Rehab
                    </span>
                    <span className="text-sm text-muted-foreground font-bold">Timeline: 8 Weeks</span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Severe Lumbar Spondylosis</h3>
                    <p className="text-muted-foreground font-medium">Patient arrived bedridden. Unable to walk without support due to shooting leg pain.</p>
                  </div>

                  <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10 text-center transform group-hover:scale-105 transition-transform duration-500">
                    <p className="text-6xl font-black text-primary tracking-tighter">100%</p>
                    <p className="text-lg font-bold text-foreground mt-2 uppercase tracking-wide">Pain Reduction</p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                      <span className="text-foreground font-medium">Returned to daily independent walking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                      <span className="text-foreground font-medium">Completely avoided surgical intervention</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
            </ScrollReveal>

            {/* Case Study 2 */}
            <ScrollReveal animation="slide-left" delay={200}>
              <HoverCard 
                whileHover={{ y: -10 }}
                className="bg-card border-2 border-border hover:border-amber-500/50 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col group"
              >
                <div className="p-10 flex-1 space-y-8">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="px-4 py-1.5 bg-amber-500/10 text-amber-600 text-sm font-extrabold rounded-full uppercase tracking-widest flex items-center gap-2">
                      <Apple className="w-4 h-4" /> Metabolic Diet
                    </span>
                    <span className="text-sm text-muted-foreground font-bold">Timeline: 12 Weeks</span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">PCOS & Insulin Resistance</h3>
                    <p className="text-muted-foreground font-medium">Struggling with irregular cycles, chronic fatigue, and rapid stubborn weight gain.</p>
                  </div>

                  <div className="bg-amber-500/5 rounded-3xl p-6 border border-amber-500/10 text-center transform group-hover:scale-105 transition-transform duration-500">
                    <p className="text-6xl font-black text-amber-600 tracking-tighter">-8 KG</p>
                    <p className="text-lg font-bold text-foreground mt-2 uppercase tracking-wide">Fat Loss Achieved</p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                      <span className="text-foreground font-medium">Menstrual cycle completely normalized</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                      <span className="text-foreground font-medium">Eliminated afternoon energy crashes</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
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

      {/* (Funnel Assessment moved above) */}

    </main>
  );
}
