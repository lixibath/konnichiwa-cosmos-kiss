import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Clock } from "lucide-react";
import serviceOffice from "@/assets/service-office-cleaning.jpg";
import serviceResidential from "@/assets/service-residential-cleaning.jpg";
import serviceDeep from "@/assets/service-deep-cleaning.jpg";
import serviceMoveInOut from "@/assets/service-move-inout.jpg";
import servicePostConstruction from "@/assets/service-post-construction.jpg";
import serviceFloorCare from "@/assets/service-floor-care.jpg";

const services = [
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    price: "from $150",
    image: serviceOffice,
    description: "Running a business is demanding enough without worrying about keeping your workspace clean. That's where we come in. Our office cleaning service takes care of everything from dusting desks and emptying trash bins to sanitizing restrooms and keeping your floors spotless. We know every business is different, so we tailor our approach to fit your needs. Whether you need daily touch-ups or a weekly deep clean, we've got you covered. Our team works quietly and efficiently, usually after hours so we never interrupt your workflow. We use professional-grade equipment and eco-friendly products that are tough on dirt but safe for your employees. A clean office isn't just about appearances – it's about creating a healthier environment where people actually want to work. Plus, first impressions matter when clients walk through your door.",
    duration: "2-4 hours",
    includes: [
      "Vacuum and mop all floors",
      "Dust all surfaces, desks, and furniture",
      "Empty and replace trash bags",
      "Clean and disinfect restrooms",
      "Wipe down kitchen areas and break rooms",
      "Clean windows and glass doors",
      "Sanitize high-touch surfaces (doorknobs, light switches)",
      "Restock supplies if provided",
    ],
  },
  {
    id: "residential-cleaning",
    title: "Residential Cleaning",
    price: "from $120",
    image: serviceResidential,
    description: "Your home should be your sanctuary, not another source of stress. We get it – between work, family, and everything else life throws at you, finding time to properly clean can feel impossible. Our residential cleaning service gives you that time back. We handle everything from top to bottom: bathrooms get scrubbed until they sparkle, kitchens are left spotless, bedrooms are refreshed, and living areas become actually livable again. We're not just pushing dirt around – we're doing a thorough job that makes a real difference. Each cleaner on our team is background-checked and trained to treat your home with respect. We bring our own supplies (eco-friendly, because we care about your family and pets), and we follow a detailed checklist to make sure nothing gets missed. Whether you want us weekly, bi-weekly, or just for a one-time refresh, we'll work around your schedule. Some clients even leave us a key so we can clean while they're at work. Whatever works best for you.",
    duration: "2-5 hours",
    includes: [
      "Kitchen: counters, sink, appliances, floors",
      "Bathrooms: toilets, showers, tubs, sinks, mirrors",
      "Bedrooms: dust furniture, change linens (if requested), vacuum",
      "Living areas: dust all surfaces, vacuum carpets and rugs",
      "Mop all hard floors",
      "Take out trash and replace bags",
      "Wipe down baseboards and light switches",
      "Make beds and tidy up common areas",
    ],
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    price: "from $250",
    image: serviceDeep,
    description: "Sometimes a regular cleaning just doesn't cut it. Maybe you've been busy for months, or you're dealing with the aftermath of a party, or you just want to hit the reset button on your entire space. That's when you need a deep clean. This isn't your typical surface-level tidy-up. We're talking about getting into all those places you usually ignore – behind appliances, inside cabinets, under furniture, you name it. We scrub grout lines, degrease ovens, clean out refrigerators, dust ceiling fans and light fixtures, and tackle those mysterious sticky spots that somehow accumulate over time. It takes longer than a standard cleaning (usually 4-6 hours depending on the space), but the results are worth it. Everything gets the attention it deserves. Most people schedule a deep clean seasonally or before hosting a big event, but honestly, anytime is a good time to give your space this kind of love. You'll notice the difference immediately – it's like getting a brand new home without actually moving.",
    duration: "4-6 hours",
    includes: [
      "Everything in standard cleaning, plus:",
      "Clean inside oven and refrigerator",
      "Scrub grout and tile",
      "Wipe down all cabinet fronts and interiors",
      "Clean behind and under moveable furniture",
      "Dust and wipe ceiling fans and light fixtures",
      "Clean window sills and tracks",
      "Detailed baseboard and door frame cleaning",
      "Remove cobwebs from corners and ceilings",
      "Polish all fixtures and hardware",
    ],
  },
  {
    id: "move-inout",
    title: "Move In/Out Cleaning",
    price: "from $200",
    image: serviceMoveInOut,
    description: "Moving is stressful. Between packing, coordinating movers, updating addresses, and a million other tasks, cleaning is probably the last thing you want to think about. But whether you're trying to get your security deposit back or you want your new place to be fresh before you unpack, a thorough cleaning matters. Our move-in/move-out service handles the entire space from top to bottom. We clean places you didn't even know existed – inside cabinets, behind appliances, inside closets, you get the idea. For move-outs, we make sure everything is spotless so you can hand over those keys with confidence. For move-ins, we get rid of any traces of previous occupants so you're starting fresh. No one wants to put their food in a grimy refrigerator or their clothes in dusty closets. We take care of all that. The place will be so clean you could literally eat off the floor (though we don't recommend it). This service usually takes 3-5 hours depending on the size, but it's worth every minute.",
    duration: "3-5 hours",
    includes: [
      "Clean inside all cabinets and drawers",
      "Clean inside all appliances (oven, fridge, dishwasher)",
      "Deep clean all bathrooms",
      "Clean all windows, mirrors, and glass",
      "Wipe down all walls and baseboards",
      "Clean inside closets and pantries",
      "Scrub kitchen and bathroom floors",
      "Remove any marks or scuffs from walls",
      "Clean light fixtures and ceiling fans",
      "Ensure all surfaces are dust-free",
    ],
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleaning",
    price: "from $300",
    image: servicePostConstruction,
    description: "Construction dust is unlike any other kind of mess. It gets everywhere – and we mean everywhere. After a renovation or new construction, you're left with dust coating every surface, paint splatters, adhesive residue, sawdust in corners, and sometimes debris you didn't even know was there. Regular cleaning tools just don't cut it for this job. You need industrial-grade equipment and people who know what they're doing. That's us. We've cleaned up after countless construction projects, from small bathroom remodels to full home renovations. We know how to handle drywall dust (it's tricky), remove stickers and protective films from windows and appliances, and get rid of all those little bits of debris hiding in corners. We'll make multiple passes to ensure everything is actually clean, not just looking clean. The first pass gets the big stuff, then we go back for detail work. By the time we're done, your newly renovated space will be ready to enjoy without any of the mess. Just be warned – this kind of cleaning takes time, usually 5-8 hours depending on the scope of work.",
    duration: "5-8 hours",
    includes: [
      "Remove all construction debris and materials",
      "Multiple rounds of dust removal from all surfaces",
      "Clean windows inside and out",
      "Remove paint splatters and adhesive residue",
      "Vacuum and mop all floors thoroughly",
      "Clean inside and outside of all cabinets",
      "Wipe down all fixtures and hardware",
      "Clean air vents and returns",
      "Detail clean bathrooms and kitchen",
      "Final walk-through to catch any missed spots",
    ],
  },
  {
    id: "floor-care",
    title: "Floor Care & Maintenance",
    price: "from $180",
    image: serviceFloorCare,
    description: "Floors take a beating. They're walked on, spilled on, dragged across – and over time, they start to show it. But with the right care, your floors can look great for years. We offer specialized floor care for all types: hardwood, tile, vinyl, laminate, you name it. This isn't just mopping – we're talking about proper maintenance that extends the life of your flooring. For hardwood, we clean and can arrange for polishing or refinishing if needed. For tile and grout, we deep clean to remove built-up grime and can reseal grout lines. For carpets, we have professional-grade equipment for deep cleaning that pulls out dirt your vacuum can't touch. Different floors need different approaches, and we know how to handle each one properly. Using the wrong products or techniques can actually damage your floors, so it's worth having professionals who know what they're doing. Regular floor maintenance not only keeps things looking good, but it also protects your investment. Floors are expensive to replace, so taking care of them makes sense. We can set up a regular maintenance schedule or just come out for a one-time deep clean – whatever you need.",
    duration: "2-4 hours",
    includes: [
      "Deep cleaning appropriate for floor type",
      "Hardwood floor cleaning and polishing",
      "Tile and grout deep cleaning",
      "Carpet shampooing and steam cleaning",
      "Strip and wax for commercial floors",
      "Stain removal treatment",
      "Grout sealing (additional fee)",
      "Baseboard cleaning along all floors",
      "Furniture moving (within reason)",
      "Final inspection and touch-ups",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions for every need. Choose the service that fits your requirements.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-8">
            {services.map((service, index) => (
              <AccordionItem 
                key={service.id} 
                value={service.id}
                className="border border-border/50 rounded-xl overflow-hidden bg-card"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className="hidden md:block w-16 h-16 rounded-lg overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-primary font-semibold mt-1">{service.price}</p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-8 mt-4">
                    {/* Left: Image and Description */}
                    <div className="space-y-4">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">Estimated time: {service.duration}</span>
                      </div>
                    </div>

                    {/* Right: What's Included */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-heading font-bold text-foreground">
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6">
                        <Button 
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                          asChild
                        >
                          <a href="/contact">Request Quote</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need a Custom Cleaning Plan?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every space is unique. Let us create a customized cleaning solution that fits your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href="/contact">Get Free Quote</a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              asChild
            >
              <a href="tel:9294624627">Call (929) 462-4627</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
