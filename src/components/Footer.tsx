
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+977 9802626926</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>shivram@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Krishnagar Road, Chandrauta</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} DeepBore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
