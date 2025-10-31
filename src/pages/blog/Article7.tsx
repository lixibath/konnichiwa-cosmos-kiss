import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import retailCleaning from "@/assets/retail-cleaning.jpg";

const Article7 = () => {
  const relatedArticles = [
    { id: 3, title: "Why Professional Office Cleaning Saves You Money" },
    { id: 10, title: "Why Your Office Bathroom is Grosser Than You Think" },
    { id: 14, title: "What We Learned Cleaning Through the Pandemic" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>June 3, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Commercial Kitchen Cleaning: What Restaurants Get Wrong
          </h1>

          <img 
            src={retailCleaning} 
            alt="Commercial kitchen cleaning" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Restaurant kitchens are brutal. Everything gets greasy, stuff gets spilled constantly, and you're trying to clean while people are still cooking. Health inspectors don't play around, and neither should you. I've cleaned commercial kitchens that passed inspection and ones that... didn't. Here's where most restaurants mess up, and how to avoid those mistakes.
            </p>

            <p>
              The hood and exhaust system gets neglected until it's a fire hazard. Grease builds up inside the hood, in the filters, and throughout the ductwork. Most places wipe down the visible parts and call it done, but that's not enough. Filters need to be pulled and degreased regularly – not rinsed, actually degreased with proper chemicals. The entire exhaust system should be professionally deep-cleaned at least twice a year. This isn't optional. Grease fires in exhaust systems shut down restaurants.
            </p>

            <p>
              Floor drains are disgusting and most staff avoids dealing with them. They accumulate food debris, grease, and bacteria, then start smelling horrible. Pouring bleach down there once a week doesn't fix anything – it just kills some bacteria temporarily. You need to actually remove the drain cover, clean out all the gunk (wear gloves, it's nasty), then sanitize properly. Set a schedule and stick to it, or you'll eventually have backups, smells, and possibly pest problems.
            </p>

            <p>
              Behind and under equipment is a disaster zone in most kitchens. Nobody wants to move a heavy commercial fridge or stove, so stuff accumulates: dropped food, grease puddles, random trash. Then pests show up because hey, free buffet. Health inspectors look behind appliances specifically because they know this is where problems hide. Schedule time weekly to pull equipment forward and clean. It sucks but it's necessary.
            </p>

            <p>
              Cutting boards and prep surfaces harbor bacteria if not sanitized properly. Washing with soap isn't enough – you need actual sanitizer at the right concentration, and you need to let it sit for the contact time listed on the label. Too many kitchens just spray sanitizer and immediately wipe it off. That does almost nothing. Spray, wait, then wipe. Check your sanitizer concentration with test strips to make sure it's actually working.
            </p>

            <p>
              Walk-in coolers and freezers get moldy and gross. The walls, floors, shelving – everything accumulates grime and bacteria. Plus, food spillage happens and nobody notices until it's frozen solid or growing mold. These spaces need proper cleaning monthly at minimum. Everything should come out, walls and floors scrubbed with appropriate cleaners (nothing that'll leave residue or contaminate food), shelves sanitized. Don't wait for visible mold before dealing with it.
            </p>

            <p>
              The biggest mistake? Trying to cut corners on labor or products to save money. Commercial kitchen cleaning requires time, proper equipment, and professional-grade chemicals. Skipping deep cleans or having untrained staff rush through tasks creates health violations, pest issues, and potential shutdowns. One failed inspection costs more than years of proper cleaning services. Do it right or risk everything you've built.
            </p>
          </div>

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

          <div className="mt-16 bg-gradient-to-br from-card via-card/95 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              Need Commercial Kitchen Cleaning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We specialize in deep cleaning for commercial kitchens.
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

export default Article7;