import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Appointment Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  const services = [
    "Air Conditioning Repair",
    "Heating System Repair", 
    "Installation Services",
    "Routine Maintenance",
    "Emergency Service",
    "System Inspection",
    "Duct Cleaning",
    "Thermostat Installation"
  ];

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Appointment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule your HVAC service today. Fast, reliable, and professional service guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Options */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="p-8 bg-gradient-primary text-white shadow-elegant">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Us Directly
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/90 mb-2">For immediate assistance:</p>
                    <a 
                      href="tel:+16472000054" 
                      className="text-2xl font-bold hover:text-secondary transition-colors inline-block"
                    >
                      +1-647-200-0054
                    </a>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Business Hours:</div>
                        <div className="text-white/90">Mon-Fri: 8AM-6PM</div>
                        <div className="text-white/90">Sat: 9AM-4PM</div>
                      </div>
                      <div>
                        <div className="font-medium">Emergency:</div>
                        <div className="text-white/90">24/7 Available</div>
                        <div className="text-secondary font-medium">Same-day service</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-secondary/20">
                <h4 className="font-semibold text-foreground mb-4">What to Expect:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Professional technician arrives on time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Booking Form */}
            <Card className="p-8 shadow-card animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-primary" />
                Schedule Online
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center mb-2">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      Full Name *
                    </Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your full name"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center mb-2">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Phone Number *
                    </Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      placeholder="+1 (647) 200-0054"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center mb-2">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    Email Address *
                  </Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required 
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="flex items-center mb-2">
                    <Wrench className="w-4 h-4 mr-2 text-primary" />
                    Service Required *
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      Preferred Date
                    </Label>
                    <Input 
                      id="date" 
                      name="date"
                      type="date"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      Preferred Time
                    </Label>
                    <Select name="time">
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Additional Details
                  </Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Please describe your HVAC issue or requirements..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full shadow-button"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;