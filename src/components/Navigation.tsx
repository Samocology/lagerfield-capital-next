import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Briefcase, Target, BarChart, Building, Eye, Gem, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const services = [
  { title: "Fund Management", description: "Professional fund management solutions", icon: <Briefcase className="h-6 w-6 text-primary" /> },
  { title: "Portfolio Advisory", description: "Expert portfolio guidance and strategy", icon: <Target className="h-6 w-6 text-primary" /> },
  { title: "Wealth Planning", description: "Comprehensive wealth management services", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Institutional Investments", description: "Tailored solutions for institutions", icon: <Building className="h-6 w-6 text-primary" /> },
];

const firmLinks = [
  { title: "Mission & Vision", description: "Our purpose and direction", icon: <Eye className="h-6 w-6 text-primary" /> },
  { title: "Core Values", description: "The principles that guide us", icon: <Gem className="h-6 w-6 text-primary" /> },
  { title: "Leadership Team", description: "Meet our experienced leaders", icon: <Users className="h-6 w-6 text-primary" /> },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [firmOpen, setFirmOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              Lagerfield Capital
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-4 p-4 bg-card border rounded-lg shadow-lg">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <Link
                            to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-start p-4 rounded-lg transition-colors hover:bg-accent focus:bg-accent focus:outline-none"
                          >
                            <div className="flex-shrink-0 mr-4">{service.icon}</div>
                            <div className="flex-grow">
                              <div className="text-sm font-semibold leading-none text-foreground">{service.title}</div>
                              <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Our Firm</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-4 p-4 bg-card border rounded-lg shadow-lg">
                      {firmLinks.map((link) => (
                        <NavigationMenuLink key={link.title} asChild>
                          <Link
                            to={`/firm/${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-start p-4 rounded-lg transition-colors hover:bg-accent focus:bg-accent focus:outline-none"
                          >
                            <div className="flex-shrink-0 mr-4">{link.icon}</div>
                            <div className="flex-grow">
                              <div className="text-sm font-semibold leading-none text-foreground">{link.title}</div>
                              <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/insights" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Insights
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/get-started">
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link 
                    to="/" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>
                  
                  <Link 
                    to="/about" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    About Us
                  </Link>
                  
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Our Services
                      <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="mr-4">{service.icon}</div>
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible open={firmOpen} onOpenChange={setFirmOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Our Firm
                      <ChevronDown className={`h-5 w-5 transition-transform ${firmOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 pl-4">
                      {firmLinks.map((link) => (
                        <Link
                          key={link.title}
                          to={`/firm/${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="mr-4">{link.icon}</div>
                          <span>{link.title}</span>
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Link 
                    to="/insights" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Insights
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <Link 
                    to="/get-started" 
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Button variant="default" className="w-full bg-primary hover:bg-primary/90 mt-4">
                      Get Started
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
