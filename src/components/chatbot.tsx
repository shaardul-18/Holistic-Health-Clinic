"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Don't render on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: updatedMessages,
          sessionId: typeof window !== "undefined" ? localStorage.getItem("analytics_session_id") || "unknown" : "unknown"
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
    } catch (error: any) {
      console.error("Chat error:", error);
      toast.error(error.message || "Failed to connect to the assistant.");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <>
      {/* Floating Action Button with Interaction Cue */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Tooltip Cue */}
          <div className="hidden sm:flex bg-background border shadow-lg rounded-full py-2 px-4 text-xs font-bold text-foreground/80 animate-bounce pointer-events-none">
            Need help? Chat with us!
          </div>
          {/* Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-4 bg-primary text-primary-foreground rounded-full shadow-xl hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Open chat"
          >
            {/* Pulsing indicator */}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary border-2 border-background"></span>
            </span>
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[350px] max-h-[500px] flex flex-col shadow-2xl border-border animate-in slide-in-from-bottom-5">
          <CardHeader className="p-4 border-b bg-primary/10 flex flex-row items-center justify-between rounded-t-xl">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Clinic Assistant
            </CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-0 flex-1 flex flex-col overflow-hidden bg-background">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="text-center text-muted-foreground text-sm mt-4">
                    <Bot className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Hi! I'm the digital assistant for Holistic Health Clinic.</p>
                    <p className="mt-1">How can I help you today?</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-2">
                    {[
                      { text: "🩹 Exercises for back pain", prompt: "What are some recommended exercises for lower back pain relief?" },
                      { text: "🥗 Anti-inflammatory diet advice", prompt: "What foods should I eat or avoid for an anti-inflammatory joint diet?" },
                      { text: "🧠 Managing anxiety and stress", prompt: "What coping strategies or Counselling methods do you recommend for stress & anxiety?" },
                      { text: "📍 Clinic timings & address", prompt: "What are the clinic timings, working days, and location address?" }
                    ].map((item, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => sendMessage(item.prompt)}
                        disabled={isLoading}
                        className="w-full text-left px-4 py-2.5 rounded-xl border border-border bg-slate-50 dark:bg-slate-900/50 hover:bg-primary/5 hover:border-primary/30 transition-all text-xs font-medium text-foreground/80 flex items-center justify-between group disabled:opacity-50"
                      >
                        <span>{item.text}</span>
                        <Send className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "flex gap-2 max-w-[85%]",
                    m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                    m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  )}>
                    {m.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={cn(
                    "rounded-2xl px-4 py-2 text-sm",
                    m.role === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-muted rounded-tl-sm"
                  )}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 max-w-[85%] mr-auto">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 bg-secondary text-secondary-foreground">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl px-4 py-2 text-sm bg-muted rounded-tl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="p-3 border-t bg-background flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
