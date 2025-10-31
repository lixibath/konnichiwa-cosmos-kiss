import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const serviceTypes = [
  { value: "residential", label: "Residential Cleaning", basePrice: 165 },
  { value: "deep", label: "Deep Cleaning", basePrice: 245 },
  { value: "office", label: "Office Cleaning", basePrice: 205 },
  { value: "move", label: "Move In/Out Cleaning", basePrice: 270 },
  { value: "construction", label: "Post-Construction Cleaning", basePrice: 340 },
  { value: "floor", label: "Floor Care & Polishing", basePrice: 135 },
];

const serviceAreas = [
  { value: "astoria", label: "Astoria/LIC", surcharge: 0 },
  { value: "flushing", label: "Flushing/Corona", surcharge: 20 },
  { value: "forest", label: "Forest Hills/Kew Gardens", surcharge: 27 },
  { value: "jamaica", label: "Jamaica/Hollis", surcharge: 34 },
  { value: "rockaway", label: "Rockaway/Far Rockaway", surcharge: 41 },
];

export function PriceCalculator() {
  const [open, setOpen] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [rooms, setRooms] = useState([3]);
  const [sqft, setSqft] = useState(1000);
  const [serviceArea, setServiceArea] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState<{ min: number; max: number } | null>(null);

  const calculatePrice = () => {
    if (!serviceType || !serviceArea) {
      return;
    }

    const service = serviceTypes.find(s => s.value === serviceType);
    const area = serviceAreas.find(a => a.value === serviceArea);

    if (!service || !area) return;

    let price = service.basePrice;

    // Add $47 for each room after the 3rd
    if (rooms[0] > 3) {
      price += (rooms[0] - 3) * 47;
    }

    // Add $0.09 for each sq ft after 1000
    if (sqft > 1000) {
      price += (sqft - 1000) * 0.09;
    }

    // Add service area surcharge
    price += area.surcharge;

    // Calculate range (base to +25%)
    const minPrice = Math.round(price);
    const maxPrice = Math.round(price * 1.25);

    setCalculatedPrice({ min: minPrice, max: maxPrice });
  };

  const handleReset = () => {
    setServiceType("");
    setRooms([3]);
    setSqft(1000);
    setServiceArea("");
    setCalculatedPrice(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed right-0 top-1/2 -translate-y-1/2 h-[150px] w-[40px] rounded-l-lg rounded-r-none bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg z-50 p-0"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="text-xs font-bold tracking-wider whitespace-nowrap">
            CALCULATE YOUR PRICE
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="h-6 w-6 text-primary" />
            Price Calculator
          </DialogTitle>
          <DialogDescription>
            Get an instant estimate for your cleaning service. Prices may vary based on specific requirements.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Service Type */}
          <div className="space-y-2">
            <Label htmlFor="service-type">Service Type</Label>
            <Select value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger id="service-type">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Number of Rooms */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label htmlFor="rooms">Number of Rooms</Label>
              <span className="text-sm text-muted-foreground font-medium">{rooms[0]} rooms</span>
            </div>
            <Slider
              id="rooms"
              min={1}
              max={10}
              step={1}
              value={rooms}
              onValueChange={setRooms}
              className="w-full"
            />
          </div>

          {/* Square Footage */}
          <div className="space-y-2">
            <Label htmlFor="sqft">Square Footage</Label>
            <Input
              id="sqft"
              type="number"
              min={100}
              max={10000}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              placeholder="1000"
            />
          </div>

          {/* Service Area */}
          <div className="space-y-2">
            <Label htmlFor="service-area">Service Area</Label>
            <Select value={serviceArea} onValueChange={setServiceArea}>
              <SelectTrigger id="service-area">
                <SelectValue placeholder="Select your area" />
              </SelectTrigger>
              <SelectContent>
                {serviceAreas.map((area) => (
                  <SelectItem key={area.value} value={area.value}>
                    {area.label} {area.surcharge > 0 && `(+$${area.surcharge})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Calculate Button */}
          <Button 
            onClick={calculatePrice} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={!serviceType || !serviceArea}
          >
            Calculate Price
          </Button>

          {/* Results */}
          {calculatedPrice && (
            <div className="bg-primary/10 p-6 rounded-lg space-y-4 animate-in fade-in-50 duration-300">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Estimated Price Range</p>
                <p className="text-3xl font-bold text-primary">
                  ${calculatedPrice.min} - ${calculatedPrice.max}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Final price may vary based on specific conditions
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link to="/contact">Book Now</Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={handleReset}
                >
                  Calculate Again
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
