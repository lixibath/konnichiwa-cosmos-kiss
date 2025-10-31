import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceResidential from "@/assets/service-residential-cleaning.jpg";

const Article4 = () => {
  const relatedArticles = [
    { id: 1, title: "How Often Should You Deep Clean Your Home? A Realistic Guide" },
    { id: 2, title: "5 Cleaning Mistakes That Actually Make Things Worse" },
    { id: 13, title: "Small Apartment? Here's How to Keep It Clean Without Going Crazy" },
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
              <span>July 22, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Spring Cleaning Tips From a Pro Who's Done It 1000 Times
          </h1>

          <img 
            src={serviceResidential} 
            alt="Spring cleaning" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              After doing spring cleaning for 15+ years and probably over a thousand homes, I've figured out what actually matters and what's just busywork that makes you feel productive without achieving much. Most people waste hours on stuff that doesn't make a visible difference while skipping the things that would genuinely transform their space. Let me save you some time and frustration.
            </p>

            <p>
              First, forget the idea that spring cleaning means touching every single surface in your house. That's exhausting and unnecessary. Focus on the stuff you normally skip: baseboards, ceiling fans, light fixtures, window tracks, behind appliances. The areas you clean weekly are already fine. It's the neglected spots that accumulate grime and make your house feel dingy even when the floors are spotless.
            </p>

            <p>
              Windows are huge. Dirty windows make everything look worse, even if the rest of your house is immaculate. Clean the inside, outside, tracks, and sills. Use a proper glass cleaner and a microfiber cloth, not paper towels (they leave lint). This one task makes more difference than most people expect. Natural light hits different when it's not filtering through six months of grime.
            </p>

            <p>
              Declutter before you clean, not while you clean. I've watched people try to do both simultaneously and they spend four hours getting nowhere. Go through each room, decide what you're keeping, what's going to charity, and what's trash. Get rid of it. Then clean. Cleaning around clutter is pointless – you're just moving stuff around and the place still looks messy when you're done.
            </p>

            <p>
              Deep clean your kitchen beyond the usual. Pull out the refrigerator and stove to clean behind them. You don't want to know what's back there, but it needs dealing with. Clean inside the oven properly, not just the racks. Degrease the range hood filters. Wipe down all cabinet fronts. The kitchen gets used daily and accumulates grease and grime in places you don't notice until you actually look.
            </p>

            <p>
              Bathrooms need more than just the usual toilet and shower scrub. Clean the exhaust fan (gross but necessary), wash the shower curtain or liner, scrub grout lines with an actual grout brush and proper cleaner, wipe down all the bottles and products you keep on shelves. Calcium buildup on faucets comes off with vinegar – let it sit for 10 minutes before scrubbing.
            </p>

            <p>
              Don't try to do everything in one day. Seriously, you'll burn out and hate it. Break it into chunks: windows and fans one day, kitchen another day, bathrooms a third day. Spread it over a week or two. You'll do a better job when you're not exhausted, and it won't feel like your entire weekend got consumed by cleaning. Spring cleaning is a marathon, not a sprint.
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
              Skip the Hassle
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us handle your spring cleaning while you enjoy the season.
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

export default Article4;