import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';


export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src='/logo2_impala.png'
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 flex h-full items-end justify-center text-center">
        <div className="container max-w-4xl pb-16 text-white">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl font-headline">
            Central de Abastos Impala: el corazón del alimento fresco en Pereira
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Tradición, calidad y el mejor abastecimiento para toda la región del Eje Cafetero.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="#products">Conoce Impala</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#location">Visítanos Hoy</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
