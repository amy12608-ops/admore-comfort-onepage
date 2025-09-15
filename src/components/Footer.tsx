import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'booking', label: 'Book Appointment' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const services = [
    'Air Conditioning Repair',
    'Heating System Services',
    'Ventilation Services',
    'Emergency HVAC',
    'Maintenance & Tune-ups'
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">ADMORE COMFORT</h3>
            <p className="text-sm text-white/80 mb-4">HEATING AND COOLING</p>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Your trusted HVAC partner providing reliable heating, cooling, and ventilation 
              solutions throughout the Greater Toronto Area.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+16472000054" 
                    className="text-white font-semibold hover:text-secondary transition-colors"
                  >
                    +1-647-200-0054
                  </a>
                  <p className="text-white/80 text-xs">24/7 Emergency Service</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@admorecomfort.com" 
                    className="text-white hover:text-secondary transition-colors text-sm"
                  >
                    info@admorecomfort.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-white text-sm">Greater Toronto Area</p>
                  <p className="text-white/80 text-xs">Serving GTA & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm text-center md:text-left">
              © 2024 ADMORE COMFORT HEATING AND COOLING. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-white/60">
              <span>Licensed & Insured HVAC Contractor</span>
              <span>EPA Certified Technicians</span>
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;