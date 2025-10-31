import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General Questions
  {
    category: "General",
    question: "What areas do you serve?",
    answer: "We primarily serve Queens, NY, and surrounding areas including Long Island City, Astoria, Sunnyside, Woodside, Jackson Heights, Forest Hills, Flushing, and more. We also serve parts of Brooklyn, Manhattan, and Nassau County. Contact us to confirm if we serve your specific location."
  },
  {
    category: "General",
    question: "Are you licensed and insured?",
    answer: "Yes, MJ Davison Professional Cleaning Services is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage to protect both our clients and our team members. We can provide proof of insurance upon request."
  },
  {
    category: "General",
    question: "Do you bring your own cleaning supplies and equipment?",
    answer: "Yes, we bring all necessary professional-grade cleaning supplies and equipment. We use eco-friendly, non-toxic products that are safe for children and pets. If you have specific product preferences or allergies, we're happy to use your preferred cleaning products instead."
  },
  {
    category: "General",
    question: "Do I need to be home during the cleaning?",
    answer: "No, you don't need to be home. Many of our clients provide us with a key, garage code, or lockbox access. We're fully insured and all team members are background-checked and trained. However, you're always welcome to be present if you prefer."
  },
  
  // Pricing Questions
  {
    category: "Pricing",
    question: "How much do your services cost?",
    answer: "Our pricing varies based on the size of your space, type of service, and frequency of cleaning. Residential cleaning typically starts at $150-200 for a standard home. Commercial cleaning is priced per square foot or on a customized contract basis. We offer free estimates—contact us for a personalized quote."
  },
  {
    category: "Pricing",
    question: "Do you offer discounts for recurring services?",
    answer: "Yes! We offer significant discounts for clients who schedule regular recurring services. Weekly clients receive up to 20% off, bi-weekly clients get 15% off, and monthly clients receive 10% off our standard rates. First-time clients also receive 10% off their first cleaning."
  },
  {
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, checks, and cash. For recurring clients, we can set up automatic billing for your convenience. Payment is due upon completion of service unless other arrangements are made in advance."
  },
  {
    category: "Pricing",
    question: "Are there any hidden fees?",
    answer: "No, we believe in transparent pricing. Your quote includes all standard cleaning tasks for your service type. Additional fees may apply only for special requests outside the scope of the original quote, such as interior oven cleaning, inside refrigerator cleaning, or extreme clutter situations. We always discuss these with you before proceeding."
  },
  
  // Scheduling Questions
  {
    category: "Scheduling",
    question: "How far in advance do I need to schedule?",
    answer: "For regular recurring services, we recommend scheduling 1-2 weeks in advance. For one-time or deep cleaning services, we can often accommodate requests within 3-5 business days, and sometimes sooner. For move-in/move-out or post-construction cleaning, we recommend 1-2 weeks advance notice."
  },
  {
    category: "Scheduling",
    question: "What if I need to cancel or reschedule?",
    answer: "We understand that plans change. We require 24-48 hours notice for cancellations or rescheduling to avoid a cancellation fee. If you cancel with less than 24 hours notice, a 50% cancellation fee may apply. Emergency situations are evaluated on a case-by-case basis."
  },
  {
    category: "Scheduling",
    question: "How long does a typical cleaning take?",
    answer: "The duration varies based on the size of your space and type of service. A standard residential cleaning (2-3 bedrooms) typically takes 2-4 hours with a team of 2-3 cleaners. Deep cleaning or move-out cleaning may take 4-6 hours or more. We'll provide an estimated timeframe with your quote."
  },
  {
    category: "Scheduling",
    question: "Do you work on weekends and holidays?",
    answer: "Yes, we offer Saturday service for an additional fee to accommodate clients who need weekend cleaning. We're closed on major holidays (Christmas, New Year's Day, Thanksgiving) but work most other days. Contact us to discuss your specific scheduling needs."
  },
  
  // Services Questions
  {
    category: "Services",
    question: "What's included in a standard cleaning?",
    answer: "Standard cleaning includes: dusting all surfaces, vacuuming and mopping floors, cleaning bathrooms (toilets, sinks, showers, mirrors), kitchen cleaning (counters, sink, exterior appliances, stovetop), emptying trash, making beds (if linens are present), and general tidying. Deep cleaning includes all of this plus baseboards, interior windows, inside cabinets, and more detailed work."
  },
  {
    category: "Services",
    question: "What's the difference between regular and deep cleaning?",
    answer: "Regular cleaning maintains your home's cleanliness with routine tasks performed on a recurring schedule. Deep cleaning is a more intensive, detailed service that covers areas not included in regular cleaning: baseboards, light fixtures, inside cabinets and appliances, window sills, behind furniture, grout scrubbing, and more. We recommend deep cleaning 2-3 times per year or before starting a regular cleaning schedule."
  },
  {
    category: "Services",
    question: "Can you clean my office after business hours?",
    answer: "Yes, we specialize in flexible scheduling for commercial clients. We can clean early morning, evenings, or weekends to minimize disruption to your business operations. This is one of our most popular commercial service options."
  },
  {
    category: "Services",
    question: "Do you offer specialized services like carpet cleaning or window washing?",
    answer: "Yes, we offer a range of specialized services including carpet cleaning, upholstery cleaning, tile and grout cleaning, floor stripping and waxing, pressure washing, and window cleaning. These can be added to any cleaning service or scheduled separately. Contact us for specific pricing."
  },
  
  // Guarantee Questions
  {
    category: "Guarantee",
    question: "What if I'm not satisfied with the cleaning?",
    answer: "We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with our service, contact us within 24 hours and we'll return to re-clean the areas of concern at no additional charge. Your happiness is our priority, and we'll make it right."
  },
  {
    category: "Guarantee",
    question: "What happens if something gets damaged during cleaning?",
    answer: "While extremely rare, accidents can happen. We're fully insured for these situations. If any damage occurs during our service, report it to us immediately. We'll file a claim with our insurance company and work to resolve the issue promptly. We document the condition of your space before cleaning for protection on both sides."
  },
  {
    category: "Guarantee",
    question: "How do you ensure quality and consistency?",
    answer: "We maintain quality through: thorough background checks and training for all staff, detailed cleaning checklists, regular quality inspections, customer feedback surveys after each service, and ongoing training programs. We often send the same team to your location to ensure consistency and familiarity with your preferences."
  },
  {
    category: "Guarantee",
    question: "Are your cleaning products safe for children and pets?",
    answer: "Absolutely. We use eco-friendly, non-toxic, and biodegradable cleaning products that are completely safe for children, pets, and people with sensitivities or allergies. All our products are EPA-approved and meet the highest safety standards. We can also use your preferred products if you have specific requests."
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our cleaning services, pricing, and policies
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">
                  No questions found matching your search. Try different keywords or{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    contact us directly
                  </Link>
                  .
                </p>
              </Card>
            ) : (
              <>
                {selectedCategory === "All" ? (
                  // Group by category when "All" is selected
                  categories.slice(1).map((category) => {
                    const categoryFAQs = filteredFAQs.filter(faq => faq.category === category);
                    if (categoryFAQs.length === 0) return null;
                    
                    return (
                      <div key={category} className="mb-12">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-primary">
                          {category}
                        </h2>
                        <Accordion type="single" collapsible className="space-y-2">
                          {categoryFAQs.map((faq, index) => (
                            <AccordionItem
                              key={`${category}-${index}`}
                              value={`${category}-${index}`}
                              className="bg-card border rounded-lg px-6"
                            >
                              <AccordionTrigger className="text-left hover:no-underline">
                                <span className="font-semibold">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    );
                  })
                ) : (
                  // Show filtered results for selected category
                  <Accordion type="single" collapsible className="space-y-2">
                    {filteredFAQs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="bg-card border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help! Get in touch and we'll provide you with all the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+19294624627">
                  <Phone className="mr-2 h-5 w-5" />
                  (929) 462-4627
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
