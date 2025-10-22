import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Lagerfield Capital</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Professional asset and fund management services delivering consistent returns through 
              disciplined investment strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-white/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/services" className="text-white/80 hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="/insights" className="text-white/80 hover:text-secondary transition-colors">Insights</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/fund-management" className="text-white/80 hover:text-secondary transition-colors">Fund Management</a></li>
              <li><a href="/services/portfolio-advisory" className="text-white/80 hover:text-secondary transition-colors">Portfolio Advisory</a></li>
              <li><a href="/services/wealth-planning" className="text-white/80 hover:text-secondary transition-colors">Wealth Planning</a></li>
              <li><a href="/services/institutional-investments" className="text-white/80 hover:text-secondary transition-colors">Institutional Investments</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-white/80">123 Investment Plaza, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-secondary" />
                <a href="tel:+2341234567890" className="text-white/80 hover:text-secondary transition-colors">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-secondary" />
                <a href="mailto:info@lagerfieldcapital.com" className="text-white/80 hover:text-secondary transition-colors">
                  info@lagerfieldcapital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Lagerfield Capital Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/60 hover:text-secondary transition-colors">Terms of Service</a>
              <a href="/disclaimer" className="text-white/60 hover:text-secondary transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
