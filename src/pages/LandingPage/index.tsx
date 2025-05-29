import Navbar from "@/components/navbar/navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import HowAndWhyUs from "./HowAndWhyUs";
import FAQ from "./FAQ";
import Waitlist from "./Waitlist";
import Footer from "@/components/footer/footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-main-light">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="how-it-works">
        <HowAndWhyUs />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="waitlist">
        <Waitlist />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
