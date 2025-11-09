import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import AIInnovation from "@/components/AIInnovation";
import Testimonials from "@/components/Testimonials";
import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <AIInnovation />
        <Testimonials />
        <AboutPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
