import { Award, Users, Shield, Stethoscope } from "lucide-react";

export function ClinicalAuthorityBlock() {
  return (
    <div className="bg-card border-y sm:border sm:rounded-3xl border-border/60 py-10 px-6 sm:px-10 mt-16 mb-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        
        {/* Profile / Trust Summary */}
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Shield className="h-3.5 w-3.5" />
            Verified Medical Practice
          </div>
          <h3 className="text-2xl font-bold text-foreground">Holistic Health Clinic</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Our multi-disciplinary team brings over two decades of clinical experience in advanced physiotherapy, holistic nutrition, and cognitive-behavioral psychology. We focus on scientific, evidence-based recovery.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          <div className="bg-muted/50 rounded-2xl p-4 flex flex-col gap-2 border border-border/50">
            <Users className="h-6 w-6 text-primary opacity-80" />
            <div>
              <p className="text-xl font-bold text-foreground">20,000+</p>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Patients Treated</p>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-2xl p-4 flex flex-col gap-2 border border-border/50">
            <Award className="h-6 w-6 text-secondary opacity-80" />
            <div>
              <p className="text-xl font-bold text-foreground">20+ Years</p>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Clinical Experience</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
