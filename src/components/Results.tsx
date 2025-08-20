import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Results = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: mainResultsRef, isVisible: mainResultsVisible } = useScrollAnimation();
  const { ref: additionalResultsRef, isVisible: additionalResultsVisible } = useScrollAnimation();
  
  const mainResults = [
    {
      title: "AI-Powered Marketplace Revolution",
      description: "Transformed a traditional marketplace into an AI-driven platform with intelligent recommendations and automated customer support.",
      metrics: [
        { value: "200+", label: "Active Users" },
        { value: "80+", label: "Conversion Rate" },
        { value: "66.6%", label: "User Retention" }
      ]
    },
    {
      title: "GeotoHire",
      description: "Built a comprehensive hiring platform connecting businesses with verified professionals through location-based matching.",
      metrics: [
        { value: "26+", label: "Companies" },
        { value: "90+", label: "Success Rate" },
        { value: "35%", label: "Time Saved" }
      ]
    }
  ];

  const additionalResults = [
    {
      title: "VESO (EdTech)",
      description: "Educational technology platform enabling seamless learning experiences",
      metrics: [
        { value: "1000+", label: "Students" },
        { value: "95%", label: "Satisfaction" },
        { value: "40%", label: "Better Results" }
      ]
    },
    {
      title: "Mobile Apps Success", 
      description: "Cross-platform mobile applications with enterprise-grade performance",
      metrics: [
        { value: "500K+", label: "Downloads" },
        { value: "4.8★", label: "App Rating" },
        { value: "60%", label: "User Growth" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center space-y-6 mb-16 animate-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Proven <span className="text-accent">Results That Matter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real outcomes from real projects that drive business growth
          </p>
        </div>

        {/* Main Results */}
        <div 
          ref={mainResultsRef}
          className={`grid lg:grid-cols-2 gap-8 mb-12 animate-slide-up ${mainResultsVisible ? 'visible' : ''}`}
        >
          {mainResults.map((result, index) => (
            <div 
              key={index}
              className={`bg-gradient-subtle p-8 rounded-2xl shadow-large hover:shadow-xl transition-all duration-300 border border-border hover-lift hover-glow animate-scale-in stagger-${index + 1} ${mainResultsVisible ? 'visible' : ''}`}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {result.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {result.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button variant="premium" size="default" className="flex-1">
                    Get Started
                  </Button>
                  <Button variant="outline" size="default" className="flex-1">
                    Hire Developer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Results */}
        <div 
          ref={additionalResultsRef}
          className={`grid lg:grid-cols-2 gap-8 animate-slide-up ${additionalResultsVisible ? 'visible' : ''}`}
        >
          {additionalResults.map((result, index) => (
            <div 
              key={index}
              className={`bg-secondary p-6 rounded-2xl hover:shadow-medium transition-all duration-300 hover-lift animate-scale-in stagger-${index + 3} ${additionalResultsVisible ? 'visible' : ''}`}
            >
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {result.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {result.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {result.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-accent mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <Button variant="default" size="sm" className="flex-1">
                    Get Started
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Hire Developer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;