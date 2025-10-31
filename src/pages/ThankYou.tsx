import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";

const cleaningFacts = [
  "The average person spends about one year of their life cleaning their home!",
  "Regular cleaning can reduce stress levels by up to 20% according to psychological studies.",
  "A clean workspace can increase productivity by 15% – no wonder offices invest in professional cleaning.",
  "The kitchen sponge harbors more bacteria than a toilet seat. Replace yours weekly!",
  "Dust mites thrive in bedding – washing sheets weekly in hot water keeps them at bay.",
  "Opening windows for just 5 minutes daily can significantly improve indoor air quality.",
  "Vacuuming carpet can extend its life by removing abrasive dirt particles that wear down fibers.",
  "Studies show people are more likely to exercise in a clean environment – a tidy space motivates action.",
  "Professional cleaning services emerged in the 1850s when wealthy families hired dedicated staff.",
  "A clean home can actually help you sleep better by reducing allergens and creating a calming environment.",
  "The word 'cleanliness' comes from the Old English 'clǣnsian' meaning to purge or make pure.",
  "Indoor air can be 2-5 times more polluted than outdoor air without regular cleaning.",
  "Clutter can increase cortisol (stress hormone) levels, making you feel anxious without knowing why.",
  "Regular cleaning reduces the spread of germs that cause colds and flu by up to 80%.",
  "Americans spend an average of $40-50 billion annually on cleaning products and services.",
];

const ThankYou = () => {
  const navigate = useNavigate();
  const [randomFact, setRandomFact] = useState("");
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Select random fact
    const fact = cleaningFacts[Math.floor(Math.random() * cleaningFacts.length)];
    setRandomFact(fact);

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/30 to-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        <div className="flex justify-center">
          <div className="relative">
            <CheckCircle className="h-24 w-24 text-primary animate-scale-in" />
            <Sparkles className="h-8 w-8 text-primary absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Thank You!
          </h1>
          <p className="text-xl text-muted-foreground">
            We've received your request and will contact you within 24 hours.
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-xl p-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Sparkles className="h-5 w-5" />
            <h2 className="text-lg font-heading font-bold">Did You Know?</h2>
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {randomFact}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Redirecting to home page in {countdown} seconds...
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Return to Home Now
          </Button>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Questions? Call us at{" "}
            <a href="tel:+17185551234" className="text-primary hover:underline font-semibold">
              (718) 555-1234
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
