import Image from "next/image";
import { Calendar, Users, MapPin } from "lucide-react";
import LineWaves from "@/components/reactbits/LineWaves";

export const metadata = {
  title: "Events | Holistic Health Clinic",
  description: "Join us for our upcoming medical camps and community events.",
};

export default function EventsPage() {
  return (
    <main className="flex-1 flex flex-col bg-background pt-8 pb-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        
        {/* Header */}
        <div className="relative py-16 px-6 text-center max-w-3xl mx-auto space-y-4 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <LineWaves
              speed={0.15}
              innerLineCount={20}
              outerLineCount={24}
              warpIntensity={0.5}
              rotation={10}
              edgeFadeWidth={0.1}
              colorCycleSpeed={0.5}
              brightness={0.25}
              color1="#22c55e"
              color2="#1886C6"
              color3="#0ea5e9"
              enableMouseInteraction={false}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" style={{ zIndex: 2 }}></div>
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto drop-shadow-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Community Events</h1>
            <p className="text-xl text-foreground/90 font-medium leading-relaxed">
              We regularly organize medical camps and awareness programs to support the well-being of our community.
            </p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
          </div>
          
          <div className="bg-card rounded-3xl p-8 text-center border border-border shadow-sm">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Upcoming Events</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We are currently planning our next community initiative. Subscribe to our newsletter to be the first to know when registrations open!
            </p>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b pb-4 mt-16">
            <h2 className="text-3xl font-bold text-foreground">Past Camps & Initiatives</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* BMD Camp */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src="/bmd-camp.png" 
                  alt="Bone Mineral Density Camp" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <span className="bg-primary/90 px-2 py-1 rounded text-xs">Past Event</span>
                  </div>
                  <h3 className="text-2xl font-bold">Bone Mineral Density Camp</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our successful BMD camp helped over 100+ local residents assess their bone health. Early detection is critical for managing osteoporosis, and our physiotherapy team provided on-the-spot consultations and personalized exercise routines.
                </p>
                <div className="flex items-center gap-6 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-primary" />
                    <span>100+ Attendees</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span>Clinic Premises</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Child Mental Health Camp */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src="/mental-health-camp.png" 
                  alt="Child Mental Health Camp" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <span className="bg-secondary/90 px-2 py-1 rounded text-xs">Past Event</span>
                  </div>
                  <h3 className="text-2xl font-bold">Child Mental Health Camp</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Focusing on the psychological well-being of our younger generation, this camp provided a safe space for children and parents to engage with our expert counsellors. We conducted interactive workshops on emotional intelligence and stress management.
                </p>
                <div className="flex items-center gap-6 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-secondary" />
                    <span>50+ Families</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Vikhroli East</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

      </div>
    </main>
  );
}
