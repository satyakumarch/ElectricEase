
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="relative z-10 text-left">
          <span className="inline-block animate-fade-up opacity-0 [--animation-delay:200ms] text-primary-accent font-medium tracking-wider mb-4">
            PROFESSIONAL SERVICES
          </span>
          <h1 className="animate-fade-up opacity-0 [--animation-delay:400ms] text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Expert Deep Boring &{" "}
            <span className="text-primary-accent">Electric Motor</span> Solutions
          </h1>
          <p className="animate-fade-up opacity-0 [--animation-delay:600ms] text-lg md:text-xl text-gray-300 mb-8">
            Quality, Precision & Reliability at Every Step. We deliver sustainable
            and efficient water solutions through innovative boring and motor
            installation services.
          </p>
          <div className="animate-fade-up opacity-0 [--animation-delay:800ms] flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center bg-primary-accent text-white px-8 py-3 rounded-md hover:bg-blue-500 transition-all duration-200 transform hover:scale-105">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary transition-all duration-200">
              Our Services
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative z-10 animate-fade-up opacity-0 [--animation-delay:600ms] hidden lg:block">
          <img
            src="/lovable-uploads/0394dd20-3502-42fc-b7d3-c7bc81655f46.png"
            alt="Deep Boring Equipment"
            className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white p-2">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-fade-in opacity-0 [--animation-delay:1000ms]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
