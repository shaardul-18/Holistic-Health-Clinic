import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

interface BlogArticleLayoutProps {
  category: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  heroComponent?: React.ReactNode;
  readTime?: string;
  author?: string;
  date?: string;
  children: React.ReactNode;
}

export function BlogArticleLayout({ 
  category, 
  title, 
  subtitle, 
  imageSrc, 
  heroComponent,
  readTime,
  author,
  date,
  children 
}: BlogArticleLayoutProps) {
  return (
    <main className="flex-1 bg-background pt-32 pb-24 px-6 min-h-screen">
      <article className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-in" duration={1500}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors duration-500 uppercase tracking-widest mb-12">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>
          
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase animate-in fade-in zoom-in duration-1000">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
                {category}
              </span>
              {readTime && <span className="text-muted-foreground">{readTime}</span>}
              {date && <span className="text-muted-foreground">• {date}</span>}
              {author && <span className="text-muted-foreground">• By {author}</span>}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              <TextReveal delay={200}>{title}</TextReveal>
            </h1>
            {subtitle && (
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-500 fill-mode-both">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="elegant-slide" delay={600} duration={2500}>
          {imageSrc ? (
            <ParallaxImage 
              src={imageSrc} 
              alt={title} 
              className="w-full h-[50vh] min-h-[400px] mt-16 rounded-3xl border border-border shadow-2xl" 
            />
          ) : heroComponent ? (
            <div className="w-full h-[50vh] min-h-[400px] mt-16 rounded-3xl border border-border shadow-2xl overflow-hidden relative">
              {heroComponent}
            </div>
          ) : null}
        </ScrollReveal>

        <div className="mt-20">
          <ScrollReveal animation="elegant-slide" duration={2200}>
            {/* Custom explicit Tailwind typography wrapper */}
            <div className="
              text-lg md:text-xl font-light leading-loose text-foreground/80 space-y-8
              [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:border-b [&>h2]:border-border [&>h2]:pb-4
              [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-12 [&>h3]:mb-4
              [&>p]:mb-6
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:mb-8 [&>ul]:text-foreground/80
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-3 [&>ol]:mb-8 [&>ol]:text-foreground/80
              [&>li>strong]:font-semibold [&>li>strong]:text-foreground
            ">
              {children}
            </div>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
}
