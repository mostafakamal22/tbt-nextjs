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
      </main>
    </>
  );
}
