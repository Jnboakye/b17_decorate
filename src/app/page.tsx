import Hero from '../components/hero';
import Services from '../components/services';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Projects from '../components/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased">
      <Hero />
      {/* Other sections will be placed here */}
       <Services /> 
       <Projects/> 
      <Contact />
       <Footer />
    </div>
  );
}
