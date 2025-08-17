const TechStack = () => {
  const technologies = [
    { name: "MERN STACK", color: "text-green-600" },
    { name: "FASTAPI", color: "text-teal-600" },
    { name: "LLM MODELS", color: "text-purple-600" },
    { name: "CHATBOTS", color: "text-blue-600" },
    { name: "PYTHON", color: "text-yellow-600" },
    { name: "TAILWINDCSS", color: "text-cyan-600" },
    { name: "REACT JS", color: "text-blue-500" },
    { name: "NEXT.js", color: "text-gray-800" },
    { name: "WEBSITE DEVELOPMENT", color: "text-indigo-600" },
    { name: "APP DEVELOPMENT", color: "text-pink-600" },
    { name: "AWS", color: "text-orange-600" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-accent">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technologies for modern solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group bg-secondary p-6 rounded-2xl text-center hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-medium"
            >
              <div className="space-y-3">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 bg-accent/20 group-hover:bg-white/20 rounded-xl mx-auto flex items-center justify-center transition-all duration-300">
                  <div className="w-6 h-6 bg-accent group-hover:bg-white rounded"></div>
                </div>
                
                {/* Tech Name */}
                <h3 className="font-bold text-sm text-foreground group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;