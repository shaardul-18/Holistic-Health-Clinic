import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const metadata = {
  keywords: ["Post-Pregnancy Physiotherapy", "Pelvic Health", "post-partum recovery", "pelvic floor rehab", "diastasis recti", "physiotherapy", "clinical diet", "mental health", "holistic health clinic", "treatment"],
  title: "Post-Pregnancy Physiotherapy & Pelvic Health | Holistic Health Clinic",
  description: "Comprehensive guide on recovering safely after childbirth through targeted pelvic floor rehabilitation and physiotherapy.",
};

export default function PostPregnancyPhysiotherapy() {
  return (
    <BlogArticleLayout
      title="Post-Pregnancy Physiotherapy & Pelvic Health"
      category="Physiotherapy"
      readTime="6 min read"
      author="Holistic Health Clinic"
      date="July 06, 2026"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <p className="lead text-xl text-muted-foreground">
          Childbirth is one of the most physically demanding experiences a woman's body can undergo. Post-pregnancy physiotherapy is essential for restoring core strength, addressing pelvic floor dysfunction, and safely guiding new mothers back to their pre-pregnancy activity levels.
        </p>

        <h2>The Importance of Pelvic Floor Rehabilitation</h2>
        <p>
          During pregnancy and delivery, the pelvic floor muscles endure immense pressure and trauma. This can lead to issues such as incontinence, pelvic organ prolapse, and chronic lower back pain. Targeted physiotherapy helps in retraining these muscles, restoring their tone and function without exacerbating the injury.
        </p>

        <h2>Addressing Diastasis Recti</h2>
        <p>
          Diastasis Recti (the separation of the abdominal muscles) affects many women post-partum. Traditional abdominal exercises like crunches can actually worsen the condition. A clinical physiotherapist will guide you through specific transverse abdominis activations to safely close the gap and rebuild your core foundation.
        </p>

        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 my-8">
          <h4 className="text-primary mt-0">The Nutritional Synergy</h4>
          <p className="mb-0 text-sm">Tissue healing requires proper fuel. Integrating a specialized clinical diet rich in collagen-building nutrients and anti-inflammatory foods significantly accelerates the physical rehabilitation process post-delivery.</p>
        </div>

        <h2>When Should You Start?</h2>
        <p>
          While gentle pelvic floor contractions (Kegels) and deep breathing can often begin within days of a normal delivery, a comprehensive physical assessment should ideally occur around the 6-week post-partum mark. Your physiotherapist will clear you for more advanced movements based on your individual healing progress.
        </p>
      </div>
    </BlogArticleLayout>
  );
}
