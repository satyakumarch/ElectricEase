
import { Droplet, Zap, Wrench, Gauge } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: <Droplet className="w-12 h-12 mb-4 text-primary-accent" />,
      title: "Shallow Boring",
      description: "Ideal for irrigation & household needs (up to 50m depth)",
    },
    {
      icon: <Gauge className="w-12 h-12 mb-4 text-primary-accent" />,
      title: "Medium Depth Boring",
      description: "Perfect for commercial and small agricultural projects (50-100m)",
    },
    {
      icon: <Wrench className="w-12 h-12 mb-4 text-primary-accent" />,
      title: "Deep Boring",
      description: "For industrial & large agricultural use (100m+ depth)",
    },
    {
      icon: <Zap className="w-12 h-12 mb-4 text-primary-accent" />,
      title: "Electric Motor Solutions",
      description: "2-phase & 3-phase motors for efficient water pumping systems",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive boring solutions and electric motor services tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
