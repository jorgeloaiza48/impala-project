import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Apple, Carrot, Wheat, Beef, Milk, Leaf } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const productCategories = [
  {
    title: 'Frutas y Verduras',
    description: 'La más amplia selección de productos frescos del campo.',
    icon: Apple,
  },
  {
    title: 'Granos y Cereales',
    description: 'Básicos de alta calidad para la despensa de todos.',
    icon: Wheat,
  },
  {
    title: 'Tubérculos y Plátanos',
    description: 'La base de nuestra gastronomía, siempre disponible.',
    icon: Carrot, // Using Carrot as a placeholder for root vegetables
  },
  {
    title: 'Carnes y Pescados',
    description: 'Proteínas frescas para una alimentación balanceada.',
    icon: Beef,
  },
  {
    title: 'Lácteos y Derivados',
    description: 'Quesos, leches y más, directos de productores locales.',
    icon: Milk,
  },
  {
    title: 'Productos Regionales',
    description: 'Sabores únicos del Eje Cafetero y Colombia.',
    icon: Leaf,
  },
];

export function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Nuestros Productos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Encuentra una variedad incomparable de alimentos frescos, procesados y de la más alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <ProductCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function ProductCard({ title, description, icon: Icon }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
