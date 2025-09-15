import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch for immediate assistance or to schedule your HVAC service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Phone */}
              <Card className="p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                    <a 
                      href="tel:+16472000054" 
                      className="text-2xl font-bold text-primary hover:text-primary-light transition-colors"
                    >
                      +1-647-200-0054
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">
                      Call us 24/7 for emergency service
                    </p>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:info@admorecomfort.com" 
                      className="text-lg font-medium text-primary hover:text-primary-light transition-colors"
                    >
                      info@admorecomfort.com
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">
                      Send us your questions or service requests
                    </p>
                  </div>
                </div>
              </Card>

              {/* Address */}
              <Card className="p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cool rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Service Area</h3>
                    <p className="text-lg font-medium text-foreground">Greater Toronto Area</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Serving Toronto, Mississauga, Brampton, and surrounding areas
                    </p>
                  </div>
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday:</span>
                        <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday:</span>
                        <span className="font-medium text-foreground">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday:</span>
                        <span className="font-medium text-foreground">Emergency Only</span>
                      </div>
                      <div className="border-t border-border pt-2 mt-3">
                        <div className="flex justify-between">
                          <span className="text-primary font-medium">Emergency Service:</span>
                          <span className="font-bold text-secondary">24/7 Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Map and Social */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Map Placeholder */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Service Area</h3>
                <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-3" />
                    <p className="font-medium">Interactive Map Coming Soon</p>
                    <p className="text-sm">Serving the Greater Toronto Area</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  asChild
                >
                  <a 
                    href="https://maps.google.com/?q=Toronto,ON,Canada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Service Areas on Google Maps
                  </a>
                </Button>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-4">
                  Stay connected for HVAC tips, service updates, and seasonal maintenance reminders.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Facebook">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Instagram">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Twitter">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Emergency CTA */}
              <Card className="p-6 bg-gradient-primary text-white shadow-elegant">
                <h3 className="text-xl font-bold mb-3">Need Emergency Service?</h3>
                <p className="text-white/90 mb-4">
                  HVAC emergency? Don't wait! Our certified technicians are available 24/7 
                  to restore your comfort quickly and efficiently.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="tel:+16472000054">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Line
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;