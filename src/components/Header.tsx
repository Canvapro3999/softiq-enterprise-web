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
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border animate-slide-in-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/3ab91927-69da-4e18-8d92-a3dac98ae842.png" 
              alt="SoftIQ Solutions" 
              className="h-20 w-auto hover:scale-105 transition-transform duration-300 animate-bounce-in"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            <a href="#about" className="text-foreground hover:text-accent transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              About Us
            </a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Portfolio
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-large border border-border py-2 animate-scale-up">
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
          <div className="hidden md:flex animate-bounce-in" style={{ animationDelay: '0.5s' }}>
            <a href="mailto:softiqsolutions.tech@gmail.com">
              <Button variant="chat" size="default" className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
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
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
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