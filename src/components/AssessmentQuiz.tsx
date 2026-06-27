"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { ChevronRight, ArrowLeft, Activity, Brain, Apple } from "lucide-react";

type Question = {
  id: string;
  question: string;
  options: { label: string; icon?: React.ReactNode; value: string }[];
};

const quizData: Question[] = [
  {
    id: "primary_goal",
    question: "What is your primary health goal today?",
    options: [
      { label: "Pain Relief & Mobility", icon: <Activity className="w-5 h-5 text-primary" />, value: "Physiotherapy" },
      { label: "Stress & Mental Wellness", icon: <Brain className="w-5 h-5 text-secondary" />, value: "Counselling" },
      { label: "Weight & Diet Management", icon: <Apple className="w-5 h-5 text-amber-500" />, value: "Nutrition" },
    ],
  },
  {
    id: "duration",
    question: "How long have you been experiencing this issue?",
    options: [
      { label: "Just recently (Under 1 month)", value: "Acute (< 1 month)" },
      { label: "A few months (1 - 6 months)", value: "Sub-acute (1-6 months)" },
      { label: "It's a chronic issue (6+ months)", value: "Chronic (6+ months)" },
    ],
  },
  {
    id: "impact",
    question: "How much is this affecting your daily life?",
    options: [
      { label: "Mildly (I can manage but it's annoying)", value: "Mild impact" },
      { label: "Moderately (It stops me from doing some things)", value: "Moderate impact" },
      { label: "Severely (It severely limits my daily routine)", value: "Severe impact" },
    ],
  },
  {
    id: "previous_treatment",
    question: "Have you tried any treatments for this before?",
    options: [
      { label: "No, this is my first time seeking help", value: "No previous treatment" },
      { label: "Yes, I've tried medication or home remedies", value: "Medication/Home remedies" },
      { label: "Yes, I've seen other specialists/therapists", value: "Seen other specialists" },
    ],
  },
  {
    id: "readiness",
    question: "How ready are you to start a personalized plan?",
    options: [
      { label: "I want to start immediately", value: "Immediate" },
      { label: "I want to start within the next few weeks", value: "Within few weeks" },
      { label: "I'm just exploring options for now", value: "Exploring options" },
    ],
  }
];

export function AssessmentQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (currentStep < quizData.length) {
      setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const isComplete = currentStep === quizData.length;

  // Build the dynamic WhatsApp message based on their answers
  const generateMessage = () => {
    return `Hello! I took the Free Health Assessment on your website. Here are my results:%0A%0A` +
      `- *Primary Focus*: ${answers.primary_goal}%0A` +
      `- *Duration of Issue*: ${answers.duration}%0A` +
      `- *Daily Impact*: ${answers.impact}%0A` +
      `- *Previous Treatment*: ${answers.previous_treatment}%0A` +
      `- *Readiness*: ${answers.readiness}%0A%0A` +
      `I would like to book a consultation to discuss a treatment plan.`;
  };

  return (
    <div className="bg-card border border-border/80 rounded-3xl p-6 md:p-10 shadow-xl max-w-2xl mx-auto w-full relative overflow-hidden">
      
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-muted">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / quizData.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="min-h-[300px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {currentStep > 0 && (
                <button 
                  onClick={handleBack} 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              )}
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Question {currentStep + 1} of {quizData.length}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{quizData[currentStep].question}</h3>
              </div>

              <div className="space-y-3 pt-4">
                {quizData[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(quizData[currentStep].id, option.value)}
                    className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-background hover:bg-primary/5 hover:border-primary/30 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      {option.icon && <div className="bg-background rounded-md p-1 border border-border/50 shadow-sm">{option.icon}</div>}
                      <span className="font-medium text-foreground/90">{option.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-8"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Activity className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Assessment Complete!</h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Based on your answers, we have a clear idea of how to help you. Send these results directly to our clinic to fast-track your consultation.
              </p>
              
              <div className="pt-6">
                <WhatsAppButton 
                  className="w-full text-lg py-6 font-bold shadow-xl justify-center" 
                  message={generateMessage()}
                >
                  Send Results & Book Consultation
                </WhatsAppButton>
              </div>
              <button 
                onClick={() => { setCurrentStep(0); setAnswers({}); }} 
                className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 pt-4 block mx-auto"
              >
                Retake Assessment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
