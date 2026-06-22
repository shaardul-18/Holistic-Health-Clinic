"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Send, Users } from "lucide-react";
import { format } from "date-fns";

export function NewsletterClient({ 
  subscribers 
}: { 
  subscribers: { id: string; email: string; subscribedAt: Date }[] 
}) {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSubscribers, setShowSubscribers] = useState(false);

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
        <Button 
          variant={showSubscribers ? "default" : "outline"} 
          className="gap-2"
          onClick={() => setShowSubscribers(!showSubscribers)}
        >
          <Users className="h-4 w-4" />
          {showSubscribers ? "Hide Subscribers" : `View Subscribers (${subscribers.length})`}
        </Button>
      </div>

      {showSubscribers && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Subscriber List</CardTitle>
            <CardDescription>
              A list of all users who have registered for the newsletter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {subscribers.length === 0 ? (
              <p className="text-muted-foreground text-sm">No subscribers yet.</p>
            ) : (
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-4">
                {subscribers.map((sub) => (
                  <div key={sub.id} className="flex justify-between items-center py-2 border-b last:border-0">
                    <span className="font-medium text-sm">{sub.email}</span>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(sub.subscribedAt), "MMM d, yyyy")}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

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
