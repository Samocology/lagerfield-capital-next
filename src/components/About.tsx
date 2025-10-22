import { Shield, Target, Award, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Lagerfield Capital
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A trusted partner in wealth creation and preservation, delivering excellence 
            in asset and fund management since our inception.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
            <img 
              src={aboutImage} 
              alt="Lagerfield Capital team meeting" 
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Leading the Way in Asset Management
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lagerfield Capital Limited is a premier asset and fund management firm dedicated 
              to delivering superior investment returns while maintaining the highest standards 
              of professionalism and integrity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of seasoned investment professionals combines deep market knowledge with 
              innovative strategies to help clients achieve their financial goals. We manage diverse 
              portfolios across multiple asset classes, ensuring optimal risk-adjusted returns.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a client-centric approach and commitment to excellence, we have established 
              ourselves as a trusted partner for individuals, institutions, and corporations 
              seeking professional asset management services.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide exceptional asset management services that consistently deliver value 
              to our clients through disciplined investment strategies, rigorous research, and 
              prudent risk management while maintaining the highest ethical standards.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted and respected asset management firm in Nigeria and West Africa, 
              recognized for our innovative investment solutions, exceptional client service, and 
              consistent track record of superior performance.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl"></div>
          <div className="relative p-12">
            <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">Integrity</h4>
                <p className="text-muted-foreground">
                  Upholding the highest ethical standards in all our dealings
                </p>
              </div>

              <div className="text-center group animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">Excellence</h4>
                <p className="text-muted-foreground">
                  Delivering superior results through expertise and dedication
                </p>
              </div>

              <div className="text-center group animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">Client Focus</h4>
                <p className="text-muted-foreground">
                  Putting our clients' interests at the heart of everything we do
                </p>
              </div>

              <div className="text-center group animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">Innovation</h4>
                <p className="text-muted-foreground">
                  Embracing new ideas and approaches to create value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
