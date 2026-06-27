"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loading from "@/app/loading";

export function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // On initial load, show it slightly longer to ensure hydration feels complete
    if (isInitialLoad) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      // On route change, show it briefly
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [pathname, searchParams, isInitialLoad]);

  // If we are on initial load, we might want to default to true in useState to prevent flicker, 
  // but starting with false avoids hydration mismatch. Let's just set it to true immediately on mount.
  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) return null;

  return <Loading />;
}
