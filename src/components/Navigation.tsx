import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  { title: "Fund Management", description: "Professional fund management solutions" },
  { title: "Portfolio Advisory", description: "Expert portfolio guidance and strategy" },
  { title: "Wealth Planning", description: "Comprehensive wealth management services" },
  { title: "Institutional Investments", description: "Tailored solutions for institutions" },
];

const firmLinks = [
  { title: "Mission & Vision", description: "Our purpose and direction" },
  { title: "Core Values", description: "The principles that guide us" },
  { title: "Leadership Team", description: "Meet our experienced leaders" },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              Lagerfield Capital
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 bg-card">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <a
                            href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Our Firm</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 bg-card">
                      {firmLinks.map((link) => (
                        <NavigationMenuLink key={link.title} asChild>
                          <a
                            href={`/firm/${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="/insights" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Insights
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
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
                  <a href="/" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="/about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Our Services</p>
                    {services.map((service) => (
                      <a
                        key={service.title}
                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block pl-4 py-2 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Our Firm</p>
                    {firmLinks.map((link) => (
                      <a
                        key={link.title}
                        href={`/firm/${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block pl-4 py-2 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>

                  <a href="/insights" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    Insights
                  </a>
                  <a href="/contact" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                  
                  <Button variant="default" className="w-full bg-primary hover:bg-primary/90 mt-4">
                    Get Started
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
