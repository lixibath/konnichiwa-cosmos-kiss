import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceOffice from "@/assets/service-office-cleaning.jpg";

const Article10 = () => {
  const relatedArticles = [
    { id: 3, title: "Why Professional Office Cleaning Saves You Money" },
    { id: 7, title: "Commercial Kitchen Cleaning: What Restaurants Get Wrong" },
    { id: 14, title: "What We Learned Cleaning Through the Pandemic" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>April 23, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Why Your Office Bathroom is Grosser Than You Think
          </h1>

          <img 
            src={serviceOffice} 
            alt="Office cleaning service" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              I'm not trying to scare you, but office bathrooms are basically petri dishes. Everybody uses them, nobody really cleans them properly, and they get way more traffic than a home bathroom. The stuff we find when we deep clean an office bathroom for the first time... yeah. Let's just say proper cleaning matters.
            </p>

            <p>
              Think about it: in a typical office with 20 employees, that bathroom gets used maybe 50-80 times per day. Compare that to your home bathroom which sees maybe 10-15 uses daily. That's five times the traffic, five times the bacteria, five times the grossness accumulating on every surface. And most offices just have someone do a quick wipe-down once a day. That's not enough.
            </p>

            <p>
              The worst part isn't the obvious stuff like the toilet or sink. It's the things nobody thinks about. Door handles get touched by literally everyone, including people who don't wash their hands properly (and yes, that's more people than you'd think). The flush handle is a nightmare. Light switches. Faucet handles. These high-touch surfaces rarely get the attention they deserve in a typical "quick clean."
            </p>

            <p>
              And then there's the floor situation. Office bathroom floors are constantly wet from people washing their hands, water splashing, the occasional overflowing toilet situation. That moisture creates the perfect environment for bacteria and mold to thrive. If you're just mopping with water or a weak cleaner, you're basically just spreading germs around instead of killing them.
            </p>

            <p>
              Here's what actually needs to happen: office bathrooms should be thoroughly cleaned daily, not just wiped down. That means proper disinfectant on all surfaces, letting it sit for the required contact time (usually 3-5 minutes, not immediate wiping), and genuine attention to high-touch areas. Then weekly, you need a deeper clean – grout scrubbing, behind the toilets, inside the trash cans, the whole deal.
            </p>

            <p>
              We've seen companies try to save money by having employees take turns cleaning the bathroom. Bad idea. First, it's demoralizing for staff. Second, they don't have the right products or training. Third, it never actually gets done consistently. One person forgets their week, someone else does a terrible job, and suddenly you've got complaints and an increasingly gross bathroom.
            </p>

            <p>
              The reality is that proper office bathroom cleaning requires professional attention, the right disinfecting products, and consistent scheduling. It's not glamorous work, but it's essential for employee health and morale. Nobody wants to work somewhere with disgusting bathrooms, and clients definitely notice if they visit your office. Sometimes the best investment in your workplace is making sure the bathrooms don't make people sick.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <Link to={`/blog/article-${article.id}`}>
                      <h3 className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-card via-card/95 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              Need Professional Cleaning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experienced team handle the deep cleaning while you focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="tel:+19294624627">Call (929) 462-4627</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article10;
