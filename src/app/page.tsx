import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ClientMarquee from "@/components/client-marquee";
import Services from "@/components/services";
import Automation from "@/components/automation";
import Extras from "@/components/extras";
import Sectors from "@/components/sectors";
import Projects from "@/components/projects";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ClientMarquee />
        <Services />
        <Automation />
        <Extras />
        <Sectors />
        <Projects />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
