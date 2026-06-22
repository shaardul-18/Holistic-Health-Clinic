"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <Button 
      variant="outline" 
      className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign out
    </Button>
  );
}
