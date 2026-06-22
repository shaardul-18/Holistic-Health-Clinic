import Link from "next/link";
import { LayoutDashboard, Mail, LogOut, Settings } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/components/logout-button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-secondary/20">
      <aside className="w-64 border-r bg-card hidden md:flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">Clinic Admin</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary transition-colors font-medium">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link href="/admin/newsletter" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary transition-colors font-medium">
            <Mail size={20} />
            Newsletter
          </Link>
        </nav>
        <div className="p-4 border-t space-y-4">
          <ThemeToggle />
          <LogoutButton />
        </div>
      </aside>
      
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
