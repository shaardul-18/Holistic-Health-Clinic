"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // A simple way to generate or retrieve an anonymous session ID for basic tracking
    const getSessionId = () => {
      let sessionId = localStorage.getItem("analytics_session_id");
      if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 15);
        localStorage.setItem("analytics_session_id", sessionId);
      }
      return sessionId;
    };

    if (pathname) {
      // Don't track admin routes
      if (pathname.startsWith("/admin")) return;

      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "PAGE_VIEW",
          path: pathname,
          sessionId: getSessionId(),
        }),
      }).catch(err => console.error("Analytics error:", err));
    }
  }, [pathname]);

  return null; // This component does not render anything
}
