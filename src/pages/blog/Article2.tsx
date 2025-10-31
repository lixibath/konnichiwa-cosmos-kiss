import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import ecoProducts from "@/assets/eco-products.jpg";

const Article2 = () => {
  const relatedArticles = [
    { id: 1, title: "How Often Should You Deep Clean Your Home? A Realistic Guide" },
    { id: 5, title: "The Truth About 'Green' Cleaning Products" },
    { id: 6, title: "How to Prepare Your Home Before Cleaners Arrive" },
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
              <span>August 28, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            5 Cleaning Mistakes That Actually Make Things Worse
          </h1>

          <img 
            src={ecoProducts} 
            alt="Cleaning products" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              You spray the cleaner, immediately wipe it off, and wonder why the surface still looks dirty. Or you scrub the hell out of something delicate and scratch it to pieces. We see people making the same cleaning mistakes constantly, and most of them just create more work. Here are five things you're probably doing wrong, and it's not your fault because nobody actually teaches this stuff.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">1. Not Letting Cleaners Sit</h2>
            <p>
              This is the big one. You spray bathroom cleaner on your shower and immediately start scrubbing. But here's the thing – cleaners need time to actually work. Most products require 3-5 minutes of contact time to break down soap scum, grease, or whatever you're trying to remove. If you wipe it off instantly, you're just smearing dirt around with expensive liquid. Spray it, walk away, do something else for five minutes, then come back and wipe. The difference is massive.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">2. Using Too Much Product</h2>
            <p>
              More soap doesn't mean cleaner. It usually means sticky residue that attracts more dirt. This is especially true for floor cleaners and dish soap. Those "pour liberally" instructions on bottles? Ignore them. The companies want you to use more so you buy more. A tiny amount of most cleaners goes way further than you'd think. Start with less, you can always add more if needed.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">3. Cleaning Windows in Direct Sunlight</h2>
            <p>
              Cleaning windows when the sun is blasting them causes the cleaner to dry too fast, leaving streaks everywhere. It's frustrating as hell and makes you think you're bad at cleaning windows when really you just picked the wrong time of day. Clean windows early morning, late afternoon, or on cloudy days. The cleaner stays wet longer, giving you time to wipe it properly without streaking.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">4. Using the Same Cloth for Everything</h2>
            <p>
              Taking the same rag from the toilet to the kitchen counter is disgusting and defeats the entire purpose of cleaning. Cross-contamination is real. You need separate cloths for bathrooms, kitchen, and general surfaces. Color-code them if you have to. And wash them after every use – a dirty cleaning cloth is basically just spreading bacteria around your house while making you feel productive.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">5. Vacuuming Before Dusting</h2>
            <p>
              This one seems logical but it's backwards. When you dust, you're knocking dust and debris onto the floor. If you already vacuumed, you just made your clean floor dirty again. Always dust first – ceiling fans, shelves, furniture, all of it. Let the dust settle (literally), then vacuum it up. It's basic physics but somehow not obvious until someone points it out.
            </p>

            <p>
              The good news is these are all easy fixes. Let your cleaners sit for a few minutes. Use less product. Pick the right time for windows. Keep your cleaning cloths separate. Dust before you vacuum. Make these changes and cleaning becomes noticeably easier and more effective. You're welcome.
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
              Need Professional Cleaning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experienced team handle it the right way.
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

export default Article2;