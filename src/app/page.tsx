import Image from "next/image";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>

    
    
  );
}
