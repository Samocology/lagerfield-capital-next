import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, PieChart, Briefcase, Building2, CheckCircle2 } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: TrendingUp,
    title: "Fund Management",
    description: "Professional management of investment portfolios with proven strategies to maximize returns while managing risk effectively.",
    features: ["Equity Funds", "Fixed Income", "Balanced Funds"],
  },
  {
    icon: PieChart,
    title: "Portfolio Advisory",
    description: "Expert guidance on portfolio construction, asset allocation, and investment strategy tailored to your financial goals.",
    features: ["Asset Allocation", "Risk Assessment", "Performance Monitoring"],
  },
  {
    icon: Briefcase,
    title: "Wealth Planning",
    description: "Comprehensive wealth management solutions designed to preserve and grow your assets across generations.",
    features: ["Estate Planning", "Tax Optimization", "Succession Planning"],
  },
  {
    icon: Building2,
    title: "Institutional Investments",
    description: "Specialized investment solutions for corporations, pension funds, and other institutional investors.",
    features: ["Pension Fund Management", "Corporate Treasury", "Endowment Funds"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={servicesBg} 
          alt="Investment Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/95 to-primary/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive investment solutions tailored to your unique financial objectives 
            and delivered with institutional-grade expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group bg-card/95 backdrop-blur-sm border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button 
                      variant="outline" 
                      className="w-full mt-6 border-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    >
                      Learn More About {service.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
