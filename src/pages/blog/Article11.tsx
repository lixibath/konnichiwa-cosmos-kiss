import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceConstruction from "@/assets/service-post-construction.jpg";

const Article11 = () => {
  const relatedArticles = [
    { id: 8, title: "Move-Out Cleaning Checklist - Don't Lose Your Deposit" },
    { id: 2, title: "5 Cleaning Mistakes That Actually Make Things Worse" },
    { id: 4, title: "Spring Cleaning Tips From a Pro Who's Done It 1000 Times" },
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
              <span>April 11, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Post-Construction Cleanup: More Than Just Sweeping
          </h1>

          <img 
            src={serviceConstruction} 
            alt="Post-construction cleaning service" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Construction dust is not normal dust. It gets everywhere - and I mean everywhere. In your vents, on top of your cabinets, inside your drawers. You can't just sweep it up and call it done. It takes multiple passes with the right equipment, otherwise you'll be finding dust for months.
            </p>

            <p>
              I've seen homeowners try to tackle post-construction cleaning themselves and give up after a few hours. It's not their fault – they just don't realize what they're dealing with. That fine white powder from drywall? It's like glitter. It sticks to everything, floats in the air for hours, and settles in places you wouldn't even think to check. Regular vacuuming just spreads it around.
            </p>

            <p>
              The first thing we do on a post-construction job is remove all the big debris – leftover materials, packaging, obvious trash. That's the easy part. Then comes the real work: HEPA vacuuming every surface, including walls and ceilings. Yes, you need to vacuum your walls. That dust clings to vertical surfaces just as much as horizontal ones.
            </p>

            <p>
              Windows are usually a disaster. They get covered in paint splatters, adhesive residue, and that inevitable layer of dust. Regular glass cleaner doesn't cut it – you need razor blades for the paint, mineral spirits for the adhesive, and then multiple passes with proper glass cleaner. It's tedious work but it makes a huge difference in how the finished space looks.
            </p>

            <p>
              Floors require special attention depending on the material. Hardwood can get scratched during construction, so we're careful about what cleaning products we use. Tile grout gets filled with dust that needs to be scrubbed out. Carpets (if installed post-construction) need professional-grade extraction to get all the fine particles out. A regular home vacuum won't do it.
            </p>

            <p>
              And here's something contractors won't tell you: HVAC systems get absolutely hammered during construction. All that dust gets sucked into your vents and spread throughout the space. We recommend getting ducts professionally cleaned after major renovation work. Otherwise, your brand new kitchen will keep getting dusty no matter how much you clean.
            </p>

            <p>
              The timeline matters too. Post-construction cleaning usually takes 2-3 times longer than a regular deep clean of the same square footage. If someone quotes you the same price and timeframe as a standard cleaning, they either don't know what they're doing or they're planning to do a terrible job. This work requires proper equipment (HEPA vacuums, heavy-duty cleaning solutions, safety gear) and realistic time estimates. But when it's done right, your new or renovated space will actually feel clean instead of perpetually dusty.
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

export default Article11;
