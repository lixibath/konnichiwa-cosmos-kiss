import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceResidential from "@/assets/service-residential-cleaning.jpg";

const Article13 = () => {
  const relatedArticles = [
    { id: 1, title: "How Often Should You Deep Clean Your Home? A Realistic Guide" },
    { id: 2, title: "5 Cleaning Mistakes That Actually Make Things Worse" },
    { id: 6, title: "How to Prepare Your Home Before Cleaners Arrive" },
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
              <span>July 30, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Small Apartment? Here's How to Keep It Clean Without Going Crazy
          </h1>

          <img 
            src={serviceResidential} 
            alt="Residential cleaning service" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Small spaces get messy fast. There's just nowhere to hide stuff, so clutter becomes overwhelming really quick. But I've cleaned tons of tiny NYC apartments, and the people who keep them nice all have the same habits. It's not about cleaning more - it's about cleaning smarter.
            </p>

            <p>
              The biggest problem in small apartments isn't dirt – it's stuff. You simply don't have room for clutter, so it takes over immediately. Before you can even think about cleaning, you need to be ruthless about what you keep. If you haven't used something in six months and it's not seasonal, get rid of it. Donate it, sell it, trash it. Every item in a small apartment needs to earn its place.
            </p>

            <p>
              Once you've minimized possessions, the next step is giving everything a specific home. That "junk drawer" approach doesn't work in 400 square feet. Keys go on a hook by the door, every time. Mail gets sorted immediately – keep, file, or shred. Shoes go in the closet or on a rack, not scattered around. It sounds rigid, but it's actually freeing because you're not constantly searching for stuff or tripping over things.
            </p>

            <p>
              For actual cleaning, the secret is doing a little bit constantly instead of marathon sessions. Wipe down the kitchen counter while your coffee brews. Squeegee the shower while you're still in there. Put away clothes before bed instead of letting them pile on that chair (you know the one). These micro-tasks take 30 seconds but prevent the overwhelming mess that makes you want to give up.
            </p>

            <p>
              Invest in furniture that works hard for you. Ottoman with storage inside? Perfect for small spaces. Bed with drawers underneath? Absolutely. Wall-mounted shelves instead of floor-standing bookcases? Yes. Every piece of furniture should either provide storage or be easy to clean under. Those trendy low-profile sofas with four inches of clearance underneath? Nightmare to vacuum around.
            </p>

            <p>
              Kitchen management is crucial in small apartments because cooking smells and messes are unavoidable, and they affect your entire living space. Take out trash daily, not when it's overflowing. Wash dishes immediately after eating, or at least load them in the dishwasher. A sink full of dirty dishes in a studio apartment makes the whole place feel gross. Also, ventilation – use that range hood or open a window when cooking. Nothing makes a small space feel dirtier than lingering food smells.
            </p>

            <p>
              Here's the thing about small apartment cleaning: it's actually easier than a big house once you have systems in place. Less square footage means less to clean. Fewer rooms means less time. The trick is not letting it get out of control, because in a small space, "out of control" happens in about three days instead of three weeks. Stay on top of it with quick daily habits, do one proper cleaning session weekly, and your tiny apartment will feel way better than a cluttered big house.
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

export default Article13;
