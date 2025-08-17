import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let's Supercharge Your Team!
          </h2>
          
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Ready to scale your business with senior remote developers? Let's discuss your project requirements and build something amazing together.
          </p>
          
          <div className="pt-4">
            <a href="mailto:softiqsolutions.tech@gmail.com">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
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