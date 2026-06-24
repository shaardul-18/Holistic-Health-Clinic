import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Activity, Brain, Apple, Zap, CheckCircle2 } from "lucide-react";
import Threads from "@/components/reactbits/Threads";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Services | Holistic Health Clinic",
  description: "Comprehensive Physiotherapy, Nutrition, and Counselling services in Vikhroli East, Mumbai.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 flex flex-col bg-background pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        
        {/* Header */}
        <ScrollReveal animation="slide-up">
          <div className="relative py-16 px-6 text-center max-w-3xl mx-auto space-y-4 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <Threads
                amplitude={0.8}
                distance={0.2}
                enableMouseInteraction={false}
                color={[0.1, 0.6, 0.95]}
              />
            </div>
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Our Services</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We provide a comprehensive, multi-disciplinary approach to health, focusing on the deep connection between physical well-being, mental health, and proper nutrition.
              </p>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mt-4">
                Online Consultation & Visiting Expert By Appointment Only
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {/* Physiotherapy */}
          <section className="flex flex-col md:flex-row gap-12 items-start overflow-hidden">
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-right">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 text-primary mb-2">
                    <Activity size={48} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Physiotherapy</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our advanced physiotherapy treatments focus on restoring movement, relieving pain, and improving your physical strength. We treat a wide range of musculoskeletal and neurological conditions.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3 pt-4">
                    {[
                      "Neck & Back Pain",
                      "Cervical & Lumbar Spondylosis",
                      "Shoulder Pain & Frozen Shoulder",
                      "Periarthritis",
                      "Hip, Knee & Ankle Pain",
                      "Osteoarthritis",
                      "Joint Pain & Muscle Strain",
                      "Sports Injuries",
                      "Pediatric Physiotherapy",
                      "Cardio Respiratory Physiotherapy",
                      "Ante natal-Post natal Physiotherapy",
                      "Muscle Strengthening & Stretching",
                      "Pregnancy Exercises",
                      "On-site Breast Crawl",
                      "Exercises For Weight Loss",
                      "Guidance & Exercises for Lactation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-left" delay={150}>
                <div className="bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent border border-primary/10 p-8 rounded-3xl shadow-sm">
                   <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                     <Zap className="h-6 w-6 text-primary" /> Advanced Modalities
                   </h3>
                   <p className="text-muted-foreground mb-6 text-sm">We use modern electrotherapy and evidence-based techniques to accelerate your healing process safely.</p>
                   
                   <ul className="space-y-3 mb-8">
                     <li className="flex justify-between items-center border-b border-border pb-2 text-sm">
                       <span className="font-medium">Traction</span>
                       <span className="text-muted-foreground">Thoracic, Cervical, Lumbar</span>
                     </li>
                     <li className="flex justify-between items-center border-b border-border pb-2 text-sm">
                       <span className="font-medium">SWD</span>
                       <span className="text-muted-foreground">Short Wave Diathermy</span>
                     </li>
                     <li className="flex justify-between items-center border-b border-border pb-2 text-sm">
                       <span className="font-medium">TENS & IFT</span>
                       <span className="text-muted-foreground">Pain Relief Therapy</span>
                     </li>
                     <li className="flex justify-between items-center pb-2 text-sm">
                       <span className="font-medium">Ultrasound</span>
                       <span className="text-muted-foreground">Deep Tissue Healing</span>
                     </li>
                   </ul>

                   <WhatsAppButton className="w-full text-center justify-center">Inquire about Physiotherapy</WhatsAppButton>
                </div>
              </ScrollReveal>
            </div>
          </section>
 
          {/* Counselling */}
          <section className="flex flex-col md:flex-row-reverse gap-12 items-start overflow-hidden">
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-secondary/10 text-secondary mb-2">
                    <Brain size={48} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Counselling & Psychology</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    True health encompasses the mind. We provide a safe, confidential, and empathetic environment to help you navigate psychological challenges and major life transitions.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3 pt-4">
                    {[
                      "Anxiety & Depression",
                      "ADHD Management",
                      "Parental Counselling",
                      "Couple Counselling",
                      "Personality Testing",
                      "IQ Testing",
                      "Child Counselling",
                      "Adolescent Counselling"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-right" delay={150}>
                <div className="bg-gradient-to-br from-secondary/5 to-transparent dark:from-secondary/10 dark:to-transparent border border-secondary/10 p-8 rounded-3xl shadow-sm">
                   <h3 className="text-xl font-semibold mb-4">Therapeutic Techniques Used</h3>
                   <p className="text-muted-foreground mb-6 text-sm">Our sessions utilize evidence-based psychological frameworks tailored to your specific emotional needs.</p>
                   
                   <div className="flex flex-wrap gap-2 mb-8">
                     {["R.E.B.T", "C.B.T.", "D.B.T", "T.A."].map((tech, i) => (
                       <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold border border-secondary/20">
                         {tech}
                       </span>
                     ))}
                     <span className="px-3 py-1 bg-secondary/5 text-secondary/70 rounded-full text-sm font-medium border border-border">
                       & Many More
                     </span>
                   </div>
     
                   <WhatsAppButton className="w-full text-center justify-center bg-secondary hover:bg-secondary/90 focus:ring-secondary">Book a Counselling Session</WhatsAppButton>
                </div>
              </ScrollReveal>
            </div>
          </section>
 
          {/* Nutrition */}
          <section className="flex flex-col md:flex-row gap-12 items-start overflow-hidden">
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-right">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-amber-500/10 text-amber-600 mb-2">
                    <Apple size={48} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Diet & Nutrition</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    What you eat directly impacts how your body heals and how your mind functions. Our dietetics services are designed to complement your therapies for complete holistic health.
                  </p>
                  
                  <ul className="space-y-3 pt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">Body Composition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">Weight Loss Programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">Weight Gain & Muscle Building</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">Diabetic Diet Planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">Personalized clinical nutrition for other specific conditions</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 w-full">
              <ScrollReveal animation="slide-left" delay={150}>
                <div className="bg-gradient-to-br from-amber-500/5 to-transparent dark:from-amber-500/10 dark:to-transparent border border-amber-500/10 p-8 rounded-3xl shadow-sm">
                   <h3 className="text-xl font-semibold mb-4">Food as Medicine</h3>
                   <p className="text-muted-foreground mb-6">We don't believe in crash diets. We build sustainable, enjoyable eating habits that fuel your body and mind for the long term.</p>
                   <WhatsAppButton className="w-full text-center justify-center bg-amber-600 hover:bg-amber-700 focus:ring-amber-600">Consult for Diet Plan</WhatsAppButton>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
