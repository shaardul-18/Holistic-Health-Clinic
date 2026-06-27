import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const metadata = {
  title: "Tennis Elbow & Carpal Tunnel | Holistic Health Clinic",
  description: "Treating repetitive strain injuries of the elbow, wrist, and hand.",
};

export default function TennisElbowCarpalTunnel() {
  return (
    <BlogArticleLayout
      title="Overcoming Tennis Elbow and Carpal Tunnel Syndrome"
      category="Physiotherapy"
      readTime="5 min read"
      author="Holistic Health Clinic"
      date="November 12, 2024"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <p className="lead text-xl text-muted-foreground">
          Repetitive strain injuries (RSIs) of the upper extremity are no longer just for athletes. With the rise of intensive computer work, conditions like Tennis Elbow and Carpal Tunnel Syndrome have become ubiquitous.
        </p>

        <h2>Tennis Elbow (Lateral Epicondylitis)</h2>
        <p>
          Despite the name, most people who get tennis elbow have never swung a racket. It is an overuse injury involving the extensor muscles of the forearm, causing pain and burning on the outside of the elbow. Activities like prolonged typing, mouse usage, plumbing, or painting are common culprits.
        </p>

        <h2>Carpal Tunnel Syndrome</h2>
        <p>
          This occurs when the median nerve, which runs from the forearm into the palm of the hand, becomes pressed or squeezed at the wrist. The result is numbness, tingling, and weakness in the hand and fingers.
        </p>

        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 my-8">
          <h4 className="text-primary mt-0">The Cervical Connection</h4>
          <p className="mb-0 text-sm">Sometimes, symptoms in the elbow or wrist actually originate from a compressed nerve in the neck (Cervical Radiculopathy). A thorough physiotherapeutic assessment is required to trace the pain to its true anatomical origin.</p>
        </div>

        <h2>Rehabilitation Strategies</h2>
        <p>
          Recovery focuses on reducing nerve and tendon inflammation while rebuilding tissue tolerance. We utilize cross-friction massage, nerve gliding exercises, eccentric strengthening for the extensors, and ergonomic splinting to alleviate pressure during the acute phase.
        </p>
      </div>
    </BlogArticleLayout>
  );
}
