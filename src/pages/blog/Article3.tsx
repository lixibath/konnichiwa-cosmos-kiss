import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import serviceOffice from "@/assets/service-office-cleaning.jpg";

const Article3 = () => {
  const relatedArticles = [
    { id: 7, title: "Commercial Kitchen Cleaning: What Restaurants Get Wrong" },
    { id: 10, title: "Why Your Office Bathroom is Grosser Than You Think" },
    { id: 14, title: "What We Learned Cleaning Through the Pandemic" },
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
              <span>August 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>MJ Davison Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Why Professional Office Cleaning Saves You Money
          </h1>

          <img 
            src={serviceOffice} 
            alt="Office cleaning" 
            className="w-full rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              I had a client once who thought hiring professional cleaners was too expensive, so he had his staff clean the office themselves. Everyone took turns emptying trash, wiping down desks, and dealing with the bathroom. Seemed like a smart cost-saving move, right? Three months later he called us back because productivity had dropped, someone quit specifically because they were tired of cleaning toilets, and the office still looked mediocre at best.
            </p>

            <p>
              Here's what most business owners miss: your employees are expensive. If you're paying someone $25-40 an hour to do actual work, having them spend 30 minutes cleaning instead costs you real money. That 30 minutes could have been spent on tasks that generate revenue, serve customers, or move projects forward. Instead, it went toward scrubbing a breakroom sink.
            </p>

            <p>
              Let's do the math. Say you have five employees earning an average of $30/hour. If each spends even 30 minutes per week on cleaning tasks, that's 2.5 hours of labor weekly at $30/hour. Over a month, that's $300 worth of productive time spent on cleaning. A professional cleaning service for a small office costs about $200-300 per month and does a way better job. So you're paying the same or more to get worse results and annoyed employees.
            </p>

            <p>
              But it goes beyond just the direct cost comparison. A dirty office affects morale. People don't want to work in a grimy space with overflowing trash cans and sticky break room tables. It's depressing and makes employees feel like the company doesn't care about them. When we started cleaning one office, three different employees mentioned to the owner how much better they felt coming to work. That kind of thing matters.
            </p>

            <p>
              Then there's the impression on clients. If someone walks into your office and sees dusty surfaces, dirty floors, or a nasty bathroom, they're judging your business. Fair or not, cleanliness signals professionalism and attention to detail. A messy office makes people wonder what else you're cutting corners on. We've had clients tell us they landed deals partially because their office looked so sharp compared to competitors.
            </p>

            <p>
              Professional cleaners also have the right equipment and products. That vacuum your office has been using for six years? It's probably not actually cleaning much anymore. We bring industrial equipment that actually removes dirt from carpets, proper sanitizers for bathrooms, and we know which products work best for different surfaces. DIY office cleaning usually means someone half-heartedly pushing a mop around and calling it done.
            </p>

            <p>
              The bottom line is this: paying for professional cleaning is a business expense that pays for itself. Your employees stay focused on actual work, morale improves, clients see a professional environment, and everything is actually clean instead of just looking passable. It's one of those things that seems like extra spending until you realize you're already spending that money, just in ways that are less obvious and less effective.
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
              Ready to Save Money?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free quote for professional office cleaning services.
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

export default Article3;