import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            El corazón del alimento fresco en Pereira y el Eje Cafetero.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Secciones</h4>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">Sobre Nosotros</Link>
            <Link href="#products" className="text-sm text-muted-foreground hover:text-foreground">Productos</Link>
            <Link href="#why-impala" className="text-sm text-muted-foreground hover:text-foreground">¿Por qué Impala?</Link>
            <Link href="#location" className="text-sm text-muted-foreground hover:text-foreground">Ubicación</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Legal</h4>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Términos y Condiciones</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Política de Privacidad</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Redes Sociales</h4>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Impala Abastos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
