import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Journey from "@/components/Journey";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Certifications />
      <Journey />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
