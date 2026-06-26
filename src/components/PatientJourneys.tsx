"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Activity } from "lucide-react";

export function PatientJourneys() {
  const cases = [
    {
      title: "Severe Sciatica to Marathon Runner",
      patient: "Rajiv M., 45",
      condition: "Lumbar Disc Herniation with severe radiating leg pain",
      initialState: "Bedridden for 2 weeks, unable to walk more than 50 meters without sharp pain.",
      treatment: "Decompression therapy, targeted core stabilization, and gradual load exposure.",
      outcome: "Pain-free within 8 weeks. Successfully ran a half-marathon 6 months later.",
      duration: "8 Weeks",
      icon: Activity
    },
    {
      title: "Frozen Shoulder Recovery",
      patient: "Sunita S., 52",
      condition: "Adhesive Capsulitis (Freezing Phase)",
      initialState: "Less than 30% range of motion. Unable to sleep on the affected side or raise arm.",
      treatment: "Joint mobilization, soft tissue release, and home exercise program.",
      outcome: "95% range of motion restored. Returned to daily activities pain-free.",
      duration: "12 Weeks",
      icon: TrendingUp
    },
    {
      title: "Holistic Weight Management",
      patient: "Vikram T., 38",
      condition: "Obesity with early-onset knee osteoarthritis",
      initialState: "Chronic knee pain aggravated by weight. BMI 32.",
      treatment: "Clinical nutrition plan combined with low-impact physiotherapy.",
      outcome: "Lost 14kg. Knee pain completely eliminated. Avoided surgical intervention.",
      duration: "6 Months",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <c.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg leading-tight">{c.title}</h4>
                <span className="text-sm text-primary font-medium">{c.patient}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Condition</span>
                <p className="text-sm font-medium mt-1">{c.condition}</p>
              </div>
              
              <div className="pl-4 border-l-2 border-destructive/20 relative">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-destructive/50"></div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Initial State</span>
                <p className="text-sm text-muted-foreground mt-1">{c.initialState}</p>
              </div>
              
              <div className="pl-4 border-l-2 border-amber-500/20 relative">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-amber-500/50"></div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Treatment</span>
                <p className="text-sm text-muted-foreground mt-1">{c.treatment}</p>
              </div>

              <div className="pl-4 border-l-2 border-primary/20 relative">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary/50"></div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Outcome ({c.duration})</span>
                <p className="text-sm text-foreground font-medium mt-1">{c.outcome}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/50 flex items-center text-sm font-medium text-primary cursor-pointer group-hover:text-primary/80 transition-colors">
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
