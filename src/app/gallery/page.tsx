import Image from "next/image";
import LineWaves from "@/components/reactbits/LineWaves";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Gallery | Holistic Health Clinic",
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
      title: "Clinic Interiors",
      description: "Our modern and relaxing clinical environment for physiotherapy and counselling.",
      images: [
        "/clinic-1.png",
        "/clinic-2.png"
      ]
    }
  ];

  return (
    <main className="flex-1 flex flex-col bg-background pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-24">
        
        {/* Header */}
        <ScrollReveal animation="slide-up">
          <div className="relative py-16 px-6 text-center max-w-3xl mx-auto space-y-4 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" style={{ zIndex: 2 }}></div>
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto drop-shadow-xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Clinic Gallery</h1>
              <p className="text-xl text-foreground/90 font-medium leading-relaxed">
                A glimpse into our community checkup camps, diagnostic drives, and day-to-day healing environment.
              </p>
            </div>
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
