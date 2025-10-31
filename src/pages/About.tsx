import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Users, Heart, Target } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const coreValues = [
  {
    icon: Heart,
    title: "Integrity First",
    description: "We do what we say we'll do, every single time. No shortcuts, no excuses.",
  },
  {
    icon: Users,
    title: "People Matter",
    description: "Our team members are treated with respect and fair wages. Happy cleaners provide better service.",
  },
  {
    icon: Target,
    title: "Excellence Always",
    description: "Good enough isn't good enough. We aim for exceptional results on every job.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Background checks, insurance, and training ensure you can trust us in your space.",
  },
];

const timeline = [
  {
    year: "2010",
    title: "The Beginning",
    description: "Matthew started with just a mop, bucket, and determination to provide better cleaning services than what he saw in Queens. Working solo, he built a reputation one satisfied customer at a time.",
  },
  {
    year: "2013",
    title: "First Team Member",
    description: "Business grew enough to hire the first employee. Matthew realized he couldn't do it alone anymore, and more importantly, didn't want to. Building a team became the new focus.",
  },
  {
    year: "2016",
    title: "Commercial Expansion",
    description: "Started offering commercial janitorial services after several business owners asked if we could clean their offices the same way we cleaned their homes. The answer was yes.",
  },
  {
    year: "2019",
    title: "Fleet & Equipment",
    description: "Invested in professional-grade equipment and company vehicles. No more showing up in personal cars with household supplies. We became a real professional operation.",
  },
  {
    year: "2022",
    title: "Green Certification",
    description: "Transitioned to eco-friendly cleaning products across all services. Clients with kids and pets deserved better than harsh chemicals, and our team deserved safer working conditions.",
  },
  {
    year: "2025",
    title: "Looking Forward",
    description: "Plans to expand services into neighboring boroughs, hire 10 more team members, and continue being Queens' most trusted cleaning company. The best is yet to come.",
  },
];

const certifications = [
  "New York State Business License",
  "General Liability Insurance ($2M coverage)",
  "Workers Compensation Insurance",
  "Bonded & Insured",
  "OSHA Safety Training Certified",
  "Green Cleaning Certification",
  "Background Checked Team Members",
  "EPA-Approved Cleaning Products",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About MJ Davison Cleaning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than a cleaning company – we're your neighbors committed to making Queens cleaner, one space at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">How We Started</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Back in 2010, Queens needed better cleaning services. Not fancy marketing or expensive websites – 
                just reliable people who showed up on time and did quality work at fair prices.
              </p>
              <p>
                That's how MJ Davison Cleaning started. No big funding, no business plan downloaded from the internet. 
                Just a commitment to do cleaning the right way and treat people's homes and businesses with respect.
              </p>
              <p>
                Fifteen years later, we've cleaned thousands of spaces across Queens. Our team has grown, our equipment 
                is professional-grade, and we've added services. But the core mission hasn't changed: show up, do great 
                work, charge fair prices, treat everyone right.
              </p>
              <p>
                We're not trying to be the biggest cleaning company in New York. We're trying to be the best in Queens. 
                That's specific enough to mean something and small enough to actually achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a website. They guide every decision we make and every service we provide.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto mb-12">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-heading font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                To provide exceptional cleaning services that make life easier for our clients while creating 
                dignified, well-paying jobs for our team members. We believe clean spaces improve quality of life, 
                and quality jobs improve communities. That's what we're building – one cleaned room at a time.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all">
                  <CardContent className="pt-8 pb-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Meet Our Team</h2>
            <img 
              src={teamPhoto} 
              alt="MJ Davison Cleaning Team"
              className="w-full rounded-2xl shadow-2xl mb-6"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every person on our team is background-checked, professionally trained, and treated with respect. 
              We pay fair wages and offer growth opportunities because we believe great service comes from great people. 
              When you hire us, you're supporting good jobs in Queens.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From one person with a mop to a trusted Queens institution
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                        {event.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Licensed, Certified & Insured</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We meet and exceed all industry standards for safety, professionalism, and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto mt-12 bg-primary/5">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                All certifications and insurance documents available upon request. We're transparent about our 
                credentials because we're proud of them.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <Users className="h-16 w-16 text-primary mx-auto" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Join Our Team</h2>
              <p className="text-lg text-muted-foreground">
                We're always looking for dedicated, reliable people who take pride in their work. 
                If you're interested in joining a company that values its employees and offers competitive pay, 
                we'd love to hear from you.
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
                  <a href="tel:9294624627">Call to Learn More</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Equal opportunity employer. All positions include training, competitive wages, and growth opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
