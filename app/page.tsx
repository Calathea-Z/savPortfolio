import Hero from './components/hero';
import Showcase from './components/showcase';
import CTA from './components/cta';
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <CTA />
      <Footer />
    </main>
  );
}
