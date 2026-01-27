import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import HowWeWork from "../components/HowWeWork";
import Team from "../components/Team";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices  />
      <HowWeWork />
      <Team />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};

export default Home;
