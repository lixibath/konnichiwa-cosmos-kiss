import heroImage from "@/assets/hero-office-cleaning.jpg";
import { Phone, Users, Award, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: TrendingUp,
    value: 2000000,
    suffix: "+",
    label: "Sq.Ft. Cleaned",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 animate-fade-in">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-foreground leading-tight">
              Professional Cleaning Services in Queens, NYC
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Licensed, insured, and trusted by hundreds of homes and businesses across Queens. 
              We deliver spotless results with eco-friendly products and a 100% satisfaction guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="/contact">Get Free Quote</a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all"
                asChild
              >
                <a href="tel:9294624627" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (929) 462-4627
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>Eco-Friendly Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>Same-Day Service Available</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="relative py-20 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index}
                  className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-4xl font-heading font-bold text-foreground mb-2">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
