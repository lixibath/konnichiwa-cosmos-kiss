import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import queensMap from "@/assets/queens-map.jpg";

const neighborhoods = [
  {
    name: "Long Island City",
    zip: "11101, 11109",
    description: "Thriving waterfront community with modern high-rises and bustling businesses. We serve residential towers, commercial offices, and everything in between.",
  },
  {
    name: "Astoria",
    zip: "11102, 11103, 11105, 11106",
    description: "Diverse neighborhood known for its cultural variety and strong community spirit. From family homes to local businesses, we keep Astoria spotless.",
  },
  {
    name: "Sunnyside",
    zip: "11104",
    description: "Charming residential area with beautiful garden apartments and tree-lined streets. We help maintain the neighborhood's signature cleanliness.",
  },
  {
    name: "Woodside",
    zip: "11377",
    description: "Vibrant multicultural neighborhood with a mix of residential and commercial spaces. We support both homeowners and local businesses here.",
  },
  {
    name: "Jackson Heights",
    zip: "11372",
    description: "Historic district with stunning architecture and diverse communities. We provide cleaning services to this culturally rich neighborhood.",
  },
  {
    name: "Forest Hills",
    zip: "11375",
    description: "Upscale residential area with beautiful Tudor-style homes and gardens. Our premium services match the quality this neighborhood deserves.",
  },
  {
    name: "Elmhurst",
    zip: "11373",
    description: "Bustling area with strong Asian and Latin American communities. We serve families and businesses throughout this diverse neighborhood.",
  },
  {
    name: "Corona",
    zip: "11368",
    description: "Historic neighborhood with rich cultural heritage and active community life. We're proud to serve this vibrant part of Queens.",
  },
  {
    name: "Flushing",
    zip: "11354, 11355, 11358",
    description: "Major commercial hub with residential areas. From high-rises to single-family homes, we handle all types of properties.",
  },
  {
    name: "Ridgewood",
    zip: "11385",
    description: "Charming neighborhood straddling Queens and Brooklyn border. We serve both sides with equal dedication and care.",
  },
  {
    name: "Rego Park",
    zip: "11374",
    description: "Residential and commercial area known for shopping and dining. We keep both homes and businesses in pristine condition.",
  },
  {
    name: "Bayside",
    zip: "11360, 11361, 11364",
    description: "Quiet residential area with suburban feel. Perfect for our recurring residential cleaning services for busy families.",
  },
];

const zipSchema = z.object({
  zipCode: z.string()
    .trim()
    .regex(/^\d{5}$/, { message: "Please enter a valid 5-digit ZIP code" }),
});

const ServiceArea = () => {
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof zipSchema>>({
    resolver: zodResolver(zipSchema),
    defaultValues: {
      zipCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof zipSchema>) {
    setIsChecking(true);
    
    // Check if ZIP is in our service area
    const allZips = neighborhoods.flatMap(n => 
      n.zip.split(',').map(z => z.trim())
    );
    
    setTimeout(() => {
      setIsChecking(false);
      const isServed = allZips.includes(values.zipCode);
      
      if (isServed) {
        const neighborhood = neighborhoods.find(n => 
          n.zip.includes(values.zipCode)
        );
        toast({
          title: "Great news! We serve your area.",
          description: neighborhood 
            ? `We provide services in ${neighborhood.name}. Get your free quote today!`
            : "We provide services in your area. Get your free quote today!",
        });
      } else {
        toast({
          title: "We may still be able to help!",
          description: "While this ZIP isn't in our primary service area, we sometimes make exceptions. Call us at (929) 462-4627 to discuss.",
          variant: "default",
        });
      }
      
      form.reset();
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            We Serve Queens and Surrounding Areas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proudly providing professional cleaning services throughout Queens, NYC. 
            If you don't see your neighborhood listed, give us a call – we might still be able to help!
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={queensMap} 
                  alt="Queens NYC Service Area Map"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center p-8">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-lg font-semibold text-foreground">
                      Serving 50+ neighborhoods across Queens
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ZIP Code Checker */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-center">
                Check If We Serve Your Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input 
                      placeholder="Enter your ZIP code (e.g., 11101)"
                      {...form.register("zipCode")}
                      maxLength={5}
                      className="text-lg"
                    />
                    {form.formState.errors.zipCode && (
                      <p className="text-sm text-destructive mt-2">
                        {form.formState.errors.zipCode.message}
                      </p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isChecking}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    {isChecking ? "Checking..." : "Check Now"}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Enter your 5-digit ZIP code to see if we service your area
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Service Neighborhoods
            </h2>
            <p className="text-lg text-muted-foreground">
              We're proud to serve these wonderful Queens communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-heading mb-2">
                        {neighborhood.name}
                      </CardTitle>
                      <p className="text-sm text-primary font-semibold">
                        ZIP: {neighborhood.zip}
                      </p>
                    </div>
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {neighborhood.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-16 bg-gradient-to-br from-card via-card/95 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-center mb-4">
                Surrounding Areas
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                While Queens is our primary service area, we also occasionally serve neighboring areas in Brooklyn, 
                Manhattan, and the Bronx on a case-by-case basis. Travel fees may apply for locations outside our 
                standard service zone.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  asChild
                >
                  <a href="/contact">Contact Us About Your Location</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Schedule Your Cleaning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're in Long Island City or Forest Hills, we're ready to make your space spotless.
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

export default ServiceArea;
