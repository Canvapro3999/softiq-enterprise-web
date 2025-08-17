import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What Our <span className="text-accent">Clients Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from satisfied clients who trust our expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background p-8 lg:p-12 rounded-2xl shadow-large">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Client Photo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-orange rounded-full flex items-center justify-center shadow-medium">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xl lg:text-2xl font-bold text-accent">JM</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  "Timely and Great Service"
                </h3>
                
                <blockquote className="text-lg text-muted-foreground leading-relaxed">
                  "SoftIQ Solutions delivered exactly what we needed, when we needed it. Their remote team integrated seamlessly with our existing workflow and delivered a production-ready solution that exceeded our expectations. The quality of code and attention to detail was outstanding."
                </blockquote>

                {/* Client Info */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-bold text-foreground">John Martinez</p>
                      <p className="text-sm text-muted-foreground">CTO, TechStart Inc.</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <p className="text-sm text-muted-foreground">Project: AI-Powered Analytics Platform</p>
                      <p className="text-xs text-accent font-medium">$15,000 Project Value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">4.9/5</div>
              <p className="text-sm text-muted-foreground">Average Client Rating</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">98%</div>
              <p className="text-sm text-muted-foreground">Project Success Rate</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">24h</div>
              <p className="text-sm text-muted-foreground">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;