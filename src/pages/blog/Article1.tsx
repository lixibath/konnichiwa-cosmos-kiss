import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceDeep from "@/assets/service-deep-cleaning.jpg";

const Article1 = () => {
  const relatedArticles = [
    { id: 2, title: "5 Cleaning Mistakes That Actually Make Things Worse" },
    { id: 4, title: "Spring Cleaning Tips From a Pro Who's Done It 1000 Times" },
    { id: 13, title: "Small Apartment? Here's How to Keep It Clean Without Going Crazy" },
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
              <span>September 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            How Often Should You Deep Clean Your Home? A Realistic Guide
          </h1>

          <img 
            src={serviceDeep} 
            alt="Deep cleaning service" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Look, every "expert" online will tell you to deep clean your house every three months, like clockwork. Spring, summer, fall, winter – boom, deep clean. But here's the thing: most of us don't have time for that, and honestly, you probably don't need it that often anyway. Unless you're running a daycare or have ten cats, seasonal deep cleaning is overkill for most households.
            </p>

            <p>
              What actually matters is how you live. Got kids tracking dirt through the house every day? You'll need more frequent attention to certain areas. Living alone and working 60-hour weeks? Your place probably stays pretty clean on its own. There's no one-size-fits-all answer, which is why those rigid schedules you see on Pinterest are kind of useless.
            </p>

            <p>
              In my experience cleaning hundreds of homes across Queens, most people benefit from a proper deep clean twice a year. Not four times. Twice. Spring makes sense because winter leaves behind salt residue, dust buildup, and that general griminess that accumulates when you're stuck inside for months. Then do another one in fall to prep for the holidays and undo the summer damage from open windows, beach sand, and all that outdoor living.
            </p>

            <p>
              Between those deep cleans, you need a decent maintenance routine. That's the part people mess up. They skip regular cleaning for six months, then try to fix everything with one marathon session. It doesn't work like that. You can't ignore your kitchen for half a year and then expect one afternoon to make it sparkle. Dirt compounds. Grime builds. Things get sticky and gross in ways that become genuinely difficult to clean.
            </p>

            <p>
              Here's what I tell clients: do a light weekly cleaning (kitchen, bathrooms, floors – the basics), have someone deep clean twice a year, and spot-treat problems as they come up. Spilled something in the oven? Clean it now, not in three months. Noticed the shower grout looking funky? Deal with it this weekend. Small problems stay small if you catch them early.
            </p>

            <p>
              And if you absolutely hate cleaning or genuinely don't have time, hire it out. We clean homes for people who'd rather spend their weekends doing literally anything else, and there's no shame in that. Your time has value. If paying someone $200 twice a year means you don't spend eight hours scrubbing baseboards, that math works out for a lot of people.
            </p>

            <p>
              The bottom line: forget the arbitrary seasonal schedule unless it genuinely fits your life. Pay attention to your actual home. When things start looking or feeling dirty, address it. Most homes need a real deep clean twice a year, some need it more often, some need it less. Trust your own judgment more than some blog post telling you there's only one right way to do it.
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

export default Article1;