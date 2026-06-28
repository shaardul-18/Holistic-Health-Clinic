import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const LineWaves = dynamic(() => import("@/components/reactbits/LineWaves"));
export const metadata = {
  title: "Location",
  description: "Visit Holistic Health Clinic in Vikhroli East, Mumbai.",
};

export default function LocationPage() {
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
      <div className="container mx-auto px-6 max-w-6xl space-y-16 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="blur-in" duration={2500}>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              <TextReveal delay={100}>Visit</TextReveal> <TextReveal delay={400} direction="down" gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Our Clinic</TextReveal>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Conveniently located in Vikhroli East, Mumbai. We look forward to welcoming you to our modern, state-of-the-art healing space.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto mt-8">
          {/* Map and Info */}
          <ScrollReveal animation="slide-right" delay={150}>
            <div className="space-y-8">
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9368571224277!2d72.9273594!3d19.1104258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c70687a9a3ef%3A0x8e3171510b68670e!2sDr.Shreya%20Ghag&#39;s%20Holistic%20Health%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 h-12 w-12 flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Address</h3>
                    <p className="text-muted-foreground mt-1 text-sm">Ground floor, besides Pillai dental care, A WING, Sai Shraddha Rd, behind Trillium dental care, Ashok Nagar, Vikhroli East, Mumbai, Maharashtra 400083</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0 h-12 w-12 flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Hours</h3>
                    <p className="text-muted-foreground mt-1 text-sm">Mon to Sat:<br/>Mor.: 9 am to 1 pm<br/>Eve.: 6 pm to 9 pm<br/>Sunday by Appointment</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 h-12 w-12 flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Phone</h3>
                    <p className="text-muted-foreground mt-1 text-sm">+91 8591180090</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0 h-12 w-12 flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Email</h3>
                    <p className="text-muted-foreground mt-1 text-sm">-</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <WhatsAppButton className="w-full text-center justify-center py-6 text-lg">Book Appointment via WhatsApp</WhatsAppButton>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </main>
  );
}
