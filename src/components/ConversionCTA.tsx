import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle2, Clock, CalendarDays, ShieldCheck } from "lucide-react";

interface ConversionCTAProps {
  title?: string;
  buttonText?: string;
  whatsappMessage?: string;
  theme?: "primary" | "secondary" | "amber";
}

export function ConversionCTA({ 
  title = "Ready to start your recovery?", 
  buttonText = "Book a Consultation", 
  whatsappMessage = "Hello, I would like to book a consultation.",
  theme = "primary" 
}: ConversionCTAProps) {
  
  const themeClasses = {
    primary: "bg-primary/5 border-primary/20 text-primary",
    secondary: "bg-secondary/5 border-secondary/20 text-secondary",
    amber: "bg-amber-500/5 border-amber-500/20 text-amber-600"
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`rounded-3xl border p-8 md:p-10 ${currentTheme} relative overflow-hidden mt-8`}>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        
        {/* Left side: Expectation Setting */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Skip the waiting room. Speak directly with our clinical team to understand your condition before committing to a full treatment plan.
            </p>
          </div>
          
          <div className="space-y-3 border-l-2 border-foreground/10 pl-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">What happens next?</h4>
            <div className="flex items-start gap-3">
              <CalendarDays className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
              <p className="text-sm text-foreground font-medium">1. Schedule a convenient time via WhatsApp.</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
              <p className="text-sm text-foreground font-medium">2. 30-Minute comprehensive clinical assessment.</p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
              <p className="text-sm text-foreground font-medium">3. Receive a personalized recovery roadmap.</p>
            </div>
          </div>
        </div>

        {/* Right side: Reassurance & Action */}
        <div className="flex-1 md:max-w-xs w-full bg-background rounded-2xl p-6 shadow-sm border border-border flex flex-col justify-center text-center">
          <div className="mb-6 space-y-2">
            <div className="flex justify-center mb-3">
              <div className="bg-green-100 text-green-700 p-2 rounded-full">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>
            <p className="text-sm font-bold text-foreground">No Obligations</p>
            <p className="text-xs text-muted-foreground">We only proceed if we are confident we can help you.</p>
          </div>
          
          <WhatsAppButton 
            className={`w-full justify-center text-sm py-4 ${
              theme === "secondary" ? "bg-secondary hover:bg-secondary/90 focus:ring-secondary" :
              theme === "amber" ? "bg-amber-600 hover:bg-amber-700 focus:ring-amber-600" : ""
            }`}
            message={whatsappMessage}
          >
            {buttonText}
          </WhatsAppButton>
        </div>
        
      </div>
    </div>
  );
}
