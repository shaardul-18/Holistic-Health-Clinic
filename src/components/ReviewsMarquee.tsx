import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const REVIEWS = [
  {
    author: "Oliver Sheldon",
    rating: 5,
    text: "Dr. Shreya ma’am helped me a lot after my accident. My fingers were in a very critical condition. Her confidence and belief in my recovery helped me improve significantly. All three staff members are extremely supportive... I would gladly recommend everyone to visit Holistic Health Clinic if you are looking for a good physiotherapist."
  },
  {
    author: "Swapnil Harmalkar",
    rating: 5,
    text: "My mom's recent Shoulder and legs therapy session with Dr. Shreya S Ghag went well overall, and I felt positive about the exercises and guidance provided. I also want to highlight that the clinic environment was very clean and maintained excellent hygiene standards... supportive throughout my time there."
  },
  {
    author: "Rutuja Bhalerao",
    rating: 5,
    text: "I have been visiting the Holistic clinic for the last 4 days, and within these 4 days I can already feel positive results. Got great relief from upper back pain and muscle stiffness. Thanks to Dr. Shreya for accurate diagnosis and effective treatment... you don’t feel like you’re visiting a clinic as a patient."
  },
  {
    author: "Shilpa Sakpal",
    rating: 5,
    text: "I visited Dr. Shreya ghag clinic for my diet plan. She explained me how to plan my diet by eating healthy food and also gave exercises to reduce my weight. I have started loosing weight."
  },
  {
    author: "Deepali Panda",
    rating: 5,
    text: "My physiotherapy sessions with Dr. Shreya were truly beneficial. She is highly knowledgeable, supportive, and provides personalized care to her patients. Thanks to her guidance, my knee pain has improved significantly. I highly recommend her to anyone seeking physiotherapy!!"
  },
  {
    author: "kiran gangurde",
    rating: 5,
    text: "Dr. Shreya Ghag provides excellent and caring service. Her expertise and compassion make her the ideal choice for anyone seeking quality healthcare. Her guidance has really helped me a lot from the first session itself. I highly recommend her for anyone who is in need of professional or personal Counselling and therapy."
  }
];

export function ReviewsMarquee() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-background/50 py-10">
      <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
        {/* We duplicate the array to create an infinite seamless loop */}
        {[...REVIEWS, ...REVIEWS].map((review, i) => (
          <div
            key={i}
            className={cn(
              "relative w-[320px] shrink-0 md:w-[400px] flex flex-col justify-between",
              "rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            )}
          >
            <div className="flex text-amber-500 mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic flex-1 leading-relaxed mb-4">
              "{review.text}"
            </p>
            <div className="font-semibold text-foreground pt-4 border-t border-border">
              {review.author}
            </div>
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background dark:from-background"></div>
    </div>
  );
}
