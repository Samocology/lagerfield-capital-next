import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-financial.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Financial Excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Shield className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-white">Trusted Asset Management Since 2008</span>
            <Award className="h-4 w-4 text-secondary" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in leading-tight">
            Excellence in Asset &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary mt-3">
              Fund Management
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto animate-fade-in font-light">
            Delivering consistent returns through disciplined investment strategies, 
            rigorous research, and expert portfolio management tailored to your financial goals
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-10 py-7 rounded-xl font-bold shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105"
            >
              Start Investing Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 text-white hover:bg-white hover:text-primary text-lg px-10 py-7 rounded-xl font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-10 w-10 text-secondary mr-3" />
                <span className="text-5xl font-bold text-secondary">₦50B+</span>
              </div>
              <p className="text-white font-semibold text-lg">Assets Under Management</p>
              <p className="text-white/70 text-sm mt-2">Trusted by institutional and retail investors</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-10 w-10 text-secondary mr-3" />
                <span className="text-5xl font-bold text-secondary">15+</span>
              </div>
              <p className="text-white font-semibold text-lg">Years of Excellence</p>
              <p className="text-white/70 text-sm mt-2">Proven track record of superior performance</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-10 w-10 text-secondary mr-3" />
                <span className="text-5xl font-bold text-secondary">500+</span>
              </div>
              <p className="text-white font-semibold text-lg">Satisfied Clients</p>
              <p className="text-white/70 text-sm mt-2">Building wealth for individuals and institutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
