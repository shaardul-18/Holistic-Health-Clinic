import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Image from "next/image";
import LineWaves from "@/components/reactbits/LineWaves";

export const metadata = {
  title: "Location | Holistic Health Clinic",
  description: "Visit Holistic Health Clinic in Vikhroli East, Mumbai.",
};

export default function LocationPage() {
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
              rotation={-30}
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Visit Our Clinic</h1>
            <p className="text-xl text-foreground/90 font-medium leading-relaxed">
              Conveniently located in Vikhroli East, Mumbai. We look forward to welcoming you to our modern, state-of-the-art healing space.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
          {/* Map and Info */}
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

          {/* Clinic Images Gallery */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Inside Our Clinic</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-md border border-border group">
                <Image 
                  src="/clinic-1.png" 
                  alt="Clinic Interior View 1" 
                  fill 
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-md border border-border group">
                <Image 
                  src="/clinic-2.png" 
                  alt="Clinic Interior View 2" 
                  fill 
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground italic mt-4">
              Our clinic is designed to provide a calm, welcoming, and sterile environment for your complete comfort during treatments.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
