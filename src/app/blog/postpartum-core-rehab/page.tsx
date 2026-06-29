import type { Metadata } from "next";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Postpartum Core Rehabilitation",
  description: "Safely rebuilding core strength and resolving diastasis recti after childbirth.",
  keywords: ["Postpartum Core Rehabilitation","postpartum core rehab","postpartum","core","rehabilitation","Holistic Health Clinic","Vikhroli East","Mumbai"],
};


export default function PostpartumCoreRehabArticle() {
  return (
    <BlogArticleLayout
      category="Physiotherapy"
      title="Postpartum Core Rehabilitation"
      subtitle="Safely rebuilding core strength and resolving diastasis recti after childbirth."
      imageSrc="/blog/sciatica_real_1782462118918.png"
    >
      <h2>Understanding Diastasis Recti</h2>
      <p>
        Pregnancy places immense strain on the abdominal muscles, often leading to a separation known as diastasis recti. Returning to high-intensity workouts too quickly can worsen this condition, leading to lower back pain and pelvic floor dysfunction.
      </p>

      <h2>The Importance of Specialized Rehab</h2>
      <p>
        Postpartum rehabilitation requires a targeted approach to safely re-engage the deep core stabilizers, particularly the transverse abdominis, before introducing heavier loads or traditional abdominal exercises.
      </p>

      <h2>Our Clinical Approach</h2>
      <p>
        Our physiotherapists design customized progression plans that focus on breath work, pelvic floor engagement, and gentle core activation, ensuring a safe and effective return to full function and fitness.
      </p>
    </BlogArticleLayout>
  );
}
