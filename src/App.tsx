import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee, HowItWorks } from "./components/How";
import { Features, Compare } from "./components/Features";
import { Demo, Testimonials } from "./components/DemoTestimonials";
import { Pricing, FAQ, FinalCTA, Footer } from "./components/Rest";

export function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        {/* <Marquee /> */}
        <HowItWorks />
        <Features />
        <Compare />
        <Demo />
        {/* <Testimonials /> */}
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
