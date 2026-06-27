import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="relative w-32 h-32 md:w-40 md:h-40 animate-heartbeat">
          <Image
            src="/logo.png"
            alt="Holistic Health Clinic"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
