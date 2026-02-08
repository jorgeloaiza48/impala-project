import { About } from '@/components/landing/about';
import { FinalCta } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Impact } from '@/components/landing/impact';
import { Location } from '@/components/landing/location';
import { Products } from '@/components/landing/products';
import { WhyImpala } from '@/components/landing/why-impala';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <WhyImpala />
        <Impact />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
