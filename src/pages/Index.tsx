import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-office-cleaning.jpg";
import serviceOffice from "@/assets/service-office-cleaning.jpg";
import serviceResidential from "@/assets/service-residential-cleaning.jpg";
import serviceDeep from "@/assets/service-deep-cleaning.jpg";
import serviceMoveInOut from "@/assets/service-move-inout.jpg";
import servicePostConstruction from "@/assets/service-post-construction.jpg";
import serviceFloorCare from "@/assets/service-floor-care.jpg";
import { Phone, Users, Shield, TrendingUp, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Shield,
    value: 2,
    suffix: "M",
    label: "Insurance Coverage",
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

const services = [
  {
    title: "Office Cleaning",
    description: "Keep your workplace pristine and professional with our comprehensive office cleaning solutions.",
    image: serviceOffice,
  },
  {
    title: "Residential Cleaning",
    description: "Transform your home into a spotless sanctuary with our thorough residential cleaning services.",
    image: serviceResidential,
  },
  {
    title: "Deep Cleaning",
    description: "Intensive cleaning that reaches every corner, ensuring a completely sanitized environment.",
    image: serviceDeep,
  },
  {
    title: "Move In/Out Cleaning",
    description: "Make moving stress-free with our detailed move-in and move-out cleaning packages.",
    image: serviceMoveInOut,
  },
  {
    title: "Post-Construction Cleaning",
    description: "Remove all construction debris and dust to reveal your newly built or renovated space.",
    image: servicePostConstruction,
  },
  {
    title: "Floor Care & Maintenance",
    description: "Professional floor cleaning, polishing, and maintenance for all floor types.",
    image: serviceFloorCare,
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
          <div className="max-w-6xl mx-auto">
            {/* Text Content - Two Columns on Desktop */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                  Professional Cleaning Services in Queens, NYC
                </h1>
              </div>
              
              <div className="flex items-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Licensed, insured, and trusted by hundreds of homes and businesses across Queens. 
                  We deliver spotless results with eco-friendly products and a 100% satisfaction guarantee.
                </p>
              </div>
            </div>
            
            {/* Buttons - Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/contact">Get Free Quote</Link>
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
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground justify-center items-center">
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

      {/* Our Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your needs. From routine maintenance to specialized deep cleaning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border/50 bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
};

export default Index;
