import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div 
            ref={titleRef}
            className={`space-y-4 animate-slide-up ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
              About <span className="text-accent">SoftIQ Solutions</span>
            </h2>
            
            <div className="space-y-4 text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p className={`animate-fade-in stagger-1 ${titleVisible ? 'visible' : ''}`}>
                SoftIQ Solutions is a AI-based remote developer agency delivering production-ready software with Python, MERN, and AI. We assemble senior, dedicated teams tailored to your roadmap—covering backend, frontend, and cloud.
              </p>
              
              <p className={`animate-fade-in stagger-2 ${titleVisible ? 'visible' : ''}`}>
                From greenfield builds to complex integrations, we deliver clean architectures, measurable results, and long-term support.
              </p>
            </div>
          </div>

          {/* What We Stand For */}
          <div className="pt-10">
            <h3 className={`text-xl lg:text-2xl font-semibold text-foreground mb-8 animate-fade-in ${titleVisible ? 'visible' : ''}`}>
              What We Stand For
            </h3>
            
            <div 
              ref={cardsRef}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className={`space-y-3 p-5 bg-secondary rounded-xl hover:shadow-lg transition-all duration-200 hover-lift animate-scale-in stagger-1 ${cardsVisible ? 'visible' : ''}`}>
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-5 h-5 bg-accent rounded"></div>
                </div>
                <h4 className="font-medium text-foreground text-base">Speed with Quality</h4>
                <p className="text-muted-foreground text-sm">CI/CD, testing, code reviews</p>
              </div>
              
              <div className={`space-y-3 p-5 bg-secondary rounded-xl hover:shadow-lg transition-all duration-200 hover-lift animate-scale-in stagger-2 ${cardsVisible ? 'visible' : ''}`}>
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-5 h-5 bg-accent rounded"></div>
                </div>
                <h4 className="font-medium text-foreground text-base">Scalable Architectures</h4>
                <p className="text-muted-foreground text-sm">Microservices, event-driven patterns, cloud-native</p>
              </div>
              
              <div className={`space-y-3 p-5 bg-secondary rounded-xl hover:shadow-lg transition-all duration-200 hover-lift animate-scale-in stagger-3 ${cardsVisible ? 'visible' : ''}`}>
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-5 h-5 bg-accent rounded"></div>
                </div>
                <h4 className="font-medium text-foreground text-base">AI-Driven Value</h4>
                <p className="text-muted-foreground text-sm">LLMs, chatbots, automation, analytics</p>
              </div>
              
              <div className={`space-y-3 p-5 bg-secondary rounded-xl hover:shadow-lg transition-all duration-200 hover-lift animate-scale-in stagger-4 ${cardsVisible ? 'visible' : ''}`}>
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-5 h-5 bg-accent rounded"></div>
                </div>
                <h4 className="font-medium text-foreground text-base">Clear Communication</h4>
                <p className="text-muted-foreground text-sm">Transparent sprints, demos, documentation</p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className={`pt-8 p-6 bg-gradient-subtle rounded-xl animate-scale-in ${cardsVisible ? 'visible' : ''}`}>
            <p className="text-base text-muted-foreground italic text-center">
              "We build senior remote teams for you that deliver work fast, with excellent quality and measurable results."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;