const Gallery = () => {
  const projects = [
    {
      title: "Deep Boring Installation",
      category: "Agricultural",
      image: "/lovable-uploads/0394dd20-3502-42fc-b7d3-c7bc81655f46.png",
      description: "High-capacity deep boring system for agricultural irrigation",
    },
    {
      title: "Electric Motor Setup",
      category: "Industrial",
      image: "/lovable-uploads/35fe540d-0e1f-49e1-8300-ff64b309805f.png",
      description: "Industrial-grade electric motor installation",
    },
    {
      title: "Water Pump System",
      category: "Commercial",
      image: "/lovable-uploads/c201943e-c808-4344-989d-e6cb666b5a15.png",
      description: "Commercial water pump installation and maintenance",
    },
    {
      title: "Residential Boring",
      category: "Residential",
      image: "/lovable-uploads/f21eb19b-6207-40d6-aeb8-3da51f2db9ca.png",
      description: "Residential water boring and pump setup",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful installations and services across different sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-blue-200 rounded-lg shadow-lg overflow-hidden transform duration-500 hover:translate-x-5 hover:-translate-y-5 pointer-events-none"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-w-16 aspect-h-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-lg shadow-lg transform duration-500 hover:-translate-x-10 hover:translate-y-10 pointer-events-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-primary-accent rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
