import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCta() {
  return (
    <section className="w-full py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-screen-md text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
          ¡Ven y vive la experiencia Impala!
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Apoya a nuestros productores locales, encuentra la mejor calidad y sé parte del corazón que alimenta a nuestra región. ¡Te esperamos!
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <Link href="#location">Cómo Llegar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
