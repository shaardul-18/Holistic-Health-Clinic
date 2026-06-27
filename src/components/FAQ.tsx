"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need a doctor's referral to start treatment?",
    answer: "No, a doctor's referral is not required to start physiotherapy, diet planning, or counselling. You can book an appointment directly with us. However, if you have past medical reports, prescriptions, or scans (such as X-rays or MRIs), please bring them along for your initial assessment."
  },
  {
    question: "What should I expect during my first session?",
    answer: "Your first session will focus on a comprehensive clinical assessment. Our clinical team will discuss your symptoms, perform specific physical and diagnostic tests, explain the root cause of your condition, and outline a customized treatment plan. If time permits, we will also begin your first therapy/treatment during this visit."
  },
  {
    question: "How many sessions will I need for recovery?",
    answer: "The number of sessions depends on the severity, duration, and type of your condition. While acute issues (like a mild ankle strain) might require only 3-5 sessions, chronic pain or post-surgical rehabilitation may take 10+ sessions. We constantly re-evaluate your progress to ensure you recover as quickly and safely as possible."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we provide online consultations for clinical diet planning, psychological counselling, and follow-up physiotherapy checkups. However, hands-on physical therapy and electrotherapy modalities (like SWD, Ultrasound, and IFT) must be conducted in person at our Vikhroli clinic."
  },
  {
    question: "What are the clinic timings?",
    answer: "Our standard clinic hours are Monday to Saturday: Morning: 9:00 AM to 1:00 PM, Evening: 6:00 PM to 9:00 PM. Sundays are available strictly by prior appointment for emergency or specialized sessions."
  },
  {
    question: "Where is the clinic located in Vikhroli?",
    answer: "We are located on the Ground Floor, A-Wing, Sai Shraddha Road, besides Pillai Dental Care (behind Trillium Dental Care), Ashok Nagar, Vikhroli East, Mumbai. Valet or roadside parking is available nearby."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              "border border-border rounded-2xl transition-all duration-300 overflow-hidden bg-card/50",
              isOpen ? "shadow-md bg-card border-primary/20" : "hover:border-primary/20 hover:bg-card/80"
            )}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg text-foreground focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 pr-4">
                <HelpCircle className={cn("h-5 w-5 shrink-0 transition-colors", isOpen ? "text-primary" : "text-muted-foreground")} />
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0",
                  isOpen && "transform rotate-180 text-primary"
                )}
              />
            </button>
            <div
              className={cn(
                "transition-all duration-300 ease-in-out px-6 overflow-hidden",
                isOpen ? "max-h-[300px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
              )}
            >
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
