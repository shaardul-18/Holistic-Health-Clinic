import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GraduationCap, Award, HeartHandshake, Users } from "lucide-react";
import Image from "next/image";
import Threads from "@/components/reactbits/Threads";

export const metadata = {
  title: "Meet The Doctor | Holistic Health Clinic",
  description: "Learn about Dr. Shreya Ghag, her experience, qualifications, and holistic approach.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col bg-background pt-8 pb-24">
      <div className="container mx-auto px-6 max-w-5xl space-y-16">
        
        {/* Header */}
        <div className="relative py-16 px-6 text-center max-w-3xl mx-auto space-y-4 rounded-3xl overflow-hidden bg-primary/5">
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <Threads
              amplitude={0.8}
              distance={0.2}
              enableMouseInteraction={false}
              color={[0.1, 0.6, 0.95]}
            />
          </div>
          <div className="relative z-10 space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Meet The Doctor</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated to empowering patients through integrated physical rehabilitation, proper nutrition, and mental wellness.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start mt-12">
          
          {/* Doctor Image / Abstract */}
          <div className="md:col-span-2 relative">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-slate-100 dark:bg-slate-800">
               <Image 
                 src="/dr-shreya-ghag.png" 
                 alt="Dr. Shreya Ghag (P.T.)" 
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
                 <p className="text-2xl font-bold text-foreground">5000+</p>
                 <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Patients Treated</p>
               </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Dr. Shreya Ghag (P.T.)</h2>
              <p className="text-xl text-primary font-medium">Founder, Head Physiotherapist & Holistic Health Expert</p>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Dr. Shreya Ghag (P.T.) is a highly accomplished and compassionate physiotherapist in Mumbai, widely recognized for her patient-centric, integrative approach to recovery. With over a decade of hands-on clinical experience, she specializes in bridging structural rehabilitation, clinical nutrition, and cognitive-behavioral counseling to deliver complete, long-lasting wellness.
              </p>
              <p>
                In the Vikhroli community, Dr. Shreya operates across dual prominent practices. She serves as a consultant clinical physiotherapist at <strong>Ruby Medical Centre</strong> (Vikhroli East) and leads <strong>Dr. Shreya Ghag's Holistic Health Clinic</strong> (Vikhroli West). Under her leadership, both clinics have become trusted sanctuaries for pain relief, post-surgical recovery, and emotional support, backed by over 150+ five-star patient reviews on major healthcare platforms.
              </p>
              <p>
                Whether helping athletes return to peak performance, guiding elderly patients through joint rehab, or counseling individuals facing severe chronic pain and lifestyle stress, Dr. Shreya's methodology prioritizes diagnostic precision and gentle, personalized rehabilitation.
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
        </div>

        {/* Philosophy Section */}
        <div className="mt-24 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
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

      </div>
    </main>
  );
}
