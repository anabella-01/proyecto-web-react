import {
  Hero,
  Footer,
  Nav,
  Projects,
  Services,
  Strategy,
  Team,
  Testimonials,
  FAQs
} from "./components";

import "./App.css";

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
      <FAQs />
      </main>
      <Footer/>
    </>
  );
}

export default App
