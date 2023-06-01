import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurServices />
        <AboutUs />
        <Contacts />
      </main>

      <Footer />
    </>
  );
}
