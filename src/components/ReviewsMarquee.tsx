import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const REVIEWS = [
  {
    author: "Oliver Sheldon",
    rating: 5,
    text: "Holistic Health Clinic helped me a lot after my accident. My fingers were in a very critical condition. Her confidence and belief in my recovery helped me improve significantly. All three staff members are extremely supportive... I would gladly recommend everyone to visit Holistic Health Clinic if you are looking for a good physiotherapist."
  },
  {
    author: "Swapnil Harmalkar",
    rating: 5,
    text: "My mom's recent Shoulder and legs therapy session with Holistic Health Clinic went well overall, and I felt positive about the exercises and guidance provided. I also want to highlight that the clinic environment was very clean and maintained excellent hygiene standards... supportive throughout my time there."
  },
  {
    author: "Rutuja Bhalerao",
    rating: 5,
    text: "I have been visiting the Holistic clinic for the last 4 days, and within these 4 days I can already feel positive results. Got great relief from upper back pain and muscle stiffness. Thanks to Holistic Health Clinic for accurate diagnosis and effective treatment... you don’t feel like you’re visiting a clinic as a patient."
  },
  {
    author: "Shilpa Sakpal",
    rating: 5,
    text: "I visited Holistic Health Clinic for my diet plan. They explained me how to plan my diet by eating healthy food and also gave exercises to reduce my weight. I have started loosing weight."
  },
  {
    author: "Deepali Panda",
    rating: 5,
    text: "My physiotherapy sessions with Holistic Health Clinic were truly beneficial. They are highly knowledgeable, supportive, and provide personalized care to their patients. Thanks to their guidance, my knee pain has improved significantly. I highly recommend them to anyone seeking physiotherapy!!"
  },
  {
    author: "kiran gangurde",
    rating: 5,
    text: "Holistic Health Clinic provides excellent and caring service. Their expertise and compassion make them the ideal choice for anyone seeking quality healthcare. Their guidance has really helped me a lot from the first session itself. I highly recommend them for anyone who is in need of professional or personal Counselling and therapy."
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
            <div className="flex items-center justify-between mb-3">
              <div className="flex text-amber-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                {/* SVG for Google G Logo */}
                <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Review
              </div>
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
