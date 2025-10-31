import { useEffect, useRef, useState } from "react";
import { Shield, Users2, Leaf, Calendar, CheckCircle, DollarSign } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const benefits = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind and protection.",
  },
  {
    icon: Users2,
    title: "Experienced Team",
    description: "Highly trained professionals with years of industry expertise.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe, non-toxic cleaning solutions that protect your family and environment.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "We work around your schedule with same-day service available.",
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction Guarantee",
    description: "If you're not happy, we'll make it right or refund your money.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Premium quality services at affordable rates with transparent pricing.",
  },
];

export const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose MJ Davison</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that professionalism, dedication, and quality make
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div 
            className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamPhoto} 
                alt="MJ Davison Cleaning Team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-heading font-bold">15+</p>
              <p className="text-sm font-medium">Years Serving Queens</p>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div 
            className={`space-y-6 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
