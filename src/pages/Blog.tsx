import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How Often Should You Deep Clean Your Home? A Realistic Guide",
    date: "September 12, 2025",
    description: "Look, I know everyone says you should deep clean every season, but let's be real. Most of us don't have time for that. Here's what actually makes sense for regular people with jobs and lives. Spoiler: it's probably less often than you think, but more thorough when you do it.",
  },
  {
    id: 2,
    title: "5 Cleaning Mistakes That Actually Make Things Worse",
    date: "August 28, 2025",
    description: "You know that thing where you spray cleaner and immediately wipe it off? Yeah, that doesn't work. We see people doing the same mistakes over and over, and honestly it just creates more work. Here's what you're probably doing wrong (and it's not your fault, nobody teaches this stuff).",
  },
  {
    id: 3,
    title: "Why Professional Office Cleaning Saves You Money",
    date: "August 15, 2025",
    description: "I had a client once who thought hiring cleaners was too expensive, so he had his staff do it. Three months later he called us back because productivity dropped and someone quit over having to clean toilets. Sometimes the 'cheaper' option costs you way more in the long run.",
  },
  {
    id: 4,
    title: "Spring Cleaning Tips From a Pro Who's Done It 1000 Times",
    date: "July 22, 2025",
    description: "After doing this for 15+ years, I've figured out what actually matters during spring cleaning and what's just busywork. Most people spend too much time on stuff that doesn't make a difference and skip the things that do. Let me save you some time and frustration.",
  },
  {
    id: 5,
    title: "The Truth About 'Green' Cleaning Products",
    date: "July 8, 2025",
    description: "Not all 'eco-friendly' products actually work, and some regular cleaners are safer than you'd think. I've tested probably hundreds of different products over the years. Some green stuff is amazing, some is basically expensive water. Here's what I actually use in my own house.",
  },
  {
    id: 6,
    title: "How to Prepare Your Home Before Cleaners Arrive",
    date: "June 19, 2025",
    description: "We don't mind a little mess - that's literally why you hired us. But there's a few things that help us do a better job and save you money. Like, we can't vacuum if the floor is covered in toys and we can't clean counters if they're piled with stuff. Just some quick tips that make everyone's life easier.",
  },
  {
    id: 7,
    title: "Commercial Kitchen Cleaning: What Restaurants Get Wrong",
    date: "June 3, 2025",
    description: "Restaurant kitchens are tough. Everything gets greasy, stuff gets spilled constantly, and you're trying to clean while people are still cooking. I've seen some pretty scary situations. The health inspector isn't playing around, and neither should you. Here's where most places mess up.",
  },
  {
    id: 8,
    title: "Move-Out Cleaning Checklist - Don't Lose Your Deposit",
    date: "May 17, 2025",
    description: "Landlords will find any excuse to keep your deposit. I've cleaned probably 500+ move-outs, and I know exactly what they look for. It's usually not the obvious stuff - it's the weird things like inside the oven or the tops of the cabinets. Here's my checklist that actually gets deposits back.",
  },
  {
    id: 9,
    title: "Pet-Friendly Cleaning: Safe for Cats, Dogs, and Your Floors",
    date: "May 4, 2025",
    description: "My dog once licked a freshly mopped floor and got sick. That's when I really started paying attention to what's in cleaning products. You want your home clean, but not at the expense of your pet's health. Plus, pet messes need different approaches than regular dirt. Here's what works.",
  },
  {
    id: 10,
    title: "Why Your Office Bathroom is Grosser Than You Think",
    date: "April 23, 2025",
    description: "I'm not trying to scare you, but office bathrooms are basically petri dishes. Everybody uses them, nobody really cleans them properly, and they get way more traffic than a home bathroom. The stuff we find when we deep clean an office bathroom for the first time... yeah. Let's just say proper cleaning matters.",
  },
  {
    id: 11,
    title: "Post-Construction Cleanup: More Than Just Sweeping",
    date: "April 11, 2025",
    description: "Construction dust is not normal dust. It gets everywhere - and I mean everywhere. In your vents, on top of your cabinets, inside your drawers. You can't just sweep it up and call it done. It takes multiple passes with the right equipment, otherwise you'll be finding dust for months.",
  },
  {
    id: 12,
    title: "Queens Winter Cleaning: Salt Stains and Wet Carpets",
    date: "September 5, 2025",
    description: "Living in Queens means dealing with winter salt getting tracked everywhere. That white crusty stuff ruins floors if you don't handle it right. And don't even get me started on wet carpets and boots. Here's how we deal with winter cleaning challenges without destroying your floors.",
  },
  {
    id: 13,
    title: "Small Apartment? Here's How to Keep It Clean Without Going Crazy",
    date: "July 30, 2025",
    description: "Small spaces get messy fast. There's just nowhere to hide stuff, so clutter becomes overwhelming really quick. But I've cleaned tons of tiny NYC apartments, and the people who keep them nice all have the same habits. It's not about cleaning more - it's about cleaning smarter.",
  },
  {
    id: 14,
    title: "What We Learned Cleaning Through the Pandemic",
    date: "June 25, 2025",
    description: "2020 changed everything about how we clean. Suddenly everyone cared about disinfecting, proper PPE, and what products actually kill viruses. We had to adapt fast. Some of those changes stuck around because they actually make sense. Here's what we do differently now and why.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Cleaning Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real talk about cleaning from people who actually do it every day. 
            No fluff, just practical tips and honest experiences.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold group"
                    asChild
                  >
                    <Link to={`/blog/article-${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Want Professional Cleaning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reading about cleaning is nice, but having someone else do it is better. 
            Let's talk about your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              asChild
            >
              <a href="tel:+19294624627">Call (929) 462-4627</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
