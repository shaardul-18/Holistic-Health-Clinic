import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const metadata = {
  title: "Plantar Fasciitis Relief | Holistic Health Clinic",
  description: "Clinical approaches to resolving chronic heel pain and arch collapse.",
};

export default function PlantarFasciitis() {
  return (
    <BlogArticleLayout
      title="Plantar Fasciitis: Resolving Chronic Heel Pain"
      category="Physiotherapy"
      readTime="4 min read"
      author="Holistic Health Clinic"
      date="October 02, 2024"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <p className="lead text-xl text-muted-foreground">
          That sharp, stabbing pain in your heel when you take your first steps out of bed in the morning is the hallmark sign of Plantar Fasciitis—one of the most common and debilitating orthopedic complaints.
        </p>

        <h2>Understanding the Plantar Fascia</h2>
        <p>
          The plantar fascia is a thick band of connective tissue that runs across the bottom of your foot, connecting your heel bone to your toes. It acts as a shock-absorbing bowstring, supporting the arch of your foot. When tension and stress on this bowstring become too great, micro-tears can occur in the fascia, leading to severe inflammation and pain.
        </p>

        <h3>Common Triggers</h3>
        <ul>
          <li><strong>Biomechanical Flaws:</strong> Flat feet (pes planus) or overly high arches.</li>
          <li><strong>Sudden Increases in Activity:</strong> Starting a new running program without gradual progression.</li>
          <li><strong>Improper Footwear:</strong> Shoes with inadequate arch support or thin soles.</li>
          <li><strong>Weight Gain:</strong> Increased load on the plantar fascia structures.</li>
        </ul>

        <h2>Beyond Just Rest and Ice</h2>
        <p>
          While rest and ice are good initial steps, chronic plantar fasciitis requires biomechanical correction. Our clinical approach involves:
        </p>
        
        <ul>
          <li><strong>Deep Tissue Release:</strong> Breaking up adhesions in the calves and foot arch.</li>
          <li><strong>Eccentric Loading:</strong> Specific calf and fascia loading protocols to strengthen the tissue matrix.</li>
          <li><strong>Taping & Orthotics:</strong> Providing immediate mechanical offloading to the inflamed tissue.</li>
        </ul>
      </div>
    </BlogArticleLayout>
  );
}
