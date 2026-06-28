import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const metadata = {
  title: "Ergonomics & Tech Neck",
  description: "Combatting poor desk posture, tech neck, and repetitive strain injuries in the corporate world.",
};

export default function ErgonomicsDeskPosture() {
  return (
    <BlogArticleLayout
      title="Ergonomics: Combating 'Tech Neck' and Desk Posture"
      category="Physiotherapy"
      readTime="5 min read"
      author="Holistic Health Clinic"
      date="September 15, 2024"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <p className="lead text-xl text-muted-foreground">
          In the modern corporate era, sitting is the new smoking. Prolonged hours hunched over laptops and smartphones have led to an epidemic of 'Tech Neck', shoulder rounding, and chronic spinal tension.
        </p>

        <h2>The Anatomy of Tech Neck</h2>
        <p>
          For every inch your head tilts forward beyond a neutral alignment, the weight borne by your cervical spine essentially doubles. Looking down at a smartphone at a 60-degree angle puts roughly 60 pounds of force on your neck muscles and cervical discs. Over time, this leads to early-onset cervical spondylosis, muscle spasms, and tension headaches.
        </p>

        <h3>Key Symptoms of Poor Ergonomics</h3>
        <ul>
          <li><strong>Suboccipital Tension:</strong> Constant dull ache at the base of the skull.</li>
          <li><strong>Upper Trapezius Spasms:</strong> "Knots" and burning sensations between the shoulder blades and neck.</li>
          <li><strong>Numbness & Tingling:</strong> Radiating sensations down the arms due to nerve compression in the neck or thoracic outlet.</li>
          <li><strong>Postural Kyphosis:</strong> A visibly rounded upper back.</li>
        </ul>

        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 my-8">
          <h4 className="text-primary mt-0">The 20-20-20 Rule</h4>
          <p className="mb-0 text-sm">To combat digital eye strain and postural lock, every 20 minutes, look at something 20 feet away for at least 20 seconds. Use this time to do a quick chin tuck and shoulder blade squeeze.</p>
        </div>

        <h2>Clinical Intervention and Workspace Redesign</h2>
        <p>
          Treatment requires a two-pronged approach. Clinically, we use myofascial release, joint mobilization, and postural strengthening exercises to correct the muscle imbalances (stretching the tight pecs, strengthening the weak rhomboids). Environmentally, we provide personalized ergonomic assessments to optimize your monitor height, lumbar support, and keyboard alignment.
        </p>
      </div>
    </BlogArticleLayout>
  );
}
