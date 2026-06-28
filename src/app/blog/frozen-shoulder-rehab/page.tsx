import type { Metadata } from "next";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Frozen Shoulder Rehabilitation",
  description: "Navigating the phases of Adhesive Capsulitis and restoring your pain-free range of motion safely.",
};


export default function FrozenShoulderArticle() {
  return (
    <BlogArticleLayout
      category="Physiotherapy"
      title="Frozen Shoulder Rehabilitation"
      subtitle="Navigating the phases of Adhesive Capsulitis and restoring your pain-free range of motion safely."
      imageSrc="/blog/frozen_shoulder_real_1782462095092.png"
    >
      <h2>Understanding Adhesive Capsulitis</h2>
      <p>
        Frozen shoulder, clinically known as adhesive capsulitis, is a highly restrictive condition characterized by severe stiffness and pain in the shoulder joint. It occurs when the strong connective tissue surrounding the shoulder joint (the capsule) thickens, tightens, and becomes inflamed. Thick bands of scar tissue (adhesions) develop, severely limiting the space for the humerus to move.
      </p>

      <h2>The Three Stages of a Frozen Shoulder</h2>
      <p>
        A frozen shoulder typically develops slowly and follows three distinct, prolonged phases. Understanding these phases is critical to administering the right type of physical therapy.
      </p>
      <ul>
        <li><strong>1. The Freezing Stage (2 to 9 months):</strong> This is the most painful stage. Any movement of the shoulder causes sharp, severe pain. Inflammation is at its peak, and the shoulder's range of motion steadily decreases. Pain is often worse at night, disrupting sleep.</li>
        <li><strong>2. The Frozen Stage (4 to 12 months):</strong> Pain may actually begin to diminish during this stage. However, the shoulder becomes incredibly stiff. Using it for basic daily activities—like dressing or reaching high shelves—becomes nearly impossible.</li>
        <li><strong>3. The Thawing Stage (5 to 24 months):</strong> The range of motion in the shoulder slowly begins to improve, and stiffness gradually resolves.</li>
      </ul>

      <h2>Causes and Risk Factors</h2>
      <p>
        While the exact trigger for adhesive capsulitis is sometimes unknown, it occurs much more frequently in certain populations:
      </p>
      <ul>
        <li><strong>Immobility:</strong> The most common cause is a period of forced immobility due to a previous injury, surgery (like a mastectomy), or a stroke. Without movement, the joint capsule shrinks.</li>
        <li><strong>Diabetes:</strong> People with diabetes have a significantly higher risk of developing frozen shoulder, and the symptoms are often more severe.</li>
        <li><strong>Age and Gender:</strong> It predominantly affects individuals between 40 and 60 years old, and is more common in women than men.</li>
      </ul>

      <h2>Our Rehabilitation Strategy</h2>
      <p>
        At Holistic Health Clinic, we tailor our approach entirely based on which stage the patient is currently experiencing. Pushing a "freezing" shoulder too hard will cause micro-tears and increased inflammation, worsening the condition.
      </p>
      <ol>
        <li><strong>Pain Management (Freezing Phase):</strong> In the initial painful phase, we prioritize gentle pain relief. We utilize Electrotherapy modalities such as Interferential Therapy (IFT) and Ultrasound to calm deep tissue inflammation, alongside very gentle pendulum exercises.</li>
        <li><strong>Manual Joint Mobilization (Frozen Phase):</strong> As pain subsides and stiffness takes over, our expert therapists use targeted, hands-on joint mobilization techniques. These precise glides stretch the tight joint capsule safely, breaking down adhesions without triggering massive inflammation.</li>
        <li><strong>Progressive Stretching & Strengthening (Thawing Phase):</strong> We introduce a highly customized home exercise regimen. We teach patients how to use pulleys, resistance bands, and wall-crawls to aggressively but safely push past their mobility limits, fully restoring the shoulder's biomechanics.</li>
      </ol>
      <p>
        Patience and clinical precision are key. With our guided physiotherapy, patients bypass months of unnecessary suffering and achieve a full structural recovery.
      </p>
    </BlogArticleLayout>
  );
}
