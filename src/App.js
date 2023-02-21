import { About } from "./components/About";
import { Appbar } from "./components/Appbar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Link } from "react-scroll";
import { BsFillHandIndexThumbFill } from "react-icons/bs";

function App() {
  return (
    <>
      <Appbar />
      <div name="hero">
        <Hero />
      </div>
      <div name="about">
        <About />
      </div>
      <div name="services">
        <Services />
      </div>
      <div name="team">
        <Team />
      </div>
      <div name="testimonials">
        <Testimonials />
      </div>
      <div name="contact">
        <Contact />
      </div>
      <div className="fixed bottom-1 right-1 text-3xl z-50">
        <Link to="hero" spy={true} smooth={true} offset={-90} duration={500}>
          <BsFillHandIndexThumbFill className="text-amber-500 cursor-pointer" />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default App;
