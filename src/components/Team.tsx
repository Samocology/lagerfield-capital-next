import { Linkedin, Mail } from "lucide-react";
import teamHero from "@/assets/team-hero.jpg";
import member1 from "@/assets/team-member-1.jpg";
import member2 from "@/assets/team-member-2.jpg";
import member3 from "@/assets/team-member-3.jpg";
import member4 from "@/assets/team-member-4.jpg";

const teamMembers = [
  {
    name: "Adewale Ogunleye",
    position: "Chief Executive Officer",
    image: member1,
    bio: "With over 20 years of experience in asset management and investment banking, Adewale leads our strategic vision and client relationships.",
    linkedin: "#",
    email: "adewale@lagerfieldcapital.com"
  },
  {
    name: "Folake Adeleke",
    position: "Chief Financial Officer",
    image: member2,
    bio: "Folake brings extensive expertise in financial planning and risk management, ensuring robust fiscal governance across all operations.",
    linkedin: "#",
    email: "folake@lagerfieldcapital.com"
  },
  {
    name: "Chinedu Okoro",
    position: "Head of Portfolio Management",
    image: member3,
    bio: "Chinedu specializes in portfolio construction and asset allocation, delivering consistent returns for our diverse client base.",
    linkedin: "#",
    email: "chinedu@lagerfieldcapital.com"
  },
  {
    name: "Amara Nwosu",
    position: "Director of Institutional Investments",
    image: member4,
    bio: "Amara manages relationships with institutional clients and oversees our largest investment mandates with proven success.",
    linkedin: "#",
    email: "amara@lagerfieldcapital.com"
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          <img 
            src={teamHero} 
            alt="Lagerfield Capital Leadership Team" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Meet Our Leadership Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                A dedicated team of investment professionals committed to delivering 
                excellence in asset management and exceptional client service.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 bg-white/90 hover:bg-secondary rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-white/90 hover:bg-secondary rounded-full flex items-center justify-center transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-secondary mb-4">
                  {member.position}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals who share our commitment 
            to excellence and innovation in asset management.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            View Career Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};
