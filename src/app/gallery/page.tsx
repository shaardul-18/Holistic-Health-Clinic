import Image from "next/image";
import dynamic from "next/dynamic";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const LineWaves = dynamic(() => import("@/components/reactbits/LineWaves"));
export const metadata = {
  title: "Gallery",
  description: "Moments of healing, community wellness camps, and diagnostic checkups at Holistic Health Clinic.",
};

export default function GalleryPage() {
  const sections = [
    {
      title: "Bone Mineral Density Camp",
      description: "Community health outreach and diagnostic screening drives.",
      images: [
        "/gallery-1.png",
        "/gallery-2.png",
        "/gallery-3.jpg"
      ]
    },
    {
      title: "Our Clinic Environment",
      description: "A welcoming, state-of-the-art facility designed for your comfort and recovery.",
      images: [
        "/gallery/clinic-entrance.png",
        "/gallery/clinic-bed.png",
        "/gallery/clinic-room-new-1.png"
      ]
    },
    {
      title: "Patient Treatments",
      description: "Hands-on physiotherapy, ultrasound therapy, and active manipulation.",
      images: [
        "/treat-1.jpg",
        "/treat-2.jpg",
        "/treat-3.jpg",
        "/gallery/patient-exercise.jpg"
      ]
    }
  ];

  return (
    <main className="flex-1 flex flex-col bg-background pt-28 pb-24 relative overflow-hidden">
      {/* Animated Hero Background with smooth fade out */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 opacity-40">
          <LineWaves
            speed={0.15}
            innerLineCount={20}
            outerLineCount={24}
            warpIntensity={0.5}
            rotation={15}
            edgeFadeWidth={0.1}
            colorCycleSpeed={0.5}
            brightness={0.25}
            color1="#1886C6"
            color2="#22c55e"
            color3="#1886C6"
            enableMouseInteraction={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>
      <div className="container mx-auto px-6 max-w-6xl space-y-24 relative z-10">

        
        {/* Header */}
        <ScrollReveal animation="blur-in" duration={2500}>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              <TextReveal delay={100}>Clinic</TextReveal> <TextReveal delay={400} direction="down" gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gallery</TextReveal>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              A glimpse into our community checkup camps, diagnostic drives, and day-to-day healing environment.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Sections */}
        <div className="space-y-20">
          {sections.map((section, idx) => (
            <section key={idx} className="space-y-10">
              <ScrollReveal animation="fade-in">
                <div className="text-center space-y-2 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.images.map((src, imgIdx) => (
                  <ScrollReveal 
                    key={imgIdx} 
                    animation="scale-up" 
                    delay={imgIdx * 100}
                  >
                    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-500 group aspect-[4/3] relative">
                      <Image
                        src={src}
                        alt={`${section.title} photo ${imgIdx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  );
}
