import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonCardProps {
  variant?: "default" | "testimonial" | "service" | "pricing";
}

const SkeletonCard = ({ variant = "default" }: SkeletonCardProps) => {
  if (variant === "testimonial") {
    return (
      <Card className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
        <Skeleton className="h-6 w-24 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-3 w-20 mt-4" />
      </Card>
    );
  }

  if (variant === "service") {
    return (
      <Card className="p-6">
        <Skeleton className="h-48 w-full mb-4 rounded-lg" />
        <Skeleton className="h-6 w-3/4 mb-3" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="h-10 w-32 mt-4" />
      </Card>
    );
  }

  if (variant === "pricing") {
    return (
      <Card className="p-8">
        <Skeleton className="h-8 w-32 mb-2" />
        <Skeleton className="h-10 w-24 mb-4" />
        <div className="space-y-3 mb-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        <Skeleton className="h-12 w-full" />
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <Skeleton className="h-6 w-3/4 mb-3" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </Card>
  );
};

export default SkeletonCard;
