import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, Briefcase, Building2, ArrowRight } from "lucide-react";

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
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive asset management solutions tailored to meet your investment objectives 
            and financial goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="group/btn">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
