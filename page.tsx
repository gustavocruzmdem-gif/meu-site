import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Gallery from "./components/Gallery"; 
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Gallery /> 
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />

      {/* Botão flutuante Instagram */}
      <a
        href="https://www.instagram.com/memhouseremodeling/"
        target="_blank"
        className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full shadow-xl hover:bg-neutral-800 transition z-50"
      >
        Instagram
      </a>
    </>
  );
}
