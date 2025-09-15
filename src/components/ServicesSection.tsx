import { 
  Snowflake, 
  Flame, 
  Wind, 
  Wrench, 
  Thermometer, 
  Settings,
  AlertCircle,
  CheckCircle 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import servicesImage from '@/assets/hvac-services.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Air Conditioning Installation & Repair",
      description: "Professional AC installation, repair, and maintenance for optimal cooling efficiency.",
      gradient: "gradient-cool"
    },
    {
      icon: Flame,
      title: "Heating System Services",
      description: "Furnace and heat pump installation, repair, and maintenance for reliable warmth.",
      gradient: "gradient-warm"
    },
    {
      icon: Wind,
      title: "Ventilation System Services",
      description: "Complete ventilation solutions for improved air quality and circulation.",
      gradient: "gradient-primary"
    },
    {
      icon: Wrench,
      title: "Duct Cleaning and Sealing",
      description: "Professional duct cleaning and sealing services for better air quality.",
      gradient: "gradient-subtle"
    },
    {
      icon: Thermometer,
      title: "Thermostat Installation & Programming",
      description: "Smart thermostat installation and programming for energy efficiency.",
      gradient: "gradient-cool"
    },
    {
      icon: Settings,
      title: "Routine Maintenance & Tune-ups",
      description: "Regular maintenance to keep your HVAC system running efficiently year-round.",
      gradient: "gradient-warm"
    },
    {
      icon: AlertCircle,
      title: "Emergency HVAC Services",
      description: "24/7 emergency repair services when you need us most.",
      gradient: "gradient-primary"
    },
    {
      icon: CheckCircle,
      title: "System Inspections",
      description: "Comprehensive system inspections to prevent costly breakdowns.",
      gradient: "gradient-subtle"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our HVAC Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete heating, cooling, and ventilation solutions for residential and commercial properties
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-${service.gradient} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Features Banner */}
        <div 
          className="relative rounded-2xl overflow-hidden shadow-elegant"
          style={{ backgroundImage: `url(${servicesImage})` }}
        >
          <div className="absolute inset-0 bg-primary/90"></div>
          <div className="relative z-10 px-8 py-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Why Choose ADMORE COMFORT?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                <div className="text-lg font-medium">Years Experience</div>
              </div>
              <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-lg font-medium">Emergency Service</div>
              </div>
              <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-lg font-medium">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;