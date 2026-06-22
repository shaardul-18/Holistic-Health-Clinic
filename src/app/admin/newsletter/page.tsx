"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Send, Users } from "lucide-react";

export default function NewsletterAdminPage() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !content) {
      toast.error("Please fill in both subject and content");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, content }),
      });

      if (res.ok) {
        toast.success("Newsletter broadcast sent successfully!");
        setSubject("");
        setContent("");
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "Failed to send newsletter");
      }
    } catch (error) {
      toast.error("An error occurred while sending");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Email Marketing</h1>
        <Button variant="outline" className="gap-2">
          <Users className="h-4 w-4" />
          View Subscribers
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Compose Broadcast
          </CardTitle>
          <CardDescription>
            Send an email to all your newsletter subscribers.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSend}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject Line</Label>
              <Input 
                id="subject" 
                placeholder="E.g., Top 5 Ergonomic Tips for Office Workers" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Email Content</Label>
              <Textarea 
                id="content" 
                placeholder="Write your email here... (Supports plain text for now)" 
                className="min-h-[300px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading} className="gap-2">
              {isLoading ? "Sending..." : "Send Broadcast"}
              {!isLoading && <Send className="h-4 w-4" />}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
