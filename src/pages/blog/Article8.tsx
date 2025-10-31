import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, CheckCircle } from "lucide-react";
import serviceMoveInOut from "@/assets/service-move-inout.jpg";

const Article8 = () => {
  const relatedArticles = [
    { id: 6, title: "How to Prepare Your Home Before Cleaners Arrive" },
    { id: 11, title: "Post-Construction Cleanup: More Than Just Sweeping" },
    { id: 4, title: "Spring Cleaning Tips From a Pro Who's Done It 1000 Times" },
  ];

  const checklist = [
    "Clean inside all cabinets and drawers",
    "Clean inside refrigerator, oven, and dishwasher",
    "Scrub all bathroom fixtures until spotless",
    "Clean all windows, mirrors, and glass surfaces",
    "Wipe down all walls and baseboards",
    "Clean inside all closets",
    "Vacuum and mop all floors thoroughly",
    "Remove any marks or scuffs from walls",
    "Clean light fixtures and ceiling fans",
    "Don't forget window tracks and door frames",
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
              <span>May 17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Move-Out Cleaning Checklist - Don't Lose Your Deposit
          </h1>

          <img 
            src={serviceMoveInOut} 
            alt="Move-out cleaning" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Landlords will find any excuse to keep your deposit. I've cleaned probably 500+ move-outs, and I know exactly what they look for. It's usually not the obvious stuff – it's the weird things like inside the oven or the tops of the cabinets. Here's my checklist that actually gets deposits back, based on what property managers have told us matters most.
            </p>

            <p>
              First, understand that your lease probably says "broom clean" or "professionally cleaned" but landlords interpret that however they want. What looks clean to you might not be clean enough for someone looking for reasons to charge you. They're hoping you'll skip stuff so they can justify keeping $500 of your money. Don't give them that opportunity.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Essential Move-Out Checklist</h3>
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              The kitchen is where people lose deposits. Clean inside the oven – not just the racks, the actual walls and bottom. Same with the refrigerator, including the little drawers and shelves. They'll check. The stovetop burners and drip pans need to be spotless. Cabinet fronts should be wiped down, and yes, they do check the tops of cabinets even though nobody actually uses that space.
            </p>

            <p>
              Bathrooms need to be actually clean, not just rinsed. Scrub the grout until it doesn't look dingy. Get all the soap scum off shower walls and doors. Clean around the base of the toilet, not just the visible parts. Mirrors should be streak-free. Check for mold or mildew and deal with it – that's an easy excuse for them to call in "professional cleaning" and charge you double what it actually costs.
            </p>

            <p>
              Walls and baseboards get overlooked but they shouldn't. Landlords walk around looking for scuffs, marks, and dirt on walls. Wipe everything down with a magic eraser if needed. Baseboards collect dust and grime – clean them. Door frames too. Light switches and outlet covers get gross – clean those. All this detail work takes time but it matters when someone's actively looking for problems.
            </p>

            <p>
              Don't forget the stupid little things that property managers fixate on: window tracks (always dirty), tops of door frames (dusty), inside closets (people leave them gross), air vents (covered in dust), and light fixtures (full of dead bugs). These take maybe 30 extra minutes total but they're exactly the kind of thing that gets you charged if you skip them.
            </p>

            <p>
              Honestly? For most people it's worth hiring a professional move-out cleaning. It costs $270-400 depending on apartment size, comes with a guarantee, and you get a receipt proving you hired professionals. If the landlord tries to charge you for cleaning anyway, you have documentation. We've had clients get their full deposit back specifically because they had our receipt showing professional cleaning was done. Worth every penny.
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
              Get Your Deposit Back
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional move-out cleaning with guarantee and receipt.
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

export default Article8;