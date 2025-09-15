import { Award, Shield, Users, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "Fully licensed HVAC professionals with industry certifications and ongoing training."
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind and property protection."
    },
    {
      icon: Users,
      title: "Expert Technicians",
      description: "Experienced team with years of expertise in all types of HVAC systems."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency service when you need it most, including weekends."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About ADMORE COMFORT
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for reliable heating and cooling solutions in the Greater Toronto Area
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                <div className="prose prose-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At ADMORE COMFORT HEATING AND COOLING, we've been serving homeowners and businesses 
                    with professional HVAC services for over a decade. Our commitment to excellence 
                    and customer satisfaction has made us the trusted choice for all heating, cooling, 
                    and ventilation needs.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We understand that a comfortable indoor environment is essential for your home 
                    and business. That's why our certified technicians use the latest technology 
                    and techniques to ensure your HVAC systems operate efficiently year-round.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide exceptional HVAC services that ensure optimal comfort, energy efficiency, 
                    and indoor air quality for every client, backed by reliable service and transparent pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Certifications & Qualifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">Licensed HVAC</div>
                <div className="text-xs text-muted-foreground">Contractor</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">Fully Insured</div>
                <div className="text-xs text-muted-foreground">& Bonded</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">EPA Certified</div>
                <div className="text-xs text-muted-foreground">Technicians</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">24/7 Service</div>
                <div className="text-xs text-muted-foreground">Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;