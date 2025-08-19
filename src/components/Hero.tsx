import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Headphones } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-20 bg-gradient-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div 
              ref={titleRef}
              className={`space-y-4 animate-slide-up ${titleVisible ? 'visible' : ''}`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                Hire Expert Remote Teams in{" "}
                <span className="text-accent">Python, MERN STACK, AI</span>
              </h1>
              
              <p 
                className={`text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in stagger-1 ${titleVisible ? 'visible' : ''}`}
              >
                We build and scale dedicated engineering teams for startups and enterprises—fast onboarding, senior talent, measurable outcomes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 animate-scale-in stagger-2 ${titleVisible ? 'visible' : ''}`}
            >
              <Button variant="hero" size="lg" className="flex-1 sm:flex-none hover-lift">
                LET'S GET STARTED
              </Button>
              <Button variant="heroOutline" size="lg" className="flex-1 sm:flex-none hover-lift">
                HIRE REMOTE TEAMS
              </Button>
            </div>

            {/* Quick Stats */}
            <div 
              ref={contentRef}
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border animate-slide-up stagger-3 ${contentVisible ? 'visible' : ''}`}
            >
              <div className="flex items-center space-x-2 hover-scale">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">96.7%</p>
                  <p className="text-xs text-muted-foreground">Job Success</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 hover-scale">
                <Users className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Full-Stack</p>
                  <p className="text-xs text-muted-foreground">Team</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 hover-scale">
                <Headphones className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 hover-scale">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">150+</p>
                  <p className="text-xs text-muted-foreground">Satisfied</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="lg:pl-6">
            <div 
              className={`relative animate-slide-in-right ${contentVisible ? 'visible' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-large hover-glow">
                <img 
                  src={heroIllustration} 
                  alt="Modern tech illustration with AI, mobile apps, and data visualization"
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent rounded-xl shadow-medium animate-float"></div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-primary/20 rounded-lg shadow-soft animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;