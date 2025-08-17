import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Headphones } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                Hire Expert Remote Teams in{" "}
                <span className="text-accent animate-glow">Python, MERN STACK, AI</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-slide-in-left">
                We build and scale dedicated engineering teams for startups and enterprises—fast onboarding, senior talent, measurable outcomes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-right">
              <Button variant="hero" size="xl" className="flex-1 sm:flex-none hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                LET'S GET STARTED
              </Button>
              <Button variant="heroOutline" size="xl" className="flex-1 sm:flex-none hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                HIRE REMOTE TEAMS
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              <div className="flex items-center space-x-3 animate-stagger-1 hover:scale-105 transition-transform duration-300">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 animate-bounce-in" />
                <div>
                  <p className="font-bold text-foreground text-sm">96.7%</p>
                  <p className="text-xs text-muted-foreground">Job Success</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 animate-stagger-2 hover:scale-105 transition-transform duration-300">
                <Users className="h-6 w-6 text-accent flex-shrink-0 animate-bounce-in" style={{ animationDelay: '0.1s' }} />
                <div>
                  <p className="font-bold text-foreground text-sm">Full-Stack</p>
                  <p className="text-xs text-muted-foreground">Team</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 animate-stagger-3 hover:scale-105 transition-transform duration-300">
                <Headphones className="h-6 w-6 text-accent flex-shrink-0 animate-bounce-in" style={{ animationDelay: '0.2s' }} />
                <div>
                  <p className="font-bold text-foreground text-sm">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 animate-stagger-4 hover:scale-105 transition-transform duration-300">
                <Clock className="h-6 w-6 text-accent flex-shrink-0 animate-bounce-in" style={{ animationDelay: '0.3s' }} />
                <div>
                  <p className="font-bold text-foreground text-sm">150+</p>
                  <p className="text-xs text-muted-foreground">Satisfied</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="lg:pl-8">
            <div className="relative animate-scale-up">
              <div className="relative overflow-hidden rounded-3xl shadow-large hover:shadow-xl transition-all duration-500 hover:scale-105">
                <img 
                  src={heroIllustration} 
                  alt="Modern tech illustration with AI, mobile apps, and data visualization"
                  className="w-full h-auto object-cover animate-fade-in"
                />
                {/* Shine effect overlay */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl shadow-medium animate-float hover:animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-xl shadow-soft animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;