import { Globe, Smartphone, Bot } from "lucide-react";

const Services = () => {
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
    <section id="services" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground animate-fade-in">
            Our <span className="text-accent animate-glow">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-background p-8 rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 hover:-translate-y-4 hover:scale-105 group cursor-pointer animate-stagger-${index + 1} hover:bg-gradient-subtle`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 animate-bounce-in">
                  <service.icon className="w-8 h-8 text-accent group-hover:text-white transition-all duration-300 group-hover:animate-wiggle" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
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