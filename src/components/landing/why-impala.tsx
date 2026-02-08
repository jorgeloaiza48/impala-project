import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Frescura Insuperable',
    description: 'Productos que van del campo a tu negocio en el menor tiempo posible, garantizando la máxima calidad.',
  },
  {
    title: 'Precios Competitivos',
    description: 'Compra al por mayor y obtén los mejores precios del mercado, optimizando la rentabilidad de tu negocio.',
  },
  {
    title: 'Apoyo a lo Nuestro',
    description: 'Cada compra apoya directamente a los agricultores y productores del Eje Cafetero, fortaleciendo la economía local.',
  },
  {
    title: 'Variedad y Abastecimiento',
    description: 'Un solo lugar con todo lo que necesitas. Garantizamos un surtido constante para que nunca le faltes a tus clientes.',
  },
];

export function WhyImpala() {
  return (
    <section id="why-impala" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            ¿Por qué comprar en Impala?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Más que un proveedor, somos tu aliado estratégico para el éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-1 text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
