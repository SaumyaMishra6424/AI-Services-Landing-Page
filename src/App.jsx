import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="bg-[#020617] text-white font-sans selection:bg-violet-500/30">
      <Navbar />
      <main>
        <section id="Home">
          <Hero />
        </section>
        
        <section id="Services">
          <Services />
        </section>

        <section id="WhyUs">
          <WhyUs />
        </section>

        <section id="Testimonials">
          <Testimonials />
        </section>



        <section id="Pricing">
         <Pricing/>
        </section>

        <section id="Contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;