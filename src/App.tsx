
import {Hero} from "./components/Hero";
import {Nav} from "./components/Nav";
import {Services} from "./components/Services";
import {Team} from "./components/Team";
import {Strategy} from "./components/Strategy";
import {Projects} from "./components/Projects";
import {Testimonials} from "./components/Testimonials";
import {Faqs} from "./components/FAQs";
import {Footer} from "./components/Footer";
import './App.css'

function App() {
  return (
      <>
      <main>
      <Nav/>
      <Hero/>
      <Services/>
      <Strategy/>
      <Team/>
      <Projects />
      <Testimonials />
      <Faqs />
      </main>
      <Footer/>
    </>
  );
}

export default App
