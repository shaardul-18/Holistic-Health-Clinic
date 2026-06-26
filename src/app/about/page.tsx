import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GraduationCap, Award, HeartHandshake, Users } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const Threads = dynamic(() => import("@/components/reactbits/Threads"));
export const metadata = {
  title: "About | Holistic Health Clinic",
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

          {/* Doctor Info */}
          <div className="md:col-span-3 space-y-8">
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-2">Holistic Health Clinic</h2>
                  <p className="text-xl text-primary font-medium">Founder & Head Physiotherapist: Dr. Shreya Ghag (P.T.)</p>
                </div>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Holistic Health Clinic is a premier healthcare facility in Vikhroli East, Mumbai, widely recognized for its patient-centric, integrative approach to recovery. Backed by over 20+ years of practicing experience, our team specializes in bridging structural physical therapy, clinical nutrition, and cognitive-behavioral counseling to deliver complete, long-lasting wellness.
                  </p>
                  <p>
                    Serving the Vikhroli East community, Holistic Health Clinic has become a trusted sanctuary for pain relief, post-surgical recovery, and emotional support, backed by over 150+ five-star patient reviews on major healthcare platforms. Our clinic provides cutting-edge physical therapy and wellness programs tailored to each individual's needs.
                  </p>
                  <p>
                    Whether helping athletes return to peak performance, guiding elderly patients through joint rehab, or counseling individuals facing chronic pain and lifestyle stress, our methodology prioritizes diagnostic precision, gentle care, and personalized rehabilitation.
                  </p>
                </div>

                {/* Qualifications & Experience */}
                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                      <h3 className="text-xl font-bold">Qualifications</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>B.P.Th. (Bachelor of Physiotherapy)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>M.I.A.P. (Member of Indian Association of Physiotherapists)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>P.G.D. Nutrition</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>M.A. Clinical Psychology</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold">Expertise</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Orthopedic & Musculoskeletal Rehab</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Cognitive Behavioral Therapy (CBT)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Holistic Lifestyle Modification</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-8">
                  <WhatsAppButton className="px-8">Schedule a Consultation</WhatsAppButton>
                </div>
              </div>
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
                <p className="font-semibold text-foreground mt-4">— Dr. Shreya Ghag</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
