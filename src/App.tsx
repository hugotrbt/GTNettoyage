import "./App.css";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Services from "./components/Services.tsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
