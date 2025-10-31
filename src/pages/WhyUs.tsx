import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, Shield, Users2, Leaf, Calendar, Award, Star } from "lucide-react";
import qualityControl from "@/assets/quality-control.jpg";
import trainingSession from "@/assets/training-session.jpg";
import ecoProducts from "@/assets/eco-products.jpg";

const detailedBenefits = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "We're not just saying it – we have the paperwork to prove it. Full general liability insurance with $2 million coverage, workers' compensation for every team member, and all necessary New York State business licenses. What does this mean for you? If anything goes wrong (and it rarely does), you're protected. No fly-by-night operation here. We've invested thousands in proper insurance and bonding because that's what responsible businesses do. You can request copies of our insurance certificates anytime, and we renew everything on schedule. Other companies might skip this step to save money, but we won't risk your property or our team's safety. It's non-negotiable. When you hire us, you're hiring a legitimate, fully compliant business that takes accountability seriously. That peace of mind is worth something.",
  },
  {
    icon: Users2,
    title: "Experienced Team",
    description: "Our team members aren't just employees – they're trained professionals who take pride in their work. Every person goes through a comprehensive onboarding process: background checks, reference verification, hands-on training, and shadowing experienced cleaners before working independently. We don't throw people into houses with a mop and hope for the best. The average tenure on our team is over three years, which is rare in this industry. Why? Because we pay fairly, treat people with respect, and create a positive work environment. Happy employees provide better service – it's that simple. Many of our team members have been with us since the early days and know our standards inside and out. When you book with us, you're getting experienced professionals, not whoever showed up that day.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We made the switch to eco-friendly cleaning products back in 2022, and honestly, we should have done it sooner. Here's the thing – harsh chemicals aren't necessary for a deep clean. The green products we use now are EPA-approved, biodegradable, and just as effective as traditional cleaners. Better for your family, better for your pets, better for our team members who use them all day, and better for the environment. We're not talking about watered-down natural cleaners that barely work. These are professional-grade products that actually get the job done. No harsh fumes, no toxic residues, no worrying about kids crawling on floors that were just cleaned with questionable chemicals. If you have specific product preferences or allergies, we're happy to accommodate. This isn't a gimmick or marketing angle – it's genuinely what we use because it's the right thing to do.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Life is unpredictable, and we get that. Need to reschedule with 24 hours notice? No problem. Want cleaning at 7 AM before work or 7 PM after dinner? We can make it happen. Prefer the same day and time every week so you don't have to think about it? Done. Our scheduling system is built around your life, not the other way around. We offer weekly, bi-weekly, monthly, and one-time services. We work evenings and weekends for people who can't be home during business hours. For commercial clients, we'll clean overnight if that's what works best. The point is flexibility. Some companies have rigid schedules and if you can't accommodate them, tough luck. That's not how we operate. We're a service business, which means we serve you. Within reason, we'll work around your schedule, not force you to work around ours.",
  },
  {
    icon: Award,
    title: "100% Satisfaction Guarantee",
    description: "This isn't fine print buried in a contract – it's a real promise. If you're not happy with our work, we'll come back and fix it for free. No questions asked, no hassle, no attitude. And if we can't make it right? You don't pay. Simple as that. We've been doing this for 15 years and this policy has cost us money maybe a dozen times total. Why? Because we do good work and take pride in it. But mistakes happen – someone might miss a spot, overlook something, or just have an off day. We're human. When that happens, we own it and make it right. Most cleaning companies will argue, make excuses, or just ignore complaints. We won't. Your satisfaction matters because your referrals and repeat business are how we grow. Unhappy clients don't recommend us, and word of mouth is our best advertising. So yes, we guarantee our work. It's not marketing – it's accountability.",
  },
  {
    icon: Star,
    title: "Competitive Pricing",
    description: "We're not the cheapest option in Queens, and we're upfront about that. But we're also not overpriced. Our rates are fair for the quality of service you receive. We price transparently – what we quote is what you pay, no surprise fees or hidden charges. We've been in business long enough to know our costs and price accordingly. Cheaper companies cut corners somewhere: they skip insurance, pay workers under the table, use inferior products, or rush through jobs. More expensive companies often just charge more because they can. We're the middle ground – professional service at honest prices. You're paying for licensed, insured, trained professionals using quality products and taking their time to do the job right. Is that worth more than a teenager with a vacuum? Yes. Is it worth luxury pricing? No. We're not trying to get rich off each client – we're trying to build a sustainable business through repeat customers and referrals. Fair pricing is part of that equation.",
  },
];

const comparisonData = [
  { feature: "Background Checked Employees", us: true, others: "Sometimes" },
  { feature: "Licensed & Insured ($2M)", us: true, others: "Varies" },
  { feature: "Eco-Friendly Products", us: true, others: "Rarely" },
  { feature: "Professional Training Program", us: true, others: "Minimal" },
  { feature: "Satisfaction Guarantee", us: true, others: "Sometimes" },
  { feature: "Same Team Each Visit", us: true, others: "No Guarantee" },
  { feature: "Flexible Scheduling", us: true, others: "Limited" },
  { feature: "Transparent Pricing", us: true, others: "Hidden Fees Common" },
  { feature: "Quality Control Inspections", us: true, others: "Rare" },
  { feature: "Responsive Customer Service", us: true, others: "Hit or Miss" },
];

const qualityProcess = [
  {
    step: "1. Pre-Service Checklist",
    description: "Every job starts with a detailed checklist customized to your space. Team members review it before arriving to ensure nothing gets missed.",
  },
  {
    step: "2. During Service",
    description: "Team members follow systematic cleaning protocols, working room by room. They check off tasks as completed and note any issues or concerns.",
  },
  {
    step: "3. Self-Inspection",
    description: "Before leaving, the team does a walk-through to verify all tasks are completed to standard. They double-check high-priority areas like bathrooms and kitchens.",
  },
  {
    step: "4. Random Quality Audits",
    description: "We randomly inspect 20% of jobs each month. A supervisor visits without notice to verify quality and consistency. Results are reviewed with the team.",
  },
  {
    step: "5. Client Feedback",
    description: "After each service, we request feedback. Issues are addressed immediately, and consistent positive feedback is recognized and rewarded.",
  },
];

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Astoria",
    service: "Bi-Weekly Residential",
    rating: 5,
    text: "I've tried probably four or five different cleaning services over the years, and MJ Davison is the only one I've stuck with. They show up on time, do thorough work, and I trust them in my home. The same two people come every time, so they know my space and what I care about. After my initial deep clean, I switched to bi-weekly service and it's been perfect. Worth every penny.",
  },
  {
    name: "David Chen",
    location: "Long Island City",
    service: "Office Cleaning",
    rating: 5,
    text: "We've used MJ Davison for our office for two years now. They clean three nights a week after we close, and I've never had to worry about it. The space is always spotless when we arrive in the morning. Their team is professional, quiet, and respectful of our space. When we had a special event and needed extra cleaning on short notice, they accommodated us without hesitation. Reliable and professional – exactly what you want in a service provider.",
  },
  {
    name: "Jennifer Kim",
    location: "Forest Hills",
    service: "Monthly Deep Clean",
    rating: 5,
    text: "I'm pretty particular about how things should be done, and they never disappoint. I have them come once a month for a deep clean, and they tackle things I never get around to – baseboards, inside cabinets, behind furniture. The first time they came, I gave them a detailed list of what I wanted, and now they just follow it every time. No need to supervise or micromanage. They remember my preferences and just handle it. That's the kind of service that keeps me coming back.",
  },
  {
    name: "Michael Rodriguez",
    location: "Jackson Heights",
    service: "Move-Out Cleaning",
    rating: 5,
    text: "Used them for move-out cleaning on my rental property. The place was a mess – previous tenants left it rough. MJ Davison came in and transformed it. Took them about five hours, but when they were done, it looked better than when I first bought it. Got my full security deposit back from the landlord, which I wasn't expecting. They even cleaned things I didn't think to ask about. Definitely calling them for my new place once I'm settled.",
  },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose MJ Davison</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Not all cleaning companies are created equal. Here's what makes us different, and why it matters.
          </p>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {detailedBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="p-4 rounded-full bg-primary/10">
                          <Icon className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How We Compare</h2>
            <p className="text-xl text-muted-foreground">
              See the difference for yourself
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-heading text-lg">Feature</th>
                  <th className="text-center py-4 px-4 font-heading text-lg bg-primary/10">MJ Davison</th>
                  <th className="text-center py-4 px-4 font-heading text-lg">Other Companies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-border hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 font-medium">{item.feature}</td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      {item.us === true ? (
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      ) : (
                        <span className="font-semibold text-primary">{item.us}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof item.others === "string" ? (
                        <span className="text-muted-foreground">{item.others}</span>
                      ) : (
                        <X className="h-6 w-6 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src={qualityControl} 
                alt="Quality control inspection"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Quality Control Process</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Consistency doesn't happen by accident. Here's how we ensure every job meets our standards.
              </p>
              <div className="space-y-6">
                {qualityProcess.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="font-heading font-bold text-lg mb-2">{item.step}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Products */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <img 
                src={trainingSession} 
                alt="Team training session"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Professional Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every team member completes a comprehensive training program covering proper cleaning techniques, 
                  product usage, safety protocols, and customer service. Ongoing training sessions ensure skills 
                  stay sharp and everyone learns new best practices. We invest in our team so they can deliver 
                  exceptional service to you.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src={ecoProducts} 
                alt="Eco-friendly cleaning products"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Green Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use EPA-approved, biodegradable cleaning products that are safe for your family, pets, and 
                  the environment. These aren't wimpy natural cleaners – they're professional-grade products that 
                  actually work. No harsh fumes, no toxic residues, just effective cleaning with products you can 
                  feel good about.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-heading text-center">Our Guarantees & Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div>
                  <h4 className="text-xl font-heading font-bold mb-3">100% Satisfaction Guarantee</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    If you're not completely satisfied with our service, we'll return within 24 hours to re-clean 
                    any areas at no additional charge. If you're still not happy, you don't pay. Period. We stand 
                    behind our work because we take pride in what we do.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold mb-3">Damage Policy</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    In the rare event that something is damaged during service, we'll repair or replace it. We're 
                    fully insured with $2 million in coverage. All claims are handled promptly and professionally. 
                    We've been in business 15 years and have filed maybe three claims total – we're careful with 
                    your belongings.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold mb-3">Cancellation Policy</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We require 24-hour notice for cancellations or rescheduling. Cancellations with less notice 
                    may incur a $50 fee since we've already scheduled your time and potentially turned away other 
                    customers. Emergencies happen and we understand – those are handled case by case.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold mb-3">Privacy & Security</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    All team members are background-checked and sign confidentiality agreements. We respect your 
                    privacy and never share information about your home or business. If you provide us with keys 
                    or access codes, they're stored securely and never shared.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from real customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium mt-1">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients across Queens who trust MJ Davison for their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href="/contact">Get Free Quote</a>
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

export default WhyUs;
