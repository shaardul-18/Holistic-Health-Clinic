import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const metadata = {
  keywords: ["Gut-Brain Axis", "Clinical Diet", "microbiome", "mental health nutrition", "serotonin diet", "physiotherapy", "clinical diet", "mental health", "holistic health clinic", "treatment"],
  title: "Understanding the Gut-Brain Axis in Clinical Diet | Holistic Health Clinic",
  description: "How optimizing your gut microbiome through clinical nutrition can dramatically improve your mental health, mood, and cognitive function.",
};

export default function GutBrainAxisDiet() {
  return (
    <BlogArticleLayout
      title="Understanding the Gut-Brain Axis: Nutrition for Mental Health"
      category="Clinical Diet"
      readTime="7 min read"
      author="Holistic Health Clinic"
      date="July 06, 2026"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <p className="lead text-xl text-muted-foreground">
          The connection between your digestive system and your brain is profound. The gut-brain axis is a bidirectional communication network that heavily influences mood, cognitive function, and mental health. What you eat directly impacts how you feel.
        </p>

        <h2>The Second Brain</h2>
        <p>
          Your enteric nervous system, often called the "second brain," resides in your gut. It produces over 90% of the body's serotonin—the neurotransmitter responsible for regulating mood, sleep, and anxiety. When your gut microbiome is imbalanced due to a poor diet, serotonin production suffers, leading to increased rates of depression and anxiety.
        </p>

        <h2>Anti-Inflammatory Nutrition</h2>
        <p>
          Chronic inflammation in the gut can cross the blood-brain barrier, resulting in brain fog and mood disorders. A clinical diet rich in omega-3 fatty acids, polyphenols, and antioxidant-rich vegetables helps soothe the gut lining. We focus on eliminating highly processed foods and refined sugars that feed harmful bacteria.
        </p>

        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 my-8">
          <h4 className="text-primary mt-0">Prebiotics vs. Probiotics</h4>
          <p className="mb-0 text-sm">While probiotics (found in yogurt, kefir, and kimchi) introduce beneficial bacteria into your gut, prebiotics (found in garlic, onions, and asparagus) provide the essential fiber that feeds these bacteria, allowing them to thrive and produce mood-regulating short-chain fatty acids.</p>
        </div>

        <h2>A Holistic Approach</h2>
        <p>
          Healing the gut-brain axis is not a one-size-fits-all approach. At our clinic, we combine clinical dietetics with mental health counseling to address the emotional aspects of eating while physically repairing the microbiome for sustained psychological well-being.
        </p>
      </div>
    </BlogArticleLayout>
  );
}
