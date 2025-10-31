import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  Clock, 
  GraduationCap, 
  TrendingUp, 
  Briefcase, 
  Heart,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "$18-$25/hour depending on experience. We pay above market rate because quality people deserve quality wages.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description: "Full-time, part-time, weekends available. We work around your life, not the other way around.",
  },
  {
    icon: GraduationCap,
    title: "Paid Training",
    description: "Learn professional cleaning techniques from experienced team members. No experience? No problem.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Start as a cleaner, grow to Team Leader or Supervisor. We promote from within whenever possible.",
  },
  {
    icon: Briefcase,
    title: "Equipment Provided",
    description: "No need to buy your own supplies or equipment. We provide everything you need to do the job right.",
  },
  {
    icon: Heart,
    title: "Supportive Environment",
    description: "We treat employees with respect. No one yells, no one gets exploited. Just honest work for honest pay.",
  },
];

const positions = [
  {
    title: "Residential Cleaning Specialist",
    pay: "$18-22/hour",
    description: "Clean homes across Queens. Detail-oriented work that makes a real difference in people's lives.",
    requirements: [
      "Reliable transportation or able to meet at location",
      "Detail-oriented with good time management",
      "Physical stamina (lifting, bending, standing for hours)",
      "Comfortable working independently after training",
      "Background check required",
    ],
  },
  {
    title: "Commercial Cleaner",
    pay: "$20-24/hour",
    description: "Clean offices, retail spaces, and commercial buildings. Evening shifts available.",
    requirements: [
      "Previous cleaning experience preferred but not required",
      "Available for evening/night shifts (most work is 6pm-2am)",
      "Able to follow detailed checklists",
      "Comfortable working in team settings",
      "Background check required",
    ],
  },
  {
    title: "Team Leader",
    pay: "$24-28/hour",
    description: "Lead a crew of 3-5 cleaners, ensure quality, train new hires. Management experience a plus.",
    requirements: [
      "2+ years professional cleaning experience",
      "Leadership or supervisory experience",
      "Valid driver's license (you'll drive company vehicle)",
      "Strong communication and problem-solving skills",
      "Bilingual (English/Spanish) is a big plus",
    ],
  },
];

const applicationSteps = [
  {
    number: 1,
    title: "Submit Application",
    description: "Fill out the contact form or call us. Tell us about yourself and which position interests you.",
  },
  {
    number: 2,
    title: "Phone Screening",
    description: "Quick 15-minute call to discuss your experience, availability, and answer any questions you have.",
  },
  {
    number: 3,
    title: "In-Person Interview",
    description: "Meet with our hiring manager at our office. Casual conversation, no tricks or weird questions.",
  },
  {
    number: 4,
    title: "Background Check",
    description: "Standard background check for all positions. We work in people's homes and businesses, so this is required.",
  },
  {
    number: 5,
    title: "Paid Training Week",
    description: "Shadow experienced team members, learn our systems, get comfortable with equipment. You get paid for this.",
  },
  {
    number: 6,
    title: "Start Work!",
    description: "Begin your first assignments. You'll have support from your team leader and can always ask questions.",
  },
];

const additionalBenefits = [
  "Weekly pay (every Friday, direct deposit or check)",
  "Paid training period (you earn while you learn)",
  "Transportation assistance for team members without cars",
  "Performance bonuses for consistent quality work",
  "Referral bonuses ($100 for each person you refer who gets hired)",
  "Flexible scheduling around school or other commitments",
  "Opportunity to pick up extra shifts when available",
  "Annual pay reviews and raises for good performers",
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Join Our Team at MJ Davison Cleaning
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Build a career in professional cleaning services. We're looking for reliable people who take pride 
            in their work and want to be part of a team that values quality and respect.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No experience required for entry-level positions. We'll teach you everything you need to know. 
            What we care about: showing up on time, working hard, treating clients' spaces with respect.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Work With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not perfect, but we try to treat our employees better than most cleaning companies do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all">
                  <CardContent className="pt-8 pb-6">
                    <div className="mb-4">
                      <div className="p-3 rounded-full bg-primary/10 inline-block">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're actively hiring for these roles. Don't perfectly match the requirements? Apply anyway. 
              We value attitude and work ethic over perfect resumes.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">{position.title}</h3>
                      <p className="text-lg text-primary font-semibold">{position.pay}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">What we're looking for:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, straightforward hiring process. No games, no endless interviews. Usually takes 1-2 weeks from application to start date.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {applicationSteps.map((step) => (
              <Card key={step.number} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Additional Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More reasons why people stick around and build careers with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {additionalBenefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <Briefcase className="h-16 w-16 text-primary mx-auto" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Apply?</h2>
              <p className="text-lg text-muted-foreground">
                Fill out our contact form or give us a call. We'll get back to you within 1-2 business days. 
                Have questions? Call us – we're happy to answer anything before you apply.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  asChild
                >
                  <a href="/contact">Apply Now</a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  asChild
                >
                  <a href="tel:+19294624627" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    (929) 462-4627
                  </a>
                </Button>
              </div>

              <div className="pt-6 space-y-2">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contact@cleaningmj.com" className="hover:text-primary transition-colors">
                    contact@cleaningmj.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Equal opportunity employer. We don't discriminate based on anything except whether you'll show up and do good work.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
