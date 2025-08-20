import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FooterCTA = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          ref={ctaRef}
          className={`space-y-8 animate-slide-up ${ctaVisible ? 'visible' : ''}`}
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold animate-fade-in stagger-1 ${ctaVisible ? 'visible' : ''}`}>
            Let's Supercharge Your Team!
          </h2>
          
          <p className={`text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in stagger-2 ${ctaVisible ? 'visible' : ''}`}>
            Ready to scale your business with senior remote developers? Let's discuss your project requirements and build something amazing together.
          </p>
          
          <div className={`pt-4 animate-scale-in stagger-3 ${ctaVisible ? 'visible' : ''}`}>
            <a href="mailto:softiqsolutions.tech@gmail.com">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90 hover-lift btn-animate">
                CONTACT US
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;