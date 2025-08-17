import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/3ab91927-69da-4e18-8d92-a3dac98ae842.png" 
              alt="SoftIQ Solutions" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              About Us
            </a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Portfolio
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              Contact Sales
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Services
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-300", isServicesOpen && "rotate-180")} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-large border border-border py-2">
                  <a href="#services" className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-accent transition-colors duration-300">
                    Website Development
                  </a>
                  <a href="#services" className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-accent transition-colors duration-300">
                    Mobile App Development
                  </a>
                  <a href="#services" className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-accent transition-colors duration-300">
                    AI Chatbots Development
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="mailto:softiqsolutions.tech@gmail.com">
              <Button variant="chat" size="default">
                CONTACT US
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2">
                About Us
              </a>
              <a href="#portfolio" className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2">
                Portfolio
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2">
                Contact Sales
              </a>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground mb-2">Services</p>
                <a href="#services" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-300 py-1 pl-4">
                  Website Development
                </a>
                <a href="#services" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-300 py-1 pl-4">
                  Mobile App Development
                </a>
                <a href="#services" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-300 py-1 pl-4">
                  AI Chatbots Development
                </a>
              </div>
              <a href="mailto:softiqsolutions.tech@gmail.com">
                <Button variant="chat" size="default" className="mt-4">
                  CONTACT US
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;