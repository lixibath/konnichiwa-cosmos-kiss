import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceFloor from "@/assets/service-floor-care.jpg";

const Article12 = () => {
  const relatedArticles = [
    { id: 1, title: "How Often Should You Deep Clean Your Home? A Realistic Guide" },
    { id: 5, title: "The Truth About 'Green' Cleaning Products" },
    { id: 9, title: "Pet-Friendly Cleaning: Safe for Cats, Dogs, and Your Floors" },
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
              <span>September 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Queens Winter Cleaning: Salt Stains and Wet Carpets
          </h1>

          <img 
            src={serviceFloor} 
            alt="Floor care and cleaning service" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Living in Queens means dealing with winter salt getting tracked everywhere. That white crusty stuff ruins floors if you don't handle it right. And don't even get me started on wet carpets and boots. Here's how we deal with winter cleaning challenges without destroying your floors.
            </p>

            <p>
              Salt stains aren't just ugly – they actually damage flooring materials. On hardwood, salt pulls moisture out of the wood, causing it to dry out and potentially crack. On tile, it can etch the surface over time. And carpets? Salt crystals are basically tiny knives that cut carpet fibers with every step. The longer you leave it, the worse the damage gets.
            </p>

            <p>
              The key is removing salt as quickly as possible. For hard floors, you can't just mop with plain water – that actually makes it worse by spreading the salt around and leaving residue. You need to use a proper cleaning solution (we use a vinegar-water mix or specialized floor cleaner) and change your mop water frequently. If the water looks cloudy, you're just redistributing salt.
            </p>

            <p>
              Entry mats are your first line of defense, but most people don't use them correctly. You need two mats: one outside to catch the initial snow and salt, and one inside for the second wipe. The inside mat should be the kind you can shake out or vacuum easily. Those decorative mats that just smear wet salt around? Worthless. Get functional mats in winter and swap them back to pretty ones in spring.
            </p>

            <p>
              Wet carpets are a whole different nightmare. Moisture soaks into carpet padding and creates the perfect environment for mold. If your entryway carpet stays damp all winter, you've got a problem. We recommend either removing carpet from high-traffic entry areas entirely or using washable rugs that you can throw in the laundry. Those $20 rugs from the home store work better than expensive carpeting in winter.
            </p>

            <p>
              For shoes, establish a "no shoes past this point" rule if possible. I know it sounds rigid, but it makes such a difference. Keep a shoe rack or boot tray right by the door. People can handle taking shoes off if you make it convenient. And honestly, once you see how much less cleaning you're doing, you'll wonder why you didn't do this years ago.
            </p>

            <p>
              By March, most Queens homes need a serious deep clean to undo winter damage. All that accumulated salt, the moisture damage, the general griminess from being cooped up inside – it adds up. We usually recommend scheduling a professional cleaning in early spring to reset everything before warmer weather. Your floors will thank you, and your home will actually feel clean again instead of perpetually dingy.
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

export default Article12;
