import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import ecoProducts from "@/assets/eco-products.jpg";

const Article5 = () => {
  const relatedArticles = [
    { id: 2, title: "5 Cleaning Mistakes That Actually Make Things Worse" },
    { id: 6, title: "How to Prepare Your Home Before Cleaners Arrive" },
    { id: 9, title: "Pet-Friendly Cleaning: Safe for Cats, Dogs, and Your Floors" },
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
              <span>July 8, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            The Truth About 'Green' Cleaning Products
          </h1>

          <img 
            src={ecoProducts} 
            alt="Eco-friendly cleaning products" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Not all "eco-friendly" products actually work, and some regular cleaners are safer than you'd think. I've tested probably hundreds of different products over the years – some green stuff is amazing, some is basically expensive water with a nice smell. After switching our entire company to eco-friendly products in 2022, here's what I actually learned about what works and what doesn't.
            </p>

            <p>
              The term "green" or "eco-friendly" isn't regulated, so companies can slap it on anything. Some products genuinely use plant-based ingredients, are biodegradable, and skip harsh chemicals. Others just have a leaf on the bottle and cost more. You have to actually read labels and look for specific certifications like EPA Safer Choice or Green Seal. Those actually mean something.
            </p>

            <p>
              Here's what surprised me: vinegar and baking soda, the internet's favorite "natural" cleaners, are overrated. Vinegar is great for certain things (glass, removing mineral deposits) but terrible for others (stone counters, hardwood floors). Baking soda is mildly abrasive and deodorizes but doesn't actually kill bacteria. Using them for everything because they're "natural" is like using a hammer for every job because it's simple.
            </p>

            <p>
              The eco-friendly products we use now work just as well as traditional harsh chemicals. For kitchens and bathrooms, we use enzyme-based cleaners that break down organic matter naturally. For general surfaces, plant-based all-purpose cleaners get the job done without the fumes. Glass cleaner doesn't need ammonia to work – the eco versions clean just fine. I was skeptical at first, but after three years of professional use, I'm convinced.
            </p>

            <p>
              The benefits go beyond just feeling good about the environment. Our team members who use these products all day don't deal with headaches, skin irritation, or breathing issues anymore. Clients with kids and pets feel better about us cleaning with products that won't harm anyone if they're accidentally ingested. Nobody misses the bleach smell that used to linger for hours.
            </p>

            <p>
              That said, there are times when traditional cleaners still make more sense. Heavy mold issues sometimes need proper mold killer with actual fungicides. Some industrial situations require heavy-duty degreasers. If you're dealing with serious contamination or specific problems, eco-friendly might not cut it. For 95% of regular cleaning though? The green stuff works great.
            </p>

            <p>
              If you want to try eco-friendly products, start with all-purpose cleaner and dish soap – those are easy switches that work well. Glass cleaner and bathroom cleaner are also solid bets. Skip the DIY vinegar mixtures unless you actually know what you're doing. And don't pay double just because something says "green" – check the ingredients and certifications. Some mainstream brands now have eco lines that work better and cost less than boutique options.
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
              We Use Eco-Friendly Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Safe for your family, pets, and the environment.
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

export default Article5;