import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects = [
    {
      title: "MCQ Quiz API with Certificate Generator",
      type: "Flask REST API",
      tech: ["Python", "Flask", "PIL", "CSV", "ngrok"],
      description: "Topic/module/lesson MCQs with answer validation and dynamic certificate generation using custom templates and fonts.",
      features: ["Topic/module/lesson MCQs", "Answer validation", "Dynamic certificate generation", "Custom template & font"],
      challenges: "Complex topic mapping (dict design), precise text positioning for certificates, CSV data management",
      outcome: "Ready API endpoints for quizzes + on-demand certificates",
      users: "EdTech, LMS, online quiz platforms, certificate issuers"
    },
    {
      title: "Broadcast GUI 3.0",
      type: "WhatsApp Broadcast Automation",
      tech: ["Python", "JSON", "GUI (Tkinter/PyQt)", "Logging"],
      description: "Windows app for automated WhatsApp broadcasting with multi-number support and delivery tracking.",
      features: ["Multi-number broadcast", "Configurable delays", "Success/failed tracking", "Number pool management"],
      challenges: "Rate-limiting (delay strategy), delivery tracking with status files",
      outcome: "Automated bulk messaging with clear operational control",
      users: "SMEs, marketing teams, operations"
    },
    {
      title: "Train Fare Tracking Bot",
      type: "Web Automation",
      tech: ["Python", "Selenium", "WebDriver Manager", "Chrome"],
      description: "Automated fare search system with date selection and journey monitoring capabilities.",
      features: ["Automated fare search", "Date selection", "Origin/destination", "Single/return journeys", "Custom Chrome profile"],
      challenges: "Dynamic content (WebDriverWait), session persistence (profile)",
      outcome: "Continuous fare monitoring to spot better deals",
      users: "Travelers, open-source users"
    },
    {
      title: "WhatsApp E-commerce Bot",
      type: "Chatbot for Sales/Support",
      tech: ["Python", "Selenium", "Google Sheets", "Text DB"],
      description: "Comprehensive e-commerce bot handling catalog browsing, orders, and 24/7 customer support.",
      features: ["Catalog browsing", "Order processing", "Stock checks", "Multi-step flows", "24/7 support"],
      challenges: "State management (temp DB), real-time inventory (Sheets)",
      outcome: "Automated sales operations + support",
      users: "E-commerce retailers"
    },
    {
      title: "WhatsApp Chatbot with Web Interface",
      type: "Chatbot + Web Dashboard",
      tech: ["Python (Flask)", "HTML/CSS/JS", "WhatsApp Business API", "JSON DB"],
      description: "Interactive learning platform with messaging capabilities and comprehensive admin dashboard.",
      features: ["Messaging", "Read receipts", "Images", "User management", "Dashboard monitoring", "Learning content menus"],
      challenges: "Webhooks via ngrok, state management (JSON), structured processor",
      outcome: "Interactive learning & admin visibility",
      users: "Learners, administrators"
    },
    {
      title: "A Road London Driving School Bot",
      type: "Messaging Integration System",
      tech: ["Python", "Flask", "SQLite", "WhatsApp Cloud API", "Google Sheets"],
      description: "Automated communication system for driving school operations with queue management.",
      features: ["Automated replies", "State management", "Queues", "Sheets sync"],
      challenges: "Reliable state tracking (SQLite), secure API authentication",
      outcome: "Faster, automated school communications",
      users: "Driving school (client)"
    }
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center space-y-6 mb-16 animate-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of our enterprise-grade solutions and innovative projects
          </p>
        </div>

        <div 
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up ${projectsVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-background p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift hover-glow group cursor-pointer animate-scale-in stagger-${Math.min(index % 6 + 1, 6)} ${projectsVisible ? 'visible' : ''}`}
              onClick={() => openModal(project)}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-accent bg-accent/20 px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-secondary text-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Target Users */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Target:</span> {project.users}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-large">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                <button onClick={closeModal} className="text-muted-foreground hover:text-foreground">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, index) => (
                          <span key={index} className="text-xs bg-secondary text-foreground px-2 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Challenges & Solutions</h4>
                      <p className="text-sm text-muted-foreground">{selectedProject.challenges}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Outcome/Impact</h4>
                      <p className="text-sm text-muted-foreground">{selectedProject.outcome}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Target Users</h4>
                      <p className="text-sm text-muted-foreground">{selectedProject.users}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;