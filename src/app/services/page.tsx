import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Activity, Brain, Apple, Zap, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { InteractiveBodyMap } from "@/components/InteractiveBodyMap";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { ConversionCTA } from "@/components/ConversionCTA";
import { ClinicalAuthorityBlock } from "@/components/ClinicalAuthorityBlock";

const Threads = dynamic(() => import("@/components/reactbits/Threads"));
export const metadata = {
  title: "Services",
  description: "Comprehensive Physiotherapy, Nutrition, and Counselling services in Vikhroli East, Mumbai.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 flex flex-col bg-background pt-28 pb-24 relative overflow-hidden">
      {/* Animated Hero Background with smooth fade out */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 opacity-40">
          <Threads
            amplitude={1.2}
            distance={0.5}
            enableMouseInteraction={false}
            color={[0.1, 0.6, 0.95]}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>
      <div className="container mx-auto px-6 max-w-6xl space-y-16 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="blur-in" duration={2500}>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              <TextReveal delay={100}>Our</TextReveal> <TextReveal delay={400} direction="down" gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</TextReveal>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              We provide a comprehensive, multi-disciplinary approach to health, focusing on the deep connection between physical well-being, mental health, and proper nutrition.
            </p>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mt-4 text-sm md:text-base">
              Online Consultation & Visiting Expert By Appointment Only
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" duration={1500} className="max-w-4xl mx-auto mt-24 px-6 z-10 relative">
          <InteractiveBodyMap />
        </ScrollReveal>

        <ScrollReveal animation="slide-up" duration={1500} className="max-w-7xl mx-auto px-6 mt-40 space-y-32 md:space-y-40">
          {/* Physiotherapy */}
          <section className="space-y-12">
            <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center overflow-hidden">
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-right">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Activity size={32} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Physiotherapy</h2>
                  </div>
                  
                  <div className="space-y-6 pt-4">
                    <div className="border-l-4 border-red-500 pl-5">
                      <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">The Bottleneck</h4>
                      <p className="text-foreground font-medium text-lg leading-relaxed">Chronic neck/back pain, stiff joints, or post-surgical immobility severely limiting your active life.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-5">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">The Intervention</h4>
                      <p className="text-foreground font-medium text-lg leading-relaxed">Advanced electrotherapy (SWD, IFT, Ultrasound), targeted joint mobilization, and evidence-based clinical exercise.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-5 bg-green-500/5 py-4 pr-5 rounded-r-2xl transform hover:scale-[1.02] transition-transform">
                      <h4 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">The Outcome</h4>
                      <p className="text-2xl font-extrabold text-foreground leading-tight">Pain-free movement, structural strength, and 100% independence.</p>
                    </div>
                  </div>
                  
                    <div className="pt-6">
                      <details className="group border border-border rounded-xl bg-card overflow-hidden cursor-pointer">
                        <summary className="font-bold text-sm text-foreground p-4 bg-muted/30 flex justify-between items-center list-none">
                          View All 15+ Conditions Treated
                          <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                        </summary>
                        <div className="p-4 grid sm:grid-cols-2 gap-x-4 gap-y-3 bg-background border-t border-border">
                          {[
                            "Neck & Back Pain", "Cervical & Lumbar Spondylosis", "Shoulder Pain & Frozen Shoulder",
                            "Periarthritis", "Hip, Knee & Ankle Pain", "Osteoarthritis",
                            "Joint Pain & Muscle Strain", "Sports Injuries", "Pediatric Physiotherapy",
                            "Cardio Respiratory Physiotherapy", "Ante natal-Post natal Physiotherapy",
                            "Muscle Strengthening & Stretching", "Pregnancy Exercises", "On-site Breast Crawl",
                            "Exercises For Weight Loss", "Guidance & Exercises for Lactation"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-xs leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <div className="flex-1 w-full">
                <ScrollReveal animation="slide-left" delay={150}>
                  <div className="bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent border border-primary/10 p-8 rounded-3xl shadow-sm mb-6">
                     <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                       <Zap className="h-6 w-6 text-primary" /> Advanced Scientific Modalities
                     </h3>
                     <p className="text-sm text-muted-foreground mb-6">We use clinically proven electrotherapy and modalities to accelerate tissue healing at a cellular level before manual mobilization.</p>
                     <ul className="space-y-3">
                       <li className="flex justify-between items-center border-b border-border pb-2 text-sm">
                         <span className="font-medium">Traction</span>
                         <span className="text-muted-foreground">Spinal Decompression</span>
                       </li>
                       <li className="flex justify-between items-center border-b border-border pb-2 text-sm">
                         <span className="font-medium">SWD (Diathermy)</span>
                         <span className="text-muted-foreground">Deep Heat Therapy</span>
                       </li>
                       <li className="flex justify-between items-center border-b border-border pb-2 text-sm">
                         <span className="font-medium">TENS & IFT</span>
                         <span className="text-muted-foreground">Neurological Pain Block</span>
                       </li>
                       <li className="flex justify-between items-center pb-2 text-sm">
                         <span className="font-medium">Ultrasound</span>
                         <span className="text-muted-foreground">Cellular Tissue Healing</span>
                       </li>
                     </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            

          </section>
 
          {/* Counselling */}
          <section className="space-y-12">
            <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-20 items-center overflow-hidden">
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-secondary/10 text-secondary shrink-0">
                      <Brain size={32} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Counselling & Psychology</h2>
                  </div>

                  <div className="space-y-6 pt-4">
                    <div className="border-l-4 border-red-500 pl-5">
                      <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">The Bottleneck</h4>
                      <p className="text-foreground font-medium text-lg leading-relaxed">Overwhelming chronic stress, high-functioning anxiety, relationship conflicts, or coping with drastic lifestyle changes.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-5">
                      <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">The Intervention</h4>
                      <p className="text-foreground font-medium text-lg leading-relaxed">Structured Cognitive Behavioral Therapy (CBT) and REBT to dismantle mental blocks in a completely safe, confidential space.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-5 bg-green-500/5 py-4 pr-5 rounded-r-2xl transform hover:scale-[1.02] transition-transform">
                      <h4 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">The Outcome</h4>
                      <p className="text-2xl font-extrabold text-foreground leading-tight">Elite mental clarity, unshakeable emotional resilience, and deep focus.</p>
                    </div>
                  </div>
                  
                    <div className="pt-6">
                      <details className="group border border-border rounded-xl bg-card overflow-hidden cursor-pointer">
                        <summary className="font-bold text-sm text-foreground p-4 bg-muted/30 flex justify-between items-center list-none">
                          View All Treated Conditions
                          <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                        </summary>
                        <div className="p-4 grid sm:grid-cols-2 gap-x-4 gap-y-3 bg-background border-t border-border">
                          {[
                            "Anxiety & Depression", "ADHD Management", "Parental Counselling",
                            "Couple Counselling", "Personality Testing", "IQ Testing",
                            "Child Counselling", "Adolescent Counselling"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-xs leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <div className="flex-1 w-full">
                <ScrollReveal animation="slide-right" delay={150}>
                  <div className="bg-gradient-to-br from-secondary/5 to-transparent dark:from-secondary/10 dark:to-transparent border border-secondary/10 p-8 rounded-3xl shadow-sm mb-6">
                     <h3 className="text-xl font-semibold mb-4">Therapeutic Techniques Used</h3>
                     <p className="text-sm text-muted-foreground mb-6">Our approach is rooted in proven psychological models, tailored specifically to your cognitive and behavioral needs.</p>
                     <div className="flex flex-wrap gap-2">
                       {["R.E.B.T", "C.B.T.", "D.B.T", "T.A.", "IQ Testing", "Personality Testing"].map((tech, i) => (
                         <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold border border-secondary/20">
                           {tech}
                         </span>
                       ))}
                     </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            

          </section>
 
          {/* Nutrition */}
          <section className="space-y-12">
            <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center overflow-hidden">
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-right">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-amber-500/10 text-amber-600 shrink-0">
                      <Apple size={32} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Diet & Nutrition</h2>
                  </div>

                  <div className="space-y-6 pt-4">
                    <div className="border-l-4 border-red-500 pl-5">
                      <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">The Bottleneck</h4>
                      <p className="text-foreground font-medium text-lg leading-relaxed">Stubborn weight gain, chronic metabolic fatigue, or managing severe conditions like PCOS and Diabetes.</p>
                    </div>
                    <div className="border-l-4 border-amber-500 pl-5">
                      <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">The Intervention</h4>
                      <p className="text-foreground font-medium text-lg leading-relaxed">Highly personalized clinical nutrition using real food as medicine. No crash diets. We fix your metabolic baseline.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-5 bg-green-500/5 py-4 pr-5 rounded-r-2xl transform hover:scale-[1.02] transition-transform">
                      <h4 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">The Outcome</h4>
                      <p className="text-2xl font-extrabold text-foreground leading-tight">Optimized body composition, boundless daily energy, and reversed metabolic symptoms.</p>
                    </div>
                  </div>
                  
                    <div className="pt-6">
                      <details className="group border border-border rounded-xl bg-card overflow-hidden cursor-pointer">
                        <summary className="font-bold text-sm text-foreground p-4 bg-muted/30 flex justify-between items-center list-none">
                          View All Diet Programs
                          <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                        </summary>
                        <div className="p-4 grid sm:grid-cols-2 gap-x-4 gap-y-3 bg-background border-t border-border">
                          {[
                            "Body Composition", "Weight Loss Programs", "Weight Gain & Muscle Building",
                            "Diabetic Diet Planning", "Personalized clinical nutrition for other specific conditions"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-xs leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <div className="flex-1 w-full">
                <ScrollReveal animation="slide-left" delay={150}>
                  <div className="bg-gradient-to-br from-amber-500/5 to-transparent dark:from-amber-500/10 dark:to-transparent border border-amber-500/10 p-8 rounded-3xl shadow-sm mb-6">
                     <h3 className="text-xl font-semibold mb-4">Food as Medicine</h3>
                     <p className="text-sm text-muted-foreground mb-6">No crash diets. We build sustainable habits based on your metabolic data.</p>
                     <ul className="space-y-3">
                       <li className="flex items-start gap-3">
                         <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                         <span className="text-foreground/90 font-medium text-sm">Body Composition & Weight Loss</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                         <span className="text-foreground/90 font-medium text-sm">Weight Gain & Muscle Building</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                         <span className="text-foreground/90 font-medium text-sm">Diabetic & PCOS Diet Planning</span>
                       </li>
                     </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            

          </section>
        </ScrollReveal>

        {/* Global Testimonials injected at bottom of services */}
        <ScrollReveal animation="fade-in" className="mt-32 pt-16 border-t border-border/50">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Success Stories</h2>
            <p className="text-muted-foreground">Hear from patients who recovered their movement and health with our integrated approach.</p>
          </div>
          <div className="bg-primary/5 py-12 rounded-[40px] overflow-hidden">
            <ReviewsMarquee />
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
