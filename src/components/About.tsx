
import { Phone, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up opacity-0">
            <img
              src="/lovable-uploads/0394dd20-3502-42fc-b7d3-c7bc81655f46.png"
              alt="Deep Boring Equipment"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              About Us
            </h2>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                With over 15 years of experience in deep boring and electric motor services, 
                we have established ourselves as a trusted name in agricultural water solutions 
                across Kapilvastu and surrounding regions.
              </p>
              <p className="mb-6">
                Our team specializes in advanced boring techniques and electric motor 
                installations, ensuring reliable and efficient water access for agricultural, 
                commercial, and residential needs.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-semibold w-15">Owner:</span>
                <span>Shivram Chaudhary</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-accent" />
                <span>+977 9802626926</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-accent" />
                <span>shivram@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-accent" />
                <span>Krishnagar Road, Chandrauta, Kapilvastu, Lumbini, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
