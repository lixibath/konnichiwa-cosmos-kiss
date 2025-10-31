import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

interface Testimonial {
  id: number;
  name: string;
  initials: string;
  rating: number;
  service: string;
  date: string;
  text: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    initials: "SM",
    rating: 5,
    service: "Residential Cleaning",
    date: "March 2025",
    location: "Forest Hills, Queens",
    text: "I've been using MJ Davison for the past two years and they never disappoint! The team is professional, thorough, and always on time. They pay attention to every detail - from baseboards to ceiling fans. My home sparkles after every visit. I especially appreciate that they use eco-friendly products since I have two young children. Worth every penny!"
  },
  {
    id: 2,
    name: "David Chen",
    initials: "DC",
    rating: 5,
    service: "Commercial Cleaning",
    date: "February 2025",
    location: "Long Island City, Queens",
    text: "Our office has been working with MJ Davison for over three years. They clean our 5,000 sq ft office space every night after hours, and we walk into a spotless workspace every morning. Their reliability is unmatched - they've never missed a scheduled cleaning. The staff is professional and respectful of our property. Highly recommend for any business owner!"
  },
  {
    id: 3,
    name: "Jennifer Rodriguez",
    initials: "JR",
    rating: 5,
    service: "Move-Out Cleaning",
    date: "January 2025",
    location: "Astoria, Queens",
    text: "I hired MJ Davison for a move-out deep clean and they exceeded all expectations. The apartment looked better than when I moved in! They cleaned inside cabinets, scrubbed the bathroom grout until it looked new, and even cleaned the inside of the oven and refrigerator. My landlord was so impressed that I got my full security deposit back. Thank you!"
  },
  {
    id: 4,
    name: "Michael O'Brien",
    initials: "MO",
    rating: 5,
    service: "Post-Construction",
    date: "December 2024",
    location: "Sunnyside, Queens",
    text: "After our kitchen renovation, we had construction dust everywhere. MJ Davison came in and did an amazing post-construction cleaning. They removed all the fine dust from surfaces I didn't even think to check. The team worked efficiently and carefully around our new cabinets and appliances. Our kitchen went from construction zone to magazine-worthy in just one day!"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    initials: "LT",
    rating: 5,
    service: "Deep Cleaning",
    date: "March 2025",
    location: "Jackson Heights, Queens",
    text: "I booked a deep cleaning service for spring cleaning and WOW! The team spent 6 hours meticulously cleaning every corner of my 3-bedroom apartment. They moved furniture, cleaned behind appliances, washed windows inside and out, and even cleaned the inside of my dishwasher. The level of detail was incredible. My home hasn't felt this clean in years!"
  },
  {
    id: 6,
    name: "Robert Kim",
    initials: "RK",
    rating: 5,
    service: "Office Cleaning",
    date: "February 2025",
    location: "Flushing, Queens",
    text: "As a medical office, cleanliness is crucial for us. MJ Davison understands this and goes above and beyond to sanitize every surface. They're detail-oriented, use medical-grade disinfectants, and are always discrete and professional around our patients. They've been servicing our practice for 18 months and we couldn't be happier with their work."
  },
  {
    id: 7,
    name: "Amanda Foster",
    initials: "AF",
    rating: 5,
    service: "Residential Cleaning",
    date: "January 2025",
    location: "Woodside, Queens",
    text: "I'm a busy single mom working full-time, and MJ Davison has been a lifesaver! They come bi-weekly and handle everything - bathrooms, kitchen, vacuuming, dusting, and mopping. The same team comes each time, so they know exactly what I like. They're trustworthy enough that I gave them a key. Coming home to a clean house is such a blessing. Thank you, MJ Davison!"
  },
  {
    id: 8,
    name: "James Patterson",
    initials: "JP",
    rating: 5,
    service: "Commercial Cleaning",
    date: "March 2025",
    location: "Bayside, Queens",
    text: "We own a retail store and hired MJ Davison to clean after closing. They do an exceptional job keeping our floors spotless, windows streak-free, and fitting rooms fresh. Our customers have commented on how clean the store always looks. The team is reliable, efficient, and works around our schedule. Great value for the quality of service we receive!"
  },
  {
    id: 9,
    name: "Emily Watson",
    initials: "EW",
    rating: 5,
    service: "Move-In Cleaning",
    date: "December 2024",
    location: "Rego Park, Queens",
    text: "Before moving into our new apartment, we hired MJ Davison for a move-in cleaning. Best decision ever! They sanitized every surface, cleaned inside all the closets and cabinets, scrubbed the bathrooms until they gleamed, and even cleaned the windows. We moved in feeling confident that everything was perfectly clean. Professional service from start to finish!"
  },
  {
    id: 10,
    name: "Christopher Lee",
    initials: "CL",
    rating: 5,
    service: "Deep Cleaning",
    date: "February 2025",
    location: "Elmhurst, Queens",
    text: "I'm extremely particular about cleanliness, and MJ Davison meets my high standards. During their deep cleaning service, they addressed every area I mentioned plus things I hadn't even noticed. The team is professional, punctual, and respectful. They brought their own supplies and equipment, and left my home absolutely immaculate. I've already booked them for quarterly deep cleans!"
  }
];

const serviceTypes = ["All Services", "Residential Cleaning", "Commercial Cleaning", "Deep Cleaning", "Move-Out Cleaning", "Move-In Cleaning", "Post-Construction", "Office Cleaning"];

const Testimonials = () => {
  const [selectedService, setSelectedService] = useState("All Services");

  const filteredTestimonials = selectedService === "All Services" 
    ? testimonials 
    : testimonials.filter(t => t.service === selectedService);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Client Testimonials
            </h1>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear what our satisfied clients have to say about our cleaning services
            </p>
          </div>
        </div>
      </section>

      {/* Service Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Filter by Service Type
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {serviceTypes.map((service) => (
                <Button
                  key={service}
                  variant={selectedService === service ? "default" : "outline"}
                  onClick={() => setSelectedService(service)}
                  className="rounded-full"
                  size="sm"
                >
                  {service}
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Showing {filteredTestimonials.length} {filteredTestimonials.length === 1 ? 'review' : 'reviews'}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
              >
                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Service Badge */}
                  <Badge variant="secondary" className="mb-4">
                    {testimonial.service}
                  </Badge>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>

                  {/* Date */}
                  <p className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Become Our Next Happy Customer
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of satisfied clients who trust MJ Davison Professional Cleaning Services. 
              Experience the difference that quality, reliability, and attention to detail can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+17185551234">(718) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
