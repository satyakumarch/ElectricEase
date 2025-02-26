
import { Check } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      title: "Single Phase Motors",
      image: "/lovable-uploads/c201943e-c808-4344-989d-e6cb666b5a15.png",
      features: ["Ideal for domestic use", "Easy maintenance", "Energy efficient", "Reliable performance"],
    },
    {
      title: "Two Phase Motors",
      image: "/lovable-uploads/35fe540d-0e1f-49e1-8300-ff64b309805f.png",
      features: ["Medium capacity", "Balanced operation", "Cost-effective", "Versatile application"],
    },
    {
      title: "Three Phase Motors",
      image: "/lovable-uploads/f21eb19b-6207-40d6-aeb8-3da51f2db9ca.png",
      features: ["High power output", "Industrial grade", "Maximum efficiency", "Heavy-duty performance"],
    },
  ];

  return (
    <section className="py-20 bg-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="explosive-text text-3xl md:text-4xl font-display font-bold text-primary mb-4 animate-fade-up">
    Our Product Range
</h2>


          <p className="text-gray-600 max-w-2xl mx-auto">
            High-quality electric motors for every application, from domestic use to industrial requirements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-primary-accent text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
