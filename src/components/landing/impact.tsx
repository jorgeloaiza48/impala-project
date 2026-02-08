import { BarChart, Briefcase, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Impact() {
  return (
    <section id="impact" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Impacto Regional
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Impala es un actor clave en la seguridad alimentaria y el desarrollo económico del Eje Cafetero, generando empleo y fortaleciendo el comercio local.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImpactCard
                icon={<Briefcase className="w-10 h-10 text-primary"/>}
                title="Generación de Empleo"
                description="Miles de empleos directos e indirectos, desde agricultores hasta transportistas y comerciantes."
            />
            <ImpactCard
                icon={<TrendingUp className="w-10 h-10 text-primary"/>}
                title="Fortalecimiento del Comercio"
                description="Dinamizamos la economía local, permitiendo que pequeños y medianos negocios prosperen."
            />
            <ImpactCard
                icon={<BarChart className="w-10 h-10 text-primary"/>}
                title="Seguridad Alimentaria"
                description="Garantizamos el acceso a alimentos frescos y asequibles para toda la población de la región."
            />
        </div>
      </div>
    </section>
  );
}

function ImpactCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="text-center p-6">
            <CardContent className="flex flex-col items-center gap-4 p-0">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
