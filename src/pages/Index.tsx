
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import Gallery from "../components/Gallery";
import ProductShowcase from "../components/ProductShowcase";
import ServiceRequest from "../components/ServiceRequest";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <Gallery />
      <ProductShowcase />
      <ServiceRequest />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
