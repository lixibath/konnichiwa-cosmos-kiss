import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-12";
        case "down":
          return "opacity-0 -translate-y-12";
        case "left":
          return "opacity-0 translate-x-12";
        case "right":
          return "opacity-0 -translate-x-12";
        case "fade":
          return "opacity-0";
        default:
          return "opacity-0 translate-y-12";
      }
    }
    return "opacity-100 translate-x-0 translate-y-0";
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        getAnimationClass(),
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
