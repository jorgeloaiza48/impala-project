import { Card, CardContent } from "@/components/ui/card";
import { Truck, Users, Store, Tractor } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Sobre Impala
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Impala no es solo un mercado, es el motor que impulsa el abastecimiento de alimentos frescos en Pereira y el Eje Cafetero.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Un Ecosistema de Oportunidades</h3>
              <p className="text-muted-foreground leading-relaxed">
                Desde su fundación, la Central de Abastos Impala ha sido un pilar fundamental para la economía local. Servimos como el principal centro de distribución, conectando a agricultores de la región con comerciantes, restaurantes y consumidores finales. Nuestro compromiso es garantizar un flujo constante de productos de la más alta calidad, fortaleciendo la seguridad alimentaria y fomentando el desarrollo económico del Eje Cafetero.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Aquí, la tradición agrícola se encuentra con la dinámica del comercio moderno, creando un ecosistema vibrante donde todos ganan: los productores obtienen un mercado justo para sus cosechas, los comerciantes acceden a una variedad inigualable, y las familias disfrutan de alimentos frescos y nutritivos en sus mesas.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <InfoCard 
                    icon={<Tractor className="h-8 w-8 text-primary" />} 
                    title="Agricultores"
                    description="El principal punto de comercialización para sus cosechas."
                />
                <InfoCard 
                    icon={<Store className="h-8 w-8 text-primary" />} 
                    title="Comerciantes"
                    description="Variedad y precios para surtir sus negocios."
                />
                <InfoCard 
                    icon={<Truck className="h-8 w-8 text-primary" />} 
                    title="Distribución"
                    description="Logística eficiente para abastecer toda la región."
                />
                <InfoCard 
                    icon={<Users className="h-8 w-8 text-primary" />} 
                    title="Consumidores"
                    description="Acceso a productos frescos directamente del campo."
                />
            </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="text-center p-6 bg-secondary/50">
            <CardContent className="flex flex-col items-center gap-4 p-0">
                {icon}
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
