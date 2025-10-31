import residentialHero from "@/assets/residential-hero.jpg";
import bedroomCleaning from "@/assets/bedroom-cleaning.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { QuickQuoteForm } from "@/components/QuickQuoteForm";

const packages = [
  {
    name: "Weekly Service",
    price: "$165-245",
    frequency: "Every week",
    ideal: "Busy families, high-traffic homes",
    benefits: [
      "Maintains consistently clean home",
      "Best value per cleaning",
      "Flexible scheduling",
      "Same cleaner each visit",
    ],
  },
  {
    name: "Bi-Weekly Service",
    price: "$190-285",
    frequency: "Every two weeks",
    ideal: "Working professionals, couples",
    benefits: [
      "Perfect balance of cost and cleanliness",
      "Most popular choice",
      "Prevents dirt buildup",
      "Priority booking available",
    ],
  },
  {
    name: "Monthly Service",
    price: "$245-350",
    frequency: "Once per month",
    ideal: "Tidy homeowners, seasonal refresh",
    benefits: [
      "Deep clean each visit",
      "More affordable option",
      "Great for maintenance",
      "Customizable schedule",
    ],
  },
];

const pricingBySize = [
  { size: "Studio / 1 Bedroom", sqft: "Up to 800 sq.ft", price: "$165-220" },
  { size: "2 Bedrooms", sqft: "800-1,200 sq.ft", price: "$205-260" },
  { size: "3 Bedrooms", sqft: "1,200-1,800 sq.ft", price: "$245-325" },
  { size: "4+ Bedrooms", sqft: "1,800+ sq.ft", price: "$325-475" },
];

const services = [
  "Full kitchen cleaning (counters, appliances, sink, floors)",
  "Bathroom deep cleaning (toilet, shower, tub, mirrors, sink)",
  "Bedroom tidying (dusting, vacuuming, making beds)",
  "Living area cleaning (dusting, vacuuming, organizing)",
  "Floor care (vacuum carpets, mop hard floors)",
  "Trash removal and liner replacement",
  "Light switch and doorknob sanitizing",
  "Baseboard and windowsill dusting",
];

const serviceOptions = [
  { value: "weekly", label: "Weekly Cleaning" },
  { value: "biweekly", label: "Bi-Weekly Cleaning" },
  { value: "monthly", label: "Monthly Cleaning" },
  { value: "onetime", label: "One-Time Deep Clean" },
];

const Residential = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${residentialHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-foreground">
            Residential Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your home deserves the same professional care we give every space. Let us handle the cleaning so you can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            What's Included in Every Visit
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <img 
                src={bedroomCleaning} 
                alt="Professional bedroom cleaning"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Flexible Cleaning Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the frequency that fits your lifestyle and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{pkg.frequency}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Ideal for:</p>
                    <p className="text-sm text-muted-foreground">{pkg.ideal}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Benefits:</p>
                    <ul className="space-y-2">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing by Home Size */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-center mb-8">
              Pricing by Home Size
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {pricingBySize.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{item.size}</p>
                      <p className="text-sm text-muted-foreground">{item.sqft}</p>
                    </div>
                    <div className="text-xl font-bold text-primary">{item.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              * Prices vary based on home condition, frequency, and specific requirements
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready for a Cleaner Home?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Getting started is easy. Fill out the form and we'll provide a free, no-obligation quote within 24 hours. We'll discuss your specific needs and create a cleaning plan that works for you.
              </p>
              <ul className="space-y-3">
                {[
                  "Background-checked professionals",
                  "Eco-friendly cleaning products",
                  "Satisfaction guaranteed or we return",
                  "Flexible scheduling around your life",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Get Your Free Quote</h3>
                <QuickQuoteForm 
                  defaultServiceType="weekly"
                  serviceOptions={serviceOptions}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;
