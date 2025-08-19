import { Globe, Smartphone, Bot } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "React/Next.js, SEO-ready, performant, CMS options, enterprise component libraries, accessibility.",
      features: ["React/Next.js", "SEO Optimization", "Enterprise Components", "CMS Integration", "Accessibility"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "React Native/Flutter hand-off ready APIs, secure auth, offline-first, app store readiness.",
      features: ["React Native/Flutter", "API Integration", "Secure Authentication", "Offline Support", "App Store Ready"]
    },
    {
      icon: Bot,
      title: "AI Chatbots Development",
      description: "LLM-powered assistants, RAG, multi-channel (web/WhatsApp), analytics, guardrails, FastAPI backends.",
      features: ["LLM Integration", "Multi-channel Support", "Analytics Dashboard", "FastAPI Backend", "RAG Implementation"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center space-y-4 mb-12 animate-slide-up ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover-lift group animate-scale-in ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-5">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-200">
                  <service.icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-xs text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;