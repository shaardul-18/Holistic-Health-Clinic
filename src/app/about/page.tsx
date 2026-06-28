import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GraduationCap, Award, HeartHandshake, Users } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const Threads = dynamic(() => import("@/components/reactbits/Threads"));
export const metadata = {
  title: "About",
  description: "Learn about Holistic Health Clinic, our 20+ years of practicing experience, qualifications, and holistic approach in Vikhroli East, Mumbai.",
};

export default function AboutPage() {
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
      <div className="container mx-auto px-6 max-w-5xl space-y-16 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="blur-in" duration={2500}>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              <TextReveal delay={400}>Our Story of</TextReveal> <TextReveal delay={700} direction="down" gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Holistic Healing</TextReveal>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Dedicated to empowering patients through integrated physical rehabilitation, proper nutrition, and mental wellness.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start mt-12">
          
          {/* Doctor Image / Abstract */}
          <div className="md:col-span-2 relative w-full">
            <ScrollReveal animation="slide-right" className="w-full">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-slate-100 dark:bg-slate-800">
                 <Image 
                   src="/dr-shreya-ghag.png" 
                   alt="Holistic Health Clinic" 
                   fill
                   sizes="(max-width: 768px) 100vw, 40vw"
                   priority
                   className="object-cover object-top hover:scale-105 transition-transform duration-500" 
                 />
              </div>
              
              {/* Quick Stats Floating Cards */}
              <div className="absolute bottom-6 right-6 bg-background/85 backdrop-blur-md rounded-2xl shadow-xl border border-border/80 p-4 flex items-center gap-4 z-20">
                 <div className="bg-primary/10 p-3 rounded-full text-primary">
                   <Users className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="text-2xl font-bold text-foreground">20,000+</p>
                   <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Patients Treated (20 Years)</p>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Doctor Info & Authority Blocks */}
          <div className="md:col-span-3 space-y-10">
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tight">Holistic Health Clinic</h2>
                  <p className="text-xl text-primary font-semibold uppercase tracking-wider">Expert Clinical Team</p>
                </div>
                
                <div className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/40 pl-6 space-y-4">
                  <p>
                    With over <strong>2 decades of clinical excellence</strong>, our team has transformed the lives of thousands by bridging structural physical therapy with clinical nutrition and cognitive-behavioral counseling. 
                  </p>
                  <p>
                    Our integrated "whole-body" methodology ensures that patients don't just find temporary relief—they achieve <strong>complete, long-lasting wellness</strong>.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Authority Grid */}
            <ScrollReveal animation="slide-up" delay={250}>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Credentials Card */}
                <div className="bg-card border border-border/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Full Credentials</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span className="font-semibold text-foreground/90">B.P.Th. <span className="font-normal text-muted-foreground block text-sm">Bachelor of Physiotherapy</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span className="font-semibold text-foreground/90">M.I.A.P. <span className="font-normal text-muted-foreground block text-sm">Member of Indian Assoc. of Physiotherapists</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span className="font-semibold text-foreground/90">P.G.D. Nutrition <span className="font-normal text-muted-foreground block text-sm">Clinical Dietetics</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span className="font-semibold text-foreground/90">M.A. Clinical Psychology <span className="font-normal text-muted-foreground block text-sm">Cognitive Therapist</span></span>
                    </li>
                  </ul>
                </div>

                {/* Specializations Card */}
                <div className="bg-card border border-border/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Specializations</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/90 block">Orthopedic Rehab</span>
                        <span className="text-muted-foreground text-sm">Post-surgical & chronic pain</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/90 block">Cognitive Behavioral Therapy</span>
                        <span className="text-muted-foreground text-sm">Anxiety, stress & pain coping</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/90 block">Holistic Nutrition</span>
                        <span className="text-muted-foreground text-sm">Weight & metabolic management</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={350} className="pt-4">
              <WhatsAppButton className="px-8 py-6 text-lg font-bold w-full sm:w-auto justify-center shadow-xl shadow-primary/20">Book a Consultation with our clinic</WhatsAppButton>
            </ScrollReveal>
          </div>
        </div>

        {/* Philosophy Section */}
        <ScrollReveal animation="scale-up">
          <div className="mt-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <HeartHandshake className="h-32 w-32 text-primary opacity-80" strokeWidth={1} />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Our Philosophy</h3>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "We don't just treat conditions; we treat people. A patient's physical recovery is often deeply intertwined with their mental resilience and nutritional health. By addressing all these facets simultaneously, we ensure a faster, more sustainable return to a healthy, pain-free life."
                </p>
                <p className="font-semibold text-foreground mt-4">— Holistic Health Clinic</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
