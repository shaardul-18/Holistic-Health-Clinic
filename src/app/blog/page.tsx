"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, Apple, Brain } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import dynamic from "next/dynamic";

const LineWaves = dynamic(() => import("@/components/reactbits/LineWaves"));

export default function BlogIndex() {
  const articles = [
    // Physiotherapy
    { title: "Temporomandibular Joint (TMJ) Dysfunction Relief", desc: "How physical therapy can relieve chronic jaw pain, clicking, and tension headaches.", href: "/blog/tmj-dysfunction-relief", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/spondylosis_real_1782462044125.png" },
    { title: "Cervical & Lumbar Spondylosis", desc: "Understanding spinal degeneration and how targeted physiotherapy alleviates nerve compression.", href: "/blog/cervical-lumbar-spondylosis", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/spondylosis_real_1782462044125.png" },
    { title: "Frozen Shoulder Rehabilitation", desc: "Navigating the phases of Adhesive Capsulitis and restoring your pain-free range of motion safely.", href: "/blog/frozen-shoulder-rehab", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/frozen_shoulder_real_1782462095092.png" },
    { title: "Osteoarthritis of the Knee", desc: "Strategies to manage joint degeneration, reduce pain, and preserve mobility without immediate surgery.", href: "/blog/knee-osteoarthritis", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/knee_oa_real_1782462106355.png" },
    { title: "Sciatica Pain Relief", desc: "Identifying the root cause of radiating nerve pain and utilizing targeted physical therapy to achieve lasting relief.", href: "/blog/sciatica-pain-relief", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/sciatica_real_1782462118918.png" },
    { title: "Sports Injury Recovery", desc: "Advanced rehabilitation protocols to safely return athletes to peak performance after acute or overuse injuries.", href: "/blog/sports-injury-recovery", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/sports_injury_real_1782462054519.png" },
    { title: "Post-Surgical Rehabilitation", desc: "Comprehensive recovery protocols for joint replacements, ligament repairs, and orthopedic surgeries.", href: "/blog/post-surgical-rehab", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/sports_injury_real_1782462054519.png" },
    { title: "Ergonomics & Desk Posture", desc: "Combatting poor desk posture, tech neck, and repetitive strain injuries in the corporate world.", href: "/blog/ergonomics-desk-posture", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/spondylosis_real_1782462044125.png" },
    { title: "Plantar Fasciitis Relief", desc: "Clinical approaches to resolving chronic heel pain and arch collapse.", href: "/blog/plantar-fasciitis-relief", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/sciatica_real_1782462118918.png" },
    { title: "Tennis Elbow & Carpal Tunnel", desc: "Treating repetitive strain injuries of the elbow, wrist, and hand.", href: "/blog/tennis-elbow-carpal-tunnel", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/frozen_shoulder_real_1782462095092.png" },
    { title: "Postpartum Core Rehabilitation", desc: "Safely rebuilding core strength and resolving diastasis recti after childbirth.", href: "/blog/postpartum-core-rehab", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/sciatica_real_1782462118918.png" },
    { title: "Post-Pregnancy Physiotherapy", desc: "Comprehensive guide on recovering safely after childbirth through targeted pelvic floor rehabilitation.", href: "/blog/post-pregnancy-physiotherapy", category: "Physiotherapy", icon: Activity, colorClass: "text-primary bg-primary/10", borderHover: "hover:border-primary/50", img: "/blog/spondylosis_real_1782462044125.png" },

    // Diet
    { title: "Intermittent Fasting for Insulin Resistance", desc: "A clinical approach to meal timing to reverse metabolic dysfunction and promote sustainable fat loss.", href: "/blog/intermittent-fasting-insulin", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_metabolic_weight.png" },
    { title: "Metabolic Weight Management", desc: "Why starvation diets fail and how to use clinical nutrition to achieve sustainable fat loss and joint relief.", href: "/blog/metabolic-weight-management", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_metabolic_weight.png" },
    { title: "Anti-Inflammatory Nutrition", desc: "How everyday food choices can naturally extinguish chronic joint pain and accelerate physical healing.", href: "/blog/anti-inflammatory-diet", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_anti_inflammatory.png" },
    { title: "Diabetic Diet Control", desc: "Mastering blood sugar regulation to prevent nerve damage and accelerate tissue healing.", href: "/blog/diabetic-diet-control", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_diabetic_diet.png" },
    { title: "Muscle Recovery Nutrition", desc: "Fueling your body with precise macronutrients to rebuild tissue post-surgery or athletic exertion.", href: "/blog/muscle-recovery-nutrition", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_muscle_recovery.png" },
    { title: "PCOS Diet Management", desc: "A clinical approach to restoring hormonal balance and managing the symptoms of Polycystic Ovary Syndrome.", href: "/blog/pcos-diet-management", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_pcos_diet.png" },
    { title: "Best Diet for PCOS India", desc: "Tailored nutritional guidelines focusing on Indian diets to combat PCOS and restore health.", href: "/blog/best-diet-for-pcos-india", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_pcos_diet.png" },
    { title: "Gut Health and Fat Loss", desc: "Understanding the microbiome's role in metabolism and sustainable fat loss.", href: "/blog/gut-health-and-fat-loss", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_metabolic_weight.png" },
    { title: "Why Weight Loss Is Not Working", desc: "Identifying metabolic roadblocks and overcoming plateaus with evidence-based nutrition.", href: "/blog/why-weight-loss-is-not-working", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_anti_inflammatory.png" },
    { title: "Nutrition for Joint Health", desc: "Essential nutrients and dietary strategies to support cartilage repair and reduce joint stiffness.", href: "/blog/nutrition-joint-health", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_muscle_recovery.png" },
    { title: "Understanding the Gut-Brain Axis", desc: "How optimizing your gut microbiome through clinical nutrition can dramatically improve your mental health.", href: "/blog/gut-brain-axis-diet", category: "Clinical Diet", icon: Apple, colorClass: "text-amber-600 bg-amber-500/10", borderHover: "hover:border-amber-500/50", img: "/blog/blog_metabolic_weight.png" },

    // Psychology
    { title: "Digital Detox & Mental Health", desc: "Overcoming screen addiction to reduce anxiety, improve sleep, and reclaim cognitive focus.", href: "/blog/digital-detox-mental-health", category: "Psychology", icon: Brain, colorClass: "text-secondary bg-secondary/10", borderHover: "hover:border-secondary/50", img: "/blog/stress_real_1782462066306.png" },
    { title: "Managing Chronic Stress", desc: "How psychological tension becomes physical pain, and how professional counselling breaks the cycle.", href: "/blog/managing-chronic-stress", category: "Psychology", icon: Brain, colorClass: "text-secondary bg-secondary/10", borderHover: "hover:border-secondary/50", img: "/blog/stress_real_1782462066306.png" },
    { title: "Coping with Pain Depression", desc: "Breaking the vicious cycle of physical suffering and emotional despair through integrated therapeutic support.", href: "/blog/pain-depression-coping", category: "Psychology", icon: Brain, colorClass: "text-secondary bg-secondary/10", borderHover: "hover:border-secondary/50", img: "/blog/depression_real_1782462078324.png" },
    { title: "Overcoming Injury Anxiety", desc: "Conquering kinesiophobia and rebuilding confidence in your body after a severe physical trauma.", href: "/blog/injury-anxiety-overcoming", category: "Psychology", icon: Brain, colorClass: "text-secondary bg-secondary/10", borderHover: "hover:border-secondary/50", img: "/blog/injury_anxiety_overcoming_1782461575824.png" },
    { title: "Mindfulness for Sleep Disorders", desc: "Breaking the cycle of insomnia to unlock your body's most powerful state of physical and mental recovery.", href: "/blog/sleep-mindfulness", category: "Psychology", icon: Brain, colorClass: "text-secondary bg-secondary/10", borderHover: "hover:border-secondary/50", img: "/blog/sleep_mindfulness_1782461587342.png" },
    { title: "CBT for Rehab Motivation", desc: "Utilizing Cognitive Behavioral Therapy to overcome frustration and conquer long-term physical rehabilitation.", href: "/blog/cbt-rehab-motivation", category: "Psychology", icon: Brain, colorClass: "text-secondary bg-secondary/10", borderHover: "hover:border-secondary/50", img: "/blog/cbt_rehab_motivation_1782461598043.png" },
    { title: "Mind-Body Connection in Healing", desc: "How psychological well-being accelerates physical recovery and reduces chronic pain perception.", href: "/blog/mind-body-connection", category: "Psychology", icon: Brain, colorClass: "text-secondary bg-secondary/10", borderHover: "hover:border-secondary/50", img: "/blog/sleep_mindfulness_1782461587342.png" },
    { title: "Managing Remote Work Burnout", desc: "Identify and combat the physical and psychological signs of remote work burnout with professional strategies.", href: "/blog/remote-work-burnout", category: "Psychology", icon: Brain, colorClass: "text-secondary bg-secondary/10", borderHover: "hover:border-secondary/50", img: "/blog/stress_real_1782462066306.png" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <main className="flex-1 bg-background pt-32 pb-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
            <TextReveal delay={100}>Holistic</TextReveal> <TextReveal delay={400} direction="down" gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</TextReveal>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Explore our comprehensive library of {articles.length} deep-dive articles covering advanced physiotherapy, clinical nutrition, and mental health strategies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {articles.map((article, idx) => {
            const Icon = article.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="h-full">
                <Link href={article.href} className="group block h-full">
                  <div className={`relative h-full overflow-hidden rounded-3xl bg-card border border-border ${article.borderHover} transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 flex flex-col`}>

                    {/* Featured Image with Parallax-style hover effect */}
                    <div className="relative w-full h-48 overflow-hidden bg-muted group-hover:scale-105 transition-transform duration-1000">
                      {article.img && (
                        <Image
                          src={article.img}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>

                      {/* Category Badge positioned over image */}
                      <div className={`absolute bottom-4 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md bg-background/80 ${article.colorClass.split(' ')[0]} border border-border/50`}>
                        <Icon className="h-3 w-3" /> {article.category}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-4 relative z-10 flex flex-col flex-grow bg-card">
                      <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-500 line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-sm font-light flex-grow line-clamp-3">
                        {article.desc}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold text-foreground/80 pt-4 uppercase tracking-widest group-hover:gap-4 group-hover:text-primary transition-all duration-500">
                        Read Article <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
