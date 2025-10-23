import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, Shield, Users, Target } from "lucide-react";

const serviceDetails = {
  "fund-management": {
    title: "Fund Management",
    description: "Professional fund management solutions tailored to your investment objectives",
    icon: TrendingUp,
    benefits: [
      "Diversified portfolio management",
      "Risk-adjusted returns optimization",
      "Active monitoring and rebalancing",
      "Comprehensive performance reporting",
      "Access to exclusive investment opportunities",
    ],
    features: [
      {
        title: "Equity Funds",
        description: "Strategic investments in carefully selected equities with growth potential",
      },
      {
        title: "Fixed Income Funds",
        description: "Stable returns through government and corporate bonds",
      },
      {
        title: "Money Market Funds",
        description: "Short-term, liquid investments for capital preservation",
      },
    ],
  },
  "portfolio-advisory": {
    title: "Portfolio Advisory",
    description: "Expert portfolio guidance and strategic investment recommendations",
    icon: Target,
    benefits: [
      "Personalized investment strategies",
      "Market analysis and insights",
      "Asset allocation optimization",
      "Tax-efficient investment planning",
      "Quarterly portfolio reviews",
    ],
    features: [
      {
        title: "Strategic Planning",
        description: "Develop comprehensive investment plans aligned with your goals",
      },
      {
        title: "Risk Assessment",
        description: "Thorough evaluation of your risk tolerance and capacity",
      },
      {
        title: "Performance Monitoring",
        description: "Continuous tracking and adjustment of portfolio performance",
      },
    ],
  },
  "wealth-planning": {
    title: "Wealth Planning",
    description: "Comprehensive wealth management services for long-term financial success",
    icon: Shield,
    benefits: [
      "Holistic financial planning",
      "Estate planning assistance",
      "Retirement planning strategies",
      "Generational wealth transfer",
      "Tax optimization strategies",
    ],
    features: [
      {
        title: "Financial Goal Setting",
        description: "Define and prioritize your short and long-term financial objectives",
      },
      {
        title: "Wealth Preservation",
        description: "Strategies to protect and grow your wealth across generations",
      },
      {
        title: "Legacy Planning",
        description: "Structure your estate for efficient wealth transfer",
      },
    ],
  },
  "institutional-investments": {
    title: "Institutional Investments",
    description: "Tailored investment solutions for institutional clients",
    icon: Users,
    benefits: [
      "Customized investment mandates",
      "Institutional-grade infrastructure",
      "Dedicated relationship management",
      "Transparent reporting and compliance",
      "Access to alternative investments",
    ],
    features: [
      {
        title: "Pension Fund Management",
        description: "Specialized solutions for pension and provident funds",
      },
      {
        title: "Corporate Treasury",
        description: "Optimize corporate cash and investment portfolios",
      },
      {
        title: "Endowment Management",
        description: "Long-term investment strategies for endowments and foundations",
      },
    ],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => window.location.href = "/services"}>
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
              <div className="space-y-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="p-6 rounded-lg border border-border bg-card">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our team to learn more about how we can help you achieve your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => window.location.href = "/contact"}>
                  Get in Touch
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = "/services"}>
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
