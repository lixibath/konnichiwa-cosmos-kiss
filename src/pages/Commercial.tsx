import commercialHero from "@/assets/commercial-hero.jpg";
import retailCleaning from "@/assets/retail-cleaning.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Briefcase } from "lucide-react";
import { QuickQuoteForm } from "@/components/QuickQuoteForm";

const whyBusinessesChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full commercial insurance coverage and bonding for your protection.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Evening, overnight, and weekend service to never disrupt your business.",
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    description: "15+ years serving commercial clients across Queens and NYC.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Regular inspections and detailed checklists ensure consistent results.",
  },
];

const commercialServices = [
  {
    title: "Office Buildings",
    services: [
      "Workstation and desk cleaning",
      "Conference room sanitization",
      "Break room and kitchen cleaning",
      "Restroom deep cleaning and restocking",
      "Common area maintenance",
      "Floor care and trash removal",
    ],
  },
  {
    title: "Retail Stores",
    services: [
      "Sales floor cleaning and dusting",
      "Display case and shelf cleaning",
      "Fitting room sanitization",
      "Window and glass cleaning",
      "Floor polishing and maintenance",
      "Entrance and storefront cleaning",
    ],
  },
  {
    title: "Medical Facilities",
    services: [
      "Exam room sanitization",
      "Waiting area cleaning",
      "Medical-grade disinfection",
      "Biohazard disposal assistance",
      "High-touch surface sanitizing",
      "HIPAA-compliant cleaning practices",
    ],
  },
  {
    title: "Restaurants & Food Service",
    services: [
      "Dining area cleaning",
      "Kitchen deep cleaning support",
      "Floor degreasing and sanitizing",
      "Restroom maintenance",
      "Entrance and host stand cleaning",
      "Health code compliance assistance",
    ],
  },
];

const scheduleOptions = [
  {
    title: "After-Hours Cleaning",
    time: "Evening (6 PM - 12 AM)",
    description: "Most popular for offices and retail – we clean after you close so your business is ready for the next day.",
  },
  {
    title: "Overnight Service",
    time: "Night (12 AM - 6 AM)",
    description: "Perfect for 24-hour operations or businesses that need complete privacy during cleaning.",
  },
  {
    title: "Weekend Cleaning",
    time: "Saturday & Sunday",
    description: "Ideal for deep cleaning projects or businesses closed on weekends.",
  },
];

const serviceOptions = [
  { value: "office", label: "Office Building" },
  { value: "retail", label: "Retail Store" },
  { value: "medical", label: "Medical Facility" },
  { value: "restaurant", label: "Restaurant/Food Service" },
  { value: "other", label: "Other Commercial Space" },
];

const Commercial = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${commercialHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-foreground">
            Commercial Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Professional janitorial services that keep your business running smoothly. We clean on your schedule, so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Why Businesses Choose MJ Davison
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBusinessesChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardContent className="pt-8 pb-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services by Industry */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Industry-Specific Cleaning
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored services for your type of business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commercialServices.map((industry, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img 
              src={retailCleaning} 
              alt="Retail store professional cleaning"
              className="w-full max-w-4xl mx-auto h-80 object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Flexible Scheduling */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Flexible Scheduling Options
            </h2>
            <p className="text-xl text-muted-foreground">
              We work around your business hours – never interrupt your operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {scheduleOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-heading font-bold">{option.title}</h3>
                  </div>
                  <p className="text-primary font-semibold mb-3">{option.time}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto bg-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-heading font-bold mb-3">Custom Schedules Available</h3>
              <p className="text-muted-foreground">
                Need daily service? Weekly deep cleans? Holiday schedule adjustments? We'll create a custom plan that fits your business perfectly. Our team can even split schedules – daily light cleaning with weekly deep cleaning for maximum cost efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Commercial cleaning rates start at <span className="text-primary font-bold text-2xl">$150-300</span> per visit, depending on square footage, frequency, and specific requirements. Most offices pay between $200-400 per cleaning for weekly service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">What affects pricing:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Square footage of your space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Frequency of service (daily, weekly, monthly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Specific industry requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Special services (floor care, window cleaning)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Volume discounts:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Daily service: Save up to 25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Multiple locations: Custom pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Annual contracts: Best rates available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Referral bonuses for other businesses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Get a Custom Quote for Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every business is different, and so are our cleaning plans. Tell us about your facility and we'll create a proposal tailored to your needs and budget. Free walk-throughs and consultations available.
              </p>
              <ul className="space-y-3">
                {[
                  "Free on-site assessment and quote",
                  "Customized cleaning checklists",
                  "Same-day emergency cleaning available",
                  "Green cleaning options for LEED buildings",
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
                <h3 className="text-2xl font-heading font-bold mb-6">Request Commercial Quote</h3>
                <QuickQuoteForm 
                  defaultServiceType="office"
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

export default Commercial;
