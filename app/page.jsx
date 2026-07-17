import Nav from '@/components/Nav';
import {
  Hero,
  TrustStrip,
  HowItWorks,
  Services,
  Partners,
  Coverage,
  Zones,
  Faq,
  AppWeb,
  FinalCta,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Services />
      <Partners />
      <Coverage />
      <Zones />
      <Faq />
      <AppWeb />
      <FinalCta />
      <Footer />
    </>
  );
}
