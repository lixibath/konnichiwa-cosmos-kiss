import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const residentialPackages = [
  {
    name: "Basic",
    description: "Essential cleaning for light maintenance",
    color: "border-muted",
    features: [
      { text: "Kitchen surfaces & appliances", included: true },
      { text: "Bathroom cleaning & sanitizing", included: true },
      { text: "Vacuum carpets & rugs", included: true },
      { text: "Mop hard floors", included: true },
      { text: "Dust accessible surfaces", included: true },
      { text: "Trash removal", included: true },
      { text: "Interior windows", included: false },
      { text: "Inside appliances (oven, fridge)", included: false },
      { text: "Baseboards & ceiling fans", included: false },
    ],
  },
  {
    name: "Standard",
    description: "Most popular - thorough cleaning",
    color: "border-primary",
    popular: true,
    features: [
      { text: "Everything in Basic, plus:", included: true },
      { text: "Interior window cleaning", included: true },
      { text: "Detailed dusting (fans, blinds)", included: true },
      { text: "Baseboards wiping", included: true },
      { text: "Cabinet front cleaning", included: true },
      { text: "Light switch & doorknob sanitizing", included: true },
      { text: "Inside appliances (oven, fridge)", included: false },
      { text: "Carpet steam cleaning", included: false },
      { text: "Inside closets", included: false },
    ],
  },
  {
    name: "Premium",
    description: "Deep clean - maximum attention",
    color: "border-accent",
    features: [
      { text: "Everything in Standard, plus:", included: true },
      { text: "Inside oven cleaning", included: true },
      { text: "Inside refrigerator cleaning", included: true },
      { text: "Inside cabinet cleaning", included: true },
      { text: "Inside closet tidying", included: true },
      { text: "Window track cleaning", included: true },
      { text: "Grout scrubbing", included: true },
      { text: "Behind/under furniture (moveable)", included: true },
      { text: "Detailed baseboard cleaning", included: true },
    ],
  },
];

const residentialPricing = [
  { size: "Studio", sqft: "Up to 600 sq.ft", basic: "$120", standard: "$150", premium: "$190" },
  { size: "1 Bedroom", sqft: "600-800 sq.ft", basic: "$140", standard: "$175", premium: "$220" },
  { size: "2 Bedrooms", sqft: "800-1,200 sq.ft", basic: "$170", standard: "$210", premium: "$270" },
  { size: "3 Bedrooms", sqft: "1,200-1,800 sq.ft", basic: "$210", standard: "$260", premium: "$330" },
  { size: "4+ Bedrooms", sqft: "1,800+ sq.ft", basic: "$280+", standard: "$350+", premium: "$450+" },
];

const commercialPricing = [
  { range: "Under 2,000 sq.ft", basic: "$150-200", standard: "$200-280", premium: "$280-380" },
  { range: "2,000-5,000 sq.ft", basic: "$200-350", standard: "$280-450", premium: "$380-600" },
  { range: "5,000-10,000 sq.ft", basic: "$350-650", standard: "$450-850", premium: "$600-1,100" },
  { range: "10,000+ sq.ft", basic: "Custom", standard: "Custom", premium: "Custom" },
];

const additionalServices = [
  { service: "Carpet Steam Cleaning", price: "$50-120", unit: "per room" },
  { service: "Window Cleaning (exterior)", price: "$5-8", unit: "per window" },
  { service: "Deep Oven Cleaning", price: "$45-60", unit: "per oven" },
  { service: "Refrigerator Deep Clean", price: "$40-55", unit: "per fridge" },
  { service: "Move In/Out Cleaning", price: "+$80-150", unit: "additional" },
  { service: "Post-Construction Cleanup", price: "$300-800", unit: "project-based" },
  { service: "Floor Stripping & Waxing", price: "$0.50-1.20", unit: "per sq.ft" },
  { service: "Pressure Washing", price: "$150-300", unit: "per session" },
  { service: "Upholstery Cleaning", price: "$80-150", unit: "per piece" },
  { service: "Laundry Service", price: "$25-40", unit: "per load" },
];

const pricingFAQ = [
  {
    question: "How do you determine the final price?",
    answer: "We consider several factors: square footage, current condition of the space, frequency of service (weekly/bi-weekly/monthly), specific services requested, and accessibility. During our free consultation, we'll walk through your space and provide an exact quote with no hidden fees.",
  },
  {
    question: "Do you offer discounts for recurring service?",
    answer: "Yes! Weekly service receives up to 20% discount, bi-weekly service gets 15% off, and monthly service gets 10% off the standard one-time rate. We also offer referral bonuses and seasonal promotions.",
  },
  {
    question: "What's included in the base price?",
    answer: "Our base prices include standard cleaning supplies, equipment, labor, and travel within Queens. We bring everything needed – you don't have to provide anything. Specialized equipment for additional services (like carpet steamers) is included when you book those services.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "Absolutely not. The price we quote is the price you pay. The only time adjustments happen is if you request additional services during the visit or if the condition is significantly different than described during the quote. We'll always check with you before doing any extra work.",
  },
  {
    question: "Do you charge extra for supplies?",
    answer: "No, all standard cleaning supplies are included. We use professional-grade, eco-friendly products at no additional cost. If you have specific product preferences or allergies, we're happy to use products you provide.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards, checks, Venmo, and Zelle. Payment is due upon completion of service. For commercial clients, we can set up net-30 payment terms after the first service.",
  },
  {
    question: "Is there a cancellation fee?",
    answer: "We require 24-hour notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may incur a $50 fee since we've already scheduled your appointment and turned away other customers. Emergencies are always understood and handled case-by-case.",
  },
  {
    question: "Do you price match competitors?",
    answer: "We're confident in our pricing and the quality we deliver. While we don't automatically price match, we're happy to review any comparable quote and explain the value differences. Often, the cheapest option cuts corners on quality, insurance, or worker treatment – things that matter to us.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No surprises, no hidden fees. Just honest pricing for quality cleaning services in Queens, NYC.
          </p>
        </div>
      </section>

      {/* Residential Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Residential Cleaning Packages</h2>
            <p className="text-lg text-muted-foreground">Choose the level of service that fits your needs</p>
          </div>

          {/* Package Features Comparison */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {residentialPackages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative ${pkg.color} ${pkg.popular ? "shadow-xl scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Residential Pricing Table */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-center mb-8">Pricing by Home Size</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-heading">Home Size</th>
                    <th className="text-left py-4 px-4 font-heading">Square Footage</th>
                    <th className="text-center py-4 px-4 font-heading">Basic</th>
                    <th className="text-center py-4 px-4 font-heading bg-primary/5">Standard</th>
                    <th className="text-center py-4 px-4 font-heading">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {residentialPricing.map((item, index) => (
                    <tr key={index} className="border-b border-border hover:bg-card/50 transition-colors">
                      <td className="py-4 px-4 font-semibold">{item.size}</td>
                      <td className="py-4 px-4 text-muted-foreground">{item.sqft}</td>
                      <td className="py-4 px-4 text-center font-bold text-lg">{item.basic}</td>
                      <td className="py-4 px-4 text-center font-bold text-lg bg-primary/5">{item.standard}</td>
                      <td className="py-4 px-4 text-center font-bold text-lg">{item.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              * Prices shown are for one-time service. Recurring service discounts: Weekly 20% off, Bi-weekly 15% off, Monthly 10% off
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Pricing */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Commercial Cleaning Pricing</h2>
            <p className="text-lg text-muted-foreground">Competitive rates for businesses across Queens</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-heading">Space Size</th>
                    <th className="text-center py-4 px-4 font-heading">Basic</th>
                    <th className="text-center py-4 px-4 font-heading bg-primary/5">Standard</th>
                    <th className="text-center py-4 px-4 font-heading">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {commercialPricing.map((item, index) => (
                    <tr key={index} className="border-b border-border hover:bg-card/50 transition-colors">
                      <td className="py-4 px-4 font-semibold">{item.range}</td>
                      <td className="py-4 px-4 text-center font-bold text-lg">{item.basic}</td>
                      <td className="py-4 px-4 text-center font-bold text-lg bg-primary/5">{item.standard}</td>
                      <td className="py-4 px-4 text-center font-bold text-lg">{item.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              * Commercial pricing varies by industry, frequency, and specific requirements. Daily service receives up to 25% discount.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">Add-ons to customize your cleaning experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {additionalServices.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-foreground">{item.service}</p>
                    <p className="text-xs text-muted-foreground">{item.unit}</p>
                  </div>
                  <div className="text-lg font-bold text-primary">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Pricing FAQ</h2>
            <p className="text-lg text-muted-foreground">Common questions about our pricing</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {pricingFAQ.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-background"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every space is unique. Let us create a custom quote tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <Link to="/contact">Customize Your Quote</Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              asChild
            >
              <a href="tel:9294624627">Call (929) 462-4627</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
