import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceResidential from "@/assets/service-residential-cleaning.jpg";

const Article6 = () => {
  const relatedArticles = [
    { id: 1, title: "How Often Should You Deep Clean Your Home? A Realistic Guide" },
    { id: 2, title: "5 Cleaning Mistakes That Actually Make Things Worse" },
    { id: 8, title: "Move-Out Cleaning Checklist - Don't Lose Your Deposit" },
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
              <span>June 19, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            How to Prepare Your Home Before Cleaners Arrive
          </h1>

          <img 
            src={serviceResidential} 
            alt="Preparing home for cleaning" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              We don't mind a little mess – that's literally why you hired us. But there are a few things that help us do a better job and save you money on cleaning time. Like, we can't vacuum if the floor is covered in toys and Legos, and we can't clean counters if they're completely buried under mail, dishes, and random stuff. Just some quick tips that make everyone's life easier.
            </p>

            <p>
              Pick up clutter. Not everything, just the stuff that prevents us from actually cleaning surfaces. Toys, clothes, papers, whatever's on the floor or covering countertops – gather it up and put it somewhere. We're here to clean, not organize or put away your belongings. If we spend 45 minutes moving your stuff around before we can even start cleaning, that's 45 minutes you're paying for without much to show for it.
            </p>

            <p>
              Secure your pets. Some cleaners are uncomfortable around animals, vacuum cleaners scare some pets, and nobody wants a dog eating cleaning supplies or a cat knocking over buckets of water. If you have pets, either keep them in a room we're not cleaning, or arrange for them to be elsewhere during our visit. It's safer for everyone, and we can focus on work instead of worrying about your anxious dog.
            </p>

            <p>
              Tell us about problem areas or priorities. If there's a specific stain you want gone, a room that needs extra attention, or something you want us to skip entirely – communicate that upfront. We can't read minds. A quick note or text before we arrive helps us focus on what matters most to you. Otherwise we just follow our standard checklist and you might end up disappointed that we spent time on bathrooms when you really needed the kitchen deep-cleaned.
            </p>

            <p>
              Make sure we can access what we need to clean. If there's a bunch of stuff blocking the bathtub, piled in front of closets, or stacked against walls and baseboards, we can't clean those areas properly. You don't need to move everything, but if you want something cleaned, we need to be able to reach it. Seems obvious but it happens surprisingly often.
            </p>

            <p>
              Put away valuables and breakables. We're insured and careful, but accidents happen. If something is particularly precious or fragile, put it somewhere safe. We've never broken anything expensive (knock on wood), but better safe than sorry. Also, if you have specific items you don't want touched at all, let us know. We assume everything is fair game to clean or move unless you tell us otherwise.
            </p>

            <p>
              One last thing: don't deep-clean right before we arrive. Some people do this and it's... unnecessary. You're paying us to clean. You don't need to clean first. Maybe pick up clutter or do a quick tidy, sure, but scrubbing everything before the cleaner shows up is like mowing your lawn before the landscaper comes. Save your energy and let us do our job.
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
              Ready for a Clean Home?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your cleaning service today and let us handle the rest.
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

export default Article6;