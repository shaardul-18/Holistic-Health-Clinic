import type { Metadata } from "next";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Mind-Body Connection in Healing",
  description: "How psychological well-being accelerates physical recovery and reduces chronic pain perception.",
};


export default function MindBodyConnectionArticle() {
  return (
    <BlogArticleLayout
      category="Psychology"
      title="Mind-Body Connection in Healing"
      subtitle="How psychological well-being accelerates physical recovery and reduces chronic pain perception."
      imageSrc="/blog/sleep_mindfulness_1782461587342.png"
    >
      <h2>The Psychology of Pain</h2>
      <p>
        Pain is not just a physical sensation; it is deeply influenced by our psychological state. Stress, anxiety, and depression can amplify the perception of pain, making physical recovery significantly more challenging.
      </p>

      <h2>Harnessing the Mind for Recovery</h2>
      <p>
        By addressing the emotional and mental aspects of healing, patients can break the cycle of chronic pain. Techniques such as mindfulness, cognitive reframing, and stress management are vital tools in the rehabilitation process.
      </p>

      <h2>Our Clinical Approach</h2>
      <p>
        Our integrated approach combines physical therapy with psychological support, ensuring that both the mind and body are working together towards a full and lasting recovery.
      </p>
    </BlogArticleLayout>
  );
}
