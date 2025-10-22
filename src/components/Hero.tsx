import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-financial.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Financial growth and asset management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-white">Trusted Asset Management Since 2010</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Wealth
            <br />
            <span className="text-secondary">Through Strategic</span>
            <br />
            Investment Management
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Lagerfield Capital Limited provides institutional-grade asset management services, 
            delivering consistent returns through disciplined investment strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 font-semibold text-lg px-8 py-6"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-semibold text-lg px-8 py-6"
            >
              View Our Insights
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">₦50B+</div>
              <div className="text-sm text-white/80">Assets Under Management</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">500+</div>
              <div className="text-sm text-white/80">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">13+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
