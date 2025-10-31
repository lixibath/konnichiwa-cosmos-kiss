import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceResidential from "@/assets/service-residential-cleaning.jpg";

const Article9 = () => {
  const relatedArticles = [
    { id: 5, title: "The Truth About 'Green' Cleaning Products" },
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
              <span>May 4, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Pet-Friendly Cleaning: Safe for Cats, Dogs, and Your Floors
          </h1>

          <img 
            src={serviceResidential} 
            alt="Pet-friendly cleaning" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              My dog once licked a freshly mopped floor and got sick. That's when I really started paying attention to what's in cleaning products. You want your home clean, but not at the expense of your pet's health. Plus, pet messes need different approaches than regular dirt. Here's what actually works for homes with cats, dogs, or other furry friends.
            </p>

            <p>
              Most commercial floor cleaners contain chemicals that are toxic if ingested. Pets walk on those floors, then lick their paws – they're basically eating whatever you just mopped with. Switch to pet-safe floor cleaners or just use diluted vinegar and water. It cleans just fine and won't hurt your animals. Same goes for any surface they might lick: counters, furniture, their food bowls area.
            </p>

            <p>
              For pet accidents, enzyme cleaners are the only thing that actually works. Regular cleaners just mask the smell temporarily, but enzymes break down the organic compounds in urine. This matters because if the smell remains (even if you can't smell it), your pet can, and they'll keep using that spot. Enzyme cleaners cost more but they're worth it. Soak the area thoroughly, let it sit for 10+ minutes, then blot it up.
            </p>

            <p>
              Pet hair is its own nightmare. Regular vacuuming helps but isn't enough. Get a vacuum specifically designed for pet hair – the suction is stronger and the brushes are made to grab fur from carpets and upholstery. Vacuum at least twice a week if you have shedding pets, more during shedding season. Also, lint rollers and rubber gloves work great for furniture – the hair sticks to rubber when you rub it.
            </p>

            <p>
              Avoid essential oil diffusers and cleaning products with strong fragrances. Many essential oils are toxic to cats and dogs: tea tree, eucalyptus, citrus oils, and others. Even if they don't ingest them, inhaling concentrated oils can cause respiratory issues. If you want your house to smell nice, proper cleaning and ventilation work better than masking odors with potentially dangerous scents.
            </p>

            <p>
              When we clean homes with pets, we use products certified pet-safe and wait until floors are completely dry before letting animals back in the room. We also recommend keeping pets in a separate area during cleaning – not because we don't like them, but because vacuum cleaners and unfamiliar people stress animals out. It's better for everyone.
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
              Pet-Safe Cleaning Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We use only pet-friendly products in homes with animals.
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

export default Article9;