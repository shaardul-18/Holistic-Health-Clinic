import Link from "next/link";
import { Phone, MapPin, Clock, Shield, Award, Stethoscope } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Global CTA Banner */}
        <div className="bg-primary/10 border border-primary/20 rounded-3xl p-10 mb-16 text-center flex flex-col items-center justify-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Ready to start your recovery?</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-lg">Don't let pain or metabolic issues hold you back. Schedule your personalized consultation with Holistic Health Clinic today.</p>
          <WhatsAppButton 
            className="px-10 py-6 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" 
            message="Hello! I would like to book a consultation at Holistic Health Clinic."
          >
            Book Your Consultation
          </WhatsAppButton>
        </div>

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Doctor credentials */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 text-white font-bold text-xl hover:text-primary transition-colors">
              <div className="bg-primary/20 p-2 rounded-xl text-primary">
                <Stethoscope className="h-6 w-6" />
              </div>
              <span className="tracking-tight uppercase">Holistic Health Clinic</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering your journey to optimal physical and mental wellness through evidence-based physiotherapy, clinical nutrition, and empathetic counselling.
            </p>
            <div className="space-y-1.5 pt-2">
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <Award className="h-3.5 w-3.5 text-secondary shrink-0" />
                <span>Holistic Health Clinic Team &bull; B.P.Th, M.I.A.P, P.G.D. Nutrition</span>
              </p>
              <p className="text-xs text-slate-500 flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                <span>Lic/Reg No: OT/PT-2013/05/3752 &bull; Clinic Reg: 842104-M</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors hover:underline underline-offset-4">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors hover:underline underline-offset-4">Services & Modalities</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors hover:underline underline-offset-4">Events & Free Camps</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors hover:underline underline-offset-4">About Holistic Health Clinic</Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-primary transition-colors hover:underline underline-offset-4">Find Clinic & Hours</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Visit details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Clinic & Contact</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Ground Floor, A-Wing, Sai Shraddha Rd, besides Pillai Dental Care, Ashok Nagar, Vikhroli East, Mumbai - 400083
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:+918591180090" className="hover:text-primary transition-colors hover:underline">
                  +91 8591180090
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Mon - Sat: 9:00 AM - 1:00 PM <br />
                  &amp; 6:00 PM - 9:00 PM (Sunday Appt. Only)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> The information provided on this website, including text, graphics, images, resources, and interactions with the AI assistant, is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician or physiotherapist for any medical concerns, and never disregard professional medical advice because of information found on this platform.
            </p>
            <p className="text-xs text-slate-600">
              &copy; {currentYear} Holistic Health Clinic. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6 text-xs text-slate-500 shrink-0">
            <Link href="/privacy" className="hover:text-primary transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
