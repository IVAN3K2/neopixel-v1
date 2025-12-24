import Navbar from "../sections/Navbar";
import BackToTop from "../components/BackToTop";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WhyChoose from "../sections/WhyChoose";
import WorkProcess from "../sections/WorkProcess";
import Projects from "../sections/Projects";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <WorkProcess />
      <Projects />
      <CTA />
      <section className="sr-only">
        <h2>Agence digitale NEOpixel</h2>
        <p>
          NEOpixel est une agence digitale spécialisée en développement web et mobile,
          création de sites internet, design graphique, montage vidéo et marketing digital.
          Nous accompagnons les entreprises dans leur transformation numérique.
        </p>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
}
