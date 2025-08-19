const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              About <span className="text-accent">SoftIQ Solutions</span>
            </h2>
            
            <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              <p>
                SoftIQ Solutions is a AI-based remote developer agency delivering production-ready software with Python, MERN, and AI. We assemble senior, dedicated teams tailored to your roadmap—covering backend, frontend, and cloud.
              </p>
              
              <p>
                From greenfield builds to complex integrations, we deliver clean architectures, measurable results, and long-term support.
              </p>
            </div>
          </div>

          {/* What We Stand For */}
          <div className="pt-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              What We Stand For
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4 p-6 bg-secondary rounded-2xl hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-accent rounded"></div>
                </div>
                <h4 className="font-bold text-foreground text-lg">Speed with Quality</h4>
                <p className="text-muted-foreground text-sm">CI/CD, testing, code reviews</p>
              </div>
              
              <div className="space-y-4 p-6 bg-secondary rounded-2xl hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-accent rounded"></div>
                </div>
                <h4 className="font-bold text-foreground text-lg">Scalable Architectures</h4>
                <p className="text-muted-foreground text-sm">Microservices, event-driven patterns, cloud-native</p>
              </div>
              
              <div className="space-y-4 p-6 bg-secondary rounded-2xl hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-accent rounded"></div>
                </div>
                <h4 className="font-bold text-foreground text-lg">AI-Driven Value</h4>
                <p className="text-muted-foreground text-sm">LLMs, chatbots, automation, analytics</p>
              </div>
              
              <div className="space-y-4 p-6 bg-secondary rounded-2xl hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-accent rounded"></div>
                </div>
                <h4 className="font-bold text-foreground text-lg">Clear Communication</h4>
                <p className="text-muted-foreground text-sm">Transparent sprints, demos, documentation</p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="pt-12 p-8 bg-gradient-subtle rounded-2xl">
            <p className="text-lg text-muted-foreground italic">
              "We build senior remote teams for you that deliver work fast, with excellent quality and measurable results."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;