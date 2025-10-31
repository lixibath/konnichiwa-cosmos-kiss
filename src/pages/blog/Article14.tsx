import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import qualityControl from "@/assets/quality-control.jpg";

const Article14 = () => {
  const relatedArticles = [
    { id: 5, title: "The Truth About 'Green' Cleaning Products" },
    { id: 10, title: "Why Your Office Bathroom is Grosser Than You Think" },
    { id: 3, title: "Why Professional Office Cleaning Saves You Money" },
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
              <span>June 25, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            What We Learned Cleaning Through the Pandemic
          </h1>

          <img 
            src={qualityControl} 
            alt="Quality control and safety measures" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              2020 changed everything about how we clean. Suddenly everyone cared about disinfecting, proper PPE, and what products actually kill viruses. We had to adapt fast. Some of those changes stuck around because they actually make sense. Here's what we do differently now and why.
            </p>

            <p>
              Before the pandemic, most clients wanted their homes to look clean. After 2020, they wanted homes to be clean – there's a difference. That shift from visible cleanliness to actual sanitization meant completely rethinking our approach. We couldn't just wipe surfaces and move on. We needed to understand contact times for disinfectants, which products were EPA-approved for killing specific pathogens, and how to properly sanitize high-touch surfaces.
            </p>

            <p>
              One thing that stuck: paying attention to high-touch surfaces. Door handles, light switches, drawer pulls, faucets, toilet handles – we always hit these now, every single time. Before, these might get a quick wipe if they looked dirty. Now they're mandatory parts of every cleaning checklist because we learned just how much germs spread through these contact points. It adds maybe 10 minutes to a cleaning job but makes a real difference in reducing illness transmission.
            </p>

            <p>
              We also completely overhauled our product selection. Turned out a lot of the "disinfecting" products we were using weren't actually registered disinfectants – they were just cleaners with marketing language that sounded medical. We switched to EPA-registered disinfectants and learned to use them properly. That means letting them sit on surfaces for the required contact time (usually 3-10 minutes depending on the product) instead of spraying and immediately wiping. Most people still get this wrong.
            </p>

            <p>
              PPE became standard for our team, not just for messy jobs. Gloves, masks when needed, proper ventilation protocols – these weren't panic measures, they were smart safety practices we should have been doing all along. Cleaning products contain harsh chemicals. We're exposing ourselves to them all day. Taking protection seriously just makes sense for long-term health, pandemic or not.
            </p>

            <p>
              The biggest surprise was how much clients appreciated transparency. We started explaining exactly what we were doing and why – which products we used, how they worked, what surfaces needed what treatment. Before, people just wanted results. After 2020, they wanted to understand the process. That communication made our service more valuable because clients felt confident in what they were paying for.
            </p>

            <p>
              Here's what didn't change: the basics still matter most. Proper cleaning with soap and water removes most germs. Disinfecting is the second step, not a replacement for actual cleaning. We saw people trying to disinfect dirty surfaces, which doesn't work. You have to clean first, then disinfect. The pandemic taught everyone about sanitization, but the fundamentals of effective cleaning haven't changed. They just matter more now, and people finally understand why we do things the way we do them.
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

export default Article14;
